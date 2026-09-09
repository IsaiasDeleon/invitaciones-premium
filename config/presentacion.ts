import { asset, type InvitationConfig } from './types';

const image = (name: string, alt: string, width = 1600, height = 1067) => ({ src: asset(`assets/presentation/${name}.webp`), alt, width, height });

export const PRESENTATION_CONFIG: InvitationConfig = {
  id: 'presentacion-mateo', variant: 'presentation',
  opening: { eyebrow: 'Un día para agradecer', title: 'Nuestra familia tiene una alegría que compartir.', note: 'Abre la invitación y acompáñanos en este momento.' },
  hero: {
    image: image('presentacion-01-manos-familia-bebe', 'Manos de una familia sosteniendo la mano de un bebé'),
    eyebrow: 'Mi presentación', title: ['Mateo'], displayName: 'Mateo', date: '30 · Enero · 2027',
    quote: 'Tres años de ternura, descubrimientos y un amor que crece cada día.', monogram: 'M',
  },
  introduction: {
    kicker: 'Mensaje de mamá y papá', title: 'Una vida pequeña que transformó la nuestra.',
    body: 'Hace tres años llegaste para enseñarnos a mirar el mundo con asombro. Con inmensa gratitud, queremos presentarte ante Dios y celebrar tu vida junto a nuestra familia y las personas que te han acompañado con amor.',
    image: image('presentacion-02-padre-hija-lago', 'Padre caminando de la mano con una niña frente a un lago', 1600, 2400),
  },
  hosts: { label: 'Con amor te acompañamos', groups: [
    { role: 'Papás', names: ['Lucía Aranda', 'Emiliano Cortés'] },
    { role: 'Padrinos', names: ['Natalia Vera', 'Andrés Beltrán'] },
  ] },
  event: { startsAt: '2027-01-30T12:00:00-06:00', timeZone: 'America/Mexico_City', calendarTitle: 'Presentación de Mateo', calendarDescription: 'Ceremonia y convivencia familiar. Invitación demostrativa de BadgerSoftTech.', durationHours: 5 },
  locations: [
    { kind: 'Ceremonia', name: 'Parroquia de la Sagrada Familia', time: '12:00 h', address: 'Colonia del Valle, Ciudad de México', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Parroquia+Sagrada+Familia+CDMX', image: image('presentacion-05-capilla-mexicana', 'Altar de una iglesia mexicana iluminado con velas', 1600, 2400) },
    { kind: 'Convivencia', name: 'Jardín Casa Nube', time: '14:00 h', address: 'San Ángel, Ciudad de México', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jardin+eventos+San+Angel+CDMX', image: image('presentacion-06-flores-blancas-vela', 'Pequeñas flores blancas junto a una vela', 1600, 2400) },
  ],
  itinerary: [
    { time: '12:00', title: 'Presentación', detail: 'Ceremonia de agradecimiento' },
    { time: '13:15', title: 'Fotografías en familia' }, { time: '14:00', title: 'Bienvenida' },
    { time: '14:30', title: 'Comida' }, { time: '16:00', title: 'Pastel y abrazos' },
  ],
  gallery: [
    image('presentacion-01-manos-familia-bebe', 'Manos de mamá, papá y bebé reunidas'),
    image('presentacion-02-padre-hija-lago', 'Un padre y una niña caminan juntos junto al lago', 1600, 2400),
    image('presentacion-03-familia-ceremonia', 'Familia reunida durante una ceremonia religiosa'),
    image('presentacion-04-bebe-bautismo', 'Familia acompañando a un bebé en su bautismo'),
    image('presentacion-05-capilla-mexicana', 'Interior de una capilla mexicana', 1600, 2400),
    image('presentacion-06-flores-blancas-vela', 'Flores blancas y vela como detalle de la celebración', 1600, 2400),
    image('presentacion-07-primeros-pasos-familia', 'Familia ayudando a un bebé a caminar sobre el pasto', 1600, 2400),
  ],
  dressCode: { title: 'Elegante · Colores suaves', description: 'Prendas cómodas y elegantes en tonos naturales. La celebración tendrá lugar entre iglesia y jardín.' },
  gifts: { active: true, intro: 'Tu cariño y compañía son suficientes. Si deseas llevar un detalle, agradecemos libros infantiles o un sobre con buenos deseos.', options: [
    { name: 'Biblioteca de Mateo', detail: 'Un cuento con una dedicatoria' }, { name: 'Sobre de buenos deseos', detail: 'Disponible en la convivencia' },
  ] },
  rsvp: { phone: '5210000000000', deadline: '16 de enero de 2027', message: 'Hola, confirmo mi asistencia a la presentación de Mateo. Mi nombre es: ' },
  music: { file: asset('assets/audio/soft-heirloom.mp3'), title: 'Little Morning', artist: 'Pista ambiental original · Demo' },
  closing: { image: image('presentacion-07-primeros-pasos-familia', 'Familia caminando con un niño pequeño sobre el pasto', 1600, 2400), line: 'Gracias por crecer cerca de nosotros.', signature: 'Con amor, la familia de Mateo' },
  showDemoBrand: true,
};
