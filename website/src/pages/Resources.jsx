import { motion } from 'framer-motion';
import { useState } from 'react';
import { requiredBooks } from '../data/syllabus';
import { theorists } from '../data/theorists';
import { games } from '../data/games';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('books');

  const categories = [
    { id: 'books', label: 'Required Readings', icon: '📚', color: '#b967ff' },
    { id: 'theorists', label: 'Key Theorists', icon: '👤', color: '#d4af37' },
    { id: 'games', label: 'Required Games', icon: '🎮', color: '#ff3366' },
    { id: 'additional', label: 'Additional Resources', icon: '🔗', color: '#00d4ff' },
  ];

  const additionalResources = [
    {
      category: 'Game Studies Journals',
      items: [
        { title: 'Game Studies', url: 'http://gamestudies.org', description: 'International journal of computer game research' },
        { title: 'Games and Culture', url: 'https://journals.sagepub.com/home/gac', description: 'Journal of interactive media' },
        { title: 'Journal of Gaming & Virtual Worlds', description: 'Intellect journals on game studies' },
      ],
    },
    {
      category: 'Digital Humanities',
      items: [
        { title: 'Digital Humanities Quarterly', url: 'http://www.digitalhumanities.org/dhq/', description: 'Open-access DH journal' },
        { title: 'Computers and Composition', description: 'Journal on writing and technology' },
      ],
    },
    {
      category: 'Critical Tools',
      items: [
        { title: 'OBS Studio', url: 'https://obsproject.com/', description: 'Free screen recording for gameplay capture' },
        { title: 'Game Mechanic Explorer', description: 'Interactive examples of game mechanics' },
        { title: 'Twine', url: 'https://twinery.org/', description: 'Open-source tool for interactive narratives' },
      ],
    },
    {
      category: 'Philosophy Resources',
      items: [
        { title: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/', description: 'Comprehensive philosophy reference' },
        { title: 'Internet Encyclopedia of Philosophy', url: 'https://iep.utm.edu/', description: 'Peer-reviewed philosophy encyclopedia' },
      ],
    },
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
        <h1 className="text-4xl md:text-6xl font-display text-cyberpunk-purple neon-glow mb-4">
          Course Resources
        </h1>
        <p className="text-xl text-cyberpunk-text-dim max-w-3xl mx-auto">
          Essential readings, theorists, games, and additional resources for exploring video games
          as philosophical texts
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 border-2 font-heading transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === category.id
                ? 'shadow-lg'
                : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: selectedCategory === category.id ? `${category.color}20` : '#1a1a1a',
              borderColor: selectedCategory === category.id ? category.color : '#2a2a2a',
              color: selectedCategory === category.id ? category.color : '#666',
            }}
          >
            <span>{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>

      {/* Content Display */}
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Required Books */}
        {selectedCategory === 'books' && (
          <div className="space-y-6">
            <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-purple p-6 rounded mb-8">
              <h2 className="text-2xl font-heading text-cyberpunk-purple mb-3">
                Required Readings
              </h2>
              <p className="text-cyberpunk-text-dim leading-relaxed">
                These foundational texts provide the theoretical frameworks for analyzing video games
                as philosophical texts. All readings are required and will be discussed in class.
              </p>
            </div>

            <div className="space-y-4">
              {requiredBooks.map((book, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-cyberpunk-darker border-2 border-cyberpunk-purple/30 p-6 rounded hover:border-cyberpunk-purple/60 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">📚</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading text-cyberpunk-purple mb-2">
                        {book.title}
                      </h3>
                      <p className="text-sm text-cyberpunk-text-dim mb-3">
                        by {book.author}
                      </p>
                      <p className="text-sm text-cyberpunk-text-dim italic mb-4 leading-relaxed">
                        {book.why}
                      </p>
                      {book.keyChapters && (
                        <div className="bg-cyberpunk-dark p-4 rounded">
                          <p className="text-xs text-cyberpunk-purple mb-2 font-heading">
                            Key Chapters:
                          </p>
                          <ul className="text-xs text-cyberpunk-text-dim space-y-1">
                            {book.keyChapters.map((chapter, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-cyberpunk-purple">•</span>
                                {chapter}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Theorists */}
        {selectedCategory === 'theorists' && (
          <div>
            <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-gold p-6 rounded mb-8">
              <h2 className="text-2xl font-heading text-cyberpunk-gold mb-3">
                Key Theorists
              </h2>
              <p className="text-cyberpunk-text-dim leading-relaxed">
                These thinkers provide the theoretical foundations for our analysis. Click each to
                explore their key ideas and applications to video games.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {theorists.map((theorist, i) => (
                <motion.div
                  key={theorist.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-cyberpunk-darker border-2 p-6 rounded transition-all duration-300 hover:scale-102"
                  style={{ borderColor: `${theorist.color}40` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border-2"
                      style={{
                        borderColor: theorist.color,
                        backgroundColor: `${theorist.color}20`,
                      }}
                    >
                      👤
                    </div>
                    <div>
                      <h3 className="text-xl font-heading" style={{ color: theorist.color }}>
                        {theorist.name}
                      </h3>
                      <p className="text-xs text-cyberpunk-text-dim">
                        {theorist.work}
                      </p>
                    </div>
                  </div>

                  {theorist.quote && (
                    <div className="bg-cyberpunk-dark p-4 rounded border-l-2 mb-4" style={{ borderColor: theorist.color }}>
                      <p className="text-xs italic text-cyberpunk-text-dim">
                        "{theorist.quote}"
                      </p>
                    </div>
                  )}

                  <div className="mb-4">
                    <p className="text-xs text-cyberpunk-text-dim mb-2 font-heading">
                      Key Ideas:
                    </p>
                    <ul className="text-xs text-cyberpunk-text-dim space-y-1">
                      {theorist.keyIdeas.slice(0, 3).map((idea, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span style={{ color: theorist.color }}>▸</span>
                          {idea}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-cyberpunk-darker pt-3">
                    <p className="text-xs text-cyberpunk-text-dim mb-2 font-heading">
                      Applied to:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {theorist.gamesConnection.slice(0, 3).map((game, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded"
                          style={{
                            backgroundColor: `${theorist.color}20`,
                            color: theorist.color,
                          }}
                        >
                          {game}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Required Games */}
        {selectedCategory === 'games' && (
          <div>
            <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-red p-6 rounded mb-8">
              <h2 className="text-2xl font-heading text-cyberpunk-red mb-3">
                Required Games
              </h2>
              <p className="text-cyberpunk-text-dim leading-relaxed">
                These games serve as primary texts for the course. Students are required to play
                through each game and engage with them critically as philosophical works.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {games.map((game, i) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-cyberpunk-darker border-2 border-cyberpunk-red/30 p-6 rounded hover:border-cyberpunk-red/60 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl">🎮</span>
                    <div>
                      <h3 className="text-2xl font-heading text-cyberpunk-red">
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
                    <p className="text-xs text-cyberpunk-red mb-2 font-heading">
                      Philosophical Themes:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {game.themes.slice(0, 4).map((theme, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded bg-cyberpunk-red/20 text-cyberpunk-red border border-cyberpunk-red/40"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-cyberpunk-darker pt-3">
                    <p className="text-xs text-cyberpunk-text-dim mb-2 font-heading">
                      Theorists Applied:
                    </p>
                    <p className="text-xs text-cyberpunk-text-dim">
                      {game.theoristsApplied.join(', ')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Resources */}
        {selectedCategory === 'additional' && (
          <div>
            <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-blue p-6 rounded mb-8">
              <h2 className="text-2xl font-heading text-cyberpunk-blue mb-3">
                Additional Resources
              </h2>
              <p className="text-cyberpunk-text-dim leading-relaxed">
                Supplementary materials for deeper engagement with game studies, digital humanities,
                and philosophical analysis of interactive media.
              </p>
            </div>

            <div className="space-y-8">
              {additionalResources.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="text-xl font-heading text-cyberpunk-blue mb-4">
                    {section.category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-cyberpunk-darker border-2 border-cyberpunk-blue/30 p-4 rounded hover:border-cyberpunk-blue/60 transition-all"
                      >
                        <h4 className="font-heading text-cyberpunk-text mb-1">
                          {item.url ? (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyberpunk-blue hover:underline"
                            >
                              {item.title} ↗
                            </a>
                          ) : (
                            item.title
                          )}
                        </h4>
                        <p className="text-xs text-cyberpunk-text-dim">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
