# Anthropic Club at Northeastern - Website

A modern, responsive website for the Anthropic Club featuring an introduction page mirroring the Claude Builder Club flyer design, an executive board showcase, and a membership form with Google Forms integration.

## Features

- 🎨 **Beautiful Design**: Coral color palette with modern typography using Space Grotesk and JetBrains Mono fonts
- ✨ **Smooth Animations**: Framer Motion powered animations and micro-interactions
- 📱 **Responsive**: Mobile-first design that works perfectly on all devices
- 🚀 **Fast Performance**: Built with Vite and React 18 for optimal performance
- ♿ **Accessible**: WCAG 2.1 AA compliant with proper focus management and screen reader support

## Pages

1. **Home** - Landing page recreating the flyer experience with hero section and benefits
2. **About** - Executive board showcase with professional profiles and social links
3. **Join Us** - Membership registration with Google Forms integration

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Fonts**: Space Grotesk + JetBrains Mono (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd anthropic-club-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Configuration

### Google Forms Integration

To integrate your Google Form:

1. Create a Google Form with the required fields
2. Get the embed code from "Send" → "Embed HTML"
3. Update the `googleFormUrl` in `src/pages/Join.jsx`
4. Test the integration

### Customization

- **Colors**: Update the coral color palette in `tailwind.config.js`
- **Fonts**: Modify font imports in `src/index.css`
- **Content**: Update executive board data in `src/pages/About.jsx`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx     # Button component with variants
│   ├── Card.jsx       # Card component with animations
│   └── Layout.jsx     # Main layout with navigation
├── pages/              # Page components
│   ├── Home.jsx       # Landing page
│   ├── About.jsx      # Executive board page
│   └── Join.jsx       # Membership form page
├── App.jsx            # Main app component with routing
├── index.css          # Global styles and Tailwind imports
└── main.jsx          # App entry point
```

## Design System

### Colors
- **Primary**: Coral (#E17B5A) - Main brand color
- **Secondary**: Charcoal (#2D2D2D) - Text and contrast
- **Accent**: White (#FFFFFF) - Backgrounds and contrast
- **Neutral**: Light and dark grays for subtle elements

### Typography
- **Primary Font**: Space Grotesk - Modern geometric sans-serif
- **Monospace**: JetBrains Mono - For code and technical elements
- **Fluid Sizing**: Responsive typography that scales with viewport

### Animations
- **Page Transitions**: Smooth fade and slide animations
- **Micro-interactions**: Hover effects, button animations, card elevations
- **Scroll Animations**: Reveal animations triggered by scroll position

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, contact the Anthropic Club team at Northeastern University.
