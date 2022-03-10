import './App.css';
import Home from "./Component/Pages/Home";
import Contact from "./Component/Pages/Contact";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Component/Pages/About";
import NavBar from "./Component/NavBar/NavBar";

function App() {
  return (
    <div className="App">
        <nav>
            <NavBar/>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
