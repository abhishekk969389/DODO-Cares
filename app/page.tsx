import Banner from "./banner";
import About from "./about";
import Services from "./services";
import Works from "./works";
import WhyChooseUs from "./whychooseus";
import Teams from "./teams";
import Blogs from "./blogs";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Banner />
      <About />
      <Services />
      <Works />
      <WhyChooseUs />
      <Teams />
      <Blogs />
    </main>
  );
}
