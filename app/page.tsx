import { ArrowDownRight, ArrowUpRight, CalendarDays, Clock3, Gift, Images, MapPin, MessageCircle, Music2, Send, Shirt } from 'lucide-react';

const asset = (path: string) => `${import.meta.env.BASE_URL || '/'}${path}`;
const whatsapp = 'https://wa.me/5210000000000?text=Hola%2C%20quiero%20cotizar%20una%20invitaci%C3%B3n%20digital%20premium.';

const previews = [
  { index: '01', category: 'Boda', concept: 'Editorial Romance', name: 'Valeria & Sebastián', href: './boda', image: asset('assets/wedding/boda-01-hero-pareja-atardecer.webp'), alt: 'Pareja de novios frente al mar durante el atardecer', className: 'preview-wedding' },
  { index: '02', category: 'XV Años', concept: 'Modern Princess', name: 'Sofía Isabella', href: './xv', image: asset('assets/xv/quince-01-hero-vestido-escalera.webp'), alt: 'Joven con vestido de gala en una gran escalinata', className: 'preview-xv' },
  { index: '03', category: 'Presentación', concept: 'Soft Heirloom', name: 'Mateo', href: './presentacion', image: asset('assets/presentation/presentacion-01-manos-familia-bebe.webp'), alt: 'Manos de una familia sosteniendo la mano de un bebé', className: 'preview-presentation' },
];

const services = [
  { icon: Music2, label: 'Música y apertura inmersiva' }, { icon: Images, label: 'Galería editorial con lightbox' },
  { icon: Clock3, label: 'Cuenta regresiva en vivo' }, { icon: MapPin, label: 'Ubicaciones y rutas' },
  { icon: Send, label: 'RSVP directo por WhatsApp' }, { icon: CalendarDays, label: 'Google Calendar y archivo .ics' },
  { icon: Shirt, label: 'Dress code y colores reservados' }, { icon: Gift, label: 'Mesa de regalos configurable' },
];

export default function Home() {
  return (
    <main className="catalog-page">
      <nav className="catalog-nav" aria-label="Navegación principal">
        <a className="brand-lockup" href="#inicio" aria-label="BadgerSoftTech, inicio"><span aria-hidden="true">B</span><strong>BadgerSoftTech</strong></a>
        <div className="nav-links"><a href="#coleccion">Colección</a><a href="#incluye">Qué incluye</a></div>
        <a className="nav-contact" href={whatsapp} target="_blank" rel="noreferrer">Cotizar <ArrowUpRight aria-hidden="true" /></a>
      </nav>

      <section className="catalog-hero" id="inicio">
        <div className="catalog-hero-image" aria-hidden="true"><img src={asset('assets/wedding/boda-01-hero-pareja-atardecer.webp')} alt="" /></div>
        <div className="catalog-hero-copy">
          <p className="catalog-kicker">Invitaciones digitales · Colección 2026</p>
          <h1>Invitaciones que se sienten <em>antes</em> de vivirse.</h1>
          <div className="hero-support"><p>Experiencias digitales creadas para convertir una fecha especial en el primer recuerdo de tu celebración.</p><a href="#coleccion" className="round-link" aria-label="Conocer la colección"><ArrowDownRight aria-hidden="true" /></a></div>
        </div>
        <p className="hero-index" aria-hidden="true">01 — 03</p>
      </section>

      <section className="collection-intro" id="coleccion">
        <p className="catalog-kicker">Tres historias · Tres atmósferas</p>
        <div><h2>Una colección para imaginar tu día.</h2><p>Abre cada invitación y descubre una experiencia completa, pensada desde el primer gesto hasta la última confirmación.</p></div>
      </section>

      <section className="preview-list" aria-label="Colección de invitaciones">
        {previews.map((preview) => (
          <article className={`template-preview ${preview.className}`} key={preview.href}>
            <img src={preview.image} alt={preview.alt} width="1600" height="1200" loading={preview.index === '01' ? 'eager' : 'lazy'} />
            <div className="preview-shade" />
            <div className="preview-number">{preview.index}</div>
            <div className="preview-copy"><span>{preview.category}</span><h2>{preview.concept}</h2><p>{preview.name}</p><a href={preview.href}>Ver invitación <ArrowUpRight aria-hidden="true" /></a></div>
            <a className="preview-hit" href={preview.href} aria-label={`Ver invitación ${preview.concept}`} />
          </article>
        ))}
      </section>

      <section className="experience-section" id="incluye">
        <header><p className="catalog-kicker">La experiencia completa</p><h2>Más que una fecha.<br /><em>Una forma de vivirla.</em></h2></header>
        <div className="experience-grid">
          {services.map(({ icon: Icon, label }, index) => <article key={label}><span>{String(index + 1).padStart(2, '0')}</span><Icon aria-hidden="true" /><h3>{label}</h3></article>)}
        </div>
      </section>

      <section className="catalog-manifesto">
        <img src={asset('assets/wedding/boda-05-mesa-velas-verde.webp')} alt="Mesa de boda iluminada con velas y decorada con follaje" loading="lazy" />
        <div><p>Hechas para tu historia</p><blockquote>“Cada detalle se adapta a tus nombres, colores, lugares, fotografías y forma de celebrar.”</blockquote><span>Diseño mobile-first · Experiencia sin plantillas genéricas</span></div>
      </section>

      <section className="catalog-cta" id="contacto">
        <p className="catalog-kicker">Comencemos</p><h2>Tu celebración merece una entrada inolvidable.</h2><p>Cuéntame qué estás imaginando. Convertiremos tu historia en una invitación que tus invitados querrán volver a abrir.</p>
        <a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Quiero cotizar mi invitación <ArrowUpRight aria-hidden="true" /></a>
        <small>Número de WhatsApp demostrativo · Configúralo antes de publicar para clientes</small>
      </section>

      <footer className="catalog-footer"><a className="brand-lockup" href="#inicio"><span aria-hidden="true">B</span><strong>BadgerSoftTech</strong></a><p>Invitaciones digitales de autor · México</p><p>© 2026</p></footer>
      <a className="floating-contact" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Solicitar una invitación"><MessageCircle aria-hidden="true" /></a>
    </main>
  );
}
