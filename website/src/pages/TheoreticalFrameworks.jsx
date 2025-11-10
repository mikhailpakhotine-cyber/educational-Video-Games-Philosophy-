import { motion } from 'framer-motion';
import { useState, lazy, Suspense } from 'react';
import { theorists } from '../data/theorists';
import QuoteBox from '../components/cyberpunk/QuoteBox';

// Lazy load the D3.js network map to reduce initial bundle size
const ConceptMap = lazy(() => import('../components/network/ConceptMap'));

export default function TheoreticalFrameworks() {
  const [selectedTheorist, setSelectedTheorist] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-display text-cyberpunk-gold neon-glow mb-4">
          Theoretical Frameworks
        </h1>
        <p className="text-xl text-cyberpunk-text-dim max-w-3xl mx-auto">
          Explore the network of theorists, concepts, and games that constitute this course's
          interdisciplinary approach to video games as philosophical texts.
        </p>
      </div>

      {/* Network Map */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-gold mb-6">
          Interactive Knowledge Network
        </h2>
        <p className="text-cyberpunk-text-dim mb-6 leading-relaxed">
          This force-directed graph visualizes the connections between theorists, philosophical concepts,
          and video games. Theorists (👤) inform concepts (💭) which are explored through games (🎮).
          Click any node to learn more, drag to rearrange, and scroll to zoom.
        </p>
        <Suspense fallback={
          <div className="bg-cyberpunk-dark border-2 border-cyberpunk-gold/30 rounded-lg p-12 text-center">
            <div className="text-cyberpunk-gold text-xl font-mono animate-pulse">
              Loading network visualization...
            </div>
          </div>
        }>
          <ConceptMap />
        </Suspense>
      </div>

      {/* Theorists Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-gold mb-6">
          Key Theorists
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {theorists.map((theorist) => (
            <motion.button
              key={theorist.id}
              onClick={() => setSelectedTheorist(selectedTheorist?.id === theorist.id ? null : theorist)}
              whileHover={{ scale: 1.02 }}
              className={`text-left p-6 border-2 rounded transition-all duration-300 ${
                selectedTheorist?.id === theorist.id
                  ? 'shadow-lg'
                  : 'opacity-80 hover:opacity-100'
              }`}
              style={{
                borderColor: selectedTheorist?.id === theorist.id ? theorist.color : '#2a2a2a',
                backgroundColor: selectedTheorist?.id === theorist.id ? `${theorist.color}10` : '#1a1a1a',
              }}
            >
              <h3
                className="text-xl font-heading mb-2"
                style={{ color: theorist.color }}
              >
                {theorist.name}
              </h3>
              <p className="text-sm text-cyberpunk-text-dim mb-2">
                {theorist.work}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {theorist.gamesConnection.slice(0, 2).map((game, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      backgroundColor: `${theorist.color}20`,
                      color: theorist.color,
                    }}
                  >
                    {game}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Selected Theorist Detail */}
      {selectedTheorist && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-cyberpunk-darker border-2 p-8 rounded-lg mb-12"
          style={{ borderColor: selectedTheorist.color }}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3
                className="text-3xl font-heading mb-2"
                style={{ color: selectedTheorist.color }}
              >
                {selectedTheorist.name}
              </h3>
              <p className="text-lg text-cyberpunk-text-dim">
                {selectedTheorist.work}
              </p>
            </div>
            <button
              onClick={() => setSelectedTheorist(null)}
              className="text-2xl hover:text-cyberpunk-text"
              style={{ color: selectedTheorist.color }}
            >
              ✕
            </button>
          </div>

          <QuoteBox
            quote={selectedTheorist.quote}
            author={selectedTheorist.name}
            color={selectedTheorist.color.replace('#', '').slice(0, 6)}
          />

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-xl font-heading text-cyberpunk-text mb-3">
                Key Ideas
              </h4>
              <ul className="space-y-2">
                {selectedTheorist.keyIdeas.map((idea, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-cyberpunk-text-dim"
                  >
                    <span style={{ color: selectedTheorist.color }}>▸</span>
                    {idea}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-heading text-cyberpunk-text mb-3">
                Application to Games
              </h4>
              <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
                {selectedTheorist.application}
              </p>
              <div>
                <p className="text-sm text-cyberpunk-text-dim mb-2">
                  Explored in:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedTheorist.gamesConnection.map((game, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded"
                      style={{
                        backgroundColor: `${selectedTheorist.color}20`,
                        color: selectedTheorist.color,
                        border: `1px solid ${selectedTheorist.color}40`,
                      }}
                    >
                      {game}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Course Approach */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-gold p-6 rounded">
        <h2 className="text-2xl font-heading text-cyberpunk-gold mb-4">
          Interdisciplinary Approach
        </h2>
        <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
          This course synthesizes theoretical frameworks from new media theory, digital humanities,
          game studies, environmental philosophy, and technology studies. By bringing together thinkers
          like McLuhan, Haraway, Turing, Taylor, and Winner, we develop critical approaches to understanding
          games as cultural artifacts worthy of serious humanistic inquiry.
        </p>
        <p className="text-cyberpunk-text-dim leading-relaxed">
          The network visualization above reveals how these theoretical frameworks interconnect and
          inform one another, creating a rich tapestry of philosophical inquiry that helps us understand
          video games as sophisticated texts engaging with fundamental questions about technology,
          consciousness, identity, and environmental ethics.
        </p>
      </div>
    </motion.div>
  );
}
