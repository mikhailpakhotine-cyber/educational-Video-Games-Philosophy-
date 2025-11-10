import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Always-loaded pages
import Home from './pages/Home';

// Lazy-loaded pages
const ConceptsHub = lazy(() => import('./pages/ConceptsHub'));
const TheoreticalFrameworks = lazy(() => import('./pages/TheoreticalFrameworks'));
const GamesAnalysis = lazy(() => import('./pages/GamesAnalysis'));
const AtomicHeart = lazy(() => import('./pages/games/AtomicHeart'));
const DetroitBecomeHuman = lazy(() => import('./pages/games/DetroitBecomeHuman'));
const HorizonZeroDawn = lazy(() => import('./pages/games/HorizonZeroDawn'));
const Bioshock = lazy(() => import('./pages/games/Bioshock'));
const Schedule = lazy(() => import('./pages/Schedule'));
const CourseOverview = lazy(() => import('./pages/CourseOverview'));
const Resources = lazy(() => import('./pages/Resources'));

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
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-cyberpunk-gold text-2xl font-mono animate-pulse">
                Loading...
              </div>
            </div>
          }>
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
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
