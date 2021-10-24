import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Hero />
      </main>
    </>
  );
}

export default App;
