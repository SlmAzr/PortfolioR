import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";

function App() {
  return (
    <div className="bg-[#50586c] w-full">
      <Navbar />
      <Home />
      <About />
      <Experiences />
      <Portfolio />
      <Skills />
    </div>
  );
}

export default App;
