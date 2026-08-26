import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Notes from "@/components/sections/Notes";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Paper grain overlay */}
      <div className="grain" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
