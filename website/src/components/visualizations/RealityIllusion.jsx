import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../cyberpunk/QuoteBox';

export default function RealityIllusion() {
  const [blendPosition, setBlendPosition] = useState(50);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-display text-cyberpunk-red neon-glow mb-2">
          Reality vs. Illusion
        </h2>
        <p className="text-xl text-cyberpunk-text-dim font-heading">
          Atomic Heart's Perceptual Manipulation
        </p>
      </div>

      <QuoteBox
        quote="The game immerses players in an apocalyptic universe where the physical and the imaginary are purposely mixed, providing a challenging and profoundly ethical environment."
        author="Beyond Entertainment: Atomic Heart Paper"
        color="red"
      />

      {/* Interactive Split Screen with Slider */}
      <div className="space-y-4">
        <p className="text-center text-cyberpunk-text-dim font-mono">
          Drag the slider to blend reality and illusion →
        </p>

        <div className="relative h-96 bg-cyberpunk-black border-2 border-cyberpunk-red/30 rounded-lg overflow-hidden">
          {/* Reality Side (Left) */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{ clipPath: `inset(0 ${100 - blendPosition}% 0 0)` }}
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center p-8">
              <motion.div
                className="text-6xl mb-4 filter grayscale"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🏭
              </motion.div>
              <h3 className="text-3xl font-display text-gray-400 mb-2">REALITY</h3>
              <p className="text-gray-500 text-center max-w-xs font-mono text-sm">
                Material world • Physical laws • Concrete existence
              </p>
              <div className="mt-4 space-y-2 text-gray-600 text-sm">
                <p>• Monochrome perception</p>
                <p>• Limited by physics</p>
                <p>• Observable truth</p>
              </div>
            </div>
          </div>

          {/* Illusion Side (Right) */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{ clipPath: `inset(0 0 0 ${blendPosition}%)` }}
          >
            <div className="w-full h-full bg-gradient-to-br from-red-900/50 via-purple-900/50 to-blue-900/50 flex flex-col items-center justify-center p-8 relative">
              {/* Glitch effect overlay */}
              <motion.div
                className="absolute inset-0 bg-cyberpunk-red/10"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              />

              <motion.div
                className="text-6xl mb-4 relative z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotateY: [0, 10, 0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🤖
              </motion.div>
              <h3 className="text-3xl font-display text-cyberpunk-red neon-glow mb-2">
                ILLUSION
              </h3>
              <p className="text-cyberpunk-purple text-center max-w-xs font-mono text-sm">
                Digital simulation • Malleable reality • Constructed experience
              </p>
              <div className="mt-4 space-y-2 text-cyberpunk-blue text-sm">
                <p>• Vibrant distortion</p>
                <p>• Unlimited by reality</p>
                <p>• Questionable truth</p>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 z-20">
            <input
              type="range"
              min="0"
              max="100"
              value={blendPosition}
              onChange={(e) => setBlendPosition(Number(e.target.value))}
              className="w-full h-2 bg-cyberpunk-darker rounded-lg appearance-none cursor-pointer slider-thumb"
              style={{
                background: `linear-gradient(to right, #6b7280 0%, #6b7280 ${blendPosition}%, #ff3366 ${blendPosition}%, #ff3366 100%)`,
              }}
            />
            <div className="flex justify-between mt-2 text-xs font-mono">
              <span className="text-gray-500">REAL</span>
              <span className="text-cyberpunk-red">BLEND: {blendPosition}%</span>
              <span className="text-cyberpunk-red">ILLUSION</span>
            </div>
          </div>

          {/* Scanline effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 51, 102, 0.03) 2px, rgba(255, 51, 102, 0.03) 4px)',
            }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Philosophical Analysis */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-cyberpunk-darker border-2 border-cyberpunk-red/30 p-6 rounded">
          <h3 className="text-xl font-heading text-cyberpunk-red mb-3">
            Hayles' Interpretive Strategies
          </h3>
          <p className="text-cyberpunk-text-dim leading-relaxed text-sm">
            N. Katherine Hayles argues that electronic literature requires interpretive strategies that shift
            in response to technological advances. Atomic Heart purposefully blurs the line between the real
            and the imaginary, forcing players to develop new ways of understanding their perceptual experiences.
          </p>
        </div>

        <div className="bg-cyberpunk-darker border-2 border-cyberpunk-red/30 p-6 rounded">
          <h3 className="text-xl font-heading text-cyberpunk-red mb-3">
            Ethical Implications
          </h3>
          <p className="text-cyberpunk-text-dim leading-relaxed text-sm">
            The intentional mixing of reality and illusion in Atomic Heart creates a challenging ethical environment.
            Players must navigate a world where perceptual uncertainty becomes the norm, raising questions about
            truth, manipulation, and the reliability of technological mediation.
          </p>
        </div>
      </div>

      {/* Key Questions */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-red p-6">
        <h3 className="text-xl font-heading text-cyberpunk-red mb-4">
          Philosophical Questions
        </h3>
        <ul className="space-y-2 text-cyberpunk-text-dim">
          <li className="flex items-start">
            <span className="text-cyberpunk-red mr-2">▸</span>
            How do we distinguish between authentic experience and digital simulation?
          </li>
          <li className="flex items-start">
            <span className="text-cyberpunk-red mr-2">▸</span>
            What are the ethical implications of technologies that deliberately manipulate perception?
          </li>
          <li className="flex items-start">
            <span className="text-cyberpunk-red mr-2">▸</span>
            Can we trust our senses in a technologically mediated world?
          </li>
          <li className="flex items-start">
            <span className="text-cyberpunk-red mr-2">▸</span>
            Does the collapse of reality/illusion boundaries create new forms of consciousness?
          </li>
        </ul>
      </div>

      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ff3366;
          cursor: pointer;
          box-shadow: 0 0 10px #ff3366, 0 0 20px #ff3366;
        }
        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ff3366;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px #ff3366, 0 0 20px #ff3366;
        }
      `}</style>
    </div>
  );
}
