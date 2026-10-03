export type InvitationVariant = 'wedding' | 'xv' | 'presentation' | 'esmeralda';

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
};

export type Location = {
  kind: string;
  name: string;
  time: string;
  address: string;
  mapsUrl: string;
  image: GalleryImage;
};

export type InvitationConfig = {
  id: string;
  variant: InvitationVariant;
  opening: { eyebrow: string; title: string; note: string };
  hero: {
    image: GalleryImage;
    eyebrow: string;
    title: string[];
    displayName: string;
    date: string;
    quote: string;
    monogram: string;
  };
  introduction: { kicker: string; title: string; body: string; image: GalleryImage };
  hosts: { label: string; groups: { role: string; names: string[] }[] };
  event: {
    startsAt: string;
    timeZone: string;
    calendarTitle: string;
    calendarDescription: string;
    durationHours: number;
  };
  locations: Location[];
  itinerary: { time: string; title: string; detail?: string }[];
  gallery: GalleryImage[];
  dressCode: { title: string; description: string; reservedColors?: string[] };
  gifts: { active: boolean; intro: string; options: { name: string; detail: string; url?: string }[] };
  rsvp: { phone: string; deadline: string; message: string };
  music: { file: string; title: string; artist: string };
  closing: { image: GalleryImage; line: string; signature: string };
  showDemoBrand: boolean;
};

export const asset = (path: string) => `${import.meta.env.BASE_URL || '/'}${path}`;
