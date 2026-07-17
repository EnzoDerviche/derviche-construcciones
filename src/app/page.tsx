import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
// import { Gallery } from "@/components/sections/gallery";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      {/* <Gallery /> */}
      <Process />
      <About />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
