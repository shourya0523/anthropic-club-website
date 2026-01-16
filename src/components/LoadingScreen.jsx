import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onAnimationComplete={(definition) => {
        if (definition.y === "-100%" && onComplete) {
          onComplete();
        }
      }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-charcoal tracking-wider"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ letterSpacing: "0.1em" }}
          animate={{ letterSpacing: "0.02em" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          CLAUDE
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-4xl lg:text-5xl font-medium text-coral mt-4 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          @ NEU
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;