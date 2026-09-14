import { ArrowDown, ArrowLeft, CalendarDays, Gift, Heart, MapPin, Navigation, Send } from 'lucide-react';
import { CalendarButtons } from '@/components/shared/CalendarButtons';
import { Countdown } from '@/components/shared/Countdown';
import { Gallery } from '@/components/shared/Gallery';
import type { InvitationConfig } from '@/config/types';

export function WeddingInvitation({ config, whatsappUrl }: { config: InvitationConfig; whatsappUrl: string }) {
  return (
    <div className="wedding-experience">
      <nav className="wedding-nav" aria-label="Navegación de la invitación">
        <a href="../"><ArrowLeft aria-hidden="true" /> Volver al catálogo</a>
        <span>{config.hero.monogram}</span>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">Confirmar</a>
      </nav>

      <header className="wedding-hero">
        <div className="wedding-hero-photo"><img src={config.hero.image.src} alt={config.hero.image.alt} width={config.hero.image.width} height={config.hero.image.height} /></div>
        <div className="wedding-hero-panel">
          <p>{config.hero.eyebrow}</p>
          <h1><span>{config.hero.title[0]}</span><i>&amp;</i><span>{config.hero.title[2]}</span></h1>
          <div className="wedding-hero-meta"><time>{config.hero.date}</time><span>Querétaro, México</span></div>
          <blockquote>{config.hero.quote}</blockquote>
        </div>
        <a className="wedding-scroll" href="#historia"><span>Descubrir</span><ArrowDown aria-hidden="true" /></a>
      </header>

      <section className="wedding-story" id="historia">
        <div className="wedding-story-number" aria-hidden="true">I</div>
        <div className="wedding-story-copy" data-reveal>
          <p>{config.introduction.kicker}</p><h2>{config.introduction.title}</h2><div className="wedding-rule" /><p>{config.introduction.body}</p>
        </div>
        <figure className="wedding-story-photo" data-reveal>
          <img src={config.introduction.image.src} alt={config.introduction.image.alt} width={config.introduction.image.width} height={config.introduction.image.height} loading="lazy" />
          <figcaption>V &amp; S · Una historia para siempre</figcaption>
        </figure>
      </section>

      <section className="wedding-families">
        <div className="wedding-section-mark" data-reveal><span>Con la bendición de</span><strong>Nuestras familias</strong></div>
        <div className="wedding-family-names">
          {config.hosts.groups.map((group) => <article key={group.role} data-reveal><Heart aria-hidden="true" /><p>{group.role}</p>{group.names.map((name) => <h3 key={name}>{name}</h3>)}</article>)}
        </div>
      </section>

      <section className="wedding-date" id="fecha">
        <div className="wedding-date-intro" data-reveal><p>Save the date</p><h2>Veintidós<br />de mayo</h2><span>Dos mil veintisiete</span></div>
        <div className="wedding-date-tools" data-reveal>
          <time>{config.hero.date}</time>
          <Countdown startsAt={config.event.startsAt} timeZone={config.event.timeZone} />
          <CalendarButtons event={{ startsAt: config.event.startsAt, title: config.event.calendarTitle, description: config.event.calendarDescription, durationHours: config.event.durationHours, location: config.locations.map((location) => location.name).join(' · ') }} />
        </div>
      </section>

      <section className="wedding-places" id="lugares">
        <header data-reveal><p>II · El lugar</p><h2>Dos escenarios.<br /><em>Una sola promesa.</em></h2></header>
        <div className="wedding-place-list">
          {config.locations.map((location, index) => <article key={location.kind} className={`wedding-place place-${index + 1}`} data-reveal>
            <img src={location.image.src} alt={location.image.alt} width={location.image.width} height={location.image.height} loading="lazy" />
            <div><span>0{index + 1}</span><p>{location.kind}</p><h3>{location.name}</h3><time>{location.time}</time><address>{location.address}</address>
              <nav><a href={location.mapsUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> Ver ubicación</a><a href={location.mapsUrl} target="_blank" rel="noreferrer">Cómo llegar <Navigation aria-hidden="true" /></a></nav>
            </div>
          </article>)}
        </div>
      </section>

      <section className="wedding-itinerary">
        <header data-reveal><p>III · La celebración</p><h2>El ritmo del día</h2></header>
        <ol>{config.itinerary.map((item, index) => <li key={`${item.time}-${item.title}`} data-reveal><span>0{index + 1}</span><time>{item.time}</time><h3>{item.title}</h3>{item.detail && <p>{item.detail}</p>}</li>)}</ol>
      </section>

      <section className="wedding-gallery-section" id="galeria">
        <header data-reveal><p>IV · Instantes</p><h2>Una historia<br />en fotografías</h2></header>
        <Gallery images={config.gallery} variant="wedding" />
      </section>

      <section className="wedding-details">
        <article className="wedding-dress" data-reveal><span>V · Dress code</span><h2>{config.dressCode.title}</h2><p>{config.dressCode.description}</p></article>
        {config.gifts.active && <article className="wedding-gifts" data-reveal><Gift aria-hidden="true" /><span>Un detalle opcional</span><h2>Mesa de regalos</h2><p>{config.gifts.intro}</p><div>{config.gifts.options.map((option) => <p key={option.name}><strong>{option.name}</strong><small>{option.detail}</small></p>)}</div></article>}
      </section>

      <section className="wedding-rsvp" id="confirmar">
        <img src={config.locations[1].image.src} alt="" aria-hidden="true" loading="lazy" />
        <div className="wedding-rsvp-card" data-reveal><CalendarDays aria-hidden="true" /><p>Nos encantará contar contigo</p><h2>¿Celebramos<br /><em>juntos?</em></h2><span>Confirma antes del {config.rsvp.deadline}</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Confirmar asistencia <Send aria-hidden="true" /></a></div>
      </section>

      <footer className="wedding-closing">
        <img src={config.closing.image.src} alt={config.closing.image.alt} width={config.closing.image.width} height={config.closing.image.height} loading="lazy" />
        <div data-reveal><p>{config.closing.line}</p><strong>{config.closing.signature}</strong></div>
        <span>Demo · BadgerSoftTech</span>
      </footer>
    </div>
  );
}
