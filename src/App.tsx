import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ConfidentialPolitics from "./pages/ConfidentialPolitics/ConfidentialPolitics";
import Home from "./pages/home/Home";
import LegalMention from "./pages/LegalMention/LegalMention";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mentions-légales" element={<LegalMention />} />
        <Route
          path="/Politique-de-confidentialité"
          element={<ConfidentialPolitics />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
