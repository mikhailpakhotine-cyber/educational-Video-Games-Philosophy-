import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../cyberpunk/QuoteBox';

export default function ProceduralRhetoric() {
  const [activeExample, setActiveExample] = useState(0);

  const examples = [
    {
      game: 'Bioshock',
      color: '#d4af37',
      mechanic: 'The "Would You Kindly" Reveal',
      argument: 'Player agency is an illusion',
      description: 'The game mechanics themselves make the argument about free will vs. control',
      flow: [
        { step: 'Player follows instructions', type: 'mechanic' },
        { step: 'Feels like making choices', type: 'experience' },
        { step: '"Would you kindly" reveal', type: 'twist' },
        { step: 'Realizes all "choices" were commands', type: 'argument' },
      ],
    },
    {
      game: 'Detroit: Become Human',
      color: '#00d4ff',
      mechanic: 'Branching Narrative Choices',
      argument: 'Moral decisions have weight and consequence',
      description: 'The mechanics of choice embody the philosophy of moral agency',
      flow: [
        { step: 'Present ethical dilemma', type: 'mechanic' },
        { step: 'Player must choose', type: 'experience' },
        { step: 'Story branches based on choice', type: 'consequence' },
        { step: 'Player feels moral responsibility', type: 'argument' },
      ],
    },
    {
      game: 'Atomic Heart',
      color: '#ff3366',
      mechanic: 'Combat Against Former Humans',
      argument: 'Technology dehumanizes and destroys',
      description: 'Fighting cybernetic mutants embodies the horror of technological transformation',
      flow: [
        { step: 'Encounter mutants (ex-humans)', type: 'mechanic' },
        { step: 'Must fight to survive', type: 'experience' },
        { step: 'Violence reveals transformation horror', type: 'emotion' },
        { step: 'Embodies critique of tech excess', type: 'argument' },
      ],
    },
    {
      game: 'Horizon Zero Dawn',
      color: '#39ff14',
      mechanic: 'Hunting Machines, Gathering Resources',
      argument: 'Nature and technology can coexist',
      description: 'Game mechanics integrate technology into natural survival gameplay',
      flow: [
        { step: 'Hunt robotic creatures', type: 'mechanic' },
        { step: 'Use tech parts for survival', type: 'experience' },
        { step: 'Machines part of ecosystem', type: 'synthesis' },
        { step: 'Argues for nature-tech harmony', type: 'argument' },
      ],
    },
  ];

  const current = examples[activeExample];

  const getStepColor = (type) => {
    const colors = {
      mechanic: '#00d4ff',
      experience: '#b967ff',
      twist: '#ff9900',
      consequence: '#39ff14',
      emotion: '#ff3366',
      synthesis: '#d4af37',
      argument: '#00d4ff',
    };
    return colors[type] || '#666';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-display text-cyberpunk-gold neon-glow mb-2">
          Procedural Rhetoric
        </h2>
        <p className="text-xl text-cyberpunk-text-dim font-heading">
          How Games Argue Philosophically
        </p>
      </div>

      <QuoteBox
        quote="Procedural rhetoric is the practice of using processes persuasively."
        author="Ian Bogost"
        color="gold"
      />

      {/* Key Concept */}
      <div className="bg-cyberpunk-darker border-2 border-cyberpunk-gold/30 p-6 rounded">
        <h3 className="text-xl font-heading text-cyberpunk-gold mb-3">
          The Core Insight
        </h3>
        <p className="text-cyberpunk-text leading-relaxed mb-4">
          Games don't just tell stories <span className="text-cyberpunk-gold">about</span> philosophical ideas—their
          mechanics, rules, and systems <span className="text-cyberpunk-gold">are</span> philosophical arguments.
          How you play is part of the message.
        </p>
        <p className="text-cyberpunk-text-dim text-sm">
          The argument isn't in the dialogue or cutscenes—it's in the <span className="text-cyberpunk-gold">doing</span>,
          in the systems you navigate, the choices the game forces you to make, and the consequences that unfold.
        </p>
      </div>

      {/* Game Selection */}
      <div className="flex flex-wrap justify-center gap-3">
        {examples.map((example, index) => (
          <button
            key={example.game}
            onClick={() => setActiveExample(index)}
            className={`px-6 py-3 border-2 font-heading transition-all duration-300 ${
              activeExample === index
                ? 'scale-110'
                : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: activeExample === index ? `${example.color}20` : '#1a1a1a',
              borderColor: activeExample === index ? example.color : '#2a2a2a',
              color: activeExample === index ? example.color : '#666',
            }}
          >
            {example.game}
          </button>
        ))}
      </div>

      {/* Flowchart Visualization */}
      <motion.div
        key={activeExample}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-cyberpunk-dark border-2 p-8 rounded-lg"
        style={{ borderColor: `${current.color}30` }}
      >
        <div className="mb-6">
          <h3
            className="text-3xl font-heading mb-2"
            style={{ color: current.color, textShadow: `0 0 10px ${current.color}` }}
          >
            {current.game}
          </h3>
          <p className="text-cyberpunk-text-dim mb-2">{current.description}</p>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-cyberpunk-text-dim">Mechanic:</span>
            <span className="text-cyberpunk-text">{current.mechanic}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-cyberpunk-text-dim">Argument:</span>
            <span style={{ color: current.color }}>{current.argument}</span>
          </div>
        </div>

        {/* Flow Steps */}
        <div className="relative">
          {current.flow.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-4 last:mb-0"
            >
              <div className="flex items-center gap-4">
                {/* Step number */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm border-2"
                  style={{
                    borderColor: getStepColor(item.type),
                    backgroundColor: '#0a0a0a',
                    color: getStepColor(item.type),
                  }}
                >
                  {index + 1}
                </div>

                {/* Step content */}
                <div
                  className="flex-1 p-4 rounded border-2 transition-all duration-300 hover:scale-102"
                  style={{
                    borderColor: `${getStepColor(item.type)}40`,
                    backgroundColor: '#1a1a1a',
                  }}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-cyberpunk-text">{item.step}</p>
                    <span
                      className="text-xs font-mono px-2 py-1 rounded"
                      style={{
                        color: getStepColor(item.type),
                        backgroundColor: `${getStepColor(item.type)}20`,
                      }}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              {index < current.flow.length - 1 && (
                <motion.div
                  className="ml-5 my-2 flex items-center gap-2"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div
                    className="w-0.5 h-8"
                    style={{ backgroundColor: getStepColor(item.type) }}
                  />
                  <span style={{ color: getStepColor(item.type) }}>↓</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-cyberpunk-darker border-2 border-cyberpunk-text-dim/30 p-6 rounded">
          <h3 className="text-xl font-heading text-cyberpunk-text-dim mb-3">
            Traditional Rhetoric
          </h3>
          <ul className="space-y-2 text-sm text-cyberpunk-text-dim">
            <li className="flex items-start">
              <span className="mr-2">📖</span>
              Written or spoken arguments
            </li>
            <li className="flex items-start">
              <span className="mr-2">🎬</span>
              Passive consumption of ideas
            </li>
            <li className="flex items-start">
              <span className="mr-2">💭</span>
              Think about what's argued
            </li>
            <li className="flex items-start">
              <span className="mr-2">👁️</span>
              Observer of philosophical positions
            </li>
          </ul>
        </div>

        <div className="bg-cyberpunk-darker border-2 border-cyberpunk-gold/30 p-6 rounded">
          <h3 className="text-xl font-heading text-cyberpunk-gold mb-3">
            Procedural Rhetoric
          </h3>
          <ul className="space-y-2 text-sm text-cyberpunk-text-dim">
            <li className="flex items-start">
              <span className="mr-2 text-cyberpunk-gold">🎮</span>
              Systems and mechanics make arguments
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-cyberpunk-gold">⚡</span>
              Active embodiment of ideas
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-cyberpunk-gold">🎯</span>
              Feel what's being argued
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-cyberpunk-gold">🚶</span>
              Participant in philosophical exploration
            </li>
          </ul>
        </div>
      </div>

      {/* Deep Dive */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-gold p-6">
        <h3 className="text-xl font-heading text-cyberpunk-gold mb-4">
          Why It Matters
        </h3>
        <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
          When Bioshock reveals that every "choice" you made was actually a command you were compelled
          to follow, the game doesn't just <span className="text-cyberpunk-gold">tell you</span> about
          the illusion of free will—you <span className="text-cyberpunk-gold">experienced</span> that
          illusion. You felt what it's like to believe you're choosing when you're actually being controlled.
        </p>
        <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
          That's procedural rhetoric: the game mechanics create an embodied understanding that no amount
          of reading philosophy papers can replicate. The argument is made through doing, not just thinking.
        </p>
        <p className="text-cyberpunk-text-dim leading-relaxed">
          This is why games like Atomic Heart, Detroit, Horizon, and Bioshock are genuine philosophical
          texts—their interactive systems make sophisticated arguments about consciousness, agency, ethics,
          and the relationship between humans, nature, and technology.
        </p>
      </div>

      {/* Key Takeaway */}
      <div className="bg-cyberpunk-darker border-2 border-cyberpunk-gold p-6 rounded text-center">
        <p className="text-lg text-cyberpunk-gold font-heading mb-2">
          "The medium is the message"
        </p>
        <p className="text-sm text-cyberpunk-text-dim">
          Games argue through their interactive systems, not despite them.
          <br />
          How you play <span className="text-cyberpunk-gold">is</span> the philosophy.
        </p>
      </div>
    </div>
  );
}
