# AGENTS.md - Code Guidelines for rockTicketapp-web-v2

## Project Overview
- **Type**: React 18 + Vite + Tailwind CSS web application
- **Language**: JavaScript/JSX
- **Node Version**: 18.x+

## Commands

### Development
```bash
npm run dev          # Start Vite dev server (default: http://localhost:5173)
```

### Building
```bash
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
```

### Linting
```bash
npm run lint         # Run ESLint with all rules enforced
```

### Testing
- **No testing framework configured** - Do not add tests unless explicitly requested

## Code Style Guidelines

### General Conventions
- Use functional components with arrow functions or function declarations
- Always use JSX for React components (`.jsx` extension)
- One component per file
- Export components as default

### File Organization
```
src/
  components/     # Reusable UI components
  assets/         # Static assets (images, fonts)
  css/            # Global styles
  App.jsx         # Main app component
  main.jsx        # Entry point
```

### Imports
- Use relative imports for local files
- Group imports: React imports, external libraries, local components
- Use named exports for utilities/helpers

### Naming Conventions
- **Components**: PascalCase (e.g., `Hero.jsx`, `Footer.jsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **CSS Classes**: Tailwind utility classes (kebab-case semantic naming in custom classes)
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE

### JSX Guidelines
- Self-close components when no children: `<Component />`
- Use curly braces for dynamic values: `{variable}`
- Always include `key` prop when mapping arrays
- Use conditional rendering with ternary operators or logical AND

### Tailwind CSS
- Use utility classes for all styling (no custom CSS unless necessary)
- Custom colors defined in `tailwind.config.js`:
  - `primary`: #292952
  - `secundary`: #4FAAA8
- Custom fonts:
  - `roboto`: Roboto (sans-serif)
  - `squadaOne`: Squada One (display)
- Use responsive prefixes: `md:`, `lg:`, etc.

### Error Handling
- Use try-catch for async operations
- Display user-friendly error messages
- Log errors to console for debugging

### ESLint Rules (Enforced)
- `react-refresh/only-export-components`: Warn for non-component exports
- `react/jsx-no-target-blank`: Off
- No unused variables
- No unused imports

## State Management
- Use React `useState` for local component state
- Use `useEffect` for side effects
- Keep state as local as possible

## Performance
- Memoize expensive computations with `useMemo`
- Memoize callback functions with `useCallback` when passing to child components
- Lazy load routes if application grows

## Accessibility
- Use semantic HTML elements
- Include alt text for images
- Use accessible color contrasts (see Tailwind config)

## Git Conventions
- Use meaningful commit messages
- Create feature branches for new functionality
- Keep commits atomic and focused

## Dependencies
- **Production**: react, react-dom
- **Development**: vite, @vitejs/plugin-react, tailwindcss, postcss, autoprefixer, eslint, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh, @types/react, @types/react-dom

## Notes for Agents
- Do NOT add testing frameworks (Jest, Vitest, etc.) without explicit permission
- Do NOT add TypeScript without explicit permission
- Follow existing code patterns in the codebase
- Use the custom colors and fonts from Tailwind config
- Run `npm run lint` before committing changes