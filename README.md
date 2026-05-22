# Salvemos El Espino 🌳

Sitio web del movimiento ciudadano para proteger el Ecoparque El Espino — el pulmón verde de San Salvador — del proyecto de construcción CIFCO que amenaza sus 91 hectáreas de bosque protegido.

**Producción:** [salvemoselespino.vercel.app](https://salvemoselespino.vercel.app)
**Petición:** [change.org](https://www.change.org/p/salvemos-el-espino-protejamos-el-pulm%C3%B3n-de-san-salvador)

---

## Stack

- [Next.js 16](https://nextjs.org) — App Router
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — animaciones
- [Lucide React](https://lucide.dev) — iconos
- Tipografías: **Cause** + **Climate Crisis** (Google Fonts)

---

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

---

## Variables de entorno

Crea un archivo `.env.local` basado en `.env.example`:

```bash
cp .env.example .env.local
```

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL de producción (ej. `https://salvemoselespino.sv`). Opcional — si no se define, se usa `VERCEL_URL` automáticamente. |

---

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con Turbopack |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción local |
| `npm run lint` | ESLint |

---

## Estructura

```
app/
├── components/          # Componentes de la landing
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── StatsCounter.tsx
│   ├── ProblemCards.tsx
│   ├── InformateSection.tsx
│   ├── VocesSection.tsx
│   ├── MovementSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── constants/
│   └── index.ts         # PETITION_URL, SIGNATURE_COUNT
├── opengraph-image.tsx  # OG image generada automáticamente
├── robots.ts            # robots.txt
├── sitemap.ts           # sitemap.xml
├── layout.tsx           # Metadata SEO global
├── page.tsx             # Página principal
└── globals.css          # Tokens de diseño (colores, fuentes)
public/
└── assets/              # Imágenes del sitio
```

---

## Actualizar el conteo de firmas

Edita una sola línea en [`app/constants/index.ts`](app/constants/index.ts):

```ts
export const SIGNATURE_COUNT = "185k"; // ← cambia aquí
```

El número se refleja automáticamente en el Hero y en el banner de ProblemCards.

---

## Deploy

El proyecto está configurado para Vercel. Cada push a `main` genera un deploy automático.

Para conectar el repositorio por primera vez:

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Importa el repositorio
3. Vercel detecta Next.js automáticamente — no necesitas configurar nada
4. Cuando tengas dominio propio, agrega `NEXT_PUBLIC_SITE_URL` en **Settings → Environment Variables**
