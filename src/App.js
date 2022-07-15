import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import HomePage from './pages/HomePage';
import CountryDetails from './pages/DetailPage';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/country/:countryname" element={<CountryDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
