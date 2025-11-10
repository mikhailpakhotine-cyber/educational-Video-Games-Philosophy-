import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      {/* Hero Section */}
      <div className="min-h-[70vh] flex flex-col justify-center items-center text-center relative">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold mb-6 text-cyberpunk-blue neon-glow"
          data-text="VIDEO GAMES"
        >
          VIDEO GAMES
        </motion.h1>

        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-5xl font-heading mb-4"
        >
          as Philosophical Texts
        </motion.h2>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl font-mono text-cyberpunk-text-dim max-w-3xl mb-12"
        >
          Interactive Digital Narratives and Technology Theory
        </motion.p>

        {/* Four Pillars */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl"
        >
          {[
            { title: 'Technology', color: 'blue', link: '/frameworks' },
            { title: 'Consciousness', color: 'purple', link: '/concepts' },
            { title: 'Identity', color: 'red', link: '/games' },
            { title: 'Environment', color: 'green', link: '/schedule' },
          ].map((pillar, index) => (
            <Link
              key={pillar.title}
              to={pillar.link}
              className={`group p-6 bg-cyberpunk-dark border border-cyberpunk-${pillar.color}/30
                hover:border-cyberpunk-${pillar.color} transition-all duration-300 neon-border
                hover:shadow-lg hover:shadow-cyberpunk-${pillar.color}/20`}
            >
              <h3 className={`font-heading text-2xl text-cyberpunk-${pillar.color}
                group-hover:neon-glow transition-all duration-300`}>
                {pillar.title}
              </h3>
            </Link>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <Link
            to="/concepts"
            className="inline-block px-8 py-4 bg-cyberpunk-blue/20 border-2 border-cyberpunk-blue
              text-cyberpunk-blue font-heading text-lg uppercase tracking-wider
              hover:bg-cyberpunk-blue/30 hover:neon-glow transition-all duration-300"
          >
            Explore Concepts
          </Link>
        </motion.div>
      </div>

      {/* Course Overview */}
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-heading text-cyberpunk-gold mb-6">Course Description</h2>
        <p className="text-lg text-cyberpunk-text-dim leading-relaxed mb-4">
          This graduate seminar examines video games as sophisticated philosophical texts that engage with
          fundamental questions about technology, consciousness, identity, and environmental ethics.
        </p>
        <p className="text-lg text-cyberpunk-text-dim leading-relaxed">
          Drawing on new media theory, digital humanities methodologies, and game studies scholarship,
          we will analyze how interactive digital narratives create unique opportunities for philosophical
          engagement that distinguish them from traditional literary forms.
        </p>
      </div>
    </motion.div>
  );
}
