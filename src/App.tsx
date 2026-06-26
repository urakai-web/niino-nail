import Header from "./components/Header";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Features from "./components/Features";
import Works from "./components/Works";
import News from "./components/News";
import Flow from "./components/Flow";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Works />
        <Features />
        <News />
        <Flow />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
