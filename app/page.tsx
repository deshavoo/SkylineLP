import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Clients/>
    </>
  );
}