import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GamesPage from "./pages/GamesPage";
import PlatformsPage from "./pages/PlatformsPage";
import UpcomingPage from "./pages/UpcomingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/platforms" element={<PlatformsPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
