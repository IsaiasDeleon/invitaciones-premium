'use client';

import { useRef, useState } from 'react';
import { InvitationOpening } from '@/components/invitation/InvitationOpening';
import { PresentationInvitation } from '@/components/invitation/PresentationInvitation';
import { WeddingInvitation } from '@/components/invitation/WeddingInvitation';
import { XvInvitation } from '@/components/invitation/XvInvitation';
import { MusicPlayer } from '@/components/shared/MusicPlayer';
import { RevealObserver } from '@/components/shared/RevealObserver';
import type { InvitationConfig } from '@/config/types';

export function InvitationExperience({ config }: { config: InvitationConfig }) {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const whatsappUrl = `https://wa.me/${config.rsvp.phone}?text=${encodeURIComponent(config.rsvp.message)}`;

  const openInvitation = async () => {
    setOpened(true);
    const audio = audioRef.current;
    if (audio) { audio.volume = .55; await audio.play().catch(() => undefined); }
  };

  return (
    <main className={`invitation invitation-${config.variant}${opened ? ' is-open' : ''}`}>
      <RevealObserver trigger={opened} />
      {!opened && <InvitationOpening config={config} onOpen={openInvitation} />}
      <div className="invitation-body" aria-hidden={!opened} inert={!opened}>
        {config.variant === 'wedding' && <WeddingInvitation config={config} whatsappUrl={whatsappUrl} />}
        {config.variant === 'xv' && <XvInvitation config={config} whatsappUrl={whatsappUrl} />}
        {config.variant === 'presentation' && <PresentationInvitation config={config} whatsappUrl={whatsappUrl} />}
      </div>
      <MusicPlayer audioRef={audioRef} {...config.music} variant={config.variant} />
    </main>
  );
}
