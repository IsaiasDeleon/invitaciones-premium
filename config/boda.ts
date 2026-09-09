import { asset, type InvitationConfig } from './types';

const image = (name: string, alt: string, width = 1600, height = 1067) => ({
  src: asset(`assets/wedding/${name}.webp`), alt, width, height,
});

export const WEDDING_CONFIG: InvitationConfig = {
  id: 'boda-valeria-sebastian',
  variant: 'wedding',
  opening: {
    eyebrow: 'Una promesa está por comenzar',
    title: 'Tenemos algo especial que compartir contigo.',
    note: 'Activa el sonido y entra a nuestra historia.',
  },
  hero: {
    image: image('boda-01-hero-pareja-atardecer', 'Silueta de una pareja de novios frente al mar al atardecer', 1800, 1200),
    eyebrow: 'Nuestra boda',
    title: ['Valeria', '&', 'Sebastián'],
    displayName: 'Valeria & Sebastián',
    date: '22 · Mayo · 2027',
    quote: 'Elegimos caminar juntos. Nos encantará que seas parte del comienzo.',
    monogram: 'V · S',
  },
  introduction: {
    kicker: 'Nuestra historia',
    title: 'Lo extraordinario fue encontrarnos.',
    body: 'Entre conversaciones largas, viajes improvisados y domingos tranquilos, descubrimos que el hogar también puede ser una persona. Hoy queremos celebrar esa certeza rodeados de quienes han acompañado nuestra historia.',
    image: image('boda-02-manos-pareja', 'Manos entrelazadas de una pareja el día de su boda'),
  },
  hosts: { label: 'Con la bendición de nuestras familias', groups: [
    { role: 'Padres de la novia', names: ['Mariana Robles', 'Arturo del Valle'] },
    { role: 'Padres del novio', names: ['Elena Montes', 'Fernando Alcázar'] },
  ] },
  event: {
    startsAt: '2027-05-22T17:00:00-06:00',
    timeZone: 'America/Mexico_City',
    calendarTitle: 'Boda de Valeria y Sebastián',
    calendarDescription: 'Ceremonia y recepción. Esta es una invitación demostrativa de BadgerSoftTech.',
    durationHours: 8,
  },
  locations: [
    { kind: 'Ceremonia', name: 'Templo de San Francisco', time: '17:00 h', address: 'Centro Histórico, Querétaro, Qro.', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Templo+de+San+Francisco+Queretaro', image: image('boda-04-jardin-ceremonia', 'Ceremonia de boda preparada en un jardín', 1600, 2400) },
    { kind: 'Recepción', name: 'Hacienda de los Olivos', time: '18:30 h', address: 'Camino de los Viñedos, Querétaro, Qro.', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hacienda+boda+Queretaro', image: image('boda-05-mesa-velas-verde', 'Mesas de boda decoradas con velas y follaje') },
  ],
  itinerary: [
    { time: '17:00', title: 'Ceremonia', detail: 'El sí que lo comienza todo' },
    { time: '18:30', title: 'Cóctel', detail: 'Brindis de bienvenida' },
    { time: '19:30', title: 'Entrada de novios' },
    { time: '20:00', title: 'Cena' },
    { time: '21:30', title: 'Primer baile' },
    { time: '22:00', title: 'Fiesta', detail: 'Hasta que el cuerpo aguante' },
  ],
  gallery: [
    image('boda-01-hero-pareja-atardecer', 'Pareja de novios frente al mar durante el atardecer', 1800, 1200),
    image('boda-02-manos-pareja', 'Detalle de las manos de los novios'),
    image('boda-03-anillos-lujo', 'Anillos de boda en un estuche elegante'),
    image('boda-04-jardin-ceremonia', 'Altar de boda en un jardín frondoso', 1600, 2400),
    image('boda-05-mesa-velas-verde', 'Recepción iluminada por velas y vegetación'),
    image('boda-06-primer-baile', 'Novios durante su primer baile', 1600, 2400),
    image('boda-07-altar-pampas', 'Pasillo de ceremonia con pampas y telas blancas'),
  ],
  dressCode: { title: 'Formal · Black Tie Optional', description: 'Traje oscuro o esmoquin. Vestido largo o midi de noche. Reserva el blanco para la novia.' },
  gifts: { active: true, intro: 'Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros, preparamos estas opciones demostrativas.', options: [
    { name: 'Mesa Liverpool', detail: 'Evento demo · 00000000' },
    { name: 'Amazon', detail: 'Lista demostrativa sin compras reales' },
    { name: 'Lluvia de sobres', detail: 'Disponible durante la recepción' },
  ] },
  rsvp: { phone: '5210000000000', deadline: '24 de abril de 2027', message: 'Hola, confirmo mi asistencia a la boda de Valeria y Sebastián. Mi nombre es: ' },
  music: { file: asset('assets/audio/editorial-romance.mp3'), title: 'Golden Hour', artist: 'Pista ambiental original · Demo' },
  closing: { image: image('boda-06-primer-baile', 'Pareja bailando en su recepción de boda', 1600, 2400), line: 'El mejor capítulo comienza contigo cerca.', signature: 'Valeria & Sebastián' },
  showDemoBrand: true,
};
