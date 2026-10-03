import { ArrowDown, ArrowUpRight, CalendarDays, Clock3, Images, MapPin, MessageCircle, Music2, Send, Sparkles } from 'lucide-react';

const asset = (path: string) => `${import.meta.env.BASE_URL || '/'}${path}`;
const whatsapp = 'https://wa.me/5210000000000?text=Hola%2C%20quiero%20crear%20una%20invitaci%C3%B3n%20digital%20premium.';
const features = [
  ['01', 'Una entrada que emociona', 'Apertura interactiva, música y una primera impresión creada para tu historia.', Music2],
  ['02', 'Todo lo importante, cerca', 'Cuenta regresiva, calendario, itinerario y ubicaciones listas para abrir desde WhatsApp.', Clock3],
  ['03', 'Recuerdos que se recorren', 'Fotografías con dirección editorial y una galería pensada para celular.', Images],
  ['04', 'Confirmaciones sin fricción', 'RSVP directo, mesa de regalos y cada detalle personalizado para tu celebración.', Send],
] as const;

function PhonePreview({ variant, image, eyebrow, name }: { variant: string; image: string; eyebrow: string; name: string }) {
  return <div className={`catalog-phone phone-${variant}`} aria-label={`Vista móvil de la invitación ${name}`}><div className="phone-speaker" /><div className="phone-screen"><img src={image} alt="" /><div className="phone-shade" /><span>{eyebrow}</span><strong>{name}</strong><i>Ver invitación</i></div></div>;
}

