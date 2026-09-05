import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ExperienceTimeline from "./components/ExperienceTimeline";
import { Projects } from "./components/Projects";
import TechStackGrid from "./components/TechStackGrid";
import Impact from "./components/Impact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-clip">
        <Nav />
        <main>
          <Hero />
          <ExperienceTimeline />
          <Projects />
          <TechStackGrid />
          <Impact />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
