# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 📝 MANDATORY COMPLETION CHECKLIST

**AFTER ANY CODE CHANGE, you MUST:**

1. **`npm run lint`** - Check for linting issues and fix manually
2. **`npx tsc --noEmit`** - Check for TypeScript errors

**Critical Rules:**
- **Manual lint fixes only** - carefully review each warning, don't autofix
- **TypeScript strict mode** - resolve all type errors before completion
- **No exceptions** - these steps are mandatory for every change

## Project Overview

This is a Piano Chord Fingering Application built with Next.js 15.4.4, React 19, and TypeScript. The app provides interactive piano chord visualization with multiple fingering variations, favorites management, and hand comparison modes.

## ⚠️ CRITICAL RULES

### Code Quality Standards
- **Avoid `any` type** - causes build issues, use proper TypeScript types
- **Break down complex code** - components >500 lines need refactoring
- **Utility functions in `/lib/utils/`** - never put helpers directly in components
- **File size limit** - alert when exceeding 500 lines

### Never Change Existing Logic Without Explicit Request
**ABSOLUTELY FORBIDDEN**: When asked to modify something, DO NOT change any existing conditions, rules, or logic unless explicitly asked.

**Rule**: When making ANY modification:
1. Identify the EXACT change requested
2. Make ONLY that specific change  
3. Keep ALL other existing logic identical
4. If unsure, ask for clarification

## Development Commands

```bash
# Development
npm run dev          # Start development server with Turbo mode
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint (**run after every change**)

# TypeScript
npx tsc --noEmit     # Check TypeScript types (**run after every change**)

# No test commands configured
```

## Architecture Overview

### Tech Stack
- **Next.js 15.4.4** with App Router
- **React 19** with TypeScript 5
- **Tailwind CSS 3.4.1** for styling
- **localStorage** for data persistence
- **SVG-based** interactive piano interface

### Key Directories
- `app/` - Next.js App Router (layout, main page, global styles)
- `components/` - Reusable UI components for piano, chords, diagrams
- `data/chords.ts` - Programmatic chord generation for all 12 keys
- `hooks/useFavorites.ts` - Custom hook for favorites and recent chords state
- `types/index.ts` - Core TypeScript definitions (Note, Chord, Fingering, etc.)

### Component Architecture
The app uses a client-side component architecture with clear separation:

- **Piano.tsx**: Interactive SVG piano keyboard with chord highlighting
- **ChordSelector.tsx**: Chord selection interface with popular shortcuts
- **FingerDiagram.tsx**: Visual hand position representations
- **HandComparison.tsx**: Side-by-side left/right hand display mode
- **FavoritesPanel.tsx**: Manages saved chords with localStorage persistence

### Data Model
- **Chord generation**: Programmatic creation of chord variations across all keys
- **Fingering system**: Maps notes to finger numbers (1-5) with difficulty levels
- **State management**: Local component state + custom hooks for complex logic
- **Persistence**: localStorage for favorites and recent chord history

### Configuration Notes
- Turbo mode enabled in next.config.ts for faster development
- SVG support configured with @svgr/webpack
- Tailwind configured for dark mode support (prefers-color-scheme)
- Strict TypeScript with path aliases (`@/*` for root imports)

### Component Patterns
- All interactive components use `'use client'` directive
- Props interfaces defined with TypeScript for type safety
- Responsive design with mobile-first Tailwind classes
- SVG-based visualizations for scalable graphics

## Linting and Code Quality

### Linting Workflow
- Manually fix lint issues with careful consideration:
  - **Fix genuine issues**: unused imports, syntax errors, type issues
  - **Preserve intentional patterns**: Some `useEffect` dependency warnings prevent infinite re-renders
  - **Never use underscores** to silence unused variable warnings
  - **Use `// eslint-disable-next-line` sparingly** for legitimate cases
- Do not rely on autofix - manual review is required
- Aim for clean lint output, but prioritize functional correctness over warning-free code

### Utility Functions - MANDATORY RULES
**❌ NEVER put helper/utility functions directly in components - this is spaghetti code!**
- **✅ DO**: Create utility functions in `/lib/utils/` directory
- **✅ DO**: Use descriptive file names (e.g., `chord-generation.ts`, `note-mapping.ts`)
- **✅ DO**: Export properly typed functions with JSDoc comments
- **✅ DO**: Import and use utilities in components via named imports
- **❌ DON'T**: Define helper functions inside component files
- **❌ DON'T**: Create god utilities - keep them focused and specific

### Error Handling
- Structured error responses for async operations
- User-friendly error messages for UI feedback
- Proper TypeScript error types

## AI Development Guidelines

### Core Principles
- **Execute exactly what is requested** - no additional features
- **Implement simplest solution** that fulfills requirements
- **Never add TODOs** - fix and implement directly
- **Trust user instructions** - don't overthink or "improve" on clear directions
- **Focus on root causes** rather than symptoms
- **NEVER use magic timeouts** - fix race conditions with proper state management

### Debugging Approach
**Interactive Elements:**
- Check for invisible overlays blocking interactions
- Use dev tools to inspect z-index stacking
- Test with `pointer-events-none` to isolate issues

**Styling Issues:**
- Always check full component hierarchy - issues often originate from parent components
- Trace rendering path from page level down
- Compare with working examples
- Don't assume issue is in the obvious component

## Development Notes

- The chord data is generated programmatically in `data/chords.ts` rather than stored statically
- Fingering variations include beginner, intermediate, and advanced levels
- The piano component renders as SVG for crisp scaling across devices
- Recent chords and favorites persist across browser sessions via localStorage