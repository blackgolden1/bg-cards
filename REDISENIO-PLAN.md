# Plan de Redisño: bg-cards Landing Individual

## Objetivo

Transformar drásticamente la landing `/landing/[id]` de tarjetas virtuales Edelco en una experiencia premium, moderna, animada y funcional, manteniendo el sitio 100% estático (`output: 'export'`).

## Alcance

- **Solo** rediseñar `/landing/[id]` y sus componentes.
- No modificar la home page actual (se deja como está).
- No cambiar `output: 'export'`.
- No tocar datos de empleados (`dummyData.ts`) salvo para adaptar tipos si es necesario.

## Dependencias nuevas

- `framer-motion`: animaciones de entrada, hover, transiciones.
- `lucide-react`: iconos modernos y consistentes.
- `clsx` + `tailwind-merge`: utilidades para clases dinámicas (opcional pero recomendado).

## Cambios específicos

### 1. Layout y theming

- Agregar `ThemeProvider` con modo oscuro/claro persistente en `localStorage`.
- Actualizar `globals.css` con variables de color para modo claro/oscuro.
- Ajustar `layout.tsx` para envolver la app con el provider del tema.

### 2. Hero rediseñado

- Fondo con gradiente animado sutil.
- Foto de perfil grande con anillo de estado/puesto animado.
- Nombre, rol y empresa prominentes.
- Botones principales:
  - "Guardar contacto" (descarga `.vcf` real).
  - "Compartir tarjeta" (Web Share API).
  - "Copiar enlace".
  - Toggle modo oscuro.

### 3. Acciones rápidas

- Grid de botones de acción con iconos (Lucide):
  - WhatsApp, Llamar, Email, Instagram, Facebook, YouTube.
- Animaciones hover con Framer Motion.
- Etiquetas claras debajo de cada icono.

### 4. Tarjeta de empresa

- Sección "Sobre Edelco" con glassmorphism y animación de aparición al scroll.
- Direcciones renderizadas como tarjetas con iconos de mapa.
- Galería de imágenes con lazy load y transiciones suaves.

### 5. QR modernizado

- QR para la URL de la tarjeta actual.
- Visual integrado con marco decorativo.
- Botón para descargar el QR como PNG.
- Corrección de la URL hardcodeada para que funcione en local y producción.

### 6. Animaciones (Framer Motion)

- Stagger en elementos de la landing.
- Fade + slide up al hacer scroll.
- Efecto hover en botones y tarjetas.
- Transición suave entre modo claro/oscuro.

### 7. Metadata dinámica (dentro de export estático)

- Usar `generateMetadata` síncrono con datos estáticos para cada empleado.
- Título: `${fullName} - Tarjeta virtual Edelco`.
- Descripción: `${rol} en Edelco SAS`.
- Open Graph básico con imagen de perfil.

### 8. Correcciones técnicas

- Reemplazar `<img>` por `<Image>` de Next.js donde sea posible; para imágenes externas o no optimizables, usar `unoptimized`.
- Configurar `next.config.ts` para imágenes locales y `images.unoptimized: true` si es necesario para export estático.
- Corregir la ruta base del QR para que use el origin actual en lugar de `https://tarjetas.edelco.co`.
- Crear utilidad `downloadVCard` que genere un archivo `.vcf` real.
- Crear utilidad `shareCard` que use Web Share API con fallback a copiar enlace.

### 9. Levantar en local

- Ejecutar `npm install` para agregar dependencias.
- Ejecutar `npm run dev`.
- Verificar que `http://localhost:3000/landing/freddy-castaneda-segura` renderice correctamente.
- Ejecutar `npm run build` para validar el export estático.

## Estructura de archivos a modificar/crear

### Modificar

- `src/app/layout.tsx`
- `src/app/landing/[id]/page.tsx`
- `src/app/globals.css`
- `src/components/landing/FlipCard.tsx`
- `src/components/landing/Header.tsx`
- `src/components/landing/Portfolio.tsx`
- `src/components/landing/Company.tsx`
- `src/components/landing/QRCodeRedirect.tsx`
- `src/components/landing/CardContainer.tsx`
- `src/components/landing/Redes.tsx`
- `next.config.ts`
- `package.json`

### Crear

- `src/components/ui/ThemeToggle.tsx`
- `src/components/ui/ActionButton.tsx`
- `src/components/ui/GlassCard.tsx`
- `src/lib/utils.ts` (cn helper)
- `src/lib/vcard.ts` (generar .vcf)
- `src/lib/share.ts` (Web Share API)
- `src/providers/ThemeProvider.tsx`
- `.env.example`
- `.env.local` (no subir; solo ejemplo)

## Supuestos

- Las fotos de perfil y logos existentes en `/public/edelco/` se mantienen.
- Los datos de empleados en `dummyData.ts` son suficientes para el rediseño.
- El usuario quiere un look moderno y premium sin cambiar la marca Edelco.

## Riesgos y mitigaciones

| Riesgo | Mitigación |
| --- | --- |
| Framer Motion agrega peso | Usar animaciones simples y tree-shakeables. |
| Imágenes no cargan en export | Configurar `images.unoptimized: true`. |
| Web Share API no disponible | Siempre ofrecer fallback "copiar enlace". |
| Build de export falle | Validar `npm run build` antes de finalizar. |

## Aprobación

Si aprobás este plan, empezaré la implementación en este orden:

1. Instalar dependencias.
2. Configurar theming y utilidades.
3. Crear componentes UI reutilizables.
4. Rediseñar `page.tsx` de landing.
5. Refactorizar componentes existentes.
6. Validar build y levantar en local.

¿Aprobás el plan?
