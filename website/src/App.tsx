import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <Router>
    <GlobalStyle />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
