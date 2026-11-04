This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Integración con GitHub (MCP)

Este proyecto incluye un servidor MCP para GitHub configurado en `.mcp.json`.

### Requisitos

- Tener un [GitHub Personal Access Token](https://github.com/settings/tokens) con permisos de `repo`, `issues` y `pull_requests`.
- Tener Node.js y `npx` disponibles.

### Configuración

1. Copiar `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```
2. Reemplazar `GITHUB_TOKEN` con tu token real.
3. El archivo `.env` ya está excluido en `.gitignore` y no debe subirse.

### Cómo funciona

`.mcp.json` apunta al script `scripts/start-mcp-github.sh` (o `.ps1` en PowerShell), que carga las variables de `.env` y ejecuta el servidor MCP de GitHub:

```bash
npx -y @modelcontextprotocol/server-github
```

> Nota: este paquete está marcado como deprecated en npm, pero sigue funcionando correctamente para operaciones comunes de la API de GitHub.

### Uso en Claude Code

Una vez configurado, podés pedir acciones como:

```txt
@github creá un issue en este repo para mejorar el diseño de la landing
```

```txt
@github mostrame los pull requests abiertos de blackgolden1/bg-cards
```

```txt
@github creá una rama feature/nuevo-rediseno desde main
```

### Notas de seguridad

- Nunca compartas tu `GITHUB_TOKEN`.
- No subas `.env` ni archivos que contengan el token.
- Si el token se ve comprometido, revocalo inmediatamente desde GitHub.
