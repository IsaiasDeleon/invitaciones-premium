import type { Metadata } from 'next';
import { EsmeraldaInvitation } from '@/components/invitation/EsmeraldaInvitation';

export const metadata: Metadata = {
  title: 'Corina Esmeralda · Mis XV años',
  description: 'Una invitación para celebrar los XV años de Corina Esmeralda el 31 de octubre de 2026.',
  openGraph: { title: 'Mis XV años · Corina Esmeralda', description: '31 de octubre de 2026 · Acompáñame a celebrar.', images: ['/assets/xv/quince-08-night-portrait.webp'] },
};

export default function EsmeraldaPage() { return <EsmeraldaInvitation />; }
