# TanStack Start + shadcn/ui

This is a template for a new TanStack Start project with React, TypeScript, and shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```

## Testing

Unit and component tests run on Vitest with React Testing Library in jsdom.

```bash
bun run test         # run once
bun run test:watch   # watch mode
```

Put test files next to the code they cover as `src/**/*.test.{ts,tsx}`. The shared setup, which loads the jest-dom matchers and runs RTL cleanup, lives in `src/test/setup.ts`.

### End-to-end

Browser tests run on Playwright against the dev server at `http://127.0.0.1:3000`. Playwright starts the server, or reuses one already running when not in CI.

```bash
bunx playwright install chromium   # once
bun run test:e2e         # full suite (Chromium)
bun run test:e2e:smoke   # @smoke-tagged tests only (what CI runs)
bun run test:e2e:headed  # headed, for debugging
bun run test:e2e:ui      # Playwright UI mode
```

Put browser tests in `e2e/` as `*.e2e.ts`; tag CI-critical ones with `@smoke` in the title.
