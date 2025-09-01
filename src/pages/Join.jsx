import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Card from '../components/Card';

const Join = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  // Google Form URL - Replace with your actual form URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSexyQmwKJfnUdZou6_6o3bC4kH-ieS95pjV_9W-X3C0JLbjJw/viewform?embedded=true;"

  useEffect(() => {
    // Simulate iframe loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setIframeError(true);
  };

  return (
    <div className="min-h-screen bg-neutral-light py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Ready to Build with AI?
          </h1>
          <p className="text-xl text-neutral-dark max-w-2xl mx-auto">
            Join the Anthropic Club and start your AI journey. Fill out the form below to become a member.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Card className="p-8">
            {isLoading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-coral mb-4"></div>
                <p className="text-neutral-dark">Loading application form...</p>
              </div>
            )}

            {iframeError ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  Form Loading Error
                </h3>
                <p className="text-neutral-dark mb-6">
                  We're having trouble loading the application form. Please try the direct link below.
                </p>
                <a
                  href={googleFormUrl.replace('?embedded=true', '')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-coral text-white rounded-lg font-medium hover:bg-coral/90 transition-colors duration-200"
                >
                  Open Application Form
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ) : (
              <div className="relative">
                {/* Form Container */}
                <div className="relative w-full bg-white rounded-lg border-2 border-coral/20 shadow-lg overflow-hidden">
                  <iframe
                    src={googleFormUrl}
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    onLoad={handleIframeLoad}
                    onError={handleIframeError}
                    className="w-full"
                    title="Anthropic Club Application Form"
                  >
                    Loading…
                  </iframe>
                </div>

                {/* Form Instructions */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-neutral-dark">
                    Having trouble with the form?{' '}
                    <a
                      href={googleFormUrl.replace('?embedded=true', '')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-coral hover:underline"
                    >
                      Open in new tab
                    </a>
                  </p>
                </div>
              </div>
            )}
          </Card>
        </motion.div>

        {/* Additional Information */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="text-center">
            <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-2">Quick Process</h3>
            <p className="text-neutral-dark text-sm">
              Application takes only 5 minutes to complete
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-2">Instant Access</h3>
            <p className="text-neutral-dark text-sm">
              Get immediate access to club resources and events
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-2">Community</h3>
            <p className="text-neutral-dark text-sm">
              Join 500+ students passionate about AI
            </p>
          </Card>
        </motion.div>

        {/* Contact Information */}
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
              Reach out to our team if you have any questions about the application process or club activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:anthropic-club@northeastern.edu"
                className="inline-flex items-center px-6 py-3 bg-coral text-white rounded-lg font-medium hover:bg-coral/90 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a
                href="https://join.slack.com/t/claudebuilder-vzb9586/shared_invite/zt-3cfiwxtb9-JRvaJqI5UaqCGV~mz4pbdg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-coral text-coral rounded-lg font-medium hover:bg-coral hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5.2 15.6a2.6 2.6 0 1 1-2.6-2.6h2.6v2.6zm1.3 0a2.6 2.6 0 1 1 5.2 0v6.5a2.6 2.6 0 1 1-5.2 0v-6.5zm2.6-9.1a2.6 2.6 0 1 1 2.6-2.6v2.6h-2.6zm0 1.3a2.6 2.6 0 1 1 0 5.2H2.6a2.6 2.6 0 1 1 0-5.2h6.5zm9.1 2.6a2.6 2.6 0 1 1 2.6 2.6h-2.6v-2.6zm-1.3 0a2.6 2.6 0 1 1-5.2 0V2.6a2.6 2.6 0 1 1 5.2 0v6.5zm-2.6 9.1a2.6 2.6 0 1 1-2.6 2.6v-2.6h2.6zm0-1.3a2.6 2.6 0 1 1 0-5.2h6.5a2.6 2.6 0 1 1 0 5.2h-6.5z"/>
                </svg>
                Join Slack
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Join;
