import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Cities from "../components/Cities";
import Infrastructure from "../components/Infrastructure";
import Expertise from "../components/Expertise";
import IsoCertification from "../components/IsoCertification";
import BrandSignages from "../components/BrandSignages";
import TrustedBrands from "../components/TrustedBrands";
import Process from "../components/Process";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#101714] font-sans selection:bg-teal-500 selection:text-white overflow-x-hidden">
      <Preloader />
      <Header />
      <Hero />
      <About />
      <Infrastructure />
      <Cities />
      <Expertise />
      <IsoCertification />
      <Stats />
      <BrandSignages />
      <TrustedBrands />
      <Process />
      <Footer />
    </main>
  );
}
