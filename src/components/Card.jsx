import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  animation = 'fadeIn',
  delay = 0 
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-md p-6 transition-all duration-300';
  
  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay, ease: "easeOut" }
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay, ease: "easeOut" }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, delay, ease: "easeOut" }
    }
  };
  
  const classes = `${baseClasses} ${className}`;
  
  return (
    <motion.div
      className={classes}
      {...animations[animation]}
      whileHover={hover ? { y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' } : {}}
      transition={hover ? { duration: 0.3, ease: 'easeOut' } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;
