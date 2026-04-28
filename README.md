# yetorix-web

Public website for **Yetorix** — *Stories in Motion*.

A creative studio for visual, sonic, and narrative content.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS v3
- Sora + Plus Jakarta Sans (Google Fonts via `next/font`)
- Cloudflare Pages (`@cloudflare/next-on-pages`)

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build         # next build
pnpm pages:build   # @cloudflare/next-on-pages output
```

## Deploy

`main` branch is auto-deployed to Cloudflare Pages → `yetorix.com`.

## License

© 2026 Yetorix LLC. All rights reserved.