export default function Home() {
  return (
    <main className="catalog-page">
      <nav className="catalog-nav" aria-label="Navegación principal">
        <a className="brand-lockup" href="#inicio"><span aria-hidden="true">B</span><strong>BadgerSoftTech</strong></a>
        <div><a href="#coleccion">Colección</a><a href="#experiencia">Experiencia</a></div>
        <a className="catalog-nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Hablemos <ArrowUpRight aria-hidden="true" /></a>
      </nav>

      <header className="catalog-hero" id="inicio">
        <div className="catalog-hero-collage" aria-hidden="true">
          <figure className="collage-main"><img src={asset('assets/wedding/boda-08-pareja-bosque-editorial.webp')} alt="" width="1600" height="2400" /></figure>
          <figure className="collage-xv"><img src={asset('assets/xv/quince-08-night-portrait.webp')} alt="" width="1800" height="2696" /></figure>
          <figure className="collage-family"><img src={asset('assets/presentation/presentacion-07-primeros-pasos-familia.webp')} alt="" width="1600" height="2400" /></figure>
        </div>
        <div className="catalog-hero-copy">
          <p>Invitaciones digitales de autor</p>
          <h1>Historias que comienzan <em>antes</em> del gran día.</h1>
          <div><span>Creamos experiencias digitales para momentos que merecen recordarse.</span><nav><a href="#coleccion">Explorar invitaciones <ArrowDown aria-hidden="true" /></a><a href={whatsapp} target="_blank" rel="noreferrer">Solicitar una invitación</a></nav></div>
        </div>
        <p className="catalog-edition" aria-hidden="true">Colección · 2027</p>
      </header>

      <section className="catalog-statement" id="coleccion"><span>El primer recuerdo</span><h2>No diseñamos una página para tu evento. Diseñamos la forma en que comienza.</h2><p>Cuatro direcciones artísticas, una experiencia impecable en el teléfono y cada detalle adaptado a tu celebración.</p></section>

      <section className="showcase showcase-wedding">
        <figure className="showcase-wedding-main"><img src={asset('assets/wedding/boda-08-pareja-bosque-editorial.webp')} alt="Pareja de novios en un jardín de luz natural" width="1600" height="2400" loading="lazy" /></figure>
        <div className="showcase-index"><span>01</span><p>Boda · Editorial Romance</p></div>
        <div className="showcase-copy"><p>Luxury wedding editorial</p><h2>Valeria<br /><i>&amp;</i> Sebastián</h2><span>Fotografía cinematográfica, elegancia atemporal y un ritmo que respira como una revista de autor.</span><div className="showcase-includes">Galería <i>·</i> Música <i>·</i> RSVP <i>·</i> Ubicaciones</div><a href="./boda">Explorar invitación <ArrowUpRight aria-hidden="true" /></a></div>
        <figure className="showcase-wedding-detail"><img src={asset('assets/wedding/boda-10-detalle-vestido-anillo.webp')} alt="Detalle del vestido, el ramo y los anillos" width="1400" height="2100" loading="lazy" /></figure>
      </section>

      <section className="showcase showcase-xv">
        <div className="showcase-xv-glow" aria-hidden="true" />
        <div className="showcase-index"><span>02</span><p>XV años · Enchanted Night</p></div>
        <div className="showcase-copy"><p>Cinematic after dark</p><h2>Sofía<br /><em>Isabella</em></h2><span>Una noche profunda y luminosa: retratos, destellos y movimiento sutil para una celebración que no se parece a ninguna otra.</span><div className="showcase-includes">Cuenta regresiva <i>·</i> Itinerario <i>·</i> Dress code</div><a href="./xv">Explorar invitación <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="showcase-xv-photos"><figure><img src={asset('assets/xv/quince-08-night-portrait.webp')} alt="Joven con vestido de gala bajo las luces de la ciudad" width="1800" height="2696" loading="lazy" /></figure><figure><img src={asset('assets/xv/quince-04-flores-luces-colgantes.webp')} alt="Flores rosas y luces cálidas" width="1600" height="2246" loading="lazy" /></figure><span aria-hidden="true">XV</span></div>
      </section>

      <section className="showcase showcase-esmeralda">
        <figure className="showcase-esmeralda-photo"><img src={asset('assets/xv/quince-08-night-portrait.webp')} alt="Retrato editorial de inspiración para la plantilla Esmeralda" width="1800" height="2696" loading="lazy" /></figure>
        <div className="showcase-index"><span>03</span><p>XV años · Esmeralda</p></div>
        <div className="showcase-copy"><p>Una celebración en verde esmeralda</p><h2>Corina<br /><em>Esmeralda</em></h2><span>Una historia delicada entre verdes profundos, retratos de inspiración y una línea del tiempo diseñada para recorrer cada momento.</span><div className="showcase-includes">Apertura <i>·</i> Itinerario <i>·</i> Galería <i>·</i> RSVP</div><a href="./esmeralda">Explorar invitación <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="showcase-esmeralda-seal" aria-hidden="true">CE<br /><i>31 · 10 · 26</i></div>
      </section>

      <section className="showcase showcase-presentation">
        <figure className="showcase-presentation-bg"><img src={asset('assets/presentation/presentacion-07-primeros-pasos-familia.webp')} alt="Familia acompañando los primeros pasos de un bebé" width="1600" height="2400" loading="lazy" /></figure>
        <div className="showcase-index"><span>04</span><p>Presentación · Soft Heirloom</p></div>
        <div className="showcase-copy"><p>Un álbum familiar</p><h2>Mateo</h2><span>Papel, luz natural y pequeños gestos. Una invitación íntima con la calidez de un recuerdo que se pasa de generación en generación.</span><div className="showcase-includes">Álbum <i>·</i> Calendario <i>·</i> Familia <i>·</i> RSVP</div><a href="./presentacion">Explorar invitación <ArrowUpRight aria-hidden="true" /></a></div>
        <figure className="showcase-presentation-card"><span>con mucha alegría</span><img src={asset('assets/presentation/presentacion-01-manos-familia-bebe.webp')} alt="Manos de una familia sosteniendo la mano de un bebé" width="1600" height="1063" loading="lazy" /><small>La presentación de Mateo</small></figure>
      </section>

      <section className="catalog-experience" id="experiencia">
        <header><p>Diseñada para sentirse</p><h2>Una invitación.<br />Toda la <em>experiencia.</em></h2></header>
        <div className="experience-campaign">
          <div className="phone-stage"><PhonePreview variant="wedding" image={asset('assets/wedding/boda-08-pareja-bosque-editorial.webp')} eyebrow="Nuestra boda" name="V & S" /><PhonePreview variant="xv" image={asset('assets/xv/quince-08-night-portrait.webp')} eyebrow="Mis XV" name="Sofía" /></div>
          <div className="experience-notes"><p>Tu invitación vive donde están tus invitados: en su teléfono.</p><div><span><MapPin aria-hidden="true" />Google Maps</span><span><CalendarDays aria-hidden="true" />Calendario</span><span><MessageCircle aria-hidden="true" />WhatsApp</span><span><Sparkles aria-hidden="true" />Personalización</span></div></div>
        </div>
        <div className="experience-features">{features.map(([index, title, body, Icon]) => <article key={index}><span>{index}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="catalog-final-cta">
        <img src={asset('assets/wedding/boda-12-recepcion-marfil.webp')} alt="Mesa de celebración en tonos marfil iluminada con velas" width="2000" height="1334" loading="lazy" />
        <div><p>Tu evento.</p><p>Tu historia.</p><h2>Tu invitación.</h2><span>Hagamos que se sienta especial desde el primer mensaje.</span><nav><a href={whatsapp} target="_blank" rel="noreferrer">Crear mi invitación <ArrowUpRight aria-hidden="true" /></a><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Hablar por WhatsApp</a></nav></div>
      </section>

      <footer className="catalog-footer"><a className="brand-lockup" href="#inicio"><span aria-hidden="true">B</span><strong>BadgerSoftTech</strong></a><p>Invitaciones digitales de autor · México</p><p>© 2026 — 2027</p></footer>
      <a className="floating-contact" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Solicitar una invitación"><MessageCircle aria-hidden="true" /></a>
    </main>
  );
}
