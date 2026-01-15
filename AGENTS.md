# Agent Guidelines for TARC

This document contains instructions for AI agents (and human developers) working on the TARC repository.

## 1. Environment & Commands

### Build & Run
- **Package Manager:** `npm` (Lockfile: `package-lock.json`)
- **Dev Server:** `npm run dev` (Starts Next.js dev server)
- **Production Build:** `npm run build`
- **Linting:** `npm run lint` (ESLint)

### Testing
- **Status:** There is currently **no automated testing framework** (e.g., Jest, Vitest) configured in `package.json`.
- **Manual Testing:**
  - A manual test page exists at `app/[lang]/test/page.tsx`.
  - When implementing new features, verify them manually or propose adding a proper test runner (like Vitest) if the task involves complex logic.
- **Running Tests:** *N/A* (Add instructions here if a test framework is introduced).

## 2. Code Style & Conventions

### Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + `clsx` + `tailwind-merge`
- **UI Components:** Shadcn UI (Radix UI primitives)
- **Backend/Auth:** Supabase
- **Internationalization:** Routing via `app/[lang]/`

### File Structure & Naming
- **Components:**
  - **PascalCase** for component names (e.g., `HeroSection`).
  - **kebab-case** for filenames (e.g., `hero-section.tsx`).
  - Shared UI components reside in `components/ui/`.
  - Feature-specific components can be colocated (e.g., `app/[lang]/drafting/components/`).
- **Pages:** Follow Next.js App Router conventions (`page.tsx`, `layout.tsx`, `route.ts`).
- **Utilities:** `camelCase` for functions and filenames (e.g., `lib/utils.ts`).

### Imports
- **Absolute Imports:** Always use the `@/` alias for imports (e.g., `import { Button } from "@/components/ui/button"`).
- **Ordering:**
  1. React / Next.js built-ins
  2. Third-party libraries (`radix-ui`, `lucide-react`)
  3. Local absolute imports (`@/lib/...`, `@/components/...`)
  4. Relative imports (avoid deep relative paths)

### Typing (TypeScript)
- **Strict Mode:** Enabled (`strict: true` in `tsconfig.json`).
- **Props:** Define component props using `interface` exported with the component.
  ```tsx
  export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    customProp: string;
  }
  ```
- **Avoid `any`:** Use strict typing. Use `unknown` if the type is truly uncertain, but prefer specific types.

### Styling (Tailwind CSS)
- **Utility First:** Use Tailwind utility classes for styling.
- **Conditional Classes:** Use the `cn()` helper (from `@/lib/utils`) for conditional class merging.
  ```tsx
  // Correct
  <div className={cn("bg-red-500", className, isVisible && "opacity-100")} />
  ```
- **Mobile First:** Default styles are for mobile; use `md:`, `lg:` prefixes for larger screens.

### State & Data Fetching
- **Server Components:** Prefer React Server Components (RSC) by default. Use `"use client"` only when interactivity (hooks, event listeners) is required.
- **Data Fetching:** Fetch data in Server Components where possible.
- **Supabase:** Use the typed Supabase client from `@/lib/utils/supabase/`.

## 3. Workflow Rules
- **Formatting:** Code should be clean and well-formatted. Adhere to standard Prettier defaults if no config is present.
- **Modifications:** When modifying existing files, respect the existing code style and structure.
- **Comments:** Add comments only for complex logic or "why" decisions. Do not comment on obvious code.
- **Errors:** Handle errors gracefully. For API routes, return standard HTTP error codes and JSON responses.

## 4. Specific Configuration Notes
- **Routing:** All pages are under `app/[lang]/` for localization. Ensure links include the current language prefix or use a navigation helper that handles it.
- **Forms:** Use `react-hook-form` with `zod` for validation (see `package.json` dependencies).
