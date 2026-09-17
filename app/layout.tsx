import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://invitaciones-premium.isaiasdeleonsalazar.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Invitaciones Premium · BadgerSoftTech',
  description: 'Invitaciones digitales de autor para bodas, XV años y celebraciones familiares.',
  openGraph: {
    title: 'Invitaciones que se sienten antes de vivirse',
    description: 'Descubre tres experiencias digitales creadas para celebrar con intención.',
    type: 'website',
    locale: 'es_MX',
    images: ['/assets/wedding/boda-08-pareja-bosque-editorial.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitaciones que se sienten antes de vivirse',
    description: 'Invitaciones digitales de autor por BadgerSoftTech.',
    images: ['/assets/wedding/boda-08-pareja-bosque-editorial.webp'],
  },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#171712' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
