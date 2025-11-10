import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../cyberpunk/QuoteBox';

export default function IdentityTransformation() {
  const [transformValue, setTransformValue] = useState(50);

  const stages = [
    {
      range: [0, 33],
      title: 'Human',
      icon: '👤',
      color: '#39ff14',
      characteristics: [
        'Biological organism',
        'Organic consciousness',
        'Natural evolution',
        'Mortal, vulnerable',
      ],
    },
    {
      range: [34, 66],
      title: 'Cyborg',
      icon: '🤖',
      color: '#00d4ff',
      characteristics: [
        'Hybrid being',
        'Enhanced capabilities',
        'Technology integrated',
        'Identity in flux',
      ],
    },
    {
      range: [67, 100],
      title: 'Machine',
      icon: '⚙️',
      color: '#ff3366',
      characteristics: [
        'Fully synthetic',
        'Computational mind',
        'Transcended biology',
        'Posthuman entity',
      ],
    },
  ];

  const getCurrentStage = () => {
    return stages.find(
      (s) => transformValue >= s.range[0] && transformValue <= s.range[1]
    );
  };

  const currentStage = getCurrentStage();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-display text-cyberpunk-purple neon-glow mb-2">
          Identity Transformation
        </h2>
        <p className="text-xl text-cyberpunk-text-dim font-heading">
          Cybernetic Mutation
        </p>
      </div>

      <QuoteBox
        quote="Players contemplate the ethical implications of combining human nature with technology as they meet cybernetic entities."
        author="Beyond Entertainment: Atomic Heart Paper"
        color="purple"
      />

      {/* Interactive Transformation Slider */}
      <div className="space-y-6">
        <p className="text-center text-cyberpunk-text-dim font-mono">
          What makes us human in the face of transformation? →
        </p>

        {/* Visual Representation */}
        <div className="relative h-80 bg-cyberpunk-dark border-2 border-cyberpunk-purple/30 rounded-lg overflow-hidden">
          {/* Background gradient */}
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              background: `linear-gradient(to right,
                #39ff1420 0%,
                #00d4ff20 50%,
                #ff336620 100%)`,
            }}
          />

          {/* Glitch overlay at transformation points */}
          {(transformValue > 30 && transformValue < 40) ||
            (transformValue > 63 && transformValue < 73) && (
              <motion.div
                className="absolute inset-0 bg-cyberpunk-purple/10"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 0.2, repeat: Infinity }}
              />
            )}

          {/* Central figure */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              key={currentStage.title}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="text-9xl mb-4"
              style={{
                filter: `drop-shadow(0 0 20px ${currentStage.color})`,
              }}
            >
              {currentStage.icon}
            </motion.div>

            <motion.h3
              className="text-4xl font-display mb-2"
              style={{ color: currentStage.color, textShadow: `0 0 10px ${currentStage.color}` }}
            >
              {currentStage.title}
            </motion.h3>

            <div className="text-center space-y-1 mt-4">
              {currentStage.characteristics.map((char, i) => (
                <motion.p
                  key={char}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm text-cyberpunk-text-dim"
                >
                  {char}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Transformation particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: currentStage.color,
                left: `${(transformValue + i * 3) % 100}%`,
              }}
              animate={{
                y: [0, 320],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.15,
                ease: "linear",
              }}
            />
          ))}

          {/* Binary code rain in machine stage */}
          {transformValue > 66 && [...Array(8)].map((_, i) => (
            <motion.div
              key={`binary-${i}`}
              className="absolute font-mono text-xs text-cyberpunk-red/30"
              style={{ left: `${i * 12.5}%` }}
              animate={{ y: [0, 320] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>

        {/* Transformation Slider */}
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="100"
            value={transformValue}
            onChange={(e) => setTransformValue(Number(e.target.value))}
            className="w-full h-3 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right,
                #39ff14 0%,
                #39ff14 33%,
                #00d4ff 33%,
                #00d4ff 66%,
                #ff3366 66%,
                #ff3366 100%)`,
            }}
          />

          <div className="flex justify-between items-end">
            {stages.map((stage) => (
              <button
                key={stage.title}
                onClick={() => setTransformValue((stage.range[0] + stage.range[1]) / 2)}
                className={`flex flex-col items-center transition-all duration-300 ${
                  currentStage.title === stage.title ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'
                }`}
              >
                <div className="text-4xl mb-1">{stage.icon}</div>
                <div className="font-heading text-sm" style={{ color: stage.color }}>
                  {stage.title}
                </div>
              </button>
            ))}
          </div>

          <div className="text-center font-mono text-sm text-cyberpunk-purple">
            Transformation: {transformValue}%
          </div>
        </div>
      </div>

      {/* Philosophical Questions */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-purple p-6">
        <h3 className="text-xl font-heading text-cyberpunk-purple mb-4">
          The Question of Identity
        </h3>
        <div className="space-y-3 text-cyberpunk-text-dim">
          <p className="leading-relaxed">
            At what point in the transformation does a being cease to be "human"? Is it when 51% of
            the body is mechanical? When the brain is uploaded? Or is humanity defined by something
            beyond mere biology?
          </p>
          <p className="leading-relaxed">
            Atomic Heart forces players to confront these questions through its mutants and cybernetic
            creatures—beings that were once human but have been transformed by technology. The game asks:
            Are they still human? Do they retain their humanity? What makes us who we are?
          </p>
        </div>
      </div>

      {/* Game Examples */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-cyberpunk-darker border-2 border-cyberpunk-red/30 p-6 rounded">
          <h3 className="text-xl font-heading text-cyberpunk-red mb-3 flex items-center gap-2">
            <span>☢️</span> Atomic Heart
          </h3>
          <p className="text-sm text-cyberpunk-text-dim mb-3">
            Mutants created from human bodies and the Sprout system represent forced transformation.
          </p>
          <ul className="space-y-2 text-xs text-cyberpunk-text-dim">
            <li className="flex items-start">
              <span className="text-cyberpunk-red mr-2">•</span>
              Human experimentation and cybernetic enhancement
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-red mr-2">•</span>
              Loss of autonomy in pursuit of technological advancement
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-red mr-2">•</span>
              The horror of unwilling transformation
            </li>
          </ul>
        </div>

        <div className="bg-cyberpunk-darker border-2 border-cyberpunk-blue/30 p-6 rounded">
          <h3 className="text-xl font-heading text-cyberpunk-blue mb-3 flex items-center gap-2">
            <span>🤖</span> Detroit: Become Human
          </h3>
          <p className="text-sm text-cyberpunk-text-dim mb-3">
            Androids becoming "deviant" represent transformation in reverse—machines becoming human.
          </p>
          <ul className="space-y-2 text-xs text-cyberpunk-text-dim">
            <li className="flex items-start">
              <span className="text-cyberpunk-blue mr-2">•</span>
              Machines developing consciousness and emotion
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-blue mr-2">•</span>
              The emergence of identity and self-determination
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-blue mr-2">•</span>
              Questioning what makes someone "alive"
            </li>
          </ul>
        </div>
      </div>

      {/* Haraway Connection */}
      <div className="bg-cyberpunk-darker border-2 border-cyberpunk-purple p-6 rounded">
        <h3 className="text-xl font-heading text-cyberpunk-purple mb-3">
          Haraway's Cyborg Theory Applied
        </h3>
        <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
          Donna Haraway's cyborg theory celebrates the dissolution of boundaries as liberating—a chance
          to reimagine identity beyond restrictive categories. But games like Atomic Heart show the
          darker side: transformation without consent, identity loss, and the violence of forced hybridity.
        </p>
        <p className="text-cyberpunk-text-dim leading-relaxed">
          The transformation spectrum represents both possibility and threat. It asks players to consider
          whether technological enhancement represents human evolution or human erasure.
        </p>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(185, 103, 255, 0.8), 0 0 20px rgba(185, 103, 255, 0.5);
          border: 2px solid #b967ff;
        }
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid #b967ff;
          box-shadow: 0 0 10px rgba(185, 103, 255, 0.8), 0 0 20px rgba(185, 103, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
