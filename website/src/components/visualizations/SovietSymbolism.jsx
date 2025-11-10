import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../cyberpunk/QuoteBox';

export default function SovietSymbolism() {
  const [activeLayer, setActiveLayer] = useState('all');
  const [selectedIntersection, setSelectedIntersection] = useState(null);

  const layers = [
    {
      id: 'technology',
      title: 'Technology',
      color: '#00d4ff',
      icon: '⚙️',
      elements: ['Mass robot production', 'Predictive algorithms', 'Mind control systems', 'Cybernetic enhancement'],
      description: 'The technical systems and infrastructure of Atomic Heart\'s Soviet future',
    },
    {
      id: 'politics',
      title: 'Politics',
      color: '#ff3366',
      icon: '⚖️',
      elements: ['Soviet ideology', 'State control', 'Propaganda systems', 'Collective vs. individual'],
      description: 'The political structures and ideological frameworks embedded in the game',
    },
    {
      id: 'ethics',
      title: 'Ethics',
      color: '#b967ff',
      icon: '🤔',
      elements: ['Human experimentation', 'Technological determinism', 'Environmental destruction', 'Loss of autonomy'],
      description: 'The moral questions raised by the convergence of technology and politics',
    },
  ];

  const intersections = [
    {
      layers: ['technology', 'politics'],
      title: 'Techno-Political Control',
      description: 'How technological systems enforce and perpetuate political power structures',
      example: 'Robots as instruments of state control and surveillance',
    },
    {
      layers: ['politics', 'ethics'],
      title: 'Ideological Ethics',
      description: 'The ethical implications of political ideologies taken to extremes',
      example: 'Collectivist ideals justifying individual sacrifice',
    },
    {
      layers: ['technology', 'ethics'],
      title: 'Technological Ethics',
      description: 'Moral questions about the development and use of advanced technology',
      example: 'The ethics of creating conscious machines or enhancing humans',
    },
    {
      layers: ['technology', 'politics', 'ethics'],
      title: 'The Central Question',
      description: 'The convergence of all three creates Atomic Heart\'s core philosophical challenge',
      example: 'Can unchecked technological progress under authoritarian control ever be ethical?',
    },
  ];

  const getLayerOpacity = (layerId) => {
    if (activeLayer === 'all') return 0.4;
    if (activeLayer === layerId) return 0.7;
    return 0.1;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-display text-cyberpunk-red neon-glow mb-2">
          Soviet Symbolism
        </h2>
        <p className="text-xl text-cyberpunk-text-dim font-heading">
          Technology / Politics / Ethics Nexus
        </p>
      </div>

      <QuoteBox
        quote="In the realm of computer technology, mythinformation flourishes."
        author="Langdon Winner"
        color="red"
      />

      <QuoteBox
        quote="The game's complex dance of technology, politics, and conservation challenges players to consider technological growth's social and political impacts."
        author="Beyond Entertainment: Atomic Heart Paper"
        color="purple"
      />

      {/* Layer Controls */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setActiveLayer('all')}
          className={`px-6 py-3 border-2 font-heading transition-all duration-300 ${
            activeLayer === 'all'
              ? 'bg-cyberpunk-gold/20 border-cyberpunk-gold text-cyberpunk-gold'
              : 'bg-cyberpunk-darker border-cyberpunk-text-dim/30 text-cyberpunk-text-dim'
          }`}
        >
          ✦ All Layers
        </button>
        {layers.map((layer) => (
          <button
            key={layer.id}
            onClick={() => setActiveLayer(layer.id)}
            className={`px-6 py-3 border-2 font-heading transition-all duration-300 flex items-center gap-2`}
            style={{
              backgroundColor: activeLayer === layer.id ? `${layer.color}20` : undefined,
              borderColor: activeLayer === layer.id ? layer.color : '#2a2a2a',
              color: activeLayer === layer.id ? layer.color : '#666',
            }}
          >
            <span>{layer.icon}</span>
            {layer.title}
          </button>
        ))}
      </div>

      {/* Interactive Layered Diagram */}
      <div className="relative h-[500px] bg-cyberpunk-dark border-2 border-cyberpunk-red/30 rounded-lg overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 500">
          {/* Three overlapping layers as rectangles */}
          <defs>
            <filter id="layerGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Technology Layer (bottom-left) */}
          <motion.g
            animate={{ opacity: getLayerOpacity('technology') }}
            transition={{ duration: 0.3 }}
          >
            <rect
              x="100"
              y="150"
              width="200"
              height="250"
              fill="#00d4ff"
              stroke="#00d4ff"
              strokeWidth="2"
              filter="url(#layerGlow)"
              className="cursor-pointer"
              onClick={() => setActiveLayer('technology')}
            />
            <text
              x="200"
              y="180"
              textAnchor="middle"
              fill="#00d4ff"
              fontSize="20"
              className="font-heading"
              style={{ textShadow: '0 0 10px #00d4ff' }}
            >
              ⚙️ TECHNOLOGY
            </text>
          </motion.g>

          {/* Politics Layer (top-center) */}
          <motion.g
            animate={{ opacity: getLayerOpacity('politics') }}
            transition={{ duration: 0.3 }}
          >
            <rect
              x="200"
              y="100"
              width="200"
              height="250"
              fill="#ff3366"
              stroke="#ff3366"
              strokeWidth="2"
              filter="url(#layerGlow)"
              className="cursor-pointer"
              onClick={() => setActiveLayer('politics')}
            />
            <text
              x="300"
              y="130"
              textAnchor="middle"
              fill="#ff3366"
              fontSize="20"
              className="font-heading"
              style={{ textShadow: '0 0 10px #ff3366' }}
            >
              ⚖️ POLITICS
            </text>
          </motion.g>

          {/* Ethics Layer (bottom-right) */}
          <motion.g
            animate={{ opacity: getLayerOpacity('ethics') }}
            transition={{ duration: 0.3 }}
          >
            <rect
              x="300"
              y="150"
              width="200"
              height="250"
              fill="#b967ff"
              stroke="#b967ff"
              strokeWidth="2"
              filter="url(#layerGlow)"
              className="cursor-pointer"
              onClick={() => setActiveLayer('ethics')}
            />
            <text
              x="400"
              y="180"
              textAnchor="middle"
              fill="#b967ff"
              fontSize="20"
              className="font-heading"
              style={{ textShadow: '0 0 10px #b967ff' }}
            >
              🤔 ETHICS
            </text>
          </motion.g>

          {/* Central intersection point */}
          <motion.circle
            cx="300"
            cy="275"
            r="30"
            fill="#39ff14"
            opacity="0.6"
            animate={{
              r: [25, 35, 25],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="cursor-pointer"
            onClick={() => setSelectedIntersection(intersections[3])}
          />
          <text
            x="300"
            y="280"
            textAnchor="middle"
            fill="#0a0a0a"
            fontSize="16"
            fontWeight="bold"
            className="cursor-pointer pointer-events-none"
          >
            CORE
          </text>

          {/* Intersection markers */}
          {[
            { x: 250, y: 200, index: 0 }, // Tech + Politics
            { x: 350, y: 200, index: 1 }, // Politics + Ethics
            { x: 300, y: 350, index: 2 }, // Tech + Ethics
          ].map((marker) => (
            <circle
              key={marker.index}
              cx={marker.x}
              cy={marker.y}
              r="15"
              fill="#d4af37"
              opacity="0.5"
              className="cursor-pointer"
              onClick={() => setSelectedIntersection(intersections[marker.index])}
            />
          ))}
        </svg>

        {/* Animated particles */}
        {activeLayer !== 'all' && [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor:
                activeLayer === 'technology'
                  ? '#00d4ff'
                  : activeLayer === 'politics'
                  ? '#ff3366'
                  : '#b967ff',
            }}
            animate={{
              x: [Math.random() * 600, Math.random() * 600],
              y: [Math.random() * 500, Math.random() * 500],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Layer Details */}
      {activeLayer !== 'all' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-cyberpunk-darker border-2 p-6 rounded-lg"
          style={{
            borderColor: layers.find(l => l.id === activeLayer)?.color,
          }}
        >
          <h3
            className="text-2xl font-heading mb-3 flex items-center gap-2"
            style={{ color: layers.find(l => l.id === activeLayer)?.color }}
          >
            <span>{layers.find(l => l.id === activeLayer)?.icon}</span>
            {layers.find(l => l.id === activeLayer)?.title} Layer
          </h3>
          <p className="text-cyberpunk-text-dim mb-4">
            {layers.find(l => l.id === activeLayer)?.description}
          </p>
          <div className="grid md:grid-cols-2 gap-2">
            {layers.find(l => l.id === activeLayer)?.elements.map((element) => (
              <div
                key={element}
                className="text-sm p-2 bg-cyberpunk-dark rounded flex items-center gap-2"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: layers.find(l => l.id === activeLayer)?.color }}
                />
                {element}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Intersection Details */}
      {selectedIntersection && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-cyberpunk-darker border-2 border-cyberpunk-gold p-6 rounded-lg relative"
        >
          <button
            onClick={() => setSelectedIntersection(null)}
            className="absolute top-4 right-4 text-cyberpunk-gold hover:text-cyberpunk-text"
          >
            ✕
          </button>
          <h3 className="text-2xl font-heading text-cyberpunk-gold mb-3">
            {selectedIntersection.title}
          </h3>
          <p className="text-cyberpunk-text mb-4">
            {selectedIntersection.description}
          </p>
          <div className="bg-cyberpunk-dark p-4 border-l-4 border-cyberpunk-gold">
            <p className="text-sm text-cyberpunk-text-dim italic">
              Example: {selectedIntersection.example}
            </p>
          </div>
        </motion.div>
      )}

      {/* Winner's Analysis */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-red p-6">
        <h3 className="text-xl font-heading text-cyberpunk-red mb-4">
          Technology is Not Neutral (Winner)
        </h3>
        <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
          Langdon Winner argues that technological systems are never politically neutral—they embody
          and reinforce particular power arrangements and ideological commitments. Atomic Heart makes
          this visible through its Soviet setting.
        </p>
        <p className="text-cyberpunk-text-dim leading-relaxed">
          The game's mass-produced robots aren't just tools; they're expressions of Soviet ideology
          about collectivism, control, and technological progress. The very architecture of the
          technological system reflects and enforces political structures, raising ethical questions
          about the price of such "advancement."
        </p>
      </div>

      {/* Connected Games */}
      <div>
        <h3 className="text-lg font-heading text-cyberpunk-text-dim mb-3">
          Explored in:
        </h3>
        <div className="flex gap-3 flex-wrap">
          {['Atomic Heart', 'Bioshock'].map((game) => (
            <span
              key={game}
              className="px-4 py-2 bg-cyberpunk-dark border border-cyberpunk-red/50 text-cyberpunk-red font-mono text-sm"
            >
              {game}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
