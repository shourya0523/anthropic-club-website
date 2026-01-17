import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../components/Card";

const Join = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    year: "",
    nuid: "",
    email: "",
    interestingThings: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const N8N_WEBHOOK_URL = "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.year || !formData.nuid || !formData.email || !formData.interestingThings) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          year: "",
          nuid: "",
          email: "",
          interestingThings: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-light py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Claude Builder Club Application
          </h1>
          <div className="max-w-3xl mx-auto text-left bg-white rounded-2xl p-8 shadow-md">
            <p className="text-lg text-neutral-dark leading-relaxed mb-4">
              Are you new to AI? A veteran coder? This club is for you, everyone is a builder with AI.
            </p>
            <p className="text-base text-neutral-dark leading-relaxed mb-4">
              Join our community of curious minds exploring the possibilities of AI development and collaboration. Whether you're taking your first steps into artificial intelligence or you're an experienced developer looking to expand your toolkit, the Claude Builder Club offers:
            </p>
            <ul className="space-y-2 text-neutral-dark">
              <li className="flex items-start">
                <span className="text-coral mr-2 mt-1">•</span>
                <span>Free Claude Pro Account & API Credits to build and experiment with AI</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2 mt-1">•</span>
                <span>Access to Anthropic-led workshops, panels & lectures featuring cutting-edge insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2 mt-1">•</span>
                <span>Connection with fellow students who share your passion for innovation and learning</span>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2 mt-1">•</span>
                <span>Exclusive hackathons with access to merchandise, prizes, and unique opportunities</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Card className="p-8">
            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  Welcome to the Club! 🎉
                </h3>
                <p className="text-neutral-dark mb-6">
                  Your application has been submitted successfully. We'll be in touch soon!
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="px-6 py-3 bg-coral text-white rounded-lg font-medium hover:bg-coral/90 transition-colors duration-200"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-charcoal mb-2">
                    Full Name <span className="text-coral">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-light rounded-lg focus:border-coral focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-charcoal mb-2">
                    What year are you? <span className="text-coral">*</span>
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-light rounded-lg focus:border-coral focus:outline-none transition-colors"
                  >
                    <option value="">Select year</option>
                    <option value="First Year">First Year</option>
                    <option value="Second Year">Second Year</option>
                    <option value="Third Year">Third Year</option>
                    <option value="Fourth Year">Fourth Year</option>
                    <option value="Fifth Year+">Fifth Year+</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="nuid" className="block text-sm font-medium text-charcoal mb-2">
                    NUID (Northeastern ID) <span className="text-coral">*</span>
                  </label>
                  <input
                    type="text"
                    id="nuid"
                    name="nuid"
                    value={formData.nuid}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-light rounded-lg focus:border-coral focus:outline-none transition-colors"
                    placeholder="00123456"
                    maxLength="8"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Northeastern Email Address <span className="text-coral">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-neutral-light rounded-lg focus:border-coral focus:outline-none transition-colors"
                    placeholder="doe.j@northeastern.edu"
                  />
                </div>

                <div>
                  <label htmlFor="interestingThings" className="block text-sm font-medium text-charcoal mb-2">
                    Tell us 3 interesting things about you <span className="text-coral">*</span>
                  </label>
                  <textarea
                    id="interestingThings"
                    name="interestingThings"
                    value={formData.interestingThings}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-neutral-light rounded-lg focus:border-coral focus:outline-none transition-colors"
                    placeholder="1. I love building web applications...&#10;2. I'm learning machine learning...&#10;3. I enjoy contributing to open source projects..."
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">
                      There was an error submitting your application. Please make sure all required fields are filled out and try again.
                    </p>
                  </div>
                )}

                <div className="pt-4">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-coral text-white rounded-lg font-medium hover:bg-coral/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </div>
            )}
          </Card>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="text-center">
            <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-coral"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-2">
              Quick Process
            </h3>
            <p className="text-neutral-dark text-sm">
              Application takes only 5 minutes to complete
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-coral"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-2">
              Instant Access
            </h3>
            <p className="text-neutral-dark text-sm">
              Get immediate access to club resources and events
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-coral"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-2">
              Community
            </h3>
            <p className="text-neutral-dark text-sm">
              Join 500+ students passionate about AI
            </p>
          </Card>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              Questions About Joining?
            </h2>
            <p className="text-neutral-dark mb-6">
              Reach out to our team if you have any questions about the
              application process or club activities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="mailto:anthropic-club@northeastern.edu"
                  className="inline-flex items-center px-6 py-3 border-2 border-coral bg-coral text-white rounded-lg font-medium hover:bg-coral/90 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email Us
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://join.slack.com/t/claudebuilder-vzb9586/shared_invite/zt-3cfiwxtb9-JRvaJqI5UaqCGV~mz4pbdg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-coral text-coral rounded-lg font-medium hover:bg-coral hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5.2 15.6a2.6 2.6 0 1 1-2.6-2.6h2.6v2.6zm1.3 0a2.6 2.6 0 1 1 5.2 0v6.5a2.6 2.6 0 1 1-5.2 0v-6.5zm2.6-9.1a2.6 2.6 0 1 1 2.6-2.6v2.6h-2.6zm0 1.3a2.6 2.6 0 1 1 0 5.2H2.6a2.6 2.6 0 1 1 0-5.2h6.5zm9.1 2.6a2.6 2.6 0 1 1 2.6 2.6h-2.6v-2.6zm-1.3 0a2.6 2.6 0 1 1-5.2 0V2.6a2.6 2.6 0 1 1 5.2 0v6.5zm-2.6 9.1a2.6 2.6 0 1 1-2.6 2.6v-2.6h2.6zm0-1.3a2.6 2.6 0 1 1 0-5.2h6.5a2.6 2.6 0 1 1 0 5.2h-6.5z" />
                  </svg>
                  Join Slack
                </a>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Join;