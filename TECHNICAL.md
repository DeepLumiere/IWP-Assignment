# Technical Architecture

## Overview

This IWP Assignment project is a static web application built with modern web technologies, focusing on interactive team portfolio presentation.

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Build Tool**: Vite 5.x
- **Development**: Prettier for code formatting
- **Assets**: SVG graphics, custom fonts

## Architecture Patterns

### Page Structure
```
index.html (main landing) → individual member pages (deeptodo.html, etc.)
                          ↓
                      shared navigation & styling
```

### JavaScript Architecture

The application uses a modular approach with the following key components:

1. **Dynamic Content Management** (`main.js`)
   - Team member rotation system
   - Bio editing functionality
   - Card management system

2. **Interactive Effects**
   - 3D text transformations
   - Hover animations
   - Typing effects

3. **Form Handling**
   - Contact form validation
   - Dynamic team member addition
   - Bio editing interface

### CSS Architecture

- **Base Styles** (`styles.css`): Core styling and layout
- **Theme Styles** (`stylesblue.css`): Blue color scheme variant
- **Responsive Design**: Mobile-first approach with flexbox/grid

## Key Features Implementation

### Dynamic Team Member System
```javascript
// Global state management
let turn = 1; // Current team member (0-2)

// Data arrays for different members
let names = ["Vraj", "Sakshi", "Deep"];
let nationality = ["India", "UAE", "United States of America"];
// ... other data arrays
```

### Interactive 3D Text Effects
```javascript
// Mouse tracking for 3D transformations
document.addEventListener("mousemove", e => {
    let x = (e.clientX - innerWidth/2) / (innerWidth/2) * -30;
    let y = (e.clientY - innerHeight/2) / (innerHeight/2) * 30;
    // Apply rotations and shadows
});
```

### Form Validation System
- Client-side validation with regex patterns
- Real-time error feedback
- Success confirmation with auto-clear

## Build System (Vite)

### Development
- Hot module replacement
- Fast refresh
- Asset optimization

### Production
- Code splitting
- Asset minification
- SVG optimization

## Performance Considerations

- **Optimized Assets**: SVG graphics for scalability
- **Minimal Dependencies**: Vanilla JavaScript for speed
- **Efficient CSS**: Scoped styles without framework overhead
- **Fast Build**: Vite's esbuild integration

## Security Considerations

- **Input Validation**: Client-side form validation
- **XSS Prevention**: Careful innerHTML usage
- **Static Deployment**: No server-side vulnerabilities

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox support
- SVG support required

## Development Workflow

1. **Local Development**: `npm run dev`
2. **Code Formatting**: `npx prettier --write .`
3. **Production Build**: `npm run build`
4. **Preview**: `npm run preview`

## File Organization Strategy

```
Root Level: HTML pages for direct access
src/: Source assets (CSS, JS, SVG)
public/: Public assets (fonts, static files)
dist/: Build output (auto-generated)
```

This architecture ensures maintainable, scalable, and performant web application suitable for academic demonstration purposes.