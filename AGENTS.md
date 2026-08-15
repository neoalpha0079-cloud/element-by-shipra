# TypeScript: interface vs type

Use `interface` for object shapes (component props, API response bodies, classes). Use `type` for unions, primitives, tuples, and utility/conditional/mapped types (e.g. `Omit<X, "y">`, `Partial<X>`, discriminated unions like `A | B`).

An `interface` can still `extends` a utility-type result when the goal is an object shape, e.g. `interface FetchOptions extends Omit<RequestInit, "body"> { ... }`.

# Layer rules

Code lives in one of four layers, each only importable by the ones after it. Enforced by ESLint (`import/no-restricted-paths`) — a bad import fails `pnpm lint`.

```
app  →  widgets  →  features  →  shared
```

- `app/` — routing only (`page.tsx`, `layout.tsx`, `[slug]`).
- `widgets/` — composes 2+ features, or a feature + shared.
- `features/` — self-contained domain (e.g. `consultation`).
- `shared/` — generic, no feature imports.

# Naming

- Files/folders: kebab-case (`hero-section.tsx`). `app/` uses Next.js conventions (`[slug]`).
- Enums: PascalCase, no prefix.
- Unused args/vars: prefix with `_`.
- Imports: builtin → external → internal → parent → sibling → index (auto-fixed by eslint).

# Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm format:check
```
