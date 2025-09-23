// App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Accueil from '../pages/Accueil';
import Contact from '../pages/Contact';
import Navigation from '../navigation/Navigation';
import ScrollToSection from './ScrollToSection';

function App() {
  return (
    <>
      <ScrollToSection />
      <Navigation />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
