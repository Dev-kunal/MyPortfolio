import { About } from "./components/About/About";
import { Blogs } from "./components/Blogs/Blogs";
import Experience from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <>
      <main className="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blogs />
      </main>
    </>
  );
}

export default App;
