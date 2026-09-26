# Personal Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern and unique design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast loading with Vite
- 🎯 Clean, maintainable code structure
- 🌈 Beautiful gradient effects and hover animations
- 📧 Contact form functionality
- 🔗 Social media integration
- 💼 Portfolio showcase with project filtering

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal information and skills showcase
- **Portfolio**: Project gallery with filtering capabilities
- **Contact**: Contact form and social media links

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Customization

### Personal Information
Update the following files with your personal information:
- `src/components/Hero.jsx` - Name and introduction
- `src/components/About.jsx` - Bio, skills, and technologies
- `src/components/Contact.jsx` - Contact information and social links
- `src/components/Footer.jsx` - Footer information

### Projects
Add your projects in `src/components/Portfolio.jsx` by updating the `projects` array.

### Styling
- Colors can be customized in `tailwind.config.js`
- Additional styles can be added in `src/index.css`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project can be easily deployed to platforms like:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## License

MIT License - feel free to use this template for your own portfolio!
