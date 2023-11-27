import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
import Home from '@pages/Home';
import LegalMention from '@pages/LegalMention';
import ConfidentialPolitics from '@pages/ConfidentialPolitics';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mentions-légales" element={<LegalMention />} />
          <Route path="/Politique-de-confidentialité" element={<ConfidentialPolitics />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App