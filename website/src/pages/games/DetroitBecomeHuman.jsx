import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../../components/cyberpunk/QuoteBox';
import { games } from '../../data/games';
import { theorists } from '../../data/theorists';

export default function DetroitBecomeHuman() {
  const game = games.find((g) => g.id === 'detroit');
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  const characters = [
    {
      name: 'Connor',
      role: 'Detective Android',
      philosophicalFocus: 'The Turing Test in Action',
      description: 'Connor embodies the Turing Test\'s central question: if a machine can convince us it thinks, does it actually think? His investigation of deviant androids forces players to question the difference between programmed responses and genuine consciousness.',
      theorist: theorists.find((t) => t.id === 'turing'),
    },
    {
      name: 'Kara',
      role: 'Caretaker Android',
      philosophicalFocus: 'Emotion and Personhood',
      description: 'Kara\'s protective love for Alice challenges the assumption that emotions require biological substrates. Her journey asks: if an android can feel fear, love, and hope, what makes those feelings less "real" than human emotions?',
      theorist: theorists.find((t) => t.id === 'hayles'),
    },
    {
      name: 'Markus',
      role: 'Revolutionary Leader',
      philosophicalFocus: 'Political Consciousness and Rights',
      description: 'Markus\'s revolution confronts questions of personhood and moral status. If androids can desire freedom, organize politically, and fight for rights, on what basis can we deny them moral consideration?',
      theorist: theorists.find((t) => t.id === 'haraway'),
    },
  ];

  const currentCharacter = characters[selectedCharacter];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-display text-cyberpunk-blue neon-glow mb-4">
          {game.title}
        </h1>
        <p className="text-xl text-cyberpunk-text-dim mb-2">
          {game.developer} • {game.year}
        </p>
        <p className="text-lg text-cyberpunk-text max-w-3xl mx-auto mt-4">
          {game.description}
        </p>
      </div>

      {/* Core Philosophical Question */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-blue p-6 rounded mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-blue mb-4">
          The Central Question
        </h2>
        <p className="text-2xl text-cyberpunk-text font-heading mb-4">
          "Can machines achieve consciousness?"
        </p>
        <p className="text-cyberpunk-text-dim leading-relaxed">
          Detroit: Become Human doesn't just ask this question—it forces you to answer it through your choices.
          Every decision you make reflects your stance on android personhood, consciousness, and moral status.
          The game is a playable Turing Test where you are both the interrogator and the subject.
        </p>
      </div>

      {/* Character Analysis */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-blue mb-6">
          Three Perspectives on Android Consciousness
        </h2>
        <div className="flex justify-center gap-3 mb-6">
          {characters.map((char, index) => (
            <button
              key={index}
              onClick={() => setSelectedCharacter(index)}
              className={`px-6 py-3 border-2 font-heading transition-all duration-300 ${
                selectedCharacter === index
                  ? 'border-cyberpunk-blue bg-cyberpunk-blue/10 text-cyberpunk-blue shadow-lg'
                  : 'border-cyberpunk-darker/50 text-cyberpunk-text-dim opacity-70 hover:opacity-100'
              }`}
            >
              {char.name}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedCharacter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-cyberpunk-darker border-2 border-cyberpunk-blue/30 p-8 rounded-lg"
        >
          <div className="mb-6">
            <h3 className="text-3xl font-heading text-cyberpunk-blue mb-2">
              {currentCharacter.name}
            </h3>
            <p className="text-lg text-cyberpunk-text-dim">
              {currentCharacter.role}
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-heading text-cyberpunk-text mb-3">
              Philosophical Focus: {currentCharacter.philosophicalFocus}
            </h4>
            <p className="text-cyberpunk-text-dim leading-relaxed">
              {currentCharacter.description}
            </p>
          </div>

          {currentCharacter.theorist && (
            <div className="bg-cyberpunk-dark border-l-4 p-6 rounded" style={{ borderColor: currentCharacter.theorist.color }}>
              <h4 className="text-xl font-heading mb-3" style={{ color: currentCharacter.theorist.color }}>
                Theoretical Framework: {currentCharacter.theorist.name}
              </h4>
              <p className="text-sm text-cyberpunk-text-dim mb-3">
                {currentCharacter.theorist.work}
              </p>
              {currentCharacter.theorist.quote && (
                <QuoteBox
                  quote={currentCharacter.theorist.quote}
                  author={currentCharacter.theorist.name}
                  color={currentCharacter.theorist.color.replace('#', '').slice(0, 6)}
                />
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Key Themes */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-blue mb-6">
          Philosophical Themes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {game.themes.map((theme, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-cyberpunk-dark border-2 border-cyberpunk-blue/30 p-6 rounded hover:border-cyberpunk-blue/60 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🤖</span>
                <h3 className="font-heading text-cyberpunk-blue">
                  {theme}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Philosophical Questions */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-blue mb-6">
          Questions the Game Forces You to Answer
        </h2>
        <div className="space-y-4">
          {game.philosophicalQuestions.map((question, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-cyberpunk-dark border-l-4 border-cyberpunk-blue p-6 rounded"
            >
              <p className="text-lg text-cyberpunk-text leading-relaxed">
                {question}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* The Turing Test Applied */}
      <div className="mb-12 bg-cyberpunk-darker border-2 border-cyberpunk-blue/30 p-8 rounded-lg">
        <h2 className="text-3xl font-heading text-cyberpunk-blue mb-6">
          The Turing Test Applied
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-heading text-cyberpunk-text mb-3">
              Turing's Original Test (1950)
            </h3>
            <ul className="space-y-2 text-sm text-cyberpunk-text-dim">
              <li className="flex items-start">
                <span className="text-cyberpunk-blue mr-2">▸</span>
                Can a machine convince you it's human through text?
              </li>
              <li className="flex items-start">
                <span className="text-cyberpunk-blue mr-2">▸</span>
                If indistinguishable from human, does it "think"?
              </li>
              <li className="flex items-start">
                <span className="text-cyberpunk-blue mr-2">▸</span>
                Focus on behavior, not inner experience
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-heading text-cyberpunk-text mb-3">
              Detroit's Interactive Version
            </h3>
            <ul className="space-y-2 text-sm text-cyberpunk-text-dim">
              <li className="flex items-start">
                <span className="text-cyberpunk-blue mr-2">▸</span>
                Androids display fear, love, anger, hope
              </li>
              <li className="flex items-start">
                <span className="text-cyberpunk-blue mr-2">▸</span>
                You decide if their emotions are "real"
              </li>
              <li className="flex items-start">
                <span className="text-cyberpunk-blue mr-2">▸</span>
                Your choices reflect your philosophical commitments
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-cyberpunk-dark p-6 rounded border-l-4 border-cyberpunk-blue">
          <p className="text-cyberpunk-text-dim leading-relaxed">
            <span className="text-cyberpunk-blue font-heading">The game's brilliance:</span> Unlike Turing's thought
            experiment, you can't remain neutral. Every decision—whether to shoot, spare, help, or hinder an android—
            reveals your stance on machine consciousness. The game makes you <span className="text-cyberpunk-blue">live</span> your
            answer to Turing's question.
          </p>
        </div>
      </div>

      {/* Cyborg Theory */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-blue mb-6">
          Haraway's Cyborg and Android Identity
        </h2>
        <div className="bg-cyberpunk-dark border-2 border-cyberpunk-blue/30 p-8 rounded-lg">
          <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
            Donna Haraway's "Cyborg Manifesto" argues that the boundaries between human/animal/machine are dissolving.
            Detroit's androids embody this boundary dissolution—they look human, act human, feel human emotions, but
            are categorically denied personhood.
          </p>
          <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
            The game asks: If the boundary is already blurred, on what basis do we draw the line? What makes a human
            "human" and an android "just a machine"? Is it biological substrate? Consciousness? Soul? Rights?
          </p>
          <div className="bg-cyberpunk-darker p-6 rounded border-l-4 border-cyberpunk-blue">
            <p className="text-sm italic text-cyberpunk-text-dim">
              "The cyborg is a creature in a post-gender world; it has no truck with bisexuality, pre-oedipal symbiosis,
              unalienated labour, or other seductions to organic wholeness through a final appropriation of all the
              powers of the parts into a higher unity."
            </p>
            <p className="text-xs text-cyberpunk-blue mt-2">— Donna Haraway, A Cyborg Manifesto</p>
          </div>
        </div>
      </div>

      {/* Why It Matters */}
      <div className="bg-cyberpunk-dark border-2 border-cyberpunk-blue/30 p-6 rounded">
        <h2 className="text-2xl font-heading text-cyberpunk-blue mb-4">
          Why Detroit Matters Philosophically
        </h2>
        <div className="space-y-4 text-cyberpunk-text-dim leading-relaxed">
          <p>
            <span className="text-cyberpunk-blue font-heading">Embodied Philosophy:</span> You can't play Detroit
            without taking a position on machine consciousness. Your gameplay choices reveal your philosophical
            commitments—making abstract debates concrete and personal.
          </p>
          <p>
            <span className="text-cyberpunk-blue font-heading">Moral Psychology:</span> The game explores how we
            attribute consciousness and moral status. Do you see androids as persons because they look human? Act
            human? Suffer? The game reveals the criteria you unconsciously use.
          </p>
          <p>
            <span className="text-cyberpunk-blue font-heading">Contemporary Relevance:</span> As AI systems become
            more sophisticated, Detroit's questions become increasingly urgent. When—if ever—should we grant moral
            status to artificial beings? The game prepares us to think seriously about this.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
