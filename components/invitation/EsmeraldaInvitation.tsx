'use client';

import { useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Church, Crown, Gift, Heart, Music2, PartyPopper, Sparkles, Utensils } from 'lucide-react';
import { Countdown } from '@/components/shared/Countdown';
import { Gallery } from '@/components/shared/Gallery';
import { MusicPlayer } from '@/components/shared/MusicPlayer';
import { RevealObserver } from '@/components/shared/RevealObserver';
import { ESMERALDA } from '@/config/esmeralda';

const itineraryIcons = [Church, PartyPopper, Sparkles, Utensils, Crown, Music2];
const whatsapp = () => {
  const recipient = ESMERALDA.rsvp.phone.trim().replace(/\D/g, '');
  const message = encodeURIComponent(ESMERALDA.rsvp.message);
  return `https://wa.me/${recipient}?text=${message}`;
};

export function EsmeraldaInvitation() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const openInvitation = async () => {
    setOpened(true);
    if (audioRef.current) { audioRef.current.volume = .5; await audioRef.current.play().catch(() => undefined); }
  };

  return (
    <main className={`esmeralda-page${opened ? ' is-open' : ''}`}>
      <RevealObserver trigger={opened} />
      {!opened && <section className="es-opening" aria-label="Abrir invitación">
        <div className="es-envelope" aria-hidden="true"><span>CE</span></div>
        <p className="es-kicker">Una celebración para recordar</p>
        <p className="es-opening-label">MIS XV AÑOS</p>
        <h1>Corina <em>Esmeralda</em></h1>
        <time>{ESMERALDA.date}</time>
        <button className="es-button es-open-button" type="button" onClick={openInvitation}>Abrir invitación <ArrowDown size={15} /></button>
        <span className="es-opening-flourish" aria-hidden="true">✳</span>
      </section>}

      <div className="es-content" aria-hidden={!opened} inert={!opened}>
        <nav className="es-nav" aria-label="Navegación de la invitación"><a href="#inicio">Corina Esmeralda</a><div><a href="#fecha">La fecha</a><a href="#itinerario">Itinerario</a><a href="#confirmacion">RSVP</a></div><a className="es-nav-cta" href="#confirmacion">Acompáñame <ArrowUpRight size={14} /></a></nav>

        <header className="es-hero" id="inicio">
          <div className="es-hero-copy"><p className="es-kicker">MIS XV AÑOS · UNA NUEVA ETAPA</p><h1>Corina<br /><em>Esmeralda</em></h1><div className="es-hero-date"><span>31 DE OCTUBRE</span><i /><span>2026</span></div><p className="es-hero-quote">“Hay momentos en la vida que soñamos, imaginamos y esperamos. Hoy ha llegado uno de ellos y quiero compartirlo contigo.”</p><a href="#historia" className="es-scroll">Descubre la invitación <ArrowDown size={14} /></a></div>
          <figure className="es-hero-image"><img src={ESMERALDA.photos[0].src} alt={ESMERALDA.photos[0].alt} width={ESMERALDA.photos[0].width} height={ESMERALDA.photos[0].height} fetchPriority="high" /><figcaption>RETRATO DE INSPIRACIÓN</figcaption></figure>
          <span className="es-hero-index" aria-hidden="true">XV</span>
        </header>

        <section className="es-story" id="historia">
          <div className="es-story-mark" data-reveal><span>Una fecha.<br />Una historia.<br /><em>Un sueño.</em></span><i>CE</i></div>
          <div className="es-story-copy" data-reveal><p className="es-kicker">CON TODO MI CARIÑO</p><h2>Quiero compartir<br />este día <em>contigo.</em></h2><p>Con gran alegría quiero invitarte a celebrar conmigo uno de los días más especiales de mi vida.</p><p>Mis XV años representan el comienzo de una nueva etapa llena de sueños, ilusiones y momentos por descubrir.</p><p>Será un honor contar con tu presencia y compartir juntos este recuerdo que guardaré para siempre.</p></div>
          <figure className="es-story-photo" data-reveal><img src={ESMERALDA.photos[1].src} alt={ESMERALDA.photos[1].alt} width={ESMERALDA.photos[1].width} height={ESMERALDA.photos[1].height} loading="lazy" /></figure>
        </section>

        <section className="es-family"><div className="es-family-inner" data-reveal><p className="es-kicker">MI FAMILIA, MI RAÍZ</p><h2>Con la bendición y<br />el cariño de mi mamá</h2><p className="es-family-name">{ESMERALDA.family.mother}</p><span className="es-family-divider"><i /><Heart size={13} /><i /></span><p className="es-kicker">Y acompañada en este momento tan especial por mis padrinos</p><div className="es-godparents"><p>{ESMERALDA.family.godmother}<span>Madrina</span></p><b>&amp;</b><p>{ESMERALDA.family.godfather}<span>Padrino</span></p></div></div><span className="es-family-ornament" aria-hidden="true">❧</span></section>

        <section className="es-gallery-section"><header data-reveal><p className="es-kicker">UN SUEÑO QUE FLORECE</p><h2>Fragmentos de<br /><em>una historia</em></h2><span>Imágenes editoriales de inspiración</span></header><Gallery images={[...ESMERALDA.photos]} variant="esmeralda" /></section>

        <section className="es-date" id="fecha"><div className="es-date-card" data-reveal><p className="es-kicker">SAVE THE DATE</p><p className="es-date-saturday">SÁBADO</p><strong>31</strong><p className="es-date-month">OCTUBRE <i>·</i> 2026</p><span>Reserva esta fecha y acompáñame<br />a celebrar.</span><div className="es-countdown"><Countdown startsAt={ESMERALDA.startsAt} timeZone={ESMERALDA.timeZone} /></div></div><div className="es-date-aside" data-reveal><Sparkles size={19} /><p>Quince años.<br /><em>Todo por descubrir.</em></p><span>31 · 10 · 2026</span></div></section>

        <section className="es-venues"><header data-reveal><p className="es-kicker">DOS MOMENTOS, UN DÍA INOLVIDABLE</p><h2>La celebración</h2><p>Con la bendición de Dios comenzaré este día tan especial.</p></header><div className="es-venue-grid">
          <article className="es-venue" data-reveal><figure><img src={ESMERALDA.ceremony.image.src} alt={ESMERALDA.ceremony.image.alt} width={ESMERALDA.ceremony.image.width} height={ESMERALDA.ceremony.image.height} loading="lazy" /><span>01 · CEREMONIA</span></figure><div><p className="es-kicker">CEREMONIA RELIGIOSA</p><h3>{ESMERALDA.ceremony.name}</h3><time>{ESMERALDA.ceremony.time}</time><a href={ESMERALDA.ceremony.mapsUrl} target="_blank" rel="noreferrer">Ver ubicación <ArrowUpRight size={14} /></a></div></article>
          <article className="es-venue es-venue-reception" data-reveal><figure><img src={ESMERALDA.reception.image.src} alt={ESMERALDA.reception.image.alt} width={ESMERALDA.reception.image.width} height={ESMERALDA.reception.image.height} loading="lazy" /><span>02 · RECEPCIÓN</span></figure><div><p className="es-kicker">DESPUÉS DE LA CEREMONIA</p><h3>{ESMERALDA.reception.name}</h3><p>Después de la ceremonia, acompáñanos a continuar la celebración.</p><a href={ESMERALDA.reception.mapsUrl} target="_blank" rel="noreferrer">Ver ubicación <ArrowUpRight size={14} /></a></div></article>
        </div></section>

        <section className="es-itinerary" id="itinerario"><header data-reveal><p className="es-kicker">EL DÍA, MOMENTO A MOMENTO</p><h2>El <em>itinerario</em></h2><p>Una celebración que compartiremos paso a paso.</p></header><ol aria-label="Itinerario de la celebración" data-reveal>{ESMERALDA.itinerary.map((item, index) => { const Icon = itineraryIcons[index]; return <li className={`es-timeline-item ${index % 2 ? 'is-reversed' : ''}`} data-reveal key={item.title}><div className="es-timeline-art"><span className="es-timeline-number">0{index + 1}</span><Icon strokeWidth={1.2} aria-hidden="true" /><i>{item.title === 'Vals' ? 'XV' : '✳'}</i></div><span className="es-timeline-node" aria-hidden="true"><Heart size={11} fill="currentColor" /></span><div className="es-timeline-copy">{item.time && <time>{item.time}</time>}<h3>{item.title}</h3>{item.note && <p>{item.note}</p>}</div></li>; })}</ol></section>

        <section className="es-details"><article className="es-dress" data-reveal><p className="es-kicker">VEN COMO TE SIENTAS MEJOR</p><span className="es-dress-seal">LIBRE</span><h2>Dress Code</h2><p className="es-dress-label">VESTIMENTA LIBRE</p><p>{ESMERALDA.dressCode}</p></article><article className="es-gift" data-reveal><Gift size={22} strokeWidth={1.2} /><p className="es-kicker">UN DETALLE CON CARIÑO</p><h2>Lluvia de<br /><em>sobres</em></h2><p>{ESMERALDA.giftMessage}</p><span className="es-envelope-icon"><i /><b>CE</b></span></article></section>

        <section className="es-rsvp" id="confirmacion"><div className="es-rsvp-inner" data-reveal><p className="es-kicker">SERÁ UNA ALEGRÍA TENERTE</p><Check size={19} strokeWidth={1.2} /><h2>Confirma tu<br /><em>asistencia</em></h2><p>Nos encantará compartir este día contigo.<br />Por favor confirma para poder esperarte.</p>{ESMERALDA.rsvp.deadline && <span>Confirma antes del {ESMERALDA.rsvp.deadline}</span>}<a href={whatsapp()} target="_blank" rel="noreferrer" className="es-button">Confirmar asistencia <ArrowUpRight size={16} /></a></div><span className="es-rsvp-ring" aria-hidden="true">CE</span></section>

        <footer className="es-closing"><p className="es-kicker">GRACIAS POR FORMAR PARTE DE MI HISTORIA</p><h2>Corina <em>Esmeralda</em></h2><time>31 · 10 · 2026</time><span>Con mucho cariño, te esperamos.</span><i aria-hidden="true">❧</i><small>IMÁGENES DE INSPIRACIÓN · REEMPLAZABLES POR FOTOGRAFÍAS DE CORINA</small></footer>
      </div>
      {opened && <MusicPlayer audioRef={audioRef} {...ESMERALDA.music} variant="esmeralda" />}
    </main>
  );
}
