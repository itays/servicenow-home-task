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
