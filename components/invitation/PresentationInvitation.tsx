import { ArrowLeft, CalendarDays, Gift, Heart, MapPin, Navigation, Send } from 'lucide-react';
import { CalendarButtons } from '@/components/shared/CalendarButtons';
import { Countdown } from '@/components/shared/Countdown';
import { Gallery } from '@/components/shared/Gallery';
import type { InvitationConfig } from '@/config/types';

function BotanicalSprig({ className = '' }: { className?: string }) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 120 180" fill="none"><path d="M26 169C64 126 73 77 83 10" /><path d="M52 126C34 120 23 106 18 91C39 92 52 104 52 126Z" /><path d="M68 88C91 83 105 68 111 48C87 50 71 66 68 88Z" /><path d="M75 53C58 44 50 29 50 14C69 20 78 34 75 53Z" /></svg>;
}

export function PresentationInvitation({ config, whatsappUrl }: { config: InvitationConfig; whatsappUrl: string }) {
  return (
    <div className="presentation-experience">
      <nav className="presentation-nav" aria-label="Navegación de la invitación"><a href="../"><ArrowLeft aria-hidden="true" /> Volver</a><span>El álbum de Mateo</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Confirmar</a></nav>

      <header className="presentation-hero">
        <BotanicalSprig className="sprig sprig-one" /><BotanicalSprig className="sprig sprig-two" />
        <div className="presentation-hero-copy" data-reveal><p>Con mucha alegría celebramos</p><span>La presentación de</span><h1>{config.hero.displayName}</h1><blockquote>{config.hero.quote}</blockquote><time>{config.hero.date}</time></div>
        <figure className="presentation-hero-photo"><div className="paper-tape" aria-hidden="true" /><img src={config.hero.image.src} alt={config.hero.image.alt} width={config.hero.image.width} height={config.hero.image.height} /><figcaption>Una historia de amor familiar · 2027</figcaption></figure>
        <p className="presentation-handwritten" aria-hidden="true">nuestro pequeño gran milagro</p>
      </header>

      <section className="presentation-letter" id="historia">
        <div className="presentation-letter-copy" data-reveal><span>{config.introduction.kicker}</span><h2>{config.introduction.title}</h2><p>{config.introduction.body}</p><strong>Con amor, mamá y papá</strong></div>
        <div className="presentation-letter-photos" data-reveal>
          <figure><div className="paper-tape" aria-hidden="true" /><img src={config.introduction.image.src} alt={config.introduction.image.alt} width={config.introduction.image.width} height={config.introduction.image.height} loading="lazy" /></figure>
          <figure><img src={config.gallery[6].src} alt={config.gallery[6].alt} width={config.gallery[6].width} height={config.gallery[6].height} loading="lazy" /><figcaption>pequeños pasos</figcaption></figure>
        </div>
      </section>

      <section className="presentation-family">
        <BotanicalSprig className="sprig" />
        <header data-reveal><p>Nuestra familia</p><h2>{config.hosts.label}</h2></header>
        <div>{config.hosts.groups.map((group) => <article key={group.role} data-reveal><Heart aria-hidden="true" /><span>{group.role}</span>{group.names.map((name) => <h3 key={name}>{name}</h3>)}</article>)}</div>
      </section>

      <section className="presentation-date" id="fecha">
        <div className="presentation-date-card" data-reveal><span>Save the date</span><p className="presentation-day">30</p><h2>Enero</h2><p>sábado · doce del día · 2027</p></div>
        <div className="presentation-date-tools" data-reveal><p>Faltan muy poquitos días</p><Countdown startsAt={config.event.startsAt} timeZone={config.event.timeZone} /><CalendarButtons event={{ startsAt: config.event.startsAt, title: config.event.calendarTitle, description: config.event.calendarDescription, durationHours: config.event.durationHours, location: config.locations.map((location) => location.name).join(' · ') }} /></div>
      </section>

      <section className="presentation-places" id="lugares">
        <header data-reveal><span>Nuestras coordenadas</span><h2>Los lugares que guardarán este recuerdo</h2></header>
        <div className="presentation-postcards">{config.locations.map((location, index) => <article key={location.kind} className={`presentation-postcard postcard-${index + 1}`} data-reveal>
          <figure><img src={location.image.src} alt={location.image.alt} width={location.image.width} height={location.image.height} loading="lazy" /><span>{String(index + 1).padStart(2, '0')}</span></figure>
          <div><p>{location.kind}</p><h3>{location.name}</h3><time>{location.time}</time><address>{location.address}</address><nav><a href={location.mapsUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> Ver mapa</a><a href={location.mapsUrl} target="_blank" rel="noreferrer">Cómo llegar <Navigation aria-hidden="true" /></a></nav></div>
        </article>)}</div>
      </section>

      <section className="presentation-itinerary">
        <header data-reveal><span>Capítulos del día</span><h2>Un domingo para guardar</h2></header>
        <ol>{config.itinerary.map((item, index) => <li key={`${item.time}-${item.title}`} data-reveal><span>{index + 1}</span><time>{item.time}</time><div><h3>{item.title}</h3>{item.detail && <p>{item.detail}</p>}</div></li>)}</ol>
      </section>

      <section className="presentation-gallery-section" id="galeria">
        <div className="presentation-gallery-title" data-reveal><span>Recuerdos de familia</span><h2>Nuestro pequeño álbum</h2><p>Instantes cotidianos que queremos conservar para siempre.</p></div>
        <Gallery images={config.gallery} variant="presentation" />
      </section>

      <section className="presentation-details">
        <article className="presentation-dress" data-reveal><span>Para sentirnos en casa</span><h2>{config.dressCode.title}</h2><p>{config.dressCode.description}</p></article>
        {config.gifts.active && <article className="presentation-gifts" data-reveal><Gift aria-hidden="true" /><span>Si deseas traer un detalle</span><h2>Una página para Mateo</h2><p>{config.gifts.intro}</p><div>{config.gifts.options.map((option) => <p key={option.name}><strong>{option.name}</strong><small>{option.detail}</small></p>)}</div></article>}
      </section>

      <section className="presentation-rsvp" id="confirmar">
        <BotanicalSprig className="sprig" /><div data-reveal><CalendarDays aria-hidden="true" /><p>Qué alegría compartirlo contigo</p><h2>Te esperamos<br />con el corazón abierto</h2><span>Confirma antes del {config.rsvp.deadline}</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Confirmar asistencia <Send aria-hidden="true" /></a></div>
      </section>

      <footer className="presentation-closing"><figure><img src={config.closing.image.src} alt={config.closing.image.alt} width={config.closing.image.width} height={config.closing.image.height} loading="lazy" /><div className="paper-tape" aria-hidden="true" /></figure><div data-reveal><p>{config.closing.line}</p><strong>{config.closing.signature}</strong></div><span>Un recuerdo digital · BadgerSoftTech</span></footer>
    </div>
  );
}
