import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Footerd from "./components/Footerd";

function App() {
  return (
    <div className=" background-animated w-full">
      <nav className=" fixed top-0 w-full">
      <Navbar />

      </nav>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Experiences />
      <Footerd />
    </div>
  );
}

export default App;
