'use client';

import { useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, CalendarDays, Gift, Heart, MapPin, Navigation, Send, Sparkles, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CalendarButtons } from '@/components/shared/CalendarButtons';
import { Countdown } from '@/components/shared/Countdown';
import { Gallery } from '@/components/shared/Gallery';
import { MusicPlayer } from '@/components/shared/MusicPlayer';
import { RevealObserver } from '@/components/shared/RevealObserver';
import type { InvitationConfig } from '@/config/types';

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return <header className="invitation-heading" data-reveal><p>{kicker}</p><h2>{title}</h2><i aria-hidden="true" /></header>;
}

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
      {!opened && (
        <section className="opening-screen" aria-label="Portada de la invitación">
          <img src={config.hero.image.src} alt="" aria-hidden="true" />
          <div className="opening-shade" />
          <div className="opening-frame" aria-hidden="true"><span>{config.hero.monogram}</span></div>
          <div className="opening-copy">
            <p>{config.opening.eyebrow}</p>
            <h1>{config.opening.title}</h1>
            <p className="opening-note"><Volume2 aria-hidden="true" /> {config.opening.note}</p>
            <Button type="button" className="open-button" onClick={openInvitation}>Abrir invitación <Sparkles aria-hidden="true" /></Button>
          </div>
        </section>
      )}

      <div className="invitation-body" aria-hidden={!opened} inert={!opened}>
        <header className="invitation-topbar">
          <a href="../" aria-label="Volver al catálogo"><ArrowLeft aria-hidden="true" /> Catálogo</a>
          <span>{config.hero.monogram}</span>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">Confirmar</a>
        </header>

        <section className="invitation-hero" id="portada">
          <img src={config.hero.image.src} alt={config.hero.image.alt} width={config.hero.image.width} height={config.hero.image.height} />
          <div className="hero-veil" />
          {config.variant === 'xv' && <div className="sparkle-field" aria-hidden="true">{Array.from({ length: 16 }, (_, index) => <i key={index} />)}</div>}
          <div className="invitation-hero-copy">
            <p>{config.hero.eyebrow}</p>
            <h1>{config.hero.title.map((line, index) => <span key={`${line}-${index}`}>{line}</span>)}</h1>
            <div className="hero-date">{config.hero.date}</div>
            <blockquote>{config.hero.quote}</blockquote>
          </div>
          <a className="invitation-scroll" href="#historia" aria-label="Continuar a la historia"><span>Descubrir</span><ArrowDown aria-hidden="true" /></a>
        </section>

        <section className="story-section section-space" id="historia">
          <div className="story-image" data-reveal>
            <img src={config.introduction.image.src} alt={config.introduction.image.alt} width={config.introduction.image.width} height={config.introduction.image.height} loading="lazy" />
            <span aria-hidden="true">{config.hero.monogram}</span>
          </div>
          <div className="story-copy" data-reveal>
            <p>{config.introduction.kicker}</p>
            <h2>{config.introduction.title}</h2>
            <p>{config.introduction.body}</p>
          </div>
        </section>

        <section className="hosts-section section-space">
          <SectionHeading kicker="Nuestros vínculos" title={config.hosts.label} />
          <div className="hosts-grid">
            {config.hosts.groups.map((group) => <div key={group.role} data-reveal><Heart aria-hidden="true" /><p>{group.role}</p>{group.names.map((name) => <strong key={name}>{name}</strong>)}</div>)}
          </div>
        </section>

        <section className="date-section section-space" id="fecha">
          <div className="date-monogram" aria-hidden="true">{config.variant === 'xv' ? '15' : config.variant === 'wedding' ? '22' : '30'}</div>
          <SectionHeading kicker="Save the date" title={config.hero.date} />
          <Countdown startsAt={config.event.startsAt} timeZone={config.event.timeZone} />
          <CalendarButtons event={{ startsAt: config.event.startsAt, title: config.event.calendarTitle, description: config.event.calendarDescription, durationHours: config.event.durationHours, location: config.locations.map((location) => location.name).join(' · ') }} />
        </section>

        <section className="locations-section section-space" id="lugares">
          <SectionHeading kicker="Dónde encontrarnos" title="Los lugares de este día" />
          <div className="locations-grid">
            {config.locations.map((location, index) => (
              <article key={location.kind} className="location-panel" data-reveal>
                <img src={location.image.src} alt={location.image.alt} width={location.image.width} height={location.image.height} loading="lazy" />
                <div className="location-overlay" />
                <div className="location-copy">
                  <span>0{index + 1}</span><p>{location.kind}</p><h3>{location.name}</h3><time>{location.time}</time><address>{location.address}</address>
                  <div className="location-actions">
                    <a href={location.mapsUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> Ver ubicación</a>
                    <a href={location.mapsUrl} target="_blank" rel="noreferrer">Cómo llegar <Navigation aria-hidden="true" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="itinerary-section section-space">
          <SectionHeading kicker="El ritmo de la celebración" title="Nuestro itinerario" />
          <ol className="itinerary">
            {config.itinerary.map((item, index) => <li key={`${item.time}-${item.title}`} data-reveal><span>{String(index + 1).padStart(2, '0')}</span><time>{item.time}</time><div><h3>{item.title}</h3>{item.detail && <p>{item.detail}</p>}</div></li>)}
          </ol>
        </section>

        <section className="gallery-section section-space" id="galeria">
          <SectionHeading kicker="Instantes y atmósferas" title={config.variant === 'wedding' ? 'Nuestra galería' : 'Un vistazo al sueño'} />
          <Gallery images={config.gallery} />
        </section>

        <section className="details-section section-space">
          <article className="dress-panel" data-reveal>
            <span aria-hidden="true">✦</span><p>Código de vestimenta</p><h2>{config.dressCode.title}</h2><p>{config.dressCode.description}</p>
            {config.dressCode.reservedColors && <div className="reserved-colors"><strong>Colores reservados</strong>{config.dressCode.reservedColors.map((color) => <span key={color}>{color}</span>)}</div>}
          </article>
          {config.gifts.active && <article className="gifts-panel" data-reveal>
            <Gift aria-hidden="true" /><p>Detalles con intención</p><h2>Mesa de regalos</h2><p>{config.gifts.intro}</p>
            <div>{config.gifts.options.map((option) => <span key={option.name}><strong>{option.name}</strong><small>{option.detail}</small></span>)}</div>
          </article>}
        </section>

        <section className="rsvp-section section-space" id="confirmar">
          <CalendarDays aria-hidden="true" />
          <p className="rsvp-kicker">Nos encantará contar contigo</p>
          <h2>¿Celebramos juntos?</h2>
          <p>Confirma antes del <strong>{config.rsvp.deadline}</strong>.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">Confirmar asistencia <Send aria-hidden="true" /></a>
          <small>Número de demostración. Personalízalo en el archivo de configuración.</small>
        </section>

        <section className="closing-section">
          <img src={config.closing.image.src} alt={config.closing.image.alt} width={config.closing.image.width} height={config.closing.image.height} loading="lazy" />
          <div className="closing-overlay" />
          <div data-reveal><p>{config.closing.line}</p><strong>{config.closing.signature}</strong></div>
        </section>

        {config.showDemoBrand && <footer className="demo-footer"><span>Demo · BadgerSoftTech</span><a href="../">Ver otras invitaciones</a></footer>}
      </div>
      <MusicPlayer audioRef={audioRef} {...config.music} />
    </main>
  );
}
