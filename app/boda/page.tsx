import type { Metadata } from 'next';
import { InvitationExperience } from '@/components/invitation/InvitationExperience';
import { WEDDING_CONFIG } from '@/config/boda';

export const metadata: Metadata = {
  title: 'Boda · Valeria & Sebastián | Invitaciones Premium',
  description: 'Demo Editorial Romance: una invitación digital de boda elegante y cinematográfica.',
  openGraph: { title: 'Valeria & Sebastián · 22 de mayo de 2027', description: 'Acompáñanos a celebrar el comienzo de nuestra historia.', images: ['/assets/wedding/boda-08-pareja-bosque-editorial.webp'] },
};

export default function WeddingPage() { return <InvitationExperience config={WEDDING_CONFIG} />; }
