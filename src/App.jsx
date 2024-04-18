import "./index.scss";
// import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Results from "./components/Results";
import Foto2024 from "./components/foto2024";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Event2024 from "./components/Event2024";

function App() {
  return (
    <div className="App w-full h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/results" element={<Results />} />
          <Route path="/foto2024" element={<Foto2024 />} />
          <Route path="/event2024" element={<Event2024 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
