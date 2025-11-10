export default function GlitchText({ children, className = '', enabled = true }) {
  if (!enabled) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span className={`glitch ${className}`} data-text={children}>
      {children}
    </span>
  );
}
