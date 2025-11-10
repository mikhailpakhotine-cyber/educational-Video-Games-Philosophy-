import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../cyberpunk/QuoteBox';

export default function EnvironmentalAwareness() {
  const [sliderValue, setSliderValue] = useState(50);
  const [showDetails, setShowDetails] = useState(false);

  const getEnvironmentState = (value) => {
    if (value < 25) return 'pristine';
    if (value < 50) return 'managed';
    if (value < 75) return 'industrialized';
    return 'apocalyptic';
  };

  const environmentStates = {
    pristine: {
      title: 'Pristine Nature',
      description: 'Untouched ecosystems, biodiversity thriving',
      color: '#39ff14',
      emoji: '🌲',
      bg: 'from-green-900/30 to-emerald-900/30',
    },
    managed: {
      title: 'Managed Nature',
      description: 'Sustainable technology, balanced coexistence',
      color: '#00d4ff',
      emoji: '🏞️',
      bg: 'from-blue-900/30 to-green-900/30',
    },
    industrialized: {
      title: 'Heavy Industrialization',
      description: 'Nature exploited, ecosystem stress',
      color: '#d4af37',
      emoji: '🏭',
      bg: 'from-yellow-900/30 to-orange-900/30',
    },
    apocalyptic: {
      title: 'Environmental Collapse',
      description: 'Ecological devastation, technological dystopia',
      color: '#ff3366',
      emoji: '☢️',
      bg: 'from-red-900/30 to-gray-900/30',
    },
  };

  const currentState = getEnvironmentState(sliderValue);
  const stateData = environmentStates[currentState];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-display text-cyberpunk-green neon-glow mb-2">
          Environmental Awareness
        </h2>
        <p className="text-xl text-cyberpunk-text-dim font-heading">
          Technology's Ecological Impact
        </p>
      </div>

      <QuoteBox
        quote="Computer games can foster environmental awareness."
        author="Alenda Y. Chang"
        color="green"
      />

      <QuoteBox
        quote="The game's apocalyptic scene is a vivid microcosm of unbridled technological growth, reflecting real-world worries about its ecological impact."
        author="Beyond Entertainment: Atomic Heart Paper"
        color="red"
      />

      {/* Interactive Spectrum */}
      <div className="space-y-4">
        <p className="text-center text-cyberpunk-text-dim font-mono">
          Drag to explore the nature ← → technology spectrum
        </p>

        {/* Visual Representation */}
        <div className={`relative h-64 bg-gradient-to-r ${stateData.bg} border-2 border-cyberpunk-green/30 rounded-lg overflow-hidden transition-all duration-500`}>
          {/* Animated environment */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              key={currentState}
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              className="text-9xl"
            >
              {stateData.emoji}
            </motion.div>
          </div>

          {/* Degradation overlay */}
          <motion.div
            className="absolute inset-0 bg-black"
            animate={{ opacity: sliderValue / 200 }}
            transition={{ duration: 0.3 }}
          />

          {/* Particles */}
          {sliderValue > 50 && [...Array(Math.floor(sliderValue / 10))].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyberpunk-red rounded-full"
              animate={{
                y: [-20, 300],
                opacity: [0, 1, 0],
                x: Math.random() * 400,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}

          {/* State indicator */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
            <h3
              className="text-2xl font-heading neon-glow"
              style={{ color: stateData.color }}
            >
              {stateData.title}
            </h3>
            <p className="text-sm text-cyberpunk-text-dim mt-1">
              {stateData.description}
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-green-600 via-yellow-600 to-red-600"
            style={{
              background: `linear-gradient(to right,
                #39ff14 0%,
                #00d4ff 25%,
                #d4af37 50%,
                #ff9900 75%,
                #ff3366 100%)`,
            }}
          />
          <div className="flex justify-between text-xs font-mono">
            <span className="text-cyberpunk-green">🌲 Nature</span>
            <span className="text-cyberpunk-text-dim">Impact: {sliderValue}%</span>
            <span className="text-cyberpunk-red">☢️ Dystopia</span>
          </div>
        </div>

        {/* Milestone markers */}
        <div className="grid grid-cols-4 gap-2 text-xs">
          {Object.entries(environmentStates).map(([key, data], index) => (
            <button
              key={key}
              onClick={() => setSliderValue(index * 25 + 12.5)}
              className={`p-2 border transition-all duration-300 ${
                currentState === key
                  ? 'border-2 bg-opacity-20'
                  : 'border-cyberpunk-darker/50 opacity-50 hover:opacity-100'
              }`}
              style={{
                borderColor: currentState === key ? data.color : undefined,
                backgroundColor: currentState === key ? `${data.color}20` : undefined,
              }}
            >
              <div className="text-xl mb-1">{data.emoji}</div>
              <div className="font-mono text-[10px]" style={{ color: data.color }}>
                {data.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Atomic Heart Analysis */}
      <motion.button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full bg-cyberpunk-darker border-2 border-cyberpunk-red/30 p-4 text-left
                   hover:border-cyberpunk-red transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-heading text-cyberpunk-red flex items-center gap-2">
            <span>☢️</span> Atomic Heart's Apocalyptic Landscape
          </h3>
          <span className="text-2xl text-cyberpunk-red">
            {showDetails ? '−' : '+'}
          </span>
        </div>
      </motion.button>

      {showDetails && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-cyberpunk-darker border-2 border-cyberpunk-red/30 p-6 rounded space-y-4"
        >
          <p className="text-cyberpunk-text-dim leading-relaxed">
            Atomic Heart's Soviet dystopia represents the far right of this spectrum—a world where
            unbridled technological expansion has led to environmental and social collapse. The broken
            countryside and mass-produced robots serve as a warning about the consequences of prioritizing
            technological progress over ecological sustainability.
          </p>
          <div className="bg-cyberpunk-dark p-4 border-l-4 border-cyberpunk-red">
            <p className="text-sm text-cyberpunk-text-dim italic">
              "Players are reminded of the environmental impact of unbridled technology expansion by the
              broken Soviet countryside. The immersive gaming experience makes players active participants
              in a story that goes beyond entertainment to teach them about the delicate balance between
              technological advancement and environmental protection."
            </p>
            <p className="text-xs text-cyberpunk-red mt-2">— Student Paper on Atomic Heart</p>
          </div>
          <p className="text-cyberpunk-text-dim leading-relaxed">
            By placing players in this devastated world, the game creates embodied understanding of
            environmental catastrophe. Players don't just read about ecological collapse—they navigate it,
            feel it, and confront the ethical questions it raises about humanity's relationship with
            technology and nature.
          </p>
        </motion.div>
      )}

      {/* Chang's Framework */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-green p-6">
        <h3 className="text-xl font-heading text-cyberpunk-green mb-4">
          Chang's Ecological Game Studies
        </h3>
        <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
          Alenda Y. Chang argues that video games possess unique affordances for fostering environmental
          awareness. Unlike passive media, games allow players to:
        </p>
        <ul className="space-y-2 text-cyberpunk-text-dim">
          <li className="flex items-start">
            <span className="text-cyberpunk-green mr-2">▸</span>
            <span><strong>Experience consequences:</strong> See the results of environmental choices in real-time</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyberpunk-green mr-2">▸</span>
            <span><strong>Embody perspectives:</strong> Inhabit roles within ecosystems, understanding interconnections</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyberpunk-green mr-2">▸</span>
            <span><strong>Explore scenarios:</strong> Navigate apocalyptic or utopian environmental futures</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyberpunk-green mr-2">▸</span>
            <span><strong>Develop ecological consciousness:</strong> Internalize environmental ethics through gameplay</span>
          </li>
        </ul>
      </div>

      {/* Connected Games */}
      <div>
        <h3 className="text-lg font-heading text-cyberpunk-text-dim mb-3">
          Explored in:
        </h3>
        <div className="flex gap-3 flex-wrap">
          {['Atomic Heart', 'Horizon Zero Dawn'].map((game) => (
            <span
              key={game}
              className="px-4 py-2 bg-cyberpunk-dark border border-cyberpunk-green/50 text-cyberpunk-green font-mono text-sm"
            >
              {game}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5);
          border: 2px solid #39ff14;
        }
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid #39ff14;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
