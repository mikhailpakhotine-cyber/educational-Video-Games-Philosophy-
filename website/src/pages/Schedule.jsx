import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { weeklySchedule } from '../data/weeklySchedule';

export default function Schedule() {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [filterTheme, setFilterTheme] = useState('all');

  // Get unique themes
  const themes = ['all', ...new Set(weeklySchedule.map(w => w.theme))];

  // Color mapping
  const colorMap = {
    blue: { bg: '#00d4ff', text: '#00d4ff', border: '#00d4ff' },
    purple: { bg: '#b967ff', text: '#b967ff', border: '#b967ff' },
    green: { bg: '#39ff14', text: '#39ff14', border: '#39ff14' },
    red: { bg: '#ff3366', text: '#ff3366', border: '#ff3366' },
    gold: { bg: '#d4af37', text: '#d4af37', border: '#d4af37' },
  };

  // Filter weeks by theme
  const filteredWeeks = filterTheme === 'all'
    ? weeklySchedule
    : weeklySchedule.filter(w => w.theme === filterTheme);

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
          15-Week Schedule
        </h1>
        <p className="text-xl text-cyberpunk-text-dim max-w-3xl mx-auto">
          Interactive timeline of topics, readings, and games throughout the semester
        </p>
      </div>

      {/* Theme Filter */}
      <div className="mb-12">
        <h3 className="text-lg font-heading text-cyberpunk-text mb-4 text-center">
          Filter by Theme:
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {themes.map((theme) => {
            const themeColor = theme === 'all' ? '#666' :
              weeklySchedule.find(w => w.theme === theme)?.color || 'blue';
            const colors = colorMap[themeColor] || colorMap.blue;

            return (
              <button
                key={theme}
                onClick={() => setFilterTheme(theme)}
                className={`px-4 py-2 text-sm font-heading border-2 transition-all duration-300 ${
                  filterTheme === theme ? 'shadow-lg' : 'opacity-60 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: filterTheme === theme ? `${colors.bg}20` : '#1a1a1a',
                  borderColor: filterTheme === theme ? colors.border : '#2a2a2a',
                  color: filterTheme === theme ? colors.text : '#666',
                }}
              >
                {theme}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-cyberpunk-darker"
          style={{
            background: 'linear-gradient(to bottom, #00d4ff, #b967ff, #39ff14, #ff3366, #d4af37)'
          }}
        />

        {/* Week items */}
        <div className="space-y-8">
          {filteredWeeks.map((week, index) => {
            const colors = colorMap[week.color];
            const isSelected = selectedWeek === week.week;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`relative ${
                  isEven ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Week node on timeline */}
                <div
                  className="absolute left-8 md:left-1/2 top-4 w-6 h-6 rounded-full border-4 transform -translate-x-1/2 cursor-pointer z-10"
                  style={{
                    backgroundColor: colors.bg,
                    borderColor: '#0a0a0a',
                    boxShadow: `0 0 20px ${colors.bg}80`,
                  }}
                  onClick={() => setSelectedWeek(isSelected ? null : week.week)}
                />

                {/* Week card */}
                <motion.button
                  onClick={() => setSelectedWeek(isSelected ? null : week.week)}
                  className={`ml-20 md:ml-0 block w-full text-left bg-cyberpunk-darker border-2 p-6 rounded transition-all duration-300 hover:scale-102 ${
                    isSelected ? 'shadow-2xl' : 'opacity-80 hover:opacity-100'
                  }`}
                  style={{
                    borderColor: isSelected ? colors.border : '#2a2a2a',
                    backgroundColor: isSelected ? `${colors.bg}10` : '#1a1a1a',
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div
                        className="text-sm font-mono mb-1"
                        style={{ color: colors.text }}
                      >
                        WEEK {week.week}
                      </div>
                      <h3
                        className="text-xl font-heading mb-2"
                        style={{ color: colors.text }}
                      >
                        {week.title}
                      </h3>
                    </div>
                    <div
                      className="px-3 py-1 text-xs rounded border"
                      style={{
                        backgroundColor: `${colors.bg}20`,
                        borderColor: `${colors.border}40`,
                        color: colors.text,
                      }}
                    >
                      {week.theme}
                    </div>
                  </div>

                  {/* Brief preview */}
                  {!isSelected && (
                    <div className="text-sm text-cyberpunk-text-dim">
                      {week.topics.slice(0, 2).join(' • ')}
                      {week.games.length > 0 && (
                        <span className="ml-2">🎮 {week.games[0]}</span>
                      )}
                    </div>
                  )}

                  {/* Expanded details */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t"
                        style={{ borderColor: `${colors.border}30` }}
                      >
                        {/* Topics */}
                        <div className="mb-4">
                          <h4 className="text-sm font-heading text-cyberpunk-text mb-2">
                            Topics:
                          </h4>
                          <ul className="space-y-1">
                            {week.topics.map((topic, i) => (
                              <li
                                key={i}
                                className="text-sm text-cyberpunk-text-dim flex items-start gap-2"
                              >
                                <span style={{ color: colors.text }}>▸</span>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Readings */}
                        {week.readings.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-heading text-cyberpunk-text mb-2">
                              📚 Readings:
                            </h4>
                            <ul className="space-y-1">
                              {week.readings.map((reading, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-cyberpunk-text-dim"
                                >
                                  • {reading}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Games */}
                        {week.games.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-heading text-cyberpunk-text mb-2">
                              🎮 Games:
                            </h4>
                            <ul className="space-y-1">
                              {week.games.map((game, i) => (
                                <li
                                  key={i}
                                  className="text-sm"
                                  style={{ color: colors.text }}
                                >
                                  • {game}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Due Date */}
                        {week.dueDate && (
                          <div
                            className="mt-4 p-3 rounded border-l-4"
                            style={{
                              backgroundColor: `${colors.bg}20`,
                              borderColor: colors.border,
                            }}
                          >
                            <div className="text-xs font-heading" style={{ color: colors.text }}>
                              ⚠️ DUE: {week.dueDate}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-16 max-w-3xl mx-auto bg-cyberpunk-dark border-2 border-cyberpunk-darker p-6 rounded">
        <h3 className="text-xl font-heading text-cyberpunk-text mb-4">
          Course Structure
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-cyberpunk-text-dim leading-relaxed">
          <div>
            <p className="mb-2">
              <span className="font-heading text-cyberpunk-blue">Weeks 1-3:</span> Foundation in technology theory and new media studies
            </p>
            <p className="mb-2">
              <span className="font-heading text-cyberpunk-purple">Weeks 4-5:</span> Consciousness, identity, and cyborg theory (Detroit)
            </p>
            <p className="mb-2">
              <span className="font-heading text-cyberpunk-green">Weeks 6-7:</span> Environmental ethics and ecological gaming (Horizon)
            </p>
          </div>
          <div>
            <p className="mb-2">
              <span className="font-heading text-cyberpunk-red">Weeks 8-9:</span> Political philosophy and dystopian futures (Atomic Heart)
            </p>
            <p className="mb-2">
              <span className="font-heading text-cyberpunk-gold">Weeks 10-12:</span> Narrative theory and procedural rhetoric (Bioshock)
            </p>
            <p className="mb-2">
              <span className="font-heading text-cyberpunk-text">Weeks 13-15:</span> Presentations and future directions
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
