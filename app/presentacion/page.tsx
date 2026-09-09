import type { Metadata } from 'next';
import { InvitationExperience } from '@/components/invitation/InvitationExperience';
import { PRESENTATION_CONFIG } from '@/config/presentacion';

export const metadata: Metadata = {
  title: 'Presentación de Mateo | Invitaciones Premium',
  description: 'Demo Soft Heirloom: una invitación digital familiar, delicada y cálida.',
  openGraph: { title: 'Mi presentación · Mateo', description: 'Acompáñanos a celebrar un día lleno de gratitud.', images: ['/assets/presentation/presentacion-01-manos-familia-bebe.webp'] },
};

export default function PresentationPage() { return <InvitationExperience config={PRESENTATION_CONFIG} />; }
