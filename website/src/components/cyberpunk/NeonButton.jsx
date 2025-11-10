import { motion } from 'framer-motion';

export default function NeonButton({
  children,
  onClick,
  color = 'blue',
  className = '',
  ...props
}) {
  const colorClasses = {
    blue: 'border-cyberpunk-blue text-cyberpunk-blue hover:bg-cyberpunk-blue/20 hover:shadow-cyberpunk-blue/30',
    red: 'border-cyberpunk-red text-cyberpunk-red hover:bg-cyberpunk-red/20 hover:shadow-cyberpunk-red/30',
    green: 'border-cyberpunk-green text-cyberpunk-green hover:bg-cyberpunk-green/20 hover:shadow-cyberpunk-green/30',
    purple: 'border-cyberpunk-purple text-cyberpunk-purple hover:bg-cyberpunk-purple/20 hover:shadow-cyberpunk-purple/30',
    gold: 'border-cyberpunk-gold text-cyberpunk-gold hover:bg-cyberpunk-gold/20 hover:shadow-cyberpunk-gold/30',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-6 py-3 border-2 ${colorClasses[color]}
        font-heading uppercase tracking-wider
        transition-all duration-300
        hover:shadow-lg
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
