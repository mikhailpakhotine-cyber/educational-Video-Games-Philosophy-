import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteBox from '../cyberpunk/QuoteBox';

export default function BiocentricEthics() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [viewMode, setViewMode] = useState('biocentric'); // 'anthropocentric' or 'biocentric'

  const ecosystemNodes = [
    { id: 'human', label: 'Humans', icon: '👤', angle: 0 },
    { id: 'animals', label: 'Animals', icon: '🦌', angle: 60 },
    { id: 'plants', label: 'Plants', icon: '🌿', angle: 120 },
    { id: 'insects', label: 'Insects', icon: '🦋', angle: 180 },
    { id: 'fungi', label: 'Fungi', icon: '🍄', angle: 240 },
    { id: 'microbes', label: 'Microbes', icon: '🦠', angle: 300 },
  ];

  const getNodePosition = (angle, radius = 120) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: 200 + radius * Math.cos(rad),
      y: 200 + radius * Math.sin(rad),
    };
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-display text-cyberpunk-green neon-glow mb-2">
          Biocentric Ethics
        </h2>
        <p className="text-xl text-cyberpunk-text-dim font-heading">
          Environmental Philosophy
        </p>
      </div>

      <QuoteBox
        quote="The attitude of respect for nature...involves the acceptance of the biocentric outlook on nature."
        author="Paul W. Taylor"
        color="green"
      />

      {/* View Mode Toggle */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setViewMode('anthropocentric')}
          className={`px-6 py-3 border-2 font-heading transition-all duration-300 ${
            viewMode === 'anthropocentric'
              ? 'bg-cyberpunk-red/20 border-cyberpunk-red text-cyberpunk-red'
              : 'bg-cyberpunk-darker border-cyberpunk-text-dim/30 text-cyberpunk-text-dim'
          }`}
        >
          Anthropocentric View
        </button>
        <button
          onClick={() => setViewMode('biocentric')}
          className={`px-6 py-3 border-2 font-heading transition-all duration-300 ${
            viewMode === 'biocentric'
              ? 'bg-cyberpunk-green/20 border-cyberpunk-green text-cyberpunk-green'
              : 'bg-cyberpunk-darker border-cyberpunk-text-dim/30 text-cyberpunk-text-dim'
          }`}
        >
          Biocentric View
        </button>
      </div>

      {/* Interactive Ecosystem Visualization */}
      <div className="relative h-[500px] bg-cyberpunk-dark border-2 border-cyberpunk-green/30 rounded-lg overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          <defs>
            <radialGradient id="centerGlow">
              <stop offset="0%" stopColor={viewMode === 'biocentric' ? '#39ff14' : '#ff3366'} stopOpacity="0.3" />
              <stop offset="100%" stopColor={viewMode === 'biocentric' ? '#39ff14' : '#ff3366'} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Center circle */}
          <motion.circle
            cx="200"
            cy="200"
            r={viewMode === 'anthropocentric' ? '30' : '80'}
            fill="url(#centerGlow)"
            animate={{
              r: viewMode === 'anthropocentric' ? [30, 35, 30] : [80, 85, 80],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Connecting lines */}
          {viewMode === 'biocentric' && ecosystemNodes.map((node) => {
            const pos = getNodePosition(node.angle);
            return (
              <motion.line
                key={`line-${node.id}`}
                x1="200"
                y1="200"
                x2={pos.x}
                y2={pos.y}
                stroke="#39ff14"
                strokeWidth="2"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            );
          })}

          {/* Anthropocentric hierarchy lines */}
          {viewMode === 'anthropocentric' && ecosystemNodes.filter(n => n.id !== 'human').map((node, index) => {
            const pos = getNodePosition(node.angle, 120);
            const humanPos = getNodePosition(0, 30);
            return (
              <motion.line
                key={`hierarchy-${node.id}`}
                x1={humanPos.x}
                y1={humanPos.y}
                x2={pos.x}
                y2={pos.y}
                stroke="#ff3366"
                strokeWidth="1"
                strokeOpacity="0.2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            );
          })}

          {/* Ecosystem nodes */}
          {ecosystemNodes.map((node, index) => {
            const pos = getNodePosition(
              node.angle,
              viewMode === 'anthropocentric' && node.id === 'human' ? 30 : 120
            );
            const isCenter = viewMode === 'anthropocentric' && node.id === 'human';

            return (
              <g key={node.id}>
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isCenter ? 40 : 35}
                  fill={
                    isCenter
                      ? '#ff3366'
                      : viewMode === 'biocentric'
                      ? '#39ff14'
                      : '#2a2a2a'
                  }
                  fillOpacity={selectedNode === node.id ? 0.8 : isCenter ? 0.6 : 0.3}
                  stroke={
                    isCenter
                      ? '#ff3366'
                      : viewMode === 'biocentric'
                      ? '#39ff14'
                      : '#666'
                  }
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => setSelectedNode(node.id)}
                  whileHover={{ scale: 1.2 }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                />
                <text
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dy=".3em"
                  fontSize="30"
                  className="cursor-pointer pointer-events-none"
                  onClick={() => setSelectedNode(node.id)}
                >
                  {node.icon}
                </text>
                <text
                  x={pos.x}
                  y={pos.y + 50}
                  textAnchor="middle"
                  fill={
                    isCenter
                      ? '#ff3366'
                      : viewMode === 'biocentric'
                      ? '#39ff14'
                      : '#666'
                  }
                  fontSize="12"
                  className="font-heading"
                  style={{
                    textShadow: isCenter
                      ? '0 0 10px #ff3366'
                      : viewMode === 'biocentric'
                      ? '0 0 10px #39ff14'
                      : 'none',
                  }}
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          {/* Energy flow particles (biocentric only) */}
          {viewMode === 'biocentric' && [...Array(8)].map((_, i) => (
            <motion.circle
              key={`particle-${i}`}
              r="3"
              fill="#39ff14"
              animate={{
                offsetDistance: ['0%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "linear",
              }}
              style={{
                offsetPath: `path('M 200 200 L ${getNodePosition(i * 45).x} ${getNodePosition(i * 45).y}')`,
              }}
            />
          ))}
        </svg>

        {/* Center label */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <p className={`font-heading text-sm ${
            viewMode === 'biocentric' ? 'text-cyberpunk-green' : 'text-cyberpunk-red'
          }`}>
            {viewMode === 'biocentric' ? 'Equal Worth' : 'Human Dominion'}
          </p>
        </div>
      </div>

      {/* Comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-cyberpunk-darker border-2 border-cyberpunk-red/30 p-6 rounded">
          <h3 className="text-xl font-heading text-cyberpunk-red mb-3 flex items-center gap-2">
            <span>👤</span> Anthropocentric View
          </h3>
          <ul className="space-y-2 text-cyberpunk-text-dim text-sm">
            <li className="flex items-start">
              <span className="text-cyberpunk-red mr-2">•</span>
              Humans at the center, nature as resource
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-red mr-2">•</span>
              Other life forms have value only in relation to human use
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-red mr-2">•</span>
              Hierarchical: humans master, nature serves
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-red mr-2">•</span>
              Justifies exploitation for human benefit
            </li>
          </ul>
        </div>

        <div className="bg-cyberpunk-darker border-2 border-cyberpunk-green/30 p-6 rounded">
          <h3 className="text-xl font-heading text-cyberpunk-green mb-3 flex items-center gap-2">
            <span>🌍</span> Biocentric View
          </h3>
          <ul className="space-y-2 text-cyberpunk-text-dim text-sm">
            <li className="flex items-start">
              <span className="text-cyberpunk-green mr-2">•</span>
              All life has inherent worth, independent of human use
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-green mr-2">•</span>
              Humans are members of Earth's community, not masters
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-green mr-2">•</span>
              Egalitarian: all life forms equally deserving of respect
            </li>
            <li className="flex items-start">
              <span className="text-cyberpunk-green mr-2">•</span>
              Demands ecological responsibility and sustainability
            </li>
          </ul>
        </div>
      </div>

      {/* Game Application */}
      <div className="bg-cyberpunk-dark border-l-4 border-cyberpunk-green p-6">
        <h3 className="text-xl font-heading text-cyberpunk-green mb-4">
          Application: Horizon Zero Dawn
        </h3>
        <p className="text-cyberpunk-text-dim leading-relaxed mb-4">
          Horizon Zero Dawn presents a post-apocalyptic world where the anthropocentric exploitation
          of nature led to environmental catastrophe. The game's machine-creatures represent a new form
          of life that challenges traditional categories, forcing players to consider biocentric ethics.
        </p>
        <p className="text-cyberpunk-text-dim leading-relaxed">
          The narrative explores whether technology can reconcile with nature, or whether human attempts
          to control and dominate the natural world inevitably lead to destruction. Players must consider:
          Does all life—including synthetic life—have inherent value?
        </p>
      </div>

      {/* Connected Games */}
      <div>
        <h3 className="text-lg font-heading text-cyberpunk-text-dim mb-3">
          Explored in:
        </h3>
        <div className="flex gap-3 flex-wrap">
          {['Horizon Zero Dawn', 'Atomic Heart'].map((game) => (
            <span
              key={game}
              className="px-4 py-2 bg-cyberpunk-dark border border-cyberpunk-green/50 text-cyberpunk-green font-mono text-sm"
            >
              {game}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
