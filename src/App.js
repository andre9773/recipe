import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.js"
import Create from "./pages/create/Create"
import Recipe from "./pages/recipe/Recipe"
import Search from "./pages/search/Search"
import { Navbar } from "./components/navbar/Navbar.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
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
