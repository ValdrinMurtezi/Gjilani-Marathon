import "./index.scss";
// import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Events from "./components/Eventet";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App w-full h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
