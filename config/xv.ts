import { asset, type InvitationConfig } from './types';

const image = (name: string, alt: string, width = 1600, height = 1067) => ({ src: asset(`assets/xv/${name}.webp`), alt, width, height });

export const XV_CONFIG: InvitationConfig = {
  id: 'xv-sofia-isabella', variant: 'xv',
  opening: { eyebrow: 'Una noche para recordar', title: 'Mi historia está a punto de florecer.', note: 'Abre la invitación y acompáñame a soñar.' },
  hero: {
    image: image('quince-01-hero-vestido-escalera', 'Joven con vestido de gala champagne en una gran escalinata', 1600, 792),
    eyebrow: 'Mis XV', title: ['Sofía', 'Isabella'], displayName: 'Sofía Isabella', date: '06 · Marzo · 2027',
    quote: 'Hay momentos que brillan una vez y permanecen para siempre.', monogram: 'XV',
  },
  introduction: {
    kicker: 'El comienzo de un sueño', title: 'Quince años de luz, amor y nuevos horizontes.',
    body: 'He imaginado esta noche muchas veces: las luces, la música y las personas que más quiero reunidas en un mismo lugar. Gracias por acompañarme a celebrar quién soy y todo lo que está por venir.',
    image: image('quince-03-invernadero-escalera', 'Escalera entre vegetación dentro de un invernadero', 1600, 2400),
  },
  hosts: { label: 'Con el amor de mi familia', groups: [
    { role: 'Mis padres', names: ['Camila Santillán', 'Rodrigo Ferrer'] },
    { role: 'Mis padrinos', names: ['Regina Falcón', 'Álvaro Mendoza'] },
  ] },
  event: { startsAt: '2027-03-06T18:00:00-06:00', timeZone: 'America/Mexico_City', calendarTitle: 'Mis XV · Sofía Isabella', calendarDescription: 'Ceremonia y recepción. Invitación demostrativa de BadgerSoftTech.', durationHours: 7 },
  locations: [
    { kind: 'Ceremonia', name: 'Capilla de Santa Clara', time: '18:00 h', address: 'Centro Histórico, San Miguel de Allende, Gto.', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Capilla+Santa+Clara+San+Miguel+de+Allende', image: image('quince-02-palacio-jardin', 'Palacio rodeado de árboles y jardines', 1600, 2400) },
    { kind: 'Recepción', name: 'Salón Magnolia', time: '19:30 h', address: 'Camino Real, San Miguel de Allende, Gto.', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Salon+eventos+San+Miguel+de+Allende', image: image('quince-06-salon-luces-flores', 'Salón elegante decorado con luces y flores', 1600, 2397) },
  ],
  itinerary: [
    { time: '18:00', title: 'Ceremonia' }, { time: '19:30', title: 'Recepción', detail: 'Luces encendidas' },
    { time: '20:15', title: 'Presentación' }, { time: '20:30', title: 'Vals' },
    { time: '21:00', title: 'Cena' }, { time: '22:15', title: 'Fiesta', detail: 'Que comience la magia' },
  ],
  gallery: [
    image('quince-01-hero-vestido-escalera', 'Retrato editorial con vestido de gala champagne', 1600, 792),
    image('quince-02-palacio-jardin', 'Jardín formal frente a un palacio', 1600, 2400),
    image('quince-03-invernadero-escalera', 'Escalera romántica rodeada de naturaleza', 1600, 2400),
    image('quince-04-flores-luces-colgantes', 'Arreglo de flores rosas con pequeñas luces', 1600, 2246),
    image('quince-05-luz-rosa-fiesta', 'Instalación de luces rosas sobre los árboles'),
    image('quince-06-salon-luces-flores', 'Salón de fiesta con flores e iluminación cálida', 1600, 2397),
    image('quince-07-pastel-velas', 'Pastel de cumpleaños con velas encendidas', 1600, 884),
  ],
  dressCode: { title: 'Formal · Noche de gala', description: 'Vestido largo o midi; traje formal. Atrévete con texturas, brillo sutil y accesorios especiales.', reservedColors: ['Rosa empolvado', 'Champagne'] },
  gifts: { active: true, intro: 'El regalo más bonito será compartir esta noche contigo. Si deseas obsequiarme algo, estas son ideas de demostración.', options: [
    { name: 'Mesa de regalos', detail: 'Folio demo · 150000' }, { name: 'Lluvia de sobres', detail: 'Durante la recepción' },
  ] },
  rsvp: { phone: '5210000000000', deadline: '06 de febrero de 2027', message: 'Hola, confirmo mi asistencia a los XV años de Sofía Isabella. Mi nombre es: ' },
  music: { file: asset('assets/audio/modern-princess.mp3'), title: 'Velvet Lights', artist: 'Pista ambiental original · Demo' },
  closing: { image: image('quince-05-luz-rosa-fiesta', 'Luces rosas suspendidas en una celebración'), line: 'Quiero guardar esta noche en mi memoria. Gracias por ser parte de ella.', signature: 'Sofía Isabella' },
  showDemoBrand: true,
};
