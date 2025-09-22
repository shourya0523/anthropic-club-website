import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Card from "../components/Card";
import SEO from "../components/SEO";
import aaronImage from "../assets/aaron devades.jpg";
import mehrImage from "../assets/mehr_anand.jpg";
import tarikaImage from "../assets/tarika_selvaraj.jpeg";
import mattImage from "../assets/matt_wang.jpg";
import zachImage from "../assets/zach_blum.png";
import shreyashImage from "../assets/shreyash_sinha.png";
import shouryaImage from "../assets/shourya_yadav.png";
import simranImage from "../assets/simran_sethi.png";
import smyanImage from "../assets/smyan_sengupta.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const executives = [
    {
      name: "Mehr Anand",
      title: "President",
      bio: "Anthropic Ambassador | ML Engineer @ Brewster | T4T CTO | AINU Operations Director | 5X Hackathon Winner ",
      image: mehrImage,
      badge: { text: "Claude Builder Ambassador", type: "builder" },
      socials: {
        linkedin: "https://www.linkedin.com/in/mehr-anand/",
        github: "https://github.com/mesanand",
        portfolio: "https://mesanand.github.io/",
      },
    },
    {
      name: "Abhishek Pujara",
      title: "Vice President",
      bio: "SWE Intern @ Fresenius Kabi | Perplexity Campus Ambassador | CS+Math @ Northeastern",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQH8D7UY18T-AQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706481612626?e=1759363200&v=beta&t=0DhuF8wBBUhNiCyR-6O0EUmD5TLJQoxLZZFn_qBEluI",
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishek-pujara/",
      },
    },
    {
      name: "Matt Wang",
      title: "Director of Technology",
      bio: "Claude Builder Ambassador | CS @ Northeastern | Prev. SWE Intern @ DraftKings",
      image: mattImage,
      badge: { text: "Claude Builder Ambassador", type: "builder" },
      socials: {
        linkedin: "https://www.linkedin.com/in/mattrwang/",
        github: "https://github.com/mattrwang",
        portfolio: "https://www.mattrwang.com/",
      },
    },
    {
      name: "Tarika Selvaraj",
      title: "Director of Growth",
      bio: "Claude Ambassador @ Anthropic | Prev. AI and Digital Transformation @ BCG | Computer Engineering & Computer Science Student @ Northeastern University",
      image: tarikaImage,
      badge: { text: "Claude Builder Ambassador", type: "builder" },
      socials: {
        linkedin: "https://www.linkedin.com/in/tarika-selvaraj/",
      },
    },
    {
      name: "Shreyash Sinha",
      title: "Director of Media",
      bio: "Claude Campus Ambassador | Equity Research @ Stanton | Junior Investment Analysts @ NUImpact | Prev. Product Management @ Hydrow",
      image: shreyashImage,
      badge: { text: "Claude Campus Ambassador", type: "campus" },
      socials: {
        linkedin: "https://www.linkedin.com/in/shreyash-sinha/",
      },
    },
    {
      name: "Shourya Yadav",
      title: "Director of Operations",
      bio: "AI @ SNAP Life Sciences | Project Lead @ Forge | Operations @ Claude Northeastern",
      image: shouryaImage,
      socials: {
        linkedin: "https://www.linkedin.com/in/shouryadav/",
        github: "https://github.com/shourya0523",
      },
    },
    {
      name: "Aaron Devadas",
      title: "Treasurer",
      bio: "Finance Intern at SIG SAUER | prev. Sponsorship Lead @ NER",
      image: aaronImage,
      socials: {
        linkedin: "https://www.linkedin.com/in/aarondevadas/",
      },
    },
    {
      name: "Zachary Blum",
      title: "External Funding Head",
      bio: "Prev. Financial Planning @ Alnylam | Prev. Sales/Corporate Inter @ Brennan | Fintech @ NEU | T4T Head of Fundraising",
      image: zachImage,
      socials: {
        linkedin: "https://www.linkedin.com/in/zachary-blum-a15663242/",
      },
    },

    {
      name: "Simran Sethi",
      title: "Growth Strategy Head",
      bio: "Medical Liability Underwriting Co-op @ Coverys | B.S. Health Science Business Administration at Northeastern University",
      image: simranImage,
      socials: {
        linkedin: "https://www.linkedin.com/in/simran-sethi-17a36632a/",
      },
    },
    {
      name: "Smyan Sengupta",
      title: "Hackathon Head",
      bio: "CS + AI @ Northeastern University | MSAT Modeling Co-op @ Pfizer",
      image: smyanImage,
      socials: {
        linkedin: "https://www.linkedin.com/in/smyan-sengupta/",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const Badge = ({ text, type = "builder" }) => {
    const badgeStyles = {
      builder: "bg-gradient-to-r from-coral to-orange-400 text-white",
      campus: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
    };

    return (
      <motion.div
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeStyles[type]} shadow-md`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileHover={{ scale: 1.05 }}
      >
        {text}
      </motion.div>
    );
  };

  const SocialIcon = ({ type, url }) => {
    const icons = {
      linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      github: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      portfolio: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
          />
        </svg>
      ),
    };

    return (
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-dark hover:text-coral transition-colors duration-200"
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icons[type]}
      </motion.a>
    );
  };

  return (
    <>
      <SEO
        title="About Us"
        description="Meet the passionate team behind Claude Builder Club at Northeastern University. Learn about our executives, advisors, and mission to democratize AI education."
        keywords={[
          "team",
          "executives",
          "leadership",
          "northeastern university",
          "ai education",
          "student organization",
        ]}
        url="/about"
      />
      <div className="min-h-screen bg-neutral-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Meet Our Executive Board
            </h1>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              The passionate leaders driving innovation and building the future
              of AI at Northeastern University
            </p>
          </motion.div>

          {/* Executive Grid */}
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {executives.map((executive, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="text-center h-full">
                  {/* Profile Image */}
                  <div className="w-24 h-24 mx-auto mb-6">
                    <img
                      src={executive.image}
                      alt={executive.name}
                      className="w-full h-full rounded-full object-cover border-4 border-coral"
                    />
                  </div>

                  {/* Name and Title */}
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    {executive.name}
                  </h3>
                  <p className="text-coral font-medium mb-3">
                    {executive.title}
                  </p>

                  {/* Badge */}
                  {executive.badge && (
                    <div className="mb-4">
                      <Badge
                        text={executive.badge.text}
                        type={executive.badge.type}
                      />
                    </div>
                  )}

                  {/* Bio */}
                  <p className="text-neutral-dark mb-6 leading-relaxed">
                    {executive.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {Object.entries(executive.socials).map(([type, url]) => (
                      <SocialIcon key={type} type={type} url={url} />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, threshold: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-dark leading-relaxed">
                We believe that everyone can build with AI. Our mission is to
                democratize access to AI technology, foster a community of
                passionate builders, and create opportunities for students to
                learn, innovate, and grow together. Through workshops,
                hackathons, and industry partnerships, we're building the future
                of AI education at Northeastern University.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
