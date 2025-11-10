import { motion } from 'framer-motion';

export default function AtomicHeart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl md:text-6xl font-display text-cyberpunk-red neon-glow mb-8">
        Atomic Heart
      </h1>
      <p className="text-xl text-cyberpunk-text-dim">
        Philosophical analysis coming soon...
      </p>
    </motion.div>
  );
}
