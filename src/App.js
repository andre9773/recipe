import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.js"
import Create from "./pages/create/Create"
import Recipe from "./pages/recipe/Recipe"
import Search from "./pages/search/Search"
import { Navbar } from "./components/navbar/Navbar.js";
import ThemeSelector from "./components/themeSelector/ThemeSelector.js";
import './App.css';
import { useTheme } from "./hooks/useTheme.js";

function App() {
  const {mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <ThemeSelector></ThemeSelector>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
