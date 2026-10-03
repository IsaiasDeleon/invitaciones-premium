import { asset } from './types';

const photo = (name: string, alt: string, width = 1600, height = 2400) => ({
  src: asset(`assets/xv/${name}.webp`), alt, width, height,
});

export const ESMERALDA = {
  name: 'Corina Esmeralda',
  date: '31 · 10 · 2026',
  dateLong: '31 de octubre de 2026',
  startsAt: '2026-10-31T14:00:00-06:00',
  timeZone: 'America/Mexico_City',
  palette: { forest: '#14463c', emerald: '#009473' },
  photos: [
    photo('quince-08-night-portrait', 'Retrato editorial de inspiración para XV años', 1800, 2696),
    photo('quince-03-invernadero-escalera', 'Escalera de jardín entre hojas y luz natural'),
    photo('quince-04-flores-luces-colgantes', 'Flores y pequeñas luces cálidas', 1600, 2246),
    photo('quince-06-salon-luces-flores', 'Salón de celebración con iluminación cálida', 1600, 2397),
    photo('quince-07-pastel-velas', 'Pastel de celebración con velas', 1600, 884),
  ],
  ceremony: {
    name: 'Iglesia de la Santa Cruz en Xoconoxtle', time: '2:00 PM',
    image: photo('quince-02-palacio-jardin', 'Arquitectura rodeada de jardines, imagen de inspiración'),
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Iglesia+de+la+Santa+Cruz+en+Xoconoxtle',
  },
  reception: {
    name: 'Salón en Campo de Béisbol Rancho los Rivera', time: 'Después de la ceremonia',
    image: photo('quince-06-salon-luces-flores', 'Salón de celebración con luces y flores'),
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Salon+Campo+de+Beisbol+Rancho+los+Rivera',
  },
  itinerary: [
    { time: '2:00 PM', title: 'Ceremonia Religiosa', note: 'Iglesia de la Santa Cruz en Xoconoxtle', icon: 'church' },
    { time: '', title: 'Recepción', note: 'Después de la ceremonia', icon: 'welcome' },
    { time: '', title: 'Bienvenida', note: '', icon: 'sparkles' },
    { time: '', title: 'Cena', note: '', icon: 'dinner' },
    { time: '', title: 'Vals', note: '', icon: 'dance' },
    { time: '', title: 'Baile y celebración', note: '', icon: 'music' },
  ],
  family: { mother: 'Olga Rodriguez', godmother: 'Sara Gómez Bravo', godfather: 'Valentin Blanco Gomez' },
  dressCode: 'Queremos que disfrutes este día con nosotros. Te invitamos a asistir con el atuendo con el que te sientas más cómodo y listo para celebrar.',
  giftMessage: 'Tu presencia es el regalo más importante para mí. Si además deseas tener un detalle conmigo en este día tan especial, contaremos con lluvia de sobres. Gracias por acompañarme y ser parte de este momento.',
  music: { file: asset('assets/audio/modern-princess.mp3'), title: 'Velvet Lights', artist: 'Instrumental' },
  rsvp: {
    phone: '',
    message: 'Hola, confirmo mi asistencia a los XV años de Corina Esmeralda el 31 de octubre de 2026.',
    deadline: '',
  },
} as const;
