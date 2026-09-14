import { ArrowLeft, CalendarDays, Gift, MapPin, Navigation, Send, Sparkles } from 'lucide-react';
import { CalendarButtons } from '@/components/shared/CalendarButtons';
import { Countdown } from '@/components/shared/Countdown';
import { Gallery } from '@/components/shared/Gallery';
import type { InvitationConfig } from '@/config/types';

const stars = Array.from({ length: 24 });

export function XvInvitation({ config, whatsappUrl }: { config: InvitationConfig; whatsappUrl: string }) {
  return (
    <div className="xv-experience">
      <nav className="xv-nav" aria-label="Navegación de la invitación"><a href="../"><ArrowLeft aria-hidden="true" /> Catálogo</a><span>XV</span><a href={whatsappUrl} target="_blank" rel="noreferrer">RSVP</a></nav>

      <header className="xv-hero">
        <div className="xv-stars" aria-hidden="true">{stars.map((_, index) => <i key={index} />)}</div>
        <div className="xv-orbit orbit-one" aria-hidden="true" /><div className="xv-orbit orbit-two" aria-hidden="true" />
        <figure><img src={config.hero.image.src} alt={config.hero.image.alt} width={config.hero.image.width} height={config.hero.image.height} /></figure>
        <div className="xv-hero-copy">
          <p>Una noche encantada</p><span>Mis</span><h1><strong>{config.hero.title[0]}</strong><em>{config.hero.title[1]}</em></h1>
          <div><time>{config.hero.date}</time><blockquote>{config.hero.quote}</blockquote></div>
        </div>
        <p className="xv-hero-mark" aria-hidden="true">15</p>
      </header>

      <section className="xv-dream" id="historia">
        <div className="xv-dream-copy" data-reveal><Sparkles aria-hidden="true" /><p>{config.introduction.kicker}</p><h2>{config.introduction.title}</h2><span>{config.introduction.body}</span></div>
        <div className="xv-dream-photos" data-reveal>
          <figure><img src={config.introduction.image.src} alt={config.introduction.image.alt} width={config.introduction.image.width} height={config.introduction.image.height} loading="lazy" /></figure>
          <figure><img src={config.gallery[3].src} alt={config.gallery[3].alt} width={config.gallery[3].width} height={config.gallery[3].height} loading="lazy" /></figure>
          <i aria-hidden="true">XV</i>
        </div>
      </section>

      <section className="xv-family">
        <div className="xv-stars quiet" aria-hidden="true">{stars.slice(0, 12).map((_, index) => <i key={index} />)}</div>
        <header data-reveal><p>Mi constelación</p><h2>{config.hosts.label}</h2></header>
        <div>{config.hosts.groups.map((group) => <article key={group.role} data-reveal><span>{group.role}</span>{group.names.map((name) => <h3 key={name}>{name}</h3>)}</article>)}</div>
      </section>

      <section className="xv-date" id="fecha">
        <div className="xv-date-glow" aria-hidden="true" />
        <header data-reveal><span>06</span><div><p>Marzo</p><h2>La noche que<br />siempre imaginé</h2><time>2027</time></div></header>
        <div className="xv-countdown" data-reveal><Countdown startsAt={config.event.startsAt} timeZone={config.event.timeZone} /><CalendarButtons event={{ startsAt: config.event.startsAt, title: config.event.calendarTitle, description: config.event.calendarDescription, durationHours: config.event.durationHours, location: config.locations.map((location) => location.name).join(' · ') }} /></div>
      </section>

      <section className="xv-places" id="lugares">
        <header data-reveal><p>Los escenarios</p><h2>Donde la magia<br />cobra vida</h2></header>
        <div className="xv-place-list">{config.locations.map((location, index) => <article key={location.kind} className={`xv-place xv-place-${index + 1}`} data-reveal>
          <figure><img src={location.image.src} alt={location.image.alt} width={location.image.width} height={location.image.height} loading="lazy" /></figure>
          <div><span>0{index + 1} · {location.kind}</span><h3>{location.name}</h3><time>{location.time}</time><address>{location.address}</address><nav><a href={location.mapsUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> Ubicación</a><a href={location.mapsUrl} target="_blank" rel="noreferrer">Ruta <Navigation aria-hidden="true" /></a></nav></div>
        </article>)}</div>
      </section>

      <section className="xv-itinerary">
        <div className="xv-itinerary-title" data-reveal><span>Una noche</span><h2>para<br /><em>brillar</em></h2></div>
        <ol>{config.itinerary.map((item, index) => <li key={`${item.time}-${item.title}`} data-reveal><span>{String(index + 1).padStart(2, '0')}</span><div><time>{item.time}</time><h3>{item.title}</h3>{item.detail && <p>{item.detail}</p>}</div></li>)}</ol>
      </section>

      <section className="xv-gallery-section" id="galeria">
        <header data-reveal><p>Destellos de esta historia</p><h2>Dream in<br /><em>full color</em></h2></header>
        <Gallery images={config.gallery} variant="xv" />
      </section>

      <section className="xv-details">
        <article className="xv-dress" data-reveal><Sparkles aria-hidden="true" /><span>Dress code</span><h2>{config.dressCode.title}</h2><p>{config.dressCode.description}</p>{config.dressCode.reservedColors && <div>{config.dressCode.reservedColors.map((color) => <i key={color}>{color}</i>)}</div>}</article>
        {config.gifts.active && <article className="xv-gifts" data-reveal><Gift aria-hidden="true" /><span>Un detalle para recordar</span><h2>Mesa de regalos</h2><p>{config.gifts.intro}</p>{config.gifts.options.map((option) => <div key={option.name}><strong>{option.name}</strong><small>{option.detail}</small></div>)}</article>}
      </section>

      <section className="xv-rsvp" id="confirmar">
        <div className="xv-stars" aria-hidden="true">{stars.map((_, index) => <i key={index} />)}</div>
        <CalendarDays aria-hidden="true" /><p>Guarda una estrella para esta noche</p><h2>Quiero<br />celebrar <em>contigo</em></h2><span>Confirma antes del {config.rsvp.deadline}</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Confirmar asistencia <Send aria-hidden="true" /></a>
      </section>

      <footer className="xv-closing"><img src={config.closing.image.src} alt={config.closing.image.alt} width={config.closing.image.width} height={config.closing.image.height} loading="lazy" /><div data-reveal><p>{config.closing.line}</p><strong>{config.closing.signature}</strong></div><span>Demo · BadgerSoftTech</span></footer>
    </div>
  );
}
