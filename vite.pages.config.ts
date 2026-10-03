import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const publicUrl = 'https://isaiasdeleon.github.io/invitaciones-premium';
const pages = [
  { route: '', title: 'Invitaciones Premium · BadgerSoftTech', description: 'Invitaciones digitales de autor para bodas, XV años y celebraciones familiares.', image: 'assets/wedding/boda-08-pareja-bosque-editorial.webp', theme: '#171712' },
  { route: 'boda', title: 'Valeria & Sebastián · Boda', description: 'Demo Editorial Romance: una invitación digital de boda elegante y cinematográfica.', image: 'assets/wedding/boda-08-pareja-bosque-editorial.webp', theme: '#1e2b27' },
  { route: 'xv', title: 'Mis XV · Sofía Isabella', description: 'Demo Enchanted Night: una invitación digital de XV años elegante y cinematográfica.', image: 'assets/xv/quince-08-night-portrait.webp', theme: '#140912' },
  { route: 'esmeralda', title: 'Corina Esmeralda · Mis XV años', description: 'Una invitación en tonos esmeralda para celebrar los XV años de Corina Esmeralda el 31 de octubre de 2026.', image: 'assets/xv/quince-08-night-portrait.webp', theme: '#14463c' },
  { route: 'presentacion', title: 'Mi presentación · Mateo', description: 'Demo Soft Heirloom: una invitación digital familiar, delicada y cálida.', image: 'assets/presentation/presentacion-01-manos-familia-bebe.webp', theme: '#27424a' },
];

function staticRoutes(): Plugin {
  return {
    name: 'static-invitation-routes',
    closeBundle() {
      const output = path.join(projectRoot, 'pages-dist');
      const source = fs.readFileSync(path.join(output, 'index.html'), 'utf8');
      const render = (page: (typeof pages)[number]) => source
        .replaceAll(pages[0].title, page.title)
        .replaceAll(pages[0].description, page.description)
        .replaceAll(`${publicUrl}/${pages[0].image}`, `${publicUrl}/${page.image}`)
        .replace(`content="${publicUrl}/"`, `content="${publicUrl}/${page.route}"`)
        .replaceAll(pages[0].theme, page.theme);
      pages.forEach((page) => {
        if (!page.route) { fs.writeFileSync(path.join(output, 'index.html'), render(page)); return; }
        const directory = path.join(output, page.route);
        fs.mkdirSync(directory, { recursive: true });
        fs.writeFileSync(path.join(directory, 'index.html'), render(page));
      });
      fs.writeFileSync(path.join(output, '404.html'), render(pages[0]));
    },
  };
}

export default defineConfig({
  base: '/invitaciones-premium/',
  plugins: [react(), staticRoutes()],
  css: { postcss: { plugins: [tailwindcss()] } },
  resolve: { alias: { '@': projectRoot } },
  build: { outDir: 'pages-dist', emptyOutDir: true },
});
