import { motion } from 'framer-motion';

export default function CyberpunkCard({
  children,
  className = '',
  color = 'blue',
  hover = true,
  ...props
}) {
  const colorClasses = {
    blue: 'border-cyberpunk-blue/30 hover:border-cyberpunk-blue hover:shadow-cyberpunk-blue/20',
    red: 'border-cyberpunk-red/30 hover:border-cyberpunk-red hover:shadow-cyberpunk-red/20',
    green: 'border-cyberpunk-green/30 hover:border-cyberpunk-green hover:shadow-cyberpunk-green/20',
    purple: 'border-cyberpunk-purple/30 hover:border-cyberpunk-purple hover:shadow-cyberpunk-purple/20',
    gold: 'border-cyberpunk-gold/30 hover:border-cyberpunk-gold hover:shadow-cyberpunk-gold/20',
  };

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : {}}
      className={`
        bg-cyberpunk-dark border-2 ${colorClasses[color]}
        transition-all duration-300 p-6
        ${hover ? 'hover:shadow-lg cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
