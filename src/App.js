import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import News from "./pages/News";
import Players from "./pages/Players";
import Teams from "./pages/Teams";
import MakeTeam from "./pages/MakeTeam";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/news" element={<News />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/makeTeam" element={<MakeTeam />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
