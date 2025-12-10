import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GamesPage from "./pages/GamesPage";
import PlatformsPage from "./pages/PlatformsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/platforms" element={<PlatformsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
