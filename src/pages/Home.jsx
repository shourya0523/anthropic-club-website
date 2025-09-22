import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Button from "../components/Button";
import Card from "../components/Card";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  useEffect(() => {
    // Start the dropdown animation after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Removed mouse parallax and grid background per design update

  const benefits = [
    {
      icon: "🎓",
      title: "Access to Anthropic workshops and lectures",
      description:
        "Learn directly from industry experts and cutting-edge research",
    },
    {
      icon: "👥",
      title: "Connect with passionate students",
      description:
        "Join a community of like-minded AI enthusiasts and builders",
    },
    {
      icon: "🏆",
      title: "Exclusive hackathons and prizes",
      description:
        "Compete in AI hackathons to win $18,000 in prizes this fall",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Particle system for charcoal dust effect
  const Particles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-charcoal/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  // Animated line drawing component
  const AnimatedLine = ({ d, delay = 0, duration = 2 }) => {
    const pathLength = useMotionValue(0);

    return (
      <motion.path
        d={d}
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-charcoal/30"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration, delay, ease: "easeInOut" },
          opacity: { duration: 0.5, delay },
        }}
        style={{ pathLength }}
      />
    );
  };

  // Morphing geometric shapes
  const MorphingShape = ({ className, delay = 0 }) => {
    const morphVariants = {
      initial: {
        d: "M50,0 L100,25 L100,75 L50,100 L0,75 L0,25 Z",
        rotate: 0,
      },
      morph1: {
        d: "M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z",
        rotate: 45,
      },
      morph2: {
        d: "M50,20 L80,35 L80,65 L50,80 L20,65 L20,35 Z",
        rotate: 90,
      },
      morph3: {
        d: "M50,0 L100,25 L100,75 L50,100 L0,75 L0,25 Z",
        rotate: 135,
      },
    };

    return (
      <motion.svg
        className={className}
        viewBox="0 0 100 100"
        animate={["initial", "morph1", "morph2", "morph3"]}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        variants={morphVariants}
      >
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-charcoal/20"
          variants={morphVariants}
        />
      </motion.svg>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden" ref={containerRef}>
      {/* Grid background removed for a softer look */}

      {/* Charcoal Particle System */}
      <Particles />

      {/* Morphing Shapes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MorphingShape
          className="absolute top-20 right-20 w-24 h-24"
          delay={0}
        />
        <MorphingShape
          className="absolute bottom-40 left-20 w-32 h-32"
          delay={2}
        />
        <MorphingShape
          className="absolute top-1/2 left-1/2 w-20 h-20"
          delay={4}
        />
      </div>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex items-center justify-center"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
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
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-coral to-coral/80 text-white py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.3],
            [
              "linear-gradient(135deg, #E17B5A 0%, rgba(225, 123, 90, 0.8) 100%)",
              "linear-gradient(135deg, #D16A4A 0%, rgba(209, 106, 74, 0.8) 100%)",
            ]
          ),
        }}
      >
        {/* Animated Line Drawings */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute top-10 right-10 w-32 h-32"
            viewBox="0 0 100 100"
          >
            <AnimatedLine
              d="M20,20 L80,20 L80,80 L20,80 Z"
              delay={1}
              duration={2}
            />
            <AnimatedLine
              d="M30,30 L70,30 L70,70 L30,70 Z"
              delay={1.5}
              duration={2}
            />
          </svg>

          <svg
            className="absolute bottom-20 left-10 w-24 h-24"
            viewBox="0 0 100 100"
          >
            <AnimatedLine
              d="M50,10 L90,50 L50,90 L10,50 Z"
              delay={2}
              duration={2}
            />
          </svg>
        </div>

        {/* Enhanced Geometric Background Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full"
            animate={{
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
              rotate: [0, -90, -180],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
              times: [0, 0.5, 1],
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 270, 180],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
              times: [0, 0.5, 1],
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Enhanced text animation with letter-by-letter reveal */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {"Join the Claude Builder Club".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.03,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Everyone can build with AI. Learn, connect, and grow together at
            Northeastern University.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-coral hover:bg-neutral-light hover:text-coral"
                >
                  Join the Club
                </Button>
              </motion.div>
            </Link>
            <Link to="/about">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-coral"
                >
                  Learn More
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 bg-neutral-light relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.1 }}
      >
        {/* Section divider line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: "center" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Why Join the Club?
            </h2>
            <p className="text-lg text-neutral-dark max-w-2xl mx-auto mb-12">
              Discover the amazing benefits of being part of the Anthropic Club
              community
            </p>
          </motion.div>

          {/* Featured Benefit Banner */}
          <motion.div
            className="mb-16 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="relative bg-gradient-to-r from-coral to-coral/80 rounded-3xl p-8 md:p-12 text-center overflow-hidden shadow-2xl">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>

              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl">🎁</span>
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  FREE Claude Pro + $50 API Credits
                </h3>

                <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                  Unlock the full power of Claude Pro and receive $50 in API
                  credits to bring your AI projects to life
                </p>

                <div className="mt-6 inline-flex items-center bg-white/20 rounded-full px-6 py-2">
                  <span className="text-white font-semibold">
                    🔥 Most Popular Benefit
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  scale: 1.02,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card
                  className="text-center h-full group rounded-2xl"
                  accentSweep
                  colorGlow
                  hover
                >
                  <motion.div
                    className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-6"
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className="text-2xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {benefit.icon}
                    </motion.span>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-white relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, threshold: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section divider line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: "center" }}
        />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-charcoal mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {"Ready to Start Your AI Journey?"
              .split("")
              .map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.02,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
          </motion.h2>
          <p className="text-lg text-neutral-dark mb-8">
            Join hundreds of students who are already building the future with
            AI
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/join">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
