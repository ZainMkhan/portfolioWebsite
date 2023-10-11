import Navbar from "./components/navbar/Navbar";
import Home from "./components/landing/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import FloatingIcons from "./components/contact/FloatingIcons";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-slate-50 flex flex-col">
        <nav className="w-full flex justify-center items-center">
          <Navbar />
        </nav>

        {/* Home / Landing Page */}
        <div className="w-full min-h-screen bg-black flex flex-col items-center">
          <Home />
          <About />
          <Projects />
          <Contact />
          <FloatingIcons />
          <h1 className="text-white text-xl font-mono">© Zain Masood Khan</h1>
        </div>
      </div>
    </>
  );
}

export default App;
