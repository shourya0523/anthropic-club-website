import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords = [],
  image = "/favicon.png", // TODO: Replace with /social-preview.png (1200x630px)
  url = "https://claudebuildersneu.com",
  type = "website",
  author = "Claude Builder Club",
}) => {
  const fullTitle = title
    ? `${title} | Claude Builder Club`
    : "Claude Builder Club | Northeastern University";
  const fullUrl =
    url === "https://claudebuildersneu.com"
      ? url
      : `https://claudebuildersneu.com${url}`;
  const fullImage = image.startsWith("http")
    ? image
    : `https://claudebuildersneu.com${image}`;

  const defaultKeywords = [
    "Claude",
    "AI",
    "Anthropic",
    "Northeastern",
    "University",
    "Builder Club",
    "Machine Learning",
    "API",
    "Hackathon",
    "Workshop",
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(", ");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={`${title || "Claude Builder Club"} - Preview`}
      />
      <meta property="og:site_name" content="Claude Builder Club" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
      <meta
        property="twitter:image:alt"
        content={`${title || "Claude Builder Club"} - Preview`}
      />

      {/* LinkedIn Specific */}
      <meta property="og:image:secure_url" content={fullImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#E17B5A" />
      <meta name="msapplication-TileColor" content="#E17B5A" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Claude Builder Club" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Additional language and locale tags */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-MA" />
      <meta name="geo.placename" content="Boston" />
      <meta name="geo.position" content="42.3601;-71.0589" />
      <meta name="ICBM" content="42.3601, -71.0589" />

      {/* Structured Data for Website and Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://claudebuildersneu.com/#website",
              url: "https://claudebuildersneu.com",
              name: "Claude Builder Club",
              description:
                "Join the Claude Builder Club at Northeastern University. Learn AI, build with Claude Pro, and connect with passionate students.",
              inLanguage: "en-US",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://claudebuildersneu.com/?s={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Organization",
              "@id": "https://claudebuildersneu.com/#organization",
              name: "Claude Builder Club",
              alternateName: "Anthropic Club at Northeastern University",
              url: "https://claudebuildersneu.com",
              logo: {
                "@type": "ImageObject",
                url: "https://claudebuildersneu.com/favicon.png",
                width: 512,
                height: 512,
              },
              image: {
                "@type": "ImageObject",
                url: fullImage,
                width: fullImage.includes("favicon") ? 512 : 1200,
                height: fullImage.includes("favicon") ? 512 : 630,
              },
              description:
                "Join the Claude Builder Club at Northeastern University. Learn AI, build with Claude Pro, and connect with passionate students.",
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Boston",
                addressRegion: "MA",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "general inquiry",
                url: "https://claudebuildersneu.com/join",
              },
              sameAs: ["https://northeastern.edu"],
              parentOrganization: {
                "@type": "EducationalOrganization",
                name: "Northeastern University",
                url: "https://northeastern.edu",
              },
            },
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
