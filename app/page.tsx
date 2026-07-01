import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects/>
      <Clients/>
      <Footer/>
    </>
  );
}