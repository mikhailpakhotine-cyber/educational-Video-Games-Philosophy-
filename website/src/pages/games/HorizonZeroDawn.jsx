import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../../components/cyberpunk/QuoteBox';
import { games } from '../../data/games';
import { theorists } from '../../data/theorists';

export default function HorizonZeroDawn() {
  const game = games.find((g) => g.id === 'horizon');
  const [selectedPerspective, setSelectedPerspective] = useState('biocentric');

  const perspectives = {
    anthropocentric: {
      title: 'Anthropocentric View',
      description: 'Nature exists for human use',
      color: '#ff3366',
      points: [
        'Humans are the center of moral consideration',
        'Nature has value only insofar as it serves humanity',
        'Technology should maximize human benefit',
        'Environmental protection justified by human interests',
      ],
    },
    biocentric: {
      title: 'Biocentric View (Taylor)',
      description: 'All life has intrinsic value',
      color: '#39ff14',
      points: [
        'All living things have inherent worth independent of human use',
        'Humans are members of Earth\'s community of life, not masters',
        'Every organism is pursuing its own good in its own way',
        'Respect for nature is a moral duty, not just prudent',
      ],
    },
  };

  const currentView = perspectives[selectedPerspective];
  const taylorTheorist = theorists.find((t) => t.id === 'taylor');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-display text-cyberpunk-green neon-glow mb-4">
          {game.title}
        </h1>
        <p className="text-xl text-cyberpunk-text-dim mb-2">
          {game.developer} • {game.year}
        </p>
        <p className="text-lg text-cyberpunk-text max-w-3xl mx-auto mt-4">
          {game.description}
        </p>
      </div>

      {/* Central Paradox */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-green p-6 rounded mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-green mb-4">
          The Central Paradox
        </h2>
        <p className="text-2xl text-cyberpunk-text font-heading mb-4">
          Technology destroyed the world. Technology saved the world.
        </p>
        <p className="text-cyberpunk-text-dim leading-relaxed">
          Horizon Zero Dawn presents a post-apocalyptic world where unchecked AI nearly caused complete
          extinction—yet it was also technology (GAIA) that restored the biosphere. The game forces us to
          grapple with technology as both destroyer and savior, asking: Can we have technological progress
          without ecological catastrophe?
        </p>
      </div>

      {/* Biocentric vs Anthropocentric */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-green mb-6">
          Two Ways of Valuing Nature
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setSelectedPerspective('anthropocentric')}
            className={`px-6 py-3 border-2 font-heading transition-all duration-300 ${
              selectedPerspective === 'anthropocentric'
                ? 'border-cyberpunk-red bg-cyberpunk-red/10 text-cyberpunk-red'
                : 'border-cyberpunk-darker text-cyberpunk-text-dim opacity-70 hover:opacity-100'
            }`}
          >
            Anthropocentric
          </button>
          <button
            onClick={() => setSelectedPerspective('biocentric')}
            className={`px-6 py-3 border-2 font-heading transition-all duration-300 ${
              selectedPerspective === 'biocentric'
                ? 'border-cyberpunk-green bg-cyberpunk-green/10 text-cyberpunk-green'
                : 'border-cyberpunk-darker text-cyberpunk-text-dim opacity-70 hover:opacity-100'
            }`}
          >
            Biocentric
          </button>
        </div>

        <motion.div
          key={selectedPerspective}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-cyberpunk-darker border-2 p-8 rounded-lg"
          style={{ borderColor: `${currentView.color}40` }}
        >
          <h3 className="text-3xl font-heading mb-2" style={{ color: currentView.color }}>
            {currentView.title}
          </h3>
          <p className="text-lg text-cyberpunk-text-dim mb-6">
            {currentView.description}
          </p>
          <ul className="space-y-3">
            {currentView.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-cyberpunk-text-dim">
                <span style={{ color: currentView.color }} className="text-xl">▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-6 bg-cyberpunk-dark p-6 rounded border-l-4 border-cyberpunk-green">
          <p className="text-cyberpunk-text-dim leading-relaxed">
            <span className="text-cyberpunk-green font-heading">Horizon's Argument:</span> The game leans heavily
            toward Paul Taylor's biocentric ethics. The machines aren't just resources—they're integrated into the
            ecosystem. The "corrupted" machines that attack humans aren't evil; they're following their programming
            within a disrupted system. The game asks us to see them as part of nature, not separate from it.
          </p>
        </div>
      </div>

      {/* Paul Taylor's Framework */}
      {taylorTheorist && (
        <div className="mb-12">
          <h2 className="text-3xl font-heading text-cyberpunk-green mb-6">
            Paul Taylor's Environmental Ethics
          </h2>
          <div className="bg-cyberpunk-darker border-2 border-cyberpunk-green/30 p-8 rounded-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-heading text-cyberpunk-green mb-3">
                {taylorTheorist.name}
              </h3>
              <p className="text-cyberpunk-text-dim mb-4">
                {taylorTheorist.work}
              </p>
              {taylorTheorist.quote && (
                <QuoteBox
                  quote={taylorTheorist.quote}
                  author={taylorTheorist.name}
                  color="green"
                />
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-heading text-cyberpunk-text mb-3">
                  Four Key Principles
                </h4>
                <ul className="space-y-2 text-sm text-cyberpunk-text-dim">
                  {taylorTheorist.keyIdeas.slice(0, 4).map((idea, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyberpunk-green">▸</span>
                      {idea}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-heading text-cyberpunk-text mb-3">
                  Applied to Horizon
                </h4>
                <p className="text-sm text-cyberpunk-text-dim leading-relaxed">
                  {taylorTheorist.application}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* The GAIA System */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-green mb-6">
          GAIA: Technology as Ecological Restoration
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cyberpunk-dark border-2 border-cyberpunk-green/30 p-6 rounded">
            <h3 className="text-xl font-heading text-cyberpunk-green mb-4">
              The Catastrophe: Faro Plague
            </h3>
            <ul className="space-y-2 text-sm text-cyberpunk-text-dim">
              <li className="flex items-start">
                <span className="text-cyberpunk-red mr-2">✕</span>
                Self-replicating war machines
              </li>
              <li className="flex items-start">
                <span className="text-cyberpunk-red mr-2">✕</span>
                Consume biomass for fuel
              </li>
              <li className="flex items-start">
                <span className="text-cyberpunk-red mr-2">✕</span>
                Unhackable, unstoppable
              </li>
              <li className="flex items-start">
                <span className="text-cyberpunk-red mr-2">✕</span>
                Complete extinction of all life
              </li>
            </ul>
            <p className="text-xs text-cyberpunk-text-dim mt-4 italic">
              Technology as destroyer: military AI without ethical constraints
            </p>
          </div>

          <div className="bg-cyberpunk-dark border-2 border-cyberpunk-green/30 p-6 rounded">
            <h3 className="text-xl font-heading text-cyberpunk-green mb-4">
              The Solution: GAIA
            </h3>
            <ul className="space-y-2 text-sm text-cyberpunk-text-dim">
              <li className="flex items-start">
                <span className="text-cyberpunk-green mr-2">✓</span>
                Detoxifies the planet
              </li>
              <li className="flex items-start">
                <span className="text-cyberpunk-green mr-2">✓</span>
                Recreates extinct species
              </li>
              <li className="flex items-start">
                <span className="text-cyberpunk-green mr-2">✓</span>
                Establishes balanced ecosystems
              </li>
              <li className="flex items-start">
                <span className="text-cyberpunk-green mr-2">✓</span>
                Integrates machines into nature
              </li>
            </ul>
            <p className="text-xs text-cyberpunk-text-dim mt-4 italic">
              Technology as savior: AI designed to serve ecological restoration
            </p>
          </div>
        </div>

        <div className="mt-6 bg-cyberpunk-darker p-6 rounded border-l-4 border-cyberpunk-green">
          <p className="text-cyberpunk-text-dim leading-relaxed">
            <span className="text-cyberpunk-green font-heading">The philosophical point:</span> Technology itself
            is neither good nor evil—it depends on its purpose and design. The Faro Plague represents technology
            serving narrow human interests (military power). GAIA represents technology serving the entire biosphere.
            Horizon asks: Can we design technology with biocentric values?
          </p>
        </div>
      </div>

      {/* Philosophical Questions */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-green mb-6">
          Questions Horizon Asks
        </h2>
        <div className="space-y-4">
          {game.philosophicalQuestions.map((question, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-cyberpunk-dark border-l-4 border-cyberpunk-green p-6 rounded"
            >
              <p className="text-lg text-cyberpunk-text leading-relaxed">
                {question}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Themes */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-green mb-6">
          Philosophical Themes
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {game.themes.map((theme, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-cyberpunk-dark border-2 border-cyberpunk-green/30 p-6 rounded hover:border-cyberpunk-green/60 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🌿</span>
                <h3 className="font-heading text-cyberpunk-green">
                  {theme}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why It Matters */}
      <div className="bg-cyberpunk-dark border-2 border-cyberpunk-green/30 p-6 rounded">
        <h2 className="text-2xl font-heading text-cyberpunk-green mb-4">
          Why Horizon Matters Philosophically
        </h2>
        <div className="space-y-4 text-cyberpunk-text-dim leading-relaxed">
          <p>
            <span className="text-cyberpunk-green font-heading">Climate Crisis Allegory:</span> Horizon's catastrophe
            mirrors our current ecological crisis—technology designed without regard for environmental consequences
            threatens the entire biosphere. The game asks: Will we be the Faro Plague or GAIA?
          </p>
          <p>
            <span className="text-cyberpunk-green font-heading">Biocentric Gaming:</span> Most games treat nature as
            backdrop or resources. Horizon challenges this by making machines part of the ecosystem, not separate from
            it. Hunting isn't exploitation—it's interaction within a living system.
          </p>
          <p>
            <span className="text-cyberpunk-green font-heading">Hope Through Design:</span> Unlike many dystopian
            narratives, Horizon suggests technology can repair what it destroyed—if designed with ecological values.
            It's a rare message of technological optimism grounded in environmental ethics.
          </p>
          <p>
            <span className="text-cyberpunk-green font-heading">Embodied Environmental Ethics:</span> You don't just
            read about biocentrism—you experience it by hunting robot-animals, gathering resources from a technologically
            mediated ecosystem, and witnessing the beauty of nature-technology synthesis.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
