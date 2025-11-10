import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { theorists } from '../../data/theorists';
import { games } from '../../data/games';
import { philosophicalConcepts } from '../../data/concepts';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConceptMap() {
  const svgRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'theorists', 'concepts', 'games'
  const [dimensions, setDimensions] = useState({ width: 1000, height: 700 });

  useEffect(() => {
    const updateDimensions = () => {
      const container = svgRef.current?.parentElement;
      if (container) {
        setDimensions({
          width: container.offsetWidth,
          height: Math.min(700, window.innerHeight * 0.7),
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous
    d3.select(svgRef.current).selectAll('*').remove();

    // Prepare nodes
    const nodes = [];
    const links = [];

    // Add theorist nodes
    theorists.forEach((theorist) => {
      nodes.push({
        id: `theorist-${theorist.id}`,
        label: theorist.name,
        type: 'theorist',
        color: theorist.color,
        data: theorist,
      });
    });

    // Add concept nodes
    philosophicalConcepts.forEach((concept) => {
      nodes.push({
        id: `concept-${concept.id}`,
        label: concept.title,
        type: 'concept',
        color: concept.color,
        data: concept,
      });
    });

    // Add game nodes
    games.forEach((game) => {
      nodes.push({
        id: `game-${game.id}`,
        label: game.title,
        type: 'game',
        color: game.color,
        data: game,
      });
    });

    // Create links: theorists -> concepts
    philosophicalConcepts.forEach((concept) => {
      const theoristNode = nodes.find((n) => n.id === `theorist-${concept.theorist.toLowerCase().replace(/\s+/g, '-').replace('.', '')}`);
      const conceptNode = nodes.find((n) => n.id === `concept-${concept.id}`);

      if (theoristNode && conceptNode) {
        links.push({
          source: theoristNode.id,
          target: conceptNode.id,
          type: 'theorist-concept',
        });
      }
    });

    // Create links: concepts -> games
    philosophicalConcepts.forEach((concept) => {
      concept.games.forEach((gameName) => {
        const gameNode = nodes.find((n) =>
          n.label.toLowerCase().includes(gameName.toLowerCase().split(':')[0].trim())
        );
        const conceptNode = nodes.find((n) => n.id === `concept-${concept.id}`);

        if (gameNode && conceptNode) {
          links.push({
            source: conceptNode.id,
            target: gameNode.id,
            type: 'concept-game',
          });
        }
      });
    });

    // Filter nodes based on selection
    let filteredNodes = nodes;
    let filteredLinks = links;

    if (filter !== 'all') {
      filteredNodes = nodes.filter((n) => n.type === filter);
      filteredLinks = links.filter((l) => {
        const sourceNode = nodes.find((n) => n.id === l.source || n.id === l.source.id);
        const targetNode = nodes.find((n) => n.id === l.target || n.id === l.target.id);
        return sourceNode?.type === filter || targetNode?.type === filter;
      });
    }

    const { width, height } = dimensions;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height]);

    // Create zoom behavior
    const g = svg.append('g');

    const zoom = d3.zoom()
      .scaleExtent([0.5, 3])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Create simulation
    const simulation = d3.forceSimulation(filteredNodes)
      .force('link', d3.forceLink(filteredLinks).id((d) => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(40));

    // Create links
    const link = g.append('g')
      .selectAll('line')
      .data(filteredLinks)
      .join('line')
      .attr('stroke', (d) => d.type === 'theorist-concept' ? '#d4af37' : '#666')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 2);

    // Create nodes
    const node = g.append('g')
      .selectAll('g')
      .data(filteredNodes)
      .join('g')
      .call(drag(simulation));

    // Add circles
    node.append('circle')
      .attr('r', (d) => d.type === 'theorist' ? 25 : d.type === 'concept' ? 20 : 18)
      .attr('fill', (d) => d.color)
      .attr('stroke', (d) => d.color)
      .attr('stroke-width', 3)
      .attr('fill-opacity', 0.7)
      .style('filter', 'drop-shadow(0 0 8px currentColor)')
      .style('cursor', 'pointer');

    // Add icons/indicators
    node.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.3em')
      .attr('font-size', (d) => d.type === 'theorist' ? '16px' : '14px')
      .attr('fill', '#0a0a0a')
      .attr('font-weight', 'bold')
      .text((d) => {
        if (d.type === 'theorist') return '👤';
        if (d.type === 'concept') return '💭';
        return '🎮';
      })
      .style('pointer-events', 'none');

    // Add labels
    node.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', (d) => d.type === 'theorist' ? 35 : 30)
      .attr('font-size', '11px')
      .attr('fill', (d) => d.color)
      .attr('font-family', 'Rajdhani, sans-serif')
      .style('text-shadow', (d) => `0 0 5px ${d.color}`)
      .style('pointer-events', 'none')
      .text((d) => {
        const maxLength = 15;
        return d.label.length > maxLength ? d.label.slice(0, maxLength) + '...' : d.label;
      });

    // Add hover and click events
    node.on('mouseover', function(event, d) {
      d3.select(this).select('circle')
        .transition()
        .duration(200)
        .attr('r', (d) => (d.type === 'theorist' ? 30 : d.type === 'concept' ? 25 : 22))
        .attr('fill-opacity', 1);

      // Highlight connected links
      link.attr('stroke-opacity', (l) => {
        const isConnected = l.source.id === d.id || l.target.id === d.id;
        return isConnected ? 0.8 : 0.1;
      });
    })
    .on('mouseout', function(event, d) {
      d3.select(this).select('circle')
        .transition()
        .duration(200)
        .attr('r', (d) => (d.type === 'theorist' ? 25 : d.type === 'concept' ? 20 : 18))
        .attr('fill-opacity', 0.7);

      link.attr('stroke-opacity', 0.4);
    })
    .on('click', function(event, d) {
      event.stopPropagation();
      setSelectedNode(d);
    });

    // Update positions on each tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node.attr('transform', (d) => `translate(${d.x},${d.y})`);
    });

    // Drag behavior
    function drag(simulation) {
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    }

    // Click on SVG background to deselect
    svg.on('click', () => setSelectedNode(null));

  }, [filter, dimensions]);

  return (
    <div className="space-y-6">
      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-3">
        {[
          { value: 'all', label: 'All', icon: '✦', color: '#d4af37' },
          { value: 'theorists', label: 'Theorists', icon: '👤', color: '#d4af37' },
          { value: 'concepts', label: 'Concepts', icon: '💭', color: '#b967ff' },
          { value: 'games', label: 'Games', icon: '🎮', color: '#ff3366' },
        ].map((item) => (
          <button
            key={item.value}
            onClick={() => {
              setFilter(item.value);
              setSelectedNode(null);
            }}
            className={`px-6 py-3 border-2 font-heading transition-all duration-300 flex items-center gap-2 ${
              filter === item.value
                ? 'shadow-lg'
                : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: filter === item.value ? `${item.color}20` : '#1a1a1a',
              borderColor: filter === item.value ? item.color : '#2a2a2a',
              color: filter === item.value ? item.color : '#666',
            }}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      {/* Network Visualization */}
      <div className="relative bg-cyberpunk-dark border-2 border-cyberpunk-gold/30 rounded-lg overflow-hidden">
        <svg ref={svgRef} className="w-full" />

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-cyberpunk-darker/90 border border-cyberpunk-gold/30 p-4 rounded text-xs">
          <h4 className="font-heading text-cyberpunk-gold mb-2">Legend</h4>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span>👤</span>
              <span className="text-cyberpunk-text-dim">Theorists</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💭</span>
              <span className="text-cyberpunk-text-dim">Concepts</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎮</span>
              <span className="text-cyberpunk-text-dim">Games</span>
            </div>
          </div>
          <p className="text-cyberpunk-text-dim/60 mt-3 text-[10px]">
            Click nodes for details • Drag to move • Scroll to zoom
          </p>
        </div>
      </div>

      {/* Selected Node Details */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-cyberpunk-darker border-2 p-6 rounded-lg relative"
            style={{ borderColor: selectedNode.color }}
          >
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute top-4 right-4 hover:text-cyberpunk-text"
              style={{ color: selectedNode.color }}
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div
                className="text-5xl w-16 h-16 rounded-full flex items-center justify-center border-4"
                style={{
                  borderColor: selectedNode.color,
                  boxShadow: `0 0 20px ${selectedNode.color}`,
                }}
              >
                {selectedNode.type === 'theorist' ? '👤' : selectedNode.type === 'concept' ? '💭' : '🎮'}
              </div>
              <div>
                <h3
                  className="text-2xl font-heading"
                  style={{ color: selectedNode.color }}
                >
                  {selectedNode.label}
                </h3>
                <p className="text-sm text-cyberpunk-text-dim capitalize">
                  {selectedNode.type}
                </p>
              </div>
            </div>

            {/* Type-specific content */}
            {selectedNode.type === 'theorist' && (
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-cyberpunk-text-dim mb-1">Key Work:</p>
                  <p className="text-cyberpunk-text">{selectedNode.data.work}</p>
                </div>
                <div>
                  <p className="text-sm text-cyberpunk-text-dim mb-2">Key Ideas:</p>
                  <ul className="space-y-1">
                    {selectedNode.data.keyIdeas.map((idea, i) => (
                      <li key={i} className="text-sm text-cyberpunk-text-dim flex items-start gap-2">
                        <span style={{ color: selectedNode.color }}>▸</span>
                        {idea}
                      </li>
                    ))}
                  </ul>
                </div>
                {selectedNode.data.quote && (
                  <div className="bg-cyberpunk-dark p-4 border-l-4 rounded" style={{ borderColor: selectedNode.color }}>
                    <p className="text-sm italic text-cyberpunk-text-dim">
                      "{selectedNode.data.quote}"
                    </p>
                  </div>
                )}
              </div>
            )}

            {selectedNode.type === 'concept' && (
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-cyberpunk-text-dim mb-1">Theorist:</p>
                  <p className="text-cyberpunk-text">{selectedNode.data.theorist}</p>
                </div>
                <div>
                  <p className="text-sm text-cyberpunk-text-dim mb-1">Description:</p>
                  <p className="text-cyberpunk-text">{selectedNode.data.description}</p>
                </div>
                <div>
                  <p className="text-sm text-cyberpunk-text-dim mb-1">Key Idea:</p>
                  <p className="text-cyberpunk-text">{selectedNode.data.keyIdea}</p>
                </div>
              </div>
            )}

            {selectedNode.type === 'game' && (
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-cyberpunk-text-dim mb-1">Developer:</p>
                  <p className="text-cyberpunk-text">{selectedNode.data.developer} ({selectedNode.data.year})</p>
                </div>
                <div>
                  <p className="text-sm text-cyberpunk-text-dim mb-2">Key Themes:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.data.themes.slice(0, 4).map((theme, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded"
                        style={{
                          backgroundColor: `${selectedNode.color}20`,
                          color: selectedNode.color,
                          border: `1px solid ${selectedNode.color}40`,
                        }}
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-cyberpunk-text-dim mb-1">Description:</p>
                  <p className="text-sm text-cyberpunk-text">{selectedNode.data.description}</p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
