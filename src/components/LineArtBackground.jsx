import { motion } from 'framer-motion';

const LineArtBackground = ({ className = '' }) => {
  const lineCount = 12;
  const lines = Array.from({ length: lineCount });

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Background subtle charcoal tint */}
        <rect x="0" y="0" width="1000" height="1000" fill="none" />
        {lines.map((_, index) => {
          const y1 = index * (1000 / (lineCount - 1));
          const y2 = y1 - 1000;
          return (
            <motion.line
              key={index}
              x1={0}
              y1={y1}
              x2={1000}
              y2={y2}
              stroke="#2D2D2D"
              strokeOpacity={0.08}
              strokeWidth={1}
              strokeDasharray="8 12"
              initial={{ strokeDashoffset: 0, opacity: 0 }}
              animate={{ strokeDashoffset: [0, 200, 0], opacity: 1 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
            />
          );
        })}
      </motion.svg>
    </div>
  );
};

export default LineArtBackground;


