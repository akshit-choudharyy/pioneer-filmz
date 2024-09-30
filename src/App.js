import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import PhotoGrid from "./components/PhotoGrid";
import Contact from "./components/Contact";

function App() {
  const [scrollToPhotoGrid, setScrollToPhotoGrid] = useState(null);

  return (
    <Router>
      {/* Render Header and pass the scrollToPhotoGrid function */}
      <Header scrollToPhotoGrid={scrollToPhotoGrid} />

      {/* Render Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setScrollToPhotoGrid={(scrollFunc) => setScrollToPhotoGrid(() => scrollFunc)}
            />
          }
        />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/photogrid" element={<PhotoGrid />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
