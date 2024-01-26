import "./index.scss";
// import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App w-full h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
