import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { games } from '../data/games';

export default function GamesAnalysis() {
  const gameLinks = [
    { id: 'atomic-heart', path: '/games/atomic-heart', emoji: '⚙️' },
    { id: 'detroit', path: '/games/detroit', emoji: '🤖' },
    { id: 'horizon', path: '/games/horizon', emoji: '🌿' },
    { id: 'bioshock', path: '/games/bioshock', emoji: '🌊' },
  ];

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
          Games as Philosophical Texts
        </h1>
        <p className="text-xl text-cyberpunk-text-dim max-w-3xl mx-auto">
          Explore in-depth philosophical analyses of the four games central to this course. Each
          game engages with fundamental questions about technology, consciousness, identity, and
          environmental ethics through its mechanics, narratives, and interactive systems.
        </p>
      </div>

      {/* Course Approach */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-red p-6 rounded mb-12">
        <h2 className="text-2xl font-heading text-cyberpunk-red mb-4">
          Why These Games?
        </h2>
        <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
          These games were selected not merely as examples, but as primary texts worthy of the same
          rigorous analysis we apply to literary and philosophical works. Each offers unique
          opportunities for exploring complex philosophical questions through interactive experience.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-cyberpunk-text-dim">
          <div>
            <p className="mb-2">
              <span className="text-cyberpunk-red font-heading">Interactive Philosophy:</span> Unlike
              passive media, games require player participation, creating embodied understanding of
              philosophical concepts.
            </p>
            <p>
              <span className="text-cyberpunk-red font-heading">Procedural Rhetoric:</span> Game
              mechanics themselves make arguments—the rules shape how we think about moral choices,
              agency, and consequence.
            </p>
          </div>
          <div>
            <p className="mb-2">
              <span className="text-cyberpunk-red font-heading">Multidisciplinary:</span> Each game
              synthesizes technology theory, environmental ethics, political philosophy, and narrative
              studies.
            </p>
            <p>
              <span className="text-cyberpunk-red font-heading">Cultural Significance:</span> These
              games demonstrate the medium's capacity for sophisticated humanistic inquiry and
              serious cultural critique.
            </p>
          </div>
        </div>
      </div>

      {/* Game Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {games.map((game, i) => {
          const gameLink = gameLinks.find(g => g.id === game.id);
          const colorClass = game.color === 'red' ? 'cyberpunk-red' :
                            game.color === 'blue' ? 'cyberpunk-blue' :
                            game.color === 'green' ? 'cyberpunk-green' : 'cyberpunk-gold';

          return (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={gameLink.path}>
                <div
                  className={`bg-cyberpunk-darker border-2 border-${colorClass}/30 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer`}
                  style={{
                    borderColor: `var(--color-${game.color})40`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl">{gameLink.emoji}</span>
                    <div className="flex-1">
                      <h3
                        className={`text-2xl font-heading text-${colorClass} group-hover:neon-glow transition-all`}
                      >
                        {game.title}
                      </h3>
                      <p className="text-sm text-cyberpunk-text-dim">
                        {game.developer} • {game.year}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-cyberpunk-text-dim leading-relaxed mb-4">
                    {game.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs text-cyberpunk-text-dim mb-2 font-heading">
                      Philosophical Themes:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {game.themes.slice(0, 3).map((theme, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 text-xs rounded border`}
                          style={{
                            backgroundColor: `var(--color-${game.color})20`,
                            borderColor: `var(--color-${game.color})40`,
                            color: `var(--color-${game.color})`,
                          }}
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-cyberpunk-darker pt-4">
                    <p className="text-xs text-cyberpunk-text-dim mb-2">
                      <span className="font-heading">Theorists Applied:</span> {game.theoristsApplied.slice(0, 3).join(', ')}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-cyberpunk-text-dim">
                        {game.philosophicalQuestions.length} Key Questions
                      </span>
                      <span
                        className={`text-sm font-mono text-${colorClass} group-hover:translate-x-2 transition-transform`}
                      >
                        Explore Analysis →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Comparative Analysis */}
      <div className="bg-cyberpunk-darker border-2 border-cyberpunk-red/30 p-8 rounded-lg">
        <h2 className="text-3xl font-heading text-cyberpunk-red mb-6">
          Comparative Themes Across Games
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-heading text-cyberpunk-text mb-3">
              Technology & Human Identity
            </h3>
            <p className="text-sm text-cyberpunk-text-dim leading-relaxed">
              <span className="text-cyberpunk-red">Atomic Heart</span> explores Soviet
              technological utopianism gone wrong, <span className="text-cyberpunk-blue">
              Detroit</span> questions the boundary between human and machine consciousness,
              <span className="text-cyberpunk-green"> Horizon</span> examines technology's
              dual role as destroyer and savior, and <span className="text-cyberpunk-gold">
              Bioshock</span> reveals how political ideologies embed themselves in technological
              artifacts.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading text-cyberpunk-text mb-3">
              Player Agency & Moral Responsibility
            </h3>
            <p className="text-sm text-cyberpunk-text-dim leading-relaxed">
              <span className="text-cyberpunk-blue">Detroit</span> makes player choices the
              central mechanic for exploring android personhood, <span className="text-cyberpunk-gold">
              Bioshock</span> famously subverts player agency to make an argument about free will,
              while <span className="text-cyberpunk-red">Atomic Heart</span> and <span className="text-cyberpunk-green">
              Horizon</span> use gameplay to embody ethical dilemmas about technological progress.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading text-cyberpunk-text mb-3">
              Environmental & Political Ethics
            </h3>
            <p className="text-sm text-cyberpunk-text-dim leading-relaxed">
              <span className="text-cyberpunk-green">Horizon</span> centers biocentric ethics in a
              post-apocalyptic ecosystem, <span className="text-cyberpunk-red">Atomic Heart</span>
              critiques Soviet technological expansion through environmental devastation,
              <span className="text-cyberpunk-gold"> Bioshock</span> uses environmental storytelling
              to critique Objectivism, and <span className="text-cyberpunk-blue">Detroit</span>
              explores civil rights through android liberation movements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading text-cyberpunk-text mb-3">
              Medium-Specific Philosophy
            </h3>
            <p className="text-sm text-cyberpunk-text-dim leading-relaxed">
              All four games demonstrate why video games matter as philosophical texts: they don't
              just <em>tell</em> you about philosophical problems—they make you <em>experience</em> them
              through interactive systems. <span className="text-cyberpunk-gold">Bioshock's</span>
              "Would you kindly" revelation only works because you believed you had agency.
              <span className="text-cyberpunk-blue"> Detroit's</span> android discrimination hits
              differently when you're making life-or-death choices. This is procedural rhetoric:
              the game mechanics themselves are the argument.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
