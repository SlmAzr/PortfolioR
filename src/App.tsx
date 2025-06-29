import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Footer from "./components/footer";

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
      <Footer />
    </div>
  );
}

export default App;
