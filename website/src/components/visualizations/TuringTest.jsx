import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../cyberpunk/QuoteBox';

export default function TuringTest() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const steps = [
    {
      title: 'The Question',
      description: 'Can machines think?',
      detail: 'Alan Turing proposed replacing this philosophical question with a practical test: the imitation game.',
      icon: '🤔',
    },
    {
      title: 'Human Interrogator',
      description: 'A human asks questions',
      detail: 'The interrogator cannot see the respondents, only communicate through text.',
      icon: '👤',
    },
    {
      title: 'Hidden Respondents',
      description: 'One human, one machine',
      detail: 'Both try to convince the interrogator they are human.',
      icon: '❓',
    },
    {
      title: 'The Test',
      description: 'Can you tell them apart?',
      detail: 'If the machine successfully imitates a human, it passes the test.',
      icon: '⚖️',
    },
    {
      title: 'The Implication',
      description: 'Intelligence is functional',
      detail: 'If a machine behaves indistinguishably from a thinking being, we should consider it intelligent.',
      icon: '🧠',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-display text-cyberpunk-blue neon-glow mb-2">
          The Turing Test
        </h2>
        <p className="text-xl text-cyberpunk-text-dim font-heading">
          Machine Consciousness
        </p>
      </div>

      <QuoteBox
        quote="I propose to consider the question, 'Can machines think?'"
        author="Alan Turing, 1950"
        color="blue"
      />

      {/* Interactive Terminal-Style Flowchart */}
      <div className="bg-cyberpunk-dark border-2 border-cyberpunk-blue/30 rounded-lg p-8">
        <div className="font-mono text-cyberpunk-green mb-6">
          <div className="mb-2">$ ./turing_test.sh</div>
          <div className="text-cyberpunk-blue">
            → Step {currentStep + 1} of {steps.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-cyberpunk-darker h-2 rounded mb-8">
          <motion.div
            className="h-full bg-cyberpunk-blue rounded"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
            style={{
              boxShadow: '0 0 10px #00d4ff',
            }}
          />
        </div>

        {/* Current Step Display */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="min-h-[300px] flex flex-col items-center justify-center text-center"
        >
          <motion.div
            className="text-7xl mb-6"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {steps[currentStep].icon}
          </motion.div>

          <h3 className="text-3xl font-heading text-cyberpunk-blue mb-4">
            {steps[currentStep].title}
          </h3>
          <p className="text-xl text-cyberpunk-text mb-4">
            {steps[currentStep].description}
          </p>
          <p className="text-cyberpunk-text-dim max-w-md">
            {steps[currentStep].detail}
          </p>

          {/* Binary code rain effect */}
          <div className="absolute top-0 right-0 opacity-10 font-mono text-xs text-cyberpunk-blue overflow-hidden h-full">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="inline-block mr-2"
                animate={{ y: [0, 300] }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
                {Math.random() > 0.5 ? '1' : '0'}
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-6 py-2 bg-cyberpunk-darker border-2 border-cyberpunk-blue text-cyberpunk-blue
                     disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cyberpunk-blue/10
                     transition-all duration-300 font-mono"
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-cyberpunk-blue shadow-lg shadow-cyberpunk-blue/50'
                    : index < currentStep
                    ? 'bg-cyberpunk-blue/50'
                    : 'bg-cyberpunk-darker border border-cyberpunk-blue/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            className="px-6 py-2 bg-cyberpunk-darker border-2 border-cyberpunk-blue text-cyberpunk-blue
                     disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cyberpunk-blue/10
                     transition-all duration-300 font-mono"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Detroit: Become Human Connection */}
      <motion.button
        onClick={() => setShowExplanation(!showExplanation)}
        className="w-full bg-cyberpunk-darker border-2 border-cyberpunk-blue/30 p-4 text-left
                   hover:border-cyberpunk-blue transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-heading text-cyberpunk-blue">
            Application: Detroit: Become Human
          </h3>
          <span className="text-2xl text-cyberpunk-blue">
            {showExplanation ? '−' : '+'}
          </span>
        </div>
      </motion.button>

      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-cyberpunk-darker border-2 border-cyberpunk-blue/30 p-6 rounded"
        >
          <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
            <span className="text-cyberpunk-blue font-heading">Detroit: Become Human</span> directly
            engages with Turing's question through its android characters. Players witness machines that
            not only pass the Turing Test but develop what appears to be genuine consciousness, emotion,
            and moral agency.
          </p>
          <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
            The game asks: If androids behave indistinguishably from humans—feeling fear, making moral
            choices, forming relationships—should we consider them conscious? Do they deserve rights?
            Is their consciousness "real" or merely sophisticated imitation?
          </p>
          <div className="bg-cyberpunk-dark p-4 border-l-4 border-cyberpunk-blue">
            <p className="text-sm text-cyberpunk-text-dim italic">
              The Turing Test shifts the question from "What is consciousness?" to "How does consciousness
              function?" Detroit shows that this functional approach raises profound ethical questions about
              the moral status of artificial beings.
            </p>
          </div>
        </motion.div>
      )}

      {/* Philosophical Questions */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-blue p-6">
        <h3 className="text-xl font-heading text-cyberpunk-blue mb-4">
          Key Questions
        </h3>
        <ul className="space-y-2 text-cyberpunk-text-dim">
          <li className="flex items-start">
            <span className="text-cyberpunk-blue mr-2">▸</span>
            Is successful imitation the same as genuine consciousness?
          </li>
          <li className="flex items-start">
            <span className="text-cyberpunk-blue mr-2">▸</span>
            Can we ever truly know if another entity (human or machine) is conscious?
          </li>
          <li className="flex items-start">
            <span className="text-cyberpunk-blue mr-2">▸</span>
            Does the Chinese Room argument undermine the Turing Test?
          </li>
          <li className="flex items-start">
            <span className="text-cyberpunk-blue mr-2">▸</span>
            What moral obligations do we have toward beings that appear conscious?
          </li>
        </ul>
      </div>
    </div>
  );
}
