import { motion } from 'framer-motion';
import { courseInfo, learningObjectives, requiredGames, requiredBooks, assignments } from '../data/syllabus';
import CyberpunkCard from '../components/cyberpunk/CyberpunkCard';

export default function CourseOverview() {
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
          {courseInfo.title}
        </h1>
        <p className="text-xl text-cyberpunk-text-dim">
          {courseInfo.courseNumber} • {courseInfo.instructor}
        </p>
        <p className="text-lg text-cyberpunk-text-dim">
          {courseInfo.semester}
        </p>
      </div>

      {/* Course Description */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-blue mb-6">
          Course Description
        </h2>
        <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-blue p-6 rounded">
          <p className="text-cyberpunk-text-dim leading-relaxed">
            {courseInfo.description || "This graduate seminar examines video games as sophisticated philosophical texts that engage with fundamental questions about technology, consciousness, identity, and environmental ethics."}
          </p>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-blue mb-6">
          Learning Objectives
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {learningObjectives.map((objective, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-cyberpunk-dark border-2 border-cyberpunk-blue/30 p-6 rounded hover:border-cyberpunk-blue/60 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-cyberpunk-blue text-xl">▸</span>
                <p className="text-cyberpunk-text-dim leading-relaxed">{objective}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Required Games */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-red mb-6">
          Required Games
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {requiredGames.map((game, i) => (
            <CyberpunkCard key={i} color="red">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🎮</span>
                <div>
                  <h3 className="text-lg font-heading text-cyberpunk-red">
                    {game.title}
                  </h3>
                  <p className="text-sm text-cyberpunk-text-dim">
                    {game.developer} ({game.year})
                  </p>
                </div>
              </div>
              <p className="text-sm text-cyberpunk-text-dim mt-3 leading-relaxed">
                {game.why}
              </p>
            </CyberpunkCard>
          ))}
        </div>
      </div>

      {/* Required Readings */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-purple mb-6">
          Required Readings
        </h2>
        <div className="space-y-4">
          {requiredBooks.map((book, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-cyberpunk-dark border-l-4 border-cyberpunk-purple p-6 rounded"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">📚</span>
                <div className="flex-1">
                  <h3 className="text-lg font-heading text-cyberpunk-text mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-cyberpunk-text-dim mb-2">
                    {book.author}
                  </p>
                  <p className="text-sm text-cyberpunk-text-dim italic">
                    {book.why}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Assignments & Grading */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-gold mb-6">
          Assignments & Grading
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {assignments.map((assignment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-cyberpunk-dark border-2 border-cyberpunk-gold/30 p-6 rounded"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-heading text-cyberpunk-gold text-lg">
                  {assignment.name}
                </h3>
                <span className="text-2xl font-mono text-cyberpunk-gold">
                  {assignment.weight}%
                </span>
              </div>
              <p className="text-sm text-cyberpunk-text-dim leading-relaxed">
                {assignment.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 bg-cyberpunk-darker border-2 border-cyberpunk-gold/30 p-6 rounded">
          <h3 className="text-xl font-heading text-cyberpunk-gold mb-3">
            Grading Scale
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
            <div className="bg-cyberpunk-dark p-3 rounded">
              <div className="text-2xl font-mono text-cyberpunk-green mb-1">A</div>
              <div className="text-xs text-cyberpunk-text-dim">90-100%</div>
            </div>
            <div className="bg-cyberpunk-dark p-3 rounded">
              <div className="text-2xl font-mono text-cyberpunk-blue mb-1">B</div>
              <div className="text-xs text-cyberpunk-text-dim">80-89%</div>
            </div>
            <div className="bg-cyberpunk-dark p-3 rounded">
              <div className="text-2xl font-mono text-cyberpunk-gold mb-1">C</div>
              <div className="text-xs text-cyberpunk-text-dim">70-79%</div>
            </div>
            <div className="bg-cyberpunk-dark p-3 rounded">
              <div className="text-2xl font-mono text-cyberpunk-purple mb-1">D</div>
              <div className="text-xs text-cyberpunk-text-dim">60-69%</div>
            </div>
            <div className="bg-cyberpunk-dark p-3 rounded">
              <div className="text-2xl font-mono text-cyberpunk-red mb-1">F</div>
              <div className="text-xs text-cyberpunk-text-dim">Below 60%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Policies */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-text mb-6">
          Course Policies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cyberpunk-dark border-2 border-cyberpunk-text-dim/30 p-6 rounded">
            <h3 className="text-xl font-heading text-cyberpunk-text mb-3">
              Attendance
            </h3>
            <p className="text-sm text-cyberpunk-text-dim leading-relaxed">
              Regular attendance is expected. Graduate students are expected to engage critically
              with all course materials and contribute meaningfully to discussions. More than two
              unexcused absences may affect your participation grade.
            </p>
          </div>

          <div className="bg-cyberpunk-dark border-2 border-cyberpunk-text-dim/30 p-6 rounded">
            <h3 className="text-xl font-heading text-cyberpunk-text mb-3">
              Late Work
            </h3>
            <p className="text-sm text-cyberpunk-text-dim leading-relaxed">
              Late assignments will be accepted with a 10% deduction per day unless prior
              arrangements have been made. Extensions may be granted for legitimate reasons—please
              communicate with the instructor as early as possible.
            </p>
          </div>

          <div className="bg-cyberpunk-dark border-2 border-cyberpunk-text-dim/30 p-6 rounded">
            <h3 className="text-xl font-heading text-cyberpunk-text mb-3">
              Academic Integrity
            </h3>
            <p className="text-sm text-cyberpunk-text-dim leading-relaxed">
              All work must be your own. Plagiarism, cheating, or other forms of academic dishonesty
              will not be tolerated and will result in failure of the assignment or course, as well
              as disciplinary action per university policy.
            </p>
          </div>

          <div className="bg-cyberpunk-dark border-2 border-cyberpunk-text-dim/30 p-6 rounded">
            <h3 className="text-xl font-heading text-cyberpunk-text mb-3">
              Accessibility
            </h3>
            <p className="text-sm text-cyberpunk-text-dim leading-relaxed">
              Students requiring accommodations should register with the Office of Disability
              Services and provide documentation as early as possible. All accommodations will be
              implemented in accordance with university policy.
            </p>
          </div>
        </div>
      </div>

      {/* Course Philosophy */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-blue p-6 rounded">
        <h2 className="text-2xl font-heading text-cyberpunk-blue mb-4">
          Course Philosophy
        </h2>
        <div className="space-y-4 text-cyberpunk-text-dim leading-relaxed">
          <p>
            This course treats video games as serious texts worthy of rigorous philosophical and
            humanistic inquiry. We resist the dismissal of games as "mere entertainment" and instead
            examine how interactive digital narratives engage with fundamental questions about
            technology, consciousness, identity, and environmental ethics.
          </p>
          <p>
            By bringing together theorists from diverse traditions—new media theory, digital
            humanities, game studies, environmental philosophy, and technology studies—we develop
            critical frameworks for understanding games as sophisticated cultural artifacts that
            make philosophical arguments through their mechanics, narratives, and interactive systems.
          </p>
          <p>
            Graduate students in this course are expected to engage critically, participate actively,
            and produce original scholarship that contributes to the growing field of game studies
            and digital humanities.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
