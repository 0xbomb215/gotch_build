# GotchA NFT

A React-based web application for GotchA NFT, featuring a gaming experience with creatures, elements, and arena gameplay.

## Overview

GotchA is a production-ready React application built for NFT gaming. The application includes creature collections, elemental systems, and interactive gameplay features.

## Project Structure

This is a production build directory containing the compiled and optimized assets ready for deployment:

```
gotch_build/
├── index.html              # Main HTML entry point
├── manifest.json           # Web app manifest
├── asset-manifest.json     # Build asset manifest
├── robots.txt              # Search engine crawler directives
├── favicon.ico             # Application favicon
├── logo192.png             # App icon (192x192)
├── logo512.png             # App icon (512x512)
├── pageTop.png             # Page header image
└── static/
    ├── css/
    │   ├── main.17ca69c1.css      # Main stylesheet
    │   └── main.17ca69c1.css.map  # CSS source map
    ├── js/
    │   ├── main.d1c80af0.js           # Main application bundle
    │   ├── main.d1c80af0.js.map       # JavaScript source map
    │   ├── 453.5a5d6a02.chunk.js      # Code split chunk
    │   ├── 453.5a5d6a02.chunk.js.map  # Chunk source map
    │   └── main.d1c80af0.js.LICENSE.txt # License information
    └── media/
        ├── Creature assets (axolotl, buffalo, deer, eagle, fox, lion, phoenix, squid, snake)
        ├── Element icons (water, fire, earth, wind)
        ├── Game assets (arena, boss, bossicon)
        ├── UI assets (logo.svg, Background_Gameplay_01.Png, pageTop.png)
        └── Fonts (THEBOLDFONT in multiple formats)
```

## Features

### Creature Collection
The application includes multiple creature types:
- **Axolotl** - Aquatic creature
- **Buffalo** - Earth-based creature
- **Deer** - Nature creature
- **Eagle** - Wind-based creature
- **Fox** - Agile creature
- **Lion** - Fire-based creature
- **Phoenix** - Legendary fire creature
- **Squid** - Aquatic creature
- **Snake** - Multiple variants (snake1, snake2, snake3)

### Elemental System
Four elemental types are featured:
- 💧 **Water** (watericon.png)
- 🔥 **Fire** (fireicon.png)
- 🌍 **Earth** (earthicon.png)
- 💨 **Wind** (windicon.png)

### Gameplay Features
- Arena system (arena.png)
- Boss encounters (boss.png, bossicon.png)
- Gameplay backgrounds (Background_Gameplay_01.Png)
- Custom typography (THEBOLDFONT)

## Technology Stack

- **React** - UI library
- **React DOM** - DOM rendering
- **CSS** - Styling with source maps
- **Webpack** - Module bundling (indicated by chunk files)

## Deployment

### Static Hosting

This is a static site that can be deployed to any static hosting service:

#### Option 1: Serve Locally
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

#### Option 2: Deploy to Services
- **Netlify**: Drag and drop the folder or use CLI
- **Vercel**: Use Vercel CLI or connect to Git repository
- **GitHub Pages**: Push to gh-pages branch
- **AWS S3 + CloudFront**: Upload to S3 bucket and configure CloudFront
- **Azure Static Web Apps**: Deploy via Azure Portal or CLI

### Important Notes

1. **Routing**: If the application uses client-side routing, ensure your hosting service is configured to redirect all routes to `index.html` (SPA mode).

2. **HTTPS**: Always serve over HTTPS in production for security.

3. **Caching**: The assets are hashed for cache busting. Consider setting appropriate cache headers.

## Browser Support

The application requires JavaScript to be enabled. Modern browsers that support ES6+ features are recommended.

## License

This build includes React and React DOM, which are licensed under the MIT license (see `static/js/main.d1c80af0.js.LICENSE.txt`).

## Development

⚠️ **Note**: This is a production build directory. For development, you would need access to the source code repository with the original React components and build configuration.

If you have the source code:
1. Install dependencies: `npm install`
2. Run development server: `npm start`
3. Build for production: `npm run build`

## Assets

All media assets are optimized and hashed for production use. The asset manifest (`asset-manifest.json`) maps original asset names to their hashed filenames for cache busting.

## Support

For issues or questions about the application, please refer to the original source repository or contact the development team.

