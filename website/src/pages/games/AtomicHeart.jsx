import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../../components/cyberpunk/QuoteBox';
import { games } from '../../data/games';
import { theorists } from '../../data/theorists';
import { paperQuotes, samplePaperMetadata } from '../../data/paperQuotes';

export default function AtomicHeart() {
  const game = games.find((g) => g.id === 'atomic-heart');
  const [selectedTheme, setSelectedTheme] = useState(0);

  const themeAnalysis = [
    {
      theme: 'Environmental Awareness',
      quote: paperQuotes.environmentalAwareness,
      analysis: 'The game\'s post-apocalyptic Soviet landscape serves as a powerful critique of unchecked technological expansion. Players witness firsthand the environmental devastation caused by prioritizing technological progress over ecological sustainability.',
      theorist: theorists.find((t) => t.id === 'chang'),
    },
    {
      theme: 'Reality vs. Illusion',
      quote: paperQuotes.realityIllusion,
      analysis: 'Atomic Heart deliberately blurs the boundaries between the real and the simulated, creating a disorienting experience that mirrors Hayles\' posthuman condition where physical and virtual realities intermingle.',
      theorist: theorists.find((t) => t.id === 'hayles'),
    },
    {
      theme: 'Soviet Symbolism',
      quote: paperQuotes.sovietSymbolism,
      analysis: 'The game\'s setting in an alternate Soviet Union reveals how political ideologies shape technological development. Winner\'s argument that artifacts have politics is vividly illustrated through the game\'s retrofuturistic technology.',
      theorist: theorists.find((t) => t.id === 'winner'),
    },
    {
      theme: 'Human Identity Transformation',
      quote: paperQuotes.identityTransformation,
      analysis: 'The cybernetic mutations in Atomic Heart embody Haraway\'s cyborg—creatures that challenge traditional boundaries between human, animal, and machine, forcing us to reconsider what it means to be human.',
      theorist: theorists.find((t) => t.id === 'haraway'),
    },
    {
      theme: 'Scientific Ethics',
      quote: paperQuotes.scientificEthics,
      analysis: 'The game presents horrifying examples of scientific experimentation without ethical constraints, transforming humans into mutants. This theme raises fundamental questions about the moral boundaries of scientific inquiry.',
      theorist: null,
    },
  ];

  const currentAnalysis = themeAnalysis[selectedTheme];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-display text-cyberpunk-red neon-glow mb-4">
          {game.title}
        </h1>
        <p className="text-xl text-cyberpunk-text-dim mb-2">
          {game.developer} • {game.year}
        </p>
        <p className="text-lg text-cyberpunk-text max-w-3xl mx-auto mt-4">
          {game.description}
        </p>
      </div>

      {/* Paper Abstract */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-red p-6 rounded mb-12">
        <h2 className="text-2xl font-heading text-cyberpunk-red mb-4">
          Research Paper
        </h2>
        <h3 className="text-lg font-heading text-cyberpunk-text mb-3">
          {samplePaperMetadata.title}
        </h3>
        <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
          {samplePaperMetadata.abstract}
        </p>
        <div className="flex flex-wrap gap-2">
          {samplePaperMetadata.keywords.map((keyword, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded bg-cyberpunk-red/20 text-cyberpunk-red border border-cyberpunk-red/40"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Key Themes Navigation */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-red mb-6">
          Philosophical Themes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {themeAnalysis.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedTheme(index)}
              className={`p-4 border-2 transition-all duration-300 text-left ${
                selectedTheme === index
                  ? 'border-cyberpunk-red bg-cyberpunk-red/10 shadow-lg'
                  : 'border-cyberpunk-darker/50 opacity-70 hover:opacity-100 hover:border-cyberpunk-red/30'
              }`}
            >
              <h3 className="font-heading text-sm text-cyberpunk-text">
                {item.theme}
              </h3>
            </button>
          ))}
        </div>
      </div>

      {/* Theme Analysis Display */}
      <motion.div
        key={selectedTheme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cyberpunk-darker border-2 border-cyberpunk-red/30 p-8 rounded-lg mb-12"
      >
        <h2 className="text-3xl font-heading text-cyberpunk-red mb-6">
          {currentAnalysis.theme}
        </h2>

        {currentAnalysis.quote && (
          <div className="mb-6">
            <QuoteBox
              quote={currentAnalysis.quote.text}
              author={`From research paper: ${currentAnalysis.quote.section}`}
              color="red"
            />
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-xl font-heading text-cyberpunk-text mb-3">
            Philosophical Analysis
          </h3>
          <p className="text-cyberpunk-text-dim leading-relaxed">
            {currentAnalysis.analysis}
          </p>
        </div>

        {currentAnalysis.theorist && (
          <div className="bg-cyberpunk-dark border-l-4 p-6 rounded" style={{ borderColor: currentAnalysis.theorist.color }}>
            <h3 className="text-xl font-heading mb-3" style={{ color: currentAnalysis.theorist.color }}>
              Theoretical Framework: {currentAnalysis.theorist.name}
            </h3>
            <p className="text-sm text-cyberpunk-text-dim mb-3">
              {currentAnalysis.theorist.work}
            </p>
            {currentAnalysis.theorist.quote && (
              <p className="text-sm italic text-cyberpunk-text-dim border-l-2 pl-4" style={{ borderColor: currentAnalysis.theorist.color }}>
                "{currentAnalysis.theorist.quote}"
              </p>
            )}
          </div>
        )}
      </motion.div>

      {/* Philosophical Questions */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-red mb-6">
          Key Philosophical Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {game.philosophicalQuestions.map((question, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-cyberpunk-dark border-l-4 border-cyberpunk-red p-6 rounded"
            >
              <p className="text-cyberpunk-text leading-relaxed">
                {question}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Theorists Applied */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-red mb-6">
          Theoretical Frameworks Applied
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {game.theoristsApplied.map((theoristId) => {
            const theorist = theorists.find((t) => t.id === theoristId.toLowerCase().replace(/\s+/g, '-').replace('.', ''));
            if (!theorist) return null;
            return (
              <div
                key={theorist.id}
                className="bg-cyberpunk-dark border-2 p-6 rounded transition-all duration-300 hover:scale-105"
                style={{ borderColor: theorist.color }}
              >
                <h3 className="text-xl font-heading mb-2" style={{ color: theorist.color }}>
                  {theorist.name}
                </h3>
                <p className="text-sm text-cyberpunk-text-dim mb-3">
                  {theorist.work}
                </p>
                <div className="text-xs text-cyberpunk-text-dim">
                  {theorist.keyIdeas.slice(0, 2).map((idea, i) => (
                    <div key={i} className="flex items-start gap-2 mb-1">
                      <span style={{ color: theorist.color }}>▸</span>
                      <span>{idea}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Insights */}
      <div className="bg-cyberpunk-dark border-2 border-cyberpunk-red/30 p-6 rounded">
        <h2 className="text-2xl font-heading text-cyberpunk-red mb-4">
          Why Atomic Heart Matters Philosophically
        </h2>
        <div className="space-y-4 text-cyberpunk-text-dim leading-relaxed">
          <p>
            <span className="text-cyberpunk-red font-heading">Environmental Warning:</span> The game's apocalyptic Soviet landscape
            serves as a cautionary tale about prioritizing technological advancement over ecological sustainability,
            directly engaging with Chang's biocentrism and contemporary environmental philosophy.
          </p>
          <p>
            <span className="text-cyberpunk-red font-heading">Political Technology:</span> By setting the narrative in an
            alternate Soviet Union, Atomic Heart demonstrates Winner's thesis that technological artifacts embody political
            values—the game's retrofuturistic machines are inseparable from Soviet ideology.
          </p>
          <p>
            <span className="text-cyberpunk-red font-heading">Posthuman Condition:</span> The cybernetic mutations and
            reality-illusion blur exemplify Hayles' concept of the posthuman, where traditional boundaries between
            human/machine, real/virtual, and natural/artificial collapse.
          </p>
          <p>
            <span className="text-cyberpunk-red font-heading">Interactive Philosophy:</span> Unlike reading about these
            concepts, playing Atomic Heart creates an embodied understanding—you experience the horror of technological
            excess, the confusion of blurred realities, and the ethical weight of scientific hubris.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
