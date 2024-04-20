import React from "react";
import MovieDetails from "./pages/moviesDetails/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import MoviesList from "./components/MoviesList";
function App() {
  return (
    <div className="font color-body ">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movies" element={<MoviesList />} />
        </Routes>
       <Footer />
    </div>
  );
}

export default App;
