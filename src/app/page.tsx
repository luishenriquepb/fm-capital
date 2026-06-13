import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuemSomos from "@/components/QuemSomos";
import Pilares from "@/components/Pilares";
import Fundador from "@/components/Fundador";
import Parceiros from "@/components/Parceiros";
import Depoimentos from "@/components/Depoimentos";
import Blog from "@/components/Blog";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuemSomos />
        <Pilares />
        <Fundador />
        <Parceiros />
        <Depoimentos />
        <Blog />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
