import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import ConceptsHub from './pages/ConceptsHub';
import TheoreticalFrameworks from './pages/TheoreticalFrameworks';
import GamesAnalysis from './pages/GamesAnalysis';
import AtomicHeart from './pages/AtomicHeart';
import DetroitBecomeHuman from './pages/DetroitBecomeHuman';
import HorizonZeroDawn from './pages/HorizonZeroDawn';
import Bioshock from './pages/Bioshock';
import Schedule from './pages/Schedule';
import CourseOverview from './pages/CourseOverview';
import Resources from './pages/Resources';

function App() {
  return (
    <Router basename="/educational-Video-Games-Philosophy-">
      <div className="min-h-screen bg-cyberpunk-black text-cyberpunk-text flex flex-col">
        {/* Scanline overlay effect */}
        <div className="scanlines fixed inset-0 pointer-events-none z-50" />

        {/* Grid background */}
        <div className="grid-bg fixed inset-0 opacity-20 pointer-events-none" />

        <Header />

        <main className="flex-1 relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/concepts" element={<ConceptsHub />} />
              <Route path="/frameworks" element={<TheoreticalFrameworks />} />
              <Route path="/games" element={<GamesAnalysis />} />
              <Route path="/games/atomic-heart" element={<AtomicHeart />} />
              <Route path="/games/detroit" element={<DetroitBecomeHuman />} />
              <Route path="/games/horizon" element={<HorizonZeroDawn />} />
              <Route path="/games/bioshock" element={<Bioshock />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/course" element={<CourseOverview />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
