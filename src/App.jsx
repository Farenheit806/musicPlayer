import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import WrongPage from "./pages/WrongPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="*" element={<WrongPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
