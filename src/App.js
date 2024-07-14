import { About } from "./components/About/About";
import { Blogs } from "./components/Blogs/Blogs";
import Experience from "./components/Experience/Experience";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blogs />
        <Footer />
      </main>
    </>
  );
}

export default App;
