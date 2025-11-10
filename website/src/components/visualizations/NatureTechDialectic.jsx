import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../cyberpunk/QuoteBox';

export default function NatureTechDialectic() {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      title: 'Horizon Zero Dawn',
      position: 35, // More toward nature/synthesis
      color: '#39ff14',
      icon: '🦌',
      stance: 'Nature-Technology Synthesis',
      description: 'Technology can serve ecological restoration; machines as part of nature',
    },
    {
      title: 'Atomic Heart',
      position: 85, // Heavy toward technology/dystopia
      color: '#ff3366',
      icon: '⚙️',
      stance: 'Technology Dominates Nature',
      description: 'Unchecked technological expansion destroys natural and human ecosystems',
    },
    {
      title: 'Detroit: Become Human',
      position: 65, // Somewhat toward technology
      color: '#00d4ff',
      icon: '🤖',
      stance: 'Synthetic Life Questions',
      description: 'Blurs the line between natural and artificial life forms',
    },
    {
      title: 'Bioshock',
      position: 75, // Technology with consequences
      color: '#d4af37',
      icon: '🌊',
      stance: 'Technology Without Ethics',
      description: 'Technological ambition without moral constraints leads to dystopia',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-display text-cyberpunk-green neon-glow mb-2">
          Nature vs. Technology
        </h2>
        <p className="text-xl text-cyberpunk-text-dim font-heading">
          The Dialectic
        </p>
      </div>

      <QuoteBox
        quote="The delicate balance between technological advancement and the everlasting forces of nature dominates the digital story."
        author="Beyond Entertainment: Atomic Heart Paper"
        color="green"
      />

      {/* Visual Spectrum */}
      <div className="relative h-96 bg-cyberpunk-dark border-2 border-cyberpunk-green/30 rounded-lg overflow-hidden p-8">
        {/* Opposing forces visualization */}
        <div className="flex justify-between items-center h-full">
          {/* Nature side */}
          <div className="w-1/3 h-full flex flex-col justify-center items-center">
            <motion.div
              className="text-8xl mb-4"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🌿
            </motion.div>
            <h3 className="text-2xl font-heading text-cyberpunk-green neon-glow mb-2">
              NATURE
            </h3>
            <div className="space-y-1 text-xs text-center text-cyberpunk-text-dim">
              <p>Organic</p>
              <p>Cyclical</p>
              <p>Interconnected</p>
              <p>Sustainable</p>
            </div>
          </div>

          {/* Tension visualization */}
          <div className="flex-1 relative h-full">
            {/* Spectrum bar */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
              <div
                className="h-4 rounded-full"
                style={{
                  background: 'linear-gradient(to right, #39ff14 0%, #d4af37 50%, #ff3366 100%)',
                }}
              />

              {/* Game positions */}
              {games.map((game, index) => (
                <motion.div
                  key={game.title}
                  className="absolute cursor-pointer"
                  style={{ left: `${game.position}%`, top: '-20px' }}
                  initial={{ scale: 0, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, type: "spring" }}
                  whileHover={{ scale: 1.3, y: -10 }}
                  onClick={() => setSelectedGame(game)}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border-4"
                    style={{
                      backgroundColor: '#0a0a0a',
                      borderColor: game.color,
                      boxShadow: `0 0 20px ${game.color}`,
                    }}
                  >
                    {game.icon}
                  </div>
                  <div
                    className="absolute top-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-mono"
                    style={{ color: game.color }}
                  >
                    {game.title}
                  </div>
                </motion.div>
              ))}

              {/* Markers */}
              <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs font-mono text-cyberpunk-text-dim">
                <span>0%</span>
                <span>Synthesis</span>
                <span>100%</span>
              </div>
            </div>

            {/* Tension arrows */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between items-center"
              style={{ height: '2px', pointerEvents: 'none' }}
            >
              <motion.div
                className="text-cyberpunk-green text-3xl"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.div>
              <motion.div
                className="text-cyberpunk-red text-3xl"
                animate={{ x: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ←
              </motion.div>
            </motion.div>

            {/* Particle effects */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: i % 2 === 0 ? '#39ff14' : '#ff3366',
                  top: `${20 + i * 6}%`,
                }}
                animate={{
                  x: i % 2 === 0 ? [0, 250] : [250, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Technology side */}
          <div className="w-1/3 h-full flex flex-col justify-center items-center">
            <motion.div
              className="text-8xl mb-4"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              ⚙️
            </motion.div>
            <h3 className="text-2xl font-heading text-cyberpunk-red neon-glow mb-2">
              TECHNOLOGY
            </h3>
            <div className="space-y-1 text-xs text-center text-cyberpunk-text-dim">
              <p>Mechanical</p>
              <p>Linear</p>
              <p>Controlled</p>
              <p>Extractive</p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Details */}
      {selectedGame && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-cyberpunk-darker border-2 p-6 rounded-lg relative"
          style={{ borderColor: selectedGame.color }}
        >
          <button
            onClick={() => setSelectedGame(null)}
            className="absolute top-4 right-4 hover:text-cyberpunk-text"
            style={{ color: selectedGame.color }}
          >
            ✕
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="text-5xl w-16 h-16 rounded-full flex items-center justify-center border-4"
              style={{
                borderColor: selectedGame.color,
                boxShadow: `0 0 20px ${selectedGame.color}`,
              }}
            >
              {selectedGame.icon}
            </div>
            <div>
              <h3
                className="text-2xl font-heading"
                style={{ color: selectedGame.color }}
              >
                {selectedGame.title}
              </h3>
              <p className="text-sm text-cyberpunk-text-dim">
                Position: {selectedGame.position}% toward technology
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-cyberpunk-text-dim mb-1">Stance:</p>
              <p className="text-lg text-cyberpunk-text">{selectedGame.stance}</p>
            </div>
            <div>
              <p className="text-sm text-cyberpunk-text-dim mb-1">Analysis:</p>
              <p className="text-cyberpunk-text">{selectedGame.description}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Philosophical Analysis */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-cyberpunk-darker border-2 border-cyberpunk-green/30 p-6 rounded">
          <h3 className="text-xl font-heading text-cyberpunk-green mb-3">
            Pro-Nature Arguments
          </h3>
          <ul className="space-y-2 text-sm text-cyberpunk-text-dim">
            <li className="flex items-start">
              <span className="text-cyberpunk-green mr-2">▸</span>
              Nature has inherent value beyond human utility
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-green mr-2">▸</span>
              Ecological systems are sustainable and self-renewing
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-green mr-2">▸</span>
              Technology disrupts ancient evolutionary balances
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-green mr-2">▸</span>
              Humans are part of nature, not separate from it
            </li>
          </ul>
        </div>

        <div className="bg-cyberpunk-darker border-2 border-cyberpunk-red/30 p-6 rounded">
          <h3 className="text-xl font-heading text-cyberpunk-red mb-3">
            Pro-Technology Arguments
          </h3>
          <ul className="space-y-2 text-sm text-cyberpunk-text-dim">
            <li className="flex items-start">
              <span className="text-cyberpunk-red mr-2">▸</span>
              Technology extends human capabilities and longevity
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-red mr-2">▸</span>
              Can solve problems nature creates (disease, scarcity)
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-red mr-2">▸</span>
              Enables progress and human flourishing
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-red mr-2">▸</span>
              Technology is itself natural—products of evolved beings
            </li>
          </ul>
        </div>
      </div>

      {/* Synthesis Possibility */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-gold p-6">
        <h3 className="text-xl font-heading text-cyberpunk-gold mb-4">
          Toward Synthesis?
        </h3>
        <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
          The dialectic doesn't have to be winner-take-all. Horizon Zero Dawn suggests the possibility
          of synthesis: technology serving ecological restoration, machines integrated into natural cycles,
          human innovation working with rather than against natural systems.
        </p>
        <p className="text-cyberpunk-text-dim leading-relaxed">
          But Atomic Heart shows the consequences when this balance fails—when technological ambition
          overpowers ecological wisdom, when the drive to control nature leads to the destruction of both
          nature and humanity. The games collectively ask: Is harmony possible, or is conflict inevitable?
        </p>
      </div>
    </div>
  );
}
