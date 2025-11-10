import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../cyberpunk/QuoteBox';

export default function CyborgTheory() {
  const [selectedBoundary, setSelectedBoundary] = useState(null);

  const boundaries = [
    {
      id: 'human-animal',
      title: 'Human/Animal',
      description: 'The distinction between human and animal dissolves in digital spaces',
      position: { x: 100, y: 100 },
      color: '#b967ff',
    },
    {
      id: 'human-machine',
      title: 'Human/Machine',
      description: 'Players become one with technological systems, merging consciousness with computation',
      position: { x: 200, y: 100 },
      color: '#00d4ff',
    },
    {
      id: 'physical-nonphysical',
      title: 'Physical/Non-physical',
      description: 'Virtual and physical realities merge through gaming experiences',
      position: { x: 150, y: 200 },
      color: '#ff3366',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-display text-cyberpunk-purple neon-glow mb-2">
          Cyborg Theory
        </h2>
        <p className="text-xl text-cyberpunk-text-dim font-heading">
          Haraway's Boundary Dissolution
        </p>
      </div>

      <QuoteBox
        quote="A cyborg is a cybernetic organism, a hybrid of machine and organism, a creature of social reality as well as a creature of fiction."
        author="Donna Haraway"
        color="purple"
      />

      {/* Interactive Visualization */}
      <div className="relative h-96 bg-cyberpunk-dark border-2 border-cyberpunk-purple/30 rounded-lg overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 grid-bg opacity-10" />

        {/* SVG for circles and overlaps */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
          {/* Overlap areas with glow */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Three overlapping circles */}
          {boundaries.map((boundary, index) => (
            <motion.circle
              key={boundary.id}
              cx={boundary.position.x}
              cy={boundary.position.y}
              r="70"
              fill={boundary.color}
              fillOpacity={selectedBoundary === boundary.id ? 0.4 : 0.2}
              stroke={boundary.color}
              strokeWidth="2"
              filter="url(#glow)"
              className="cursor-pointer transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedBoundary(boundary.id)}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            />
          ))}

          {/* Central point where all three meet */}
          <motion.circle
            cx="150"
            cy="150"
            r="15"
            fill="#39ff14"
            className="opacity-50"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Gaming controller icon at center */}
          <text
            x="142"
            y="158"
            fontSize="20"
            fill="#39ff14"
            className="font-mono"
          >
            🎮
          </text>

          {/* Labels */}
          {boundaries.map((boundary) => (
            <text
              key={`label-${boundary.id}`}
              x={boundary.position.x}
              y={boundary.position.y - 80}
              textAnchor="middle"
              fill={boundary.color}
              className="font-heading text-sm"
              style={{ textShadow: `0 0 10px ${boundary.color}` }}
            >
              {boundary.title}
            </text>
          ))}
        </svg>

        {/* Animated particles flowing across boundaries */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyberpunk-purple rounded-full"
            animate={{
              x: [100, 200, 150, 100],
              y: [100, 100, 200, 100],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Boundary Details */}
      {selectedBoundary && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-cyberpunk-darker border-2 border-cyberpunk-purple p-6 rounded-lg"
        >
          <h3 className="text-2xl font-heading text-cyberpunk-purple mb-3">
            {boundaries.find(b => b.id === selectedBoundary)?.title}
          </h3>
          <p className="text-lg text-cyberpunk-text">
            {boundaries.find(b => b.id === selectedBoundary)?.description}
          </p>
        </motion.div>
      )}

      {/* Key Insight */}
      <div className="bg-cyberpunk-darker border-l-4 border-cyberpunk-purple p-6">
        <h3 className="text-xl font-heading text-cyberpunk-purple mb-3">
          Gaming as Cyborg Experience
        </h3>
        <p className="text-cyberpunk-text-dim leading-relaxed">
          When players engage with games like <span className="text-cyberpunk-blue">Detroit: Become Human</span> or{' '}
          <span className="text-cyberpunk-red">Atomic Heart</span>, they become cyborgs in Haraway's sense—hybrid
          entities where human consciousness merges with computational systems. The controller becomes an extension
          of the body, digital avatars become extensions of identity, and the boundaries between player and game
          dissolve into a unified cyborg experience.
        </p>
      </div>

      {/* Connected Games */}
      <div>
        <h3 className="text-lg font-heading text-cyberpunk-text-dim mb-3">
          Explored in:
        </h3>
        <div className="flex gap-3 flex-wrap">
          {['Detroit: Become Human', 'Atomic Heart', 'Horizon Zero Dawn'].map((game) => (
            <span
              key={game}
              className="px-4 py-2 bg-cyberpunk-dark border border-cyberpunk-purple/50 text-cyberpunk-purple font-mono text-sm"
            >
              {game}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
