# Invitaciones Premium

Catálogo profesional de invitaciones digitales creado para BadgerSoftTech. Incluye un showroom general y tres demostraciones completas con direcciones visuales independientes:

- **Boda · Editorial Romance:** marfil, verde profundo y detalles champagne.
- **XV años · Enchanted Night:** azul medianoche, violeta, destellos y puesta en escena cinematográfica.
- **Presentación · Soft Heirloom:** crema, azul grisáceo y lenguaje familiar.

## Stack

React 19, TypeScript, Vinext/Vite, Tailwind CSS 4, componentes Shadcn/Base UI y Lucide Icons. El sitio tiene dos salidas: una aplicación Vinext para Sites y una exportación estática optimizada para GitHub Pages.

## Desarrollo local

Requiere Node.js 22.13 o superior.

```bash
npm ci
npm run dev
```

La vista local se abre normalmente en `http://localhost:3000`.

## Verificación y compilación

```bash
npm run lint
npm run build
npm run build:pages
```

- `npm run build` crea la versión para Sites.
- `npm run build:pages` crea `pages-dist/` con rutas estáticas para `/`, `/boda`, `/xv` y `/presentacion`.

## Estructura principal

```text
app/
  page.tsx                 Catálogo
  boda/page.tsx            Demo de boda
  xv/page.tsx              Demo de XV años
  presentacion/page.tsx    Demo infantil
components/
  invitation/              Control funcional y tres composiciones independientes
  shared/                  Contador, galería portal, música, calendario
config/
  boda.ts
  xv.ts
  presentacion.ts
  types.ts
public/assets/
  wedding/
  xv/
  presentation/
  audio/
```

## Personalizar una plantilla

Cada invitación se controla desde un solo archivo en `config/`. Ahí se encuentran nombres, fecha ISO con zona horaria, textos, padres, padrinos, ceremonia, recepción, itinerario, galería, dress code, regalos, WhatsApp y música.

### Cambiar fecha y cuenta regresiva

Edita `event.startsAt` usando una fecha ISO completa, por ejemplo:

```ts
startsAt: '2027-05-22T17:00:00-06:00'
```

El contador contempla fecha futura, día del evento, evento pasado y fecha inválida/no configurada. `event.timeZone` controla la comparación del día.

### Cambiar fotografías

1. Copia imágenes WebP en la carpeta de la plantilla dentro de `public/assets/`.
2. Modifica `hero.image`, `introduction.image`, `locations[].image`, `gallery[]` y `closing.image`.
3. Conserva `alt`, `width` y `height` para accesibilidad y estabilidad visual.
4. Documenta la licencia en `IMAGE_SOURCES.md`.

### Cambiar música

1. Coloca un MP3 con derechos autorizados en `public/assets/audio/`.
2. Actualiza `music.file`, `music.title` y `music.artist`.
3. Documenta el origen en `AUDIO_SOURCES.md`.

### Cambiar WhatsApp

En `rsvp.phone` usa el número completo con código de país, sin `+`, espacios ni guiones. El proyecto genera automáticamente el enlace y codifica el mensaje de `rsvp.message`.

El catálogo usa un número demostrativo en `app/page.tsx`; sustitúyelo también antes de utilizar el sitio comercialmente.

### Cambiar ubicaciones

Cada elemento de `locations` acepta `kind`, `name`, `time`, `address`, `mapsUrl` e `image`. Usa una URL pública de Google Maps o Maps.

## Crear invitación para un cliente

1. Duplica el archivo de configuración más cercano al estilo deseado.
2. Cambia su `id`, textos y datos del evento.
3. Copia las fotos y música autorizadas a carpetas propias dentro de `public/assets/`.
4. Crea una composición visual propia en `components/invitation/` y conéctala desde `InvitationExperience`.
5. Añade la ruta a `src/main.tsx` y `vite.pages.config.ts` para GitHub Pages.
6. Actualiza los metadatos de título, descripción e imagen social.
7. Ejecuta lint y ambas compilaciones antes de publicar.

Para quitar la leyenda de demostración, establece `showDemoBrand: false`.

## GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` compila y publica automáticamente cada push a `main`. La base está configurada como `/invitaciones-premium/`; no cambies rutas a assets por rutas absolutas del dominio.

En GitHub, confirma una sola vez que **Settings → Pages → Source** esté en **GitHub Actions**. Después, el despliegue es automático.

## Créditos

Las fuentes fotográficas están documentadas en [IMAGE_SOURCES.md](./IMAGE_SOURCES.md) y las pistas de demostración en [AUDIO_SOURCES.md](./AUDIO_SOURCES.md).
