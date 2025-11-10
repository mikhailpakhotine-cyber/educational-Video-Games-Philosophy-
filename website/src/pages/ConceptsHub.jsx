import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { philosophicalConcepts } from '../data/concepts';

// Import all visualizations
import CyborgTheory from '../components/visualizations/CyborgTheory';
import RealityIllusion from '../components/visualizations/RealityIllusion';
import TuringTest from '../components/visualizations/TuringTest';
import BiocentricEthics from '../components/visualizations/BiocentricEthics';
import EnvironmentalAwareness from '../components/visualizations/EnvironmentalAwareness';
import MediumMessage from '../components/visualizations/MediumMessage';
import SovietSymbolism from '../components/visualizations/SovietSymbolism';
import IdentityTransformation from '../components/visualizations/IdentityTransformation';
import NatureTechDialectic from '../components/visualizations/NatureTechDialectic';
import ProceduralRhetoric from '../components/visualizations/ProceduralRhetoric';

export default function ConceptsHub() {
  const [selectedConcept, setSelectedConcept] = useState(0);

  const visualizationComponents = {
    'cyborg-theory': CyborgTheory,
    'reality-illusion': RealityIllusion,
    'turing-test': TuringTest,
    'biocentric-ethics': BiocentricEthics,
    'environmental-awareness': EnvironmentalAwareness,
    'medium-message': MediumMessage,
    'soviet-symbolism': SovietSymbolism,
    'identity-transformation': IdentityTransformation,
    'nature-tech-dialectic': NatureTechDialectic,
    'procedural-rhetoric': ProceduralRhetoric,
  };

  const currentConcept = philosophicalConcepts[selectedConcept];
  const VisualizationComponent = visualizationComponents[currentConcept.id];

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
          Philosophical Concepts
        </h1>
        <p className="text-xl text-cyberpunk-text-dim max-w-3xl mx-auto">
          Interactive visualizations exploring the philosophical frameworks that make video games
          sophisticated texts worthy of serious humanistic inquiry.
        </p>
      </div>

      {/* Concept Navigation Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
        {philosophicalConcepts.map((concept, index) => (
          <motion.button
            key={concept.id}
            onClick={() => setSelectedConcept(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 border-2 transition-all duration-300 text-left ${
              selectedConcept === index
                ? 'border-2 shadow-lg'
                : 'border-cyberpunk-darker/50 opacity-70 hover:opacity-100'
            }`}
            style={{
              borderColor: selectedConcept === index ? concept.color : undefined,
              backgroundColor: selectedConcept === index ? `${concept.color}10` : '#1a1a1a',
              boxShadow: selectedConcept === index ? `0 0 20px ${concept.color}40` : undefined,
            }}
          >
            <h3
              className="font-heading text-sm mb-1"
              style={{ color: selectedConcept === index ? concept.color : '#666' }}
            >
              {concept.title}
            </h3>
            <p className="text-xs text-cyberpunk-text-dim line-clamp-2">
              {concept.subtitle}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => setSelectedConcept((prev) => (prev > 0 ? prev - 1 : philosophicalConcepts.length - 1))}
          className="px-6 py-3 bg-cyberpunk-darker border-2 border-cyberpunk-purple text-cyberpunk-purple
                     hover:bg-cyberpunk-purple/10 transition-all duration-300 font-mono flex items-center gap-2"
        >
          ← Previous
        </button>

        <div className="text-center">
          <p className="text-sm text-cyberpunk-text-dim font-mono">
            {selectedConcept + 1} / {philosophicalConcepts.length}
          </p>
        </div>

        <button
          onClick={() => setSelectedConcept((prev) => (prev < philosophicalConcepts.length - 1 ? prev + 1 : 0))}
          className="px-6 py-3 bg-cyberpunk-darker border-2 border-cyberpunk-purple text-cyberpunk-purple
                     hover:bg-cyberpunk-purple/10 transition-all duration-300 font-mono flex items-center gap-2"
        >
          Next →
        </button>
      </div>

      {/* Visualization Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedConcept}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-cyberpunk-dark border-2 rounded-lg p-8"
          style={{ borderColor: `${currentConcept.color}30` }}
        >
          {VisualizationComponent && <VisualizationComponent />}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="mt-8 flex justify-center">
        <div className="flex gap-2">
          {philosophicalConcepts.map((concept, index) => (
            <button
              key={concept.id}
              onClick={() => setSelectedConcept(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selectedConcept === index
                  ? 'w-8 shadow-lg'
                  : 'opacity-40 hover:opacity-70'
              }`}
              style={{
                backgroundColor: selectedConcept === index ? concept.color : '#666',
                boxShadow: selectedConcept === index ? `0 0 10px ${concept.color}` : undefined,
              }}
              aria-label={`View ${concept.title}`}
            />
          ))}
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mt-12 bg-cyberpunk-darker border-2 border-cyberpunk-purple/30 p-6 rounded-lg">
        <h2 className="text-2xl font-heading text-cyberpunk-purple mb-4">
          About These Visualizations
        </h2>
        <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
          Each interactive visualization explores a key philosophical concept from the course, drawing on
          theoretical frameworks from McLuhan, Haraway, Turing, Taylor, Winner, Chang, Hayles, Ensslin,
          and Bogost. These concepts reveal how video games function as sophisticated philosophical texts.
        </p>
        <p className="text-cyberpunk-text-dim leading-relaxed">
          Click, drag, and interact with each visualization to explore how games like Atomic Heart,
          Detroit: Become Human, Horizon Zero Dawn, and Bioshock engage with fundamental questions
          about technology, consciousness, identity, and environmental ethics.
        </p>
      </div>
    </motion.div>
  );
}
