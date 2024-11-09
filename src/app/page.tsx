// app/page.tsx
import { Hero } from "@/sections/Hero";
import { WorkWithUs } from "@/sections/WorkWithUs";
import { Locations } from "@/sections/Locations";
import { Reviews } from "@/sections/Reviews";
import { About } from "@/sections/About";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ScrollToTop } from "@/sections/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkWithUs />
        <Locations />
        <Reviews />
        <About />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}