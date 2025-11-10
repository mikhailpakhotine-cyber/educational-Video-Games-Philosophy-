export default function QuoteBox({ quote, author, color = 'gold' }) {
  const colorClasses = {
    blue: 'border-l-cyberpunk-blue text-cyberpunk-blue',
    red: 'border-l-cyberpunk-red text-cyberpunk-red',
    green: 'border-l-cyberpunk-green text-cyberpunk-green',
    purple: 'border-l-cyberpunk-purple text-cyberpunk-purple',
    gold: 'border-l-cyberpunk-gold text-cyberpunk-gold',
  };

  return (
    <blockquote className={`
      border-l-4 ${colorClasses[color]}
      pl-6 py-4 my-6
      bg-cyberpunk-darker/50
      italic
    `}>
      <p className="text-lg text-cyberpunk-text mb-2">
        "{quote}"
      </p>
      {author && (
        <footer className={`text-sm font-mono ${colorClasses[color]}`}>
          — {author}
        </footer>
      )}
    </blockquote>
  );
}
