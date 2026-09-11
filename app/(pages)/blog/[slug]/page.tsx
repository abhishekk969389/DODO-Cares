import React from "react";
import { notFound } from "next/navigation";
import SubBanner from "@/app/components/ui/subbanner";
import BlogContent from "@/app/components/layout/blogdetails/blogcontent";
import BlogSidebar from "@/app/components/layout/blogdetails/blogsidebar";
import { site as petData, getBlogDetailBySlug, getBlogDetailSlugs } from "@/data/index";
import type { PetBlogDetailPost as BlogDetailItem, DodoBlogSidebarData as BlogSidebarData } from "@/data/index";
import type { BlogPostItem } from "@/types/pet";


interface BlogDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const blogDetails = getBlogDetailSlugs() || [];
    return blogDetails.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const blogPost = getBlogDetailBySlug(slug);

    if (!blogPost) {
        return {
            title: "Blog Detail - Dodo Cares",
        };
    }

    return {
        title: `${blogPost.articleTitle} - Dodo Cares`,
        description: blogPost.introParagraph,
    };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const blogDetails: any[] = getBlogDetailSlugs() || [];
    const blogPost = getBlogDetailBySlug(slug) || blogDetails[0];

    if (!blogPost) {
        notFound();
    }

    const sidebarData: BlogSidebarData = petData.blogSidebar || {
        searchPlaceholder: "Search blogs...",
        categoriesTitle: "Categories",
        categories: [],
        latestUpdatesTitle: "Latest Updates",
        viewAllBtnText: "View All Blogs",
    };

    const allPosts: BlogPostItem[] = petData.ourBlogs?.posts || petData.blogSec?.posts || [];

    const breadcrumbs = blogPost.breadcrumbs || [
        { label: "Home", href: "/" },
        { label: "Blog Detail", active: true },
    ];

    return (
        <main className="min-h-screen">
            {/* SUBBANNER WITH DYNAMIC BREADCRUMBS: Home / Blog Detail */}
            <SubBanner
                title={blogPost.title || "Blog Detail"}
                breadcrumbs={breadcrumbs}
                bgImage={blogPost.bgImage}
            />

            {/* MAIN CONTENT & SIDEBAR SECTION */}
            <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 lg:mt-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* LEFT COLUMN: BLOG CONTENT (8 COLS) */}
                    <div className="lg:col-span-8">
                        <BlogContent data={blogPost} />
                    </div>

                    {/* RIGHT COLUMN: BLOG SIDEBAR (4 COLS) */}
                    <div className="lg:col-span-4">
                        <BlogSidebar
                            data={sidebarData}
                            posts={allPosts}
                            currentSlug={slug}
                            currentCategory={blogPost.category}
                            allBlogDetails={blogDetails}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
