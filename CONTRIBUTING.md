# Contributing to IWP Assignment - Team Portfolio Website

Thank you for your interest in contributing to this project! This document provides guidelines for contributing to our Internet and Web Programming assignment.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/IWP-Assignment.git
   cd IWP-Assignment
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ Development Workflow

### Running the Development Server

```bash
npm run dev
```

This starts the Vite development server with hot reload at `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

### Previewing Production Build

```bash
npm run preview
```

## 📝 Code Style and Formatting

This project uses Prettier for code formatting. Please ensure your code is properly formatted before submitting.

### Auto-format your code:

```bash
npx prettier --write .
```

### Key Style Guidelines:

- Use consistent indentation (2 spaces)
- Follow existing naming conventions
- Add meaningful comments for complex functionality
- Keep functions small and focused
- Use semantic HTML elements

## 🎨 Adding New Features

### Adding a New Team Member Page

1. Create a new HTML file following the pattern: `[name]todo.html`
2. Use the existing template structure from other member pages
3. Update the navigation links if needed
4. Add appropriate styling in CSS files

### Modifying Styles

- **Main styles**: Edit `src/styles.css`
- **Blue theme**: Edit `src/stylesblue.css`
- Test on different screen sizes for responsiveness

### Adding JavaScript Functionality

- Add new functions to `src/main.js`
- Follow existing code patterns
- Add appropriate error handling
- Test interactive features thoroughly

## 🧪 Testing Your Changes

### Manual Testing Checklist:

- [ ] All pages load correctly
- [ ] Navigation works between all pages
- [ ] Forms submit properly with validation
- [ ] Interactive effects work (hover, mouse movement)
- [ ] Add new employee feature functions correctly
- [ ] Responsive design works on mobile devices
- [ ] All links and buttons are functional

### Browser Testing:

Test your changes in:

- Chrome/Chromium
- Firefox
- Safari (if available)
- Mobile browsers

## 📁 File Organization

When adding new files:

```
src/                    # Source files only
├── *.css              # Stylesheets
├── *.js               # JavaScript files
├── *.svg              # Vector graphics
public/                 # Public assets
├── fonts/             # Font files
├── *.svg              # Public graphics
*.html                 # HTML pages (root level)
```

## 🚫 What Not to Modify

Please avoid modifying:

- Build configuration files (`package.json`, `vite.config.js`) unless necessary
- Git configuration (`.gitignore`)
- Node modules or lock files

## 📋 Pull Request Guidelines

### Before Submitting:

1. **Test thoroughly** - Ensure all features work as expected
2. **Format code** - Run Prettier to format your code
3. **Check for errors** - No console errors or warnings
4. **Update documentation** - If you've added new features

### Pull Request Description:

Include:

- **Summary** of changes made
- **Motivation** behind the changes
- **Testing** performed
- **Screenshots** for UI changes
- **Any breaking changes** or dependencies

### Example PR Template:

```markdown
## Changes Made

- Added new team member profile page
- Updated navigation to include new member
- Enhanced mobile responsiveness

## Testing

- [x] Tested on Chrome, Firefox
- [x] Verified mobile responsiveness
- [x] Checked all navigation links
- [x] Validated form functionality

## Screenshots

[Attach relevant screenshots]
```

## 🐛 Reporting Issues

When reporting issues:

1. **Check existing issues** first
2. **Use descriptive titles**
3. **Provide reproduction steps**
4. **Include browser/environment details**
5. **Add screenshots** if applicable

## 💡 Feature Requests

For feature requests:

1. **Explain the use case**
2. **Describe the expected behavior**
3. **Consider implementation complexity**
4. **Discuss with team members first** (for assignment context)

## 🎓 Academic Guidelines

Since this is an educational project:

- **Maintain academic integrity**
- **Credit sources** for external code or assets
- **Follow assignment requirements**
- **Collaborate appropriately** within team guidelines

## 📞 Getting Help

If you need assistance:

1. Check the README.md for basic setup
2. Review existing code for patterns
3. Consult course materials
4. Ask team members for guidance

## 🙏 Recognition

Contributors to this project will be acknowledged in:

- Git commit history
- Project documentation
- Assignment submission (where appropriate)

---

Thank you for contributing to our IWP assignment! Your efforts help make this project better for everyone. 🚀
