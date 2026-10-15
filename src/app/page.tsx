import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Pilot } from "@/components/home/pilot";
import { Product } from "@/components/home/product";
import { Questions } from "@/components/home/questions";
import { Trust } from "@/components/home/trust";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Questions />
      <Product />
      <Trust />
      <Pilot />
      <Contact />
    </>
  );
}
