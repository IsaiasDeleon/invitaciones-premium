import type { Metadata } from 'next';
import { InvitationExperience } from '@/components/invitation/InvitationExperience';
import { XV_CONFIG } from '@/config/xv';

export const metadata: Metadata = {
  title: 'Mis XV · Sofía Isabella | Invitaciones Premium',
  description: 'Demo Modern Princess: una invitación digital de XV años elegante y luminosa.',
  openGraph: { title: 'Mis XV · Sofía Isabella', description: 'Una noche para recordar. 06 de marzo de 2027.', images: ['/assets/xv/quince-08-night-portrait.webp'] },
};

export default function XvPage() { return <InvitationExperience config={XV_CONFIG} />; }
