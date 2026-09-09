import Banner from "./components/homelayout/banner";
import About from "./components/homelayout/about";
import ServiceArea from "./components/homelayout/servicearea";
import Services from "./components/homelayout/services";
import Works from "./components/homelayout/works";
import WhyChooseUs from "./components/homelayout/whychooseus";
import Teams from "./components/homelayout/teams";
import Blogs from "./components/homelayout/blogs";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Banner />
      <About />
      <ServiceArea />
          <Works />
      <Services />
      <WhyChooseUs />
      <Teams />
      <Blogs />
    </main>
  );
}
