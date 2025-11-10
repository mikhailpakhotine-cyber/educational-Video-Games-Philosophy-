import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../../components/cyberpunk/QuoteBox';
import { games } from '../../data/games';
import { theorists } from '../../data/theorists';

export default function Bioshock() {
  const game = games.find((g) => g.id === 'bioshock');
  const [revealTwist, setRevealTwist] = useState(false);

  const mcluhanTheorist = theorists.find((t) => t.id === 'mcluhan');
  const winnerTheorist = theorists.find((t) => t.id === 'winner');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-display text-cyberpunk-gold neon-glow mb-4">
          {game.title}
        </h1>
        <p className="text-xl text-cyberpunk-text-dim mb-2">
          {game.developer} • {game.year}
        </p>
        <p className="text-lg text-cyberpunk-text max-w-3xl mx-auto mt-4">
          {game.description}
        </p>
      </div>

      {/* The "Would You Kindly" Revelation */}
      <div className="mb-12">
        <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-gold p-6 rounded mb-6">
          <h2 className="text-3xl font-heading text-cyberpunk-gold mb-4">
            The Philosophical Masterstroke
          </h2>
          <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
            Bioshock pulls off one of gaming's most brilliant philosophical demonstrations. Throughout the game,
            you follow instructions prefaced with "Would you kindly..." believing you're making choices. Then comes
            the reveal.
          </p>
          <button
            onClick={() => setRevealTwist(!revealTwist)}
            className="px-6 py-3 bg-cyberpunk-gold/10 border-2 border-cyberpunk-gold text-cyberpunk-gold
                       hover:bg-cyberpunk-gold/20 transition-all duration-300 font-mono"
          >
            {revealTwist ? 'Hide Spoiler' : 'Reveal the Twist →'}
          </button>
        </div>

        {revealTwist && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-cyberpunk-darker border-2 border-cyberpunk-gold/30 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-heading text-cyberpunk-gold mb-4">
              "Would You Kindly" - The Ultimate Gaming Argument
            </h3>
            <div className="space-y-4 text-cyberpunk-text-dim leading-relaxed">
              <p>
                The phrase "would you kindly" wasn't a polite request—it was mind control. You were programmed to
                obey any instruction following those words. Every "choice" you made was actually a command you were
                compelled to follow.
              </p>
              <p className="text-cyberpunk-gold">
                The game didn't just <span className="font-heading">tell you</span> that player agency is an
                illusion—it made you <span className="font-heading">experience</span> that illusion, then shattered it.
              </p>
              <div className="bg-cyberpunk-dark p-6 rounded border-l-4 border-cyberpunk-gold mt-4">
                <p className="font-heading text-cyberpunk-text mb-2">
                  The Philosophical Point:
                </p>
                <p className="text-sm">
                  In video games, you never really have free will—you can only do what the designers programmed.
                  Bioshock makes you feel the horror of this realization. It's procedural rhetoric at its finest:
                  the game mechanics themselves make the argument about determinism vs. free will.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Procedural Rhetoric */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-gold mb-6">
          How Game Mechanics Make Arguments
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cyberpunk-dark border-2 border-cyberpunk-gold/30 p-6 rounded">
            <h3 className="text-xl font-heading text-cyberpunk-gold mb-4">
              Traditional Narrative Argument
            </h3>
            <div className="space-y-3 text-sm text-cyberpunk-text-dim">
              <div className="flex items-start gap-2">
                <span className="text-cyberpunk-text-dim">📖</span>
                <p>A book tells you: "Free will might be an illusion"</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyberpunk-text-dim">🎬</span>
                <p>A film shows you: a character discovers they lack free will</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyberpunk-text-dim">💭</span>
                <p>You think about the idea intellectually</p>
              </div>
            </div>
          </div>

          <div className="bg-cyberpunk-dark border-2 border-cyberpunk-gold/30 p-6 rounded">
            <h3 className="text-xl font-heading text-cyberpunk-gold mb-4">
              Procedural Rhetoric (Bioshock)
            </h3>
            <div className="space-y-3 text-sm text-cyberpunk-text-dim">
              <div className="flex items-start gap-2">
                <span className="text-cyberpunk-gold">🎮</span>
                <p>You play, believing you're making choices</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyberpunk-gold">⚡</span>
                <p>The game reveals those "choices" were commands</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyberpunk-gold">💔</span>
                <p>You <span className="text-cyberpunk-gold">feel</span> what it's like to lack free will</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-cyberpunk-darker p-6 rounded border-l-4 border-cyberpunk-gold">
          <p className="text-cyberpunk-text-dim leading-relaxed">
            <span className="text-cyberpunk-gold font-heading">Ian Bogost's Insight:</span> Games make arguments
            through their systems and mechanics, not despite them. Bioshock's revelation about "would you kindly"
            couldn't work in any other medium—it requires the player's belief in their own agency, then uses game
            mechanics to demolish that belief.
          </p>
        </div>
      </div>

      {/* Rapture and Political Philosophy */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-gold mb-6">
          Rapture: When Political Philosophy Fails
        </h2>
        <div className="bg-cyberpunk-darker border-2 border-cyberpunk-gold/30 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-heading text-cyberpunk-gold mb-4">
                Andrew Ryan's Vision
              </h3>
              <ul className="space-y-2 text-sm text-cyberpunk-text-dim">
                <li className="flex items-start">
                  <span className="text-cyberpunk-gold mr-2">▸</span>
                  Objectivist paradise: no gods, no kings, only man
                </li>
                <li className="flex items-start">
                  <span className="text-cyberpunk-gold mr-2">▸</span>
                  Absolute freedom from government regulation
                </li>
                <li className="flex items-start">
                  <span className="text-cyberpunk-gold mr-2">▸</span>
                  Scientific progress without ethical constraints
                </li>
                <li className="flex items-start">
                  <span className="text-cyberpunk-gold mr-2">▸</span>
                  Individual achievement as highest value
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-heading text-cyberpunk-red mb-4">
                The Dystopian Reality
              </h3>
              <ul className="space-y-2 text-sm text-cyberpunk-text-dim">
                <li className="flex items-start">
                  <span className="text-cyberpunk-red mr-2">✕</span>
                  Civil war between ideological factions
                </li>
                <li className="flex items-start">
                  <span className="text-cyberpunk-red mr-2">✕</span>
                  Genetic modification creates addicted masses
                </li>
                <li className="flex items-start">
                  <span className="text-cyberpunk-red mr-2">✕</span>
                  Children exploited for resources (Little Sisters)
                </li>
                <li className="flex items-start">
                  <span className="text-cyberpunk-red mr-2">✕</span>
                  Complete societal collapse
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-cyberpunk-dark p-6 rounded">
            <p className="text-cyberpunk-text-dim leading-relaxed">
              <span className="text-cyberpunk-gold font-heading">The argument:</span> Bioshock doesn't just critique
              Ayn Rand's Objectivism through dialogue—the entire game world is the argument. Every corpse, audio log,
              and destroyed area shows what happens when you remove all ethical constraints from scientific and
              economic freedom. The environment itself is procedural rhetoric.
            </p>
          </div>
        </div>
      </div>

      {/* Artifacts Have Politics */}
      {winnerTheorist && (
        <div className="mb-12">
          <h2 className="text-3xl font-heading text-cyberpunk-gold mb-6">
            Winner's Thesis: Artifacts Have Politics
          </h2>
          <div className="bg-cyberpunk-dark border-2 border-cyberpunk-gold/30 p-8 rounded-lg">
            <div className="mb-6">
              <QuoteBox
                quote={winnerTheorist.quote}
                author={winnerTheorist.name}
                color="gold"
              />
            </div>

            <div className="space-y-4 text-cyberpunk-text-dim leading-relaxed">
              <p>
                Langdon Winner argues that technologies aren't politically neutral—they embody and enforce particular
                social arrangements. Bioshock demonstrates this brilliantly through Rapture's technology:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-cyberpunk-gold mr-2">▸</span>
                  <span><span className="text-cyberpunk-gold font-heading">ADAM:</span> A technology that literally
                  turns people into addicts, creating a permanent underclass (Splicers) and exploited children
                  (Little Sisters)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyberpunk-gold mr-2">▸</span>
                  <span><span className="text-cyberpunk-gold font-heading">Plasmids:</span> Genetic modifications
                  marketed as consumer products, embodying capitalism applied to human biology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyberpunk-gold mr-2">▸</span>
                  <span><span className="text-cyberpunk-gold font-heading">Big Daddies:</span> Humans transformed
                  into machines to protect profit (ADAM harvesting), showing how capitalism can reduce humans to tools</span>
                </li>
              </ul>
              <p className="mt-4">
                These aren't just plot devices—they're Winner's thesis made interactive. The technologies themselves
                shape and constrain social possibilities, ultimately destroying Rapture.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* McLuhan: Medium is the Message */}
      {mcluhanTheorist && (
        <div className="mb-12">
          <h2 className="text-3xl font-heading text-cyberpunk-gold mb-6">
            McLuhan: The Medium is the Message
          </h2>
          <div className="bg-cyberpunk-darker border-2 border-cyberpunk-gold/30 p-8 rounded-lg">
            <div className="mb-6">
              <QuoteBox
                quote={mcluhanTheorist.quote}
                author={mcluhanTheorist.name}
                color="gold"
              />
            </div>

            <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
              Marshall McLuhan argued that the medium through which we receive content shapes us more than the content
              itself. Bioshock exemplifies this perfectly:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyberpunk-dark p-6 rounded">
                <h4 className="font-heading text-cyberpunk-text mb-3">
                  If Bioshock were a book/film:
                </h4>
                <p className="text-sm text-cyberpunk-text-dim">
                  You'd read/watch a story about someone lacking free will. You'd intellectually understand the argument
                  but remain an observer. The critique of player agency wouldn't work because you'd never believed you
                  had agency to begin with.
                </p>
              </div>

              <div className="bg-cyberpunk-dark p-6 rounded border-l-4 border-cyberpunk-gold">
                <h4 className="font-heading text-cyberpunk-text mb-3">
                  As an interactive game:
                </h4>
                <p className="text-sm text-cyberpunk-text-dim">
                  You <span className="text-cyberpunk-gold">believe</span> you have agency. You <span className="text-cyberpunk-gold">feel</span> like
                  you're making choices. The revelation hits differently because you were <span className="text-cyberpunk-gold">
                  participating</span>, not observing. The medium—interactivity—makes the message possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Philosophical Questions */}
      <div className="mb-12">
        <h2 className="text-3xl font-heading text-cyberpunk-gold mb-6">
          Questions Bioshock Asks
        </h2>
        <div className="space-y-4">
          {game.philosophicalQuestions.map((question, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-cyberpunk-dark border-l-4 border-cyberpunk-gold p-6 rounded"
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
        <h2 className="text-3xl font-heading text-cyberpunk-gold mb-6">
          Philosophical Themes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {game.themes.map((theme, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-cyberpunk-dark border-2 border-cyberpunk-gold/30 p-6 rounded hover:border-cyberpunk-gold/60 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🌊</span>
                <h3 className="font-heading text-cyberpunk-gold text-sm">
                  {theme}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why It Matters */}
      <div className="bg-cyberpunk-dark border-2 border-cyberpunk-gold/30 p-6 rounded">
        <h2 className="text-2xl font-heading text-cyberpunk-gold mb-4">
          Why Bioshock Matters Philosophically
        </h2>
        <div className="space-y-4 text-cyberpunk-text-dim leading-relaxed">
          <p>
            <span className="text-cyberpunk-gold font-heading">Procedural Rhetoric Masterclass:</span> Bioshock
            demonstrates that games can make philosophical arguments in ways other media cannot. The "would you kindly"
            reveal only works because you believed you had agency—something only interactive media can leverage.
          </p>
          <p>
            <span className="text-cyberpunk-gold font-heading">Embodied Political Philosophy:</span> Rather than
            reading about failed utopias, you explore Rapture's corpse, experiencing firsthand what happens when
            political ideologies are taken to extremes without ethical constraints.
          </p>
          <p>
            <span className="text-cyberpunk-gold font-heading">Medium as Message:</span> The game proves McLuhan's
            thesis—the fact that it's a <span className="text-cyberpunk-gold">game</span> (interactive, choice-based)
            is essential to its philosophical argument about choice, determinism, and agency.
          </p>
          <p>
            <span className="text-cyberpunk-gold font-heading">Lasting Impact:</span> Bioshock fundamentally changed
            how we think about games as philosophical texts. It proved that game mechanics themselves can be sophisticated
            arguments worthy of serious intellectual engagement.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
