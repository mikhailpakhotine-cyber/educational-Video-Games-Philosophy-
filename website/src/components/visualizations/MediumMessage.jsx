import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../cyberpunk/QuoteBox';

export default function MediumMessage() {
  const [selectedMedium, setSelectedMedium] = useState(null);
  const [hoveredGame, setHoveredGame] = useState(null);

  const mediaComparison = [
    {
      type: 'passive',
      title: 'Passive Media',
      color: '#6b7280',
      examples: [
        { name: 'Books', icon: '📖', engagement: 'Reading' },
        { name: 'Films', icon: '🎬', engagement: 'Watching' },
        { name: 'Music', icon: '🎵', engagement: 'Listening' },
      ],
      characteristics: [
        'Linear narrative progression',
        'Fixed author-determined meaning',
        'Observer role for audience',
        'One-way communication',
        'Content consumed as presented',
      ],
    },
    {
      type: 'interactive',
      title: 'Interactive Media',
      color: '#00d4ff',
      examples: [
        { name: 'Video Games', icon: '🎮', engagement: 'Playing' },
        { name: 'Hypertext', icon: '🔗', engagement: 'Navigating' },
        { name: 'VR', icon: '🥽', engagement: 'Embodying' },
      ],
      characteristics: [
        'Non-linear, branching narratives',
        'Co-created meaning through interaction',
        'Participant role for audience',
        'Two-way, responsive communication',
        'Content shaped by user choices',
      ],
    },
  ];

  const gameExamples = [
    {
      title: 'Atomic Heart',
      medium: 'Player navigates Soviet dystopia, choices shape experience',
      message: 'Embodied understanding of technological/ecological collapse',
    },
    {
      title: 'Detroit: Become Human',
      medium: 'Branching narrative with moral choices',
      message: 'Player agency creates ethical meaning',
    },
    {
      title: 'Bioshock',
      medium: 'First-person exploration reveals narrative',
      message: 'Spatial discovery is philosophical argument',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-display text-cyberpunk-blue neon-glow mb-2">
          The Medium is the Message
        </h2>
        <p className="text-xl text-cyberpunk-text-dim font-heading">
          McLuhan's Interactive Philosophy
        </p>
      </div>

      <QuoteBox
        quote="The medium is the message. This is merely to say that the personal and social consequences of any medium...result from the new scale that is introduced into our affairs by each extension of ourselves."
        author="Marshall McLuhan"
        color="blue"
      />

      {/* Interactive Comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        {mediaComparison.map((medium, index) => (
          <motion.div
            key={medium.type}
            initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index }}
            className={`border-2 p-6 rounded-lg cursor-pointer transition-all duration-300 ${
              selectedMedium === medium.type
                ? `border-[${medium.color}] bg-opacity-20`
                : 'border-cyberpunk-darker/50 hover:border-cyberpunk-blue/50'
            }`}
            onClick={() => setSelectedMedium(medium.type === selectedMedium ? null : medium.type)}
            whileHover={{ scale: 1.02 }}
            style={{
              backgroundColor:
                selectedMedium === medium.type ? `${medium.color}20` : undefined,
              borderColor:
                selectedMedium === medium.type ? medium.color : undefined,
            }}
          >
            {/* Header */}
            <h3
              className="text-2xl font-heading mb-4"
              style={{ color: medium.color }}
            >
              {medium.title}
            </h3>

            {/* Examples */}
            <div className="space-y-3 mb-6">
              {medium.examples.map((example) => (
                <div
                  key={example.name}
                  className="flex items-center gap-3 p-3 bg-cyberpunk-darker/50 rounded"
                >
                  <span className="text-3xl">{example.icon}</span>
                  <div>
                    <p className="font-heading" style={{ color: medium.color }}>
                      {example.name}
                    </p>
                    <p className="text-xs text-cyberpunk-text-dim">
                      {example.engagement}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Characteristics */}
            <div className="space-y-2">
              {medium.characteristics.map((char, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start text-sm text-cyberpunk-text-dim"
                >
                  <span className="mr-2" style={{ color: medium.color }}>
                    {medium.type === 'interactive' ? '▸' : '•'}
                  </span>
                  {char}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Transformation Visual */}
      <div className="relative h-48 bg-cyberpunk-dark border-2 border-cyberpunk-blue/30 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Passive side */}
          <div className="flex-1 flex flex-col items-center justify-center border-r border-cyberpunk-blue/30">
            <motion.div
              className="text-5xl mb-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📖
            </motion.div>
            <p className="text-sm text-gray-500 font-mono">PASSIVE</p>
            <p className="text-xs text-gray-600">Observer</p>
          </div>

          {/* Arrow */}
          <div className="px-8">
            <motion.div
              className="text-4xl text-cyberpunk-blue"
              animate={{
                x: [0, 10, 0],
                textShadow: [
                  '0 0 10px #00d4ff',
                  '0 0 20px #00d4ff',
                  '0 0 10px #00d4ff',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </div>

          {/* Interactive side */}
          <div className="flex-1 flex flex-col items-center justify-center border-l border-cyberpunk-blue/30">
            <motion.div
              className="text-5xl mb-2"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎮
            </motion.div>
            <p className="text-sm text-cyberpunk-blue font-mono neon-glow">
              INTERACTIVE
            </p>
            <p className="text-xs text-cyberpunk-text-dim">Participant</p>
          </div>
        </div>

        {/* Particle flow */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyberpunk-blue rounded-full"
            animate={{
              x: [100, 300],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "linear",
            }}
            style={{ top: `${20 + i * 15}%` }}
          />
        ))}
      </div>

      {/* Game Examples */}
      <div className="bg-cyberpunk-darker border-2 border-cyberpunk-blue/30 p-6 rounded-lg">
        <h3 className="text-2xl font-heading text-cyberpunk-blue mb-6">
          How Games Transform Meaning
        </h3>
        <div className="space-y-4">
          {gameExamples.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onMouseEnter={() => setHoveredGame(game.title)}
              onMouseLeave={() => setHoveredGame(null)}
              className={`p-4 bg-cyberpunk-dark rounded border-l-4 transition-all duration-300 ${
                hoveredGame === game.title
                  ? 'border-cyberpunk-blue shadow-lg shadow-cyberpunk-blue/20'
                  : 'border-cyberpunk-darker'
              }`}
            >
              <h4 className="font-heading text-lg text-cyberpunk-blue mb-2">
                {game.title}
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-cyberpunk-text-dim/60 mb-1">Medium:</p>
                  <p className="text-cyberpunk-text">{game.medium}</p>
                </div>
                <div>
                  <p className="text-cyberpunk-text-dim/60 mb-1">Message:</p>
                  <p className="text-cyberpunk-text">{game.message}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Insight */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-blue p-6">
        <h3 className="text-xl font-heading text-cyberpunk-blue mb-4">
          The Interactivity IS the Philosophy
        </h3>
        <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
          McLuhan's insight reveals why video games create unique philosophical engagement. The
          interactive medium doesn't just deliver philosophical content—it fundamentally transforms how
          philosophical meaning is created and understood.
        </p>
        <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
          When you <span className="text-cyberpunk-blue">make a choice in Detroit: Become Human</span>,
          the choice itself—the act of deciding, weighing options, experiencing consequences—becomes part
          of the philosophical argument about free will and moral agency.
        </p>
        <p className="text-cyberpunk-text-dim leading-relaxed">
          A book about the ethics of AI is fundamentally different from a game where you
          <span className="text-cyberpunk-blue"> embody</span> an AI and must navigate ethical dilemmas.
          The medium shapes the message in profound ways.
        </p>
      </div>

      {/* Experiential Dimensions */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            title: 'Embodiment',
            description: 'Players inhabit perspectives, not just observe them',
            icon: '🚶',
          },
          {
            title: 'Agency',
            description: 'Choices create personal stake in philosophical outcomes',
            icon: '🎯',
          },
          {
            title: 'Consequence',
            description: 'Players experience results of ethical decisions',
            icon: '⚡',
          },
        ].map((dimension) => (
          <div
            key={dimension.title}
            className="bg-cyberpunk-darker border border-cyberpunk-blue/30 p-4 rounded text-center"
          >
            <div className="text-4xl mb-2">{dimension.icon}</div>
            <h4 className="font-heading text-cyberpunk-blue mb-2">
              {dimension.title}
            </h4>
            <p className="text-xs text-cyberpunk-text-dim">
              {dimension.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
