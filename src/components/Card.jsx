import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Card = ({
  children,
  className = "",
  hover = false,
  animation = "fadeIn",
  delay = 0,
  lineArt = false,
  accentSweep = false,
  tilt = false,
  texture = false,
  colorGlow = false,
}) => {
  const baseClasses =
    "relative overflow-hidden bg-white rounded-2xl shadow-md p-6 transition-all duration-300";
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Tilt motion values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const transformStyle = tilt
    ? {
        rotateX: useTransform(rotateY, [-1, 1], [6, -6]),
        rotateY: useTransform(rotateX, [-1, 1], [-6, 6]),
      }
    : {};

  const handleMouseMove = (e) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width; // 0..1
    const relY = (e.clientY - rect.top) / rect.height; // 0..1
    rotateX.set(relX * 2 - 1); // -1..1
    rotateY.set(relY * 2 - 1); // -1..1
  };

  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay, ease: "easeOut" },
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, delay, ease: "easeOut" },
    },
  };

  const classes = `${baseClasses} ${className}`;

  return (
    <motion.div
      ref={cardRef}
      className={classes}
      {...animations[animation]}
      whileHover={
        hover
          ? {
              y: -8,
              boxShadow: colorGlow
                ? "0 10px 30px -10px rgba(225, 123, 90, 0.5)"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }
          : {}
      }
      transition={hover ? { duration: 0.3, ease: "easeOut" } : {}}
      style={transformStyle}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Coral glow background */}
      {colorGlow && (
        <motion.div
          className="pointer-events-none absolute -inset-8 rounded-[24px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.18 : 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(225,123,90,0.65) 0%, rgba(225,123,90,0.0) 60%)",
            filter: "blur(18px)",
          }}
        />
      )}
      {/* Subtle texture overlay */}
      {texture && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
            backgroundSize: "6px 6px",
          }}
        />
      )}

      {/* Line-art animated border */}
      {lineArt && (
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.rect
            x="1"
            y="1"
            width="98"
            height="98"
            rx="6"
            fill="none"
            stroke="#2D2D2D"
            strokeOpacity={0.25}
            strokeWidth="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ pathLength: 1 }}
          />
        </svg>
      )}

      {/* Accent sweep bar */}
      {accentSweep && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral to-coral/50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
      )}

      {children}
    </motion.div>
  );
};

export default Card;
