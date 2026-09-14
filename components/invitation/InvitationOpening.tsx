import { Sparkles, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { InvitationConfig } from '@/config/types';

export function InvitationOpening({ config, onOpen }: { config: InvitationConfig; onOpen: () => void }) {
  return (
    <section className={`invitation-opening opening-${config.variant}`} aria-label="Portada de la invitación">
      <img src={config.hero.image.src} alt="" aria-hidden="true" />
      <div className="opening-atmosphere" aria-hidden="true" />
      <div className="opening-ornament" aria-hidden="true"><span>{config.hero.monogram}</span></div>
      <div className="opening-content">
        <p>{config.opening.eyebrow}</p>
        <h1>{config.opening.title}</h1>
        <p className="opening-sound"><Volume2 aria-hidden="true" /> {config.opening.note}</p>
        <Button type="button" className="open-button" onClick={onOpen}>Abrir invitación <Sparkles aria-hidden="true" /></Button>
      </div>
    </section>
  );
}
