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
    image: image('boda-08-pareja-bosque-editorial', 'Pareja de novios en un jardín de luz natural', 1600, 2400),
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
    { kind: 'Ceremonia', name: 'Capilla de la Villa', time: '17:00 h', address: 'Camino de los Viñedos, Querétaro, Qro.', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Capilla+boda+Queretaro', image: image('boda-09-villa-jardines', 'Villa de piedra rodeada de jardines formales', 2000, 1334) },
    { kind: 'Recepción', name: 'Jardines de la Villa', time: '18:30 h', address: 'Camino de los Viñedos, Querétaro, Qro.', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hacienda+boda+Queretaro', image: image('boda-12-recepcion-marfil', 'Mesa de recepción en tonos marfil con flores y velas', 2000, 1334) },
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
    image('boda-08-pareja-bosque-editorial', 'Pareja de novios en un jardín de luz natural', 1600, 2400),
    image('boda-02-manos-pareja', 'Detalle de las manos de los novios'),
    image('boda-10-detalle-vestido-anillo', 'Detalle del vestido, el ramo y los anillos de la novia', 1400, 2100),
    image('boda-09-villa-jardines', 'Villa de piedra rodeada de jardines formales', 2000, 1334),
    image('boda-12-recepcion-marfil', 'Recepción en tonos marfil iluminada por velas', 2000, 1334),
    image('boda-11-pareja-jardin-cierre', 'Pareja de novios abrazada entre vegetación', 1600, 2400),
    image('boda-03-anillos-lujo', 'Anillos de boda sobre textiles en tonos marfil'),
  ],
  dressCode: { title: 'Formal · Black Tie Optional', description: 'Traje oscuro o esmoquin. Vestido largo o midi de noche. Reserva el blanco para la novia.' },
  gifts: { active: true, intro: 'Tu presencia es nuestro mejor regalo. Si deseas tener un detalle con nosotros, preparamos estas opciones demostrativas.', options: [
    { name: 'Mesa Liverpool', detail: 'Evento demo · 00000000' },
    { name: 'Amazon', detail: 'Lista demostrativa sin compras reales' },
    { name: 'Lluvia de sobres', detail: 'Disponible durante la recepción' },
  ] },
  rsvp: { phone: '5210000000000', deadline: '24 de abril de 2027', message: 'Hola, confirmo mi asistencia a la boda de Valeria y Sebastián. Mi nombre es: ' },
  music: { file: asset('assets/audio/editorial-romance.mp3'), title: 'Golden Hour', artist: 'Pista ambiental original · Demo' },
  closing: { image: image('boda-11-pareja-jardin-cierre', 'Pareja de novios abrazada entre vegetación', 1600, 2400), line: 'Nos vemos en nuestro para siempre.', signature: 'Valeria & Sebastián' },
  showDemoBrand: true,
};
