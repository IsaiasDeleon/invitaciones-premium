'use client';

import { CalendarPlus, Download } from 'lucide-react';

type CalendarEvent = { startsAt: string; title: string; description: string; durationHours: number; location: string };

const utc = (date: Date) => date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

export function CalendarButtons({ event }: { event: CalendarEvent }) {
  const start = new Date(event.startsAt);
  const end = new Date(start.getTime() + event.durationHours * 3_600_000);
  const dates = `${utc(start)}/${utc(end)}`;
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${dates}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

  const downloadIcs = () => {
    const safe = (value: string) => value.replace(/([,;])/g, '\\$1').replace(/\n/g, '\\n');
    const contents = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//BadgerSoftTech//Invitaciones Premium//ES', 'BEGIN:VEVENT', `UID:${Date.now()}@badgersofttech`, `DTSTAMP:${utc(new Date())}`, `DTSTART:${utc(start)}`, `DTEND:${utc(end)}`, `SUMMARY:${safe(event.title)}`, `DESCRIPTION:${safe(event.description)}`, `LOCATION:${safe(event.location)}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const href = URL.createObjectURL(new Blob([contents], { type: 'text/calendar;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = href; link.download = `${event.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.ics`; link.click();
    URL.revokeObjectURL(href);
  };

  return (
    <div className="calendar-buttons">
      <a href={googleUrl} target="_blank" rel="noreferrer"><CalendarPlus aria-hidden="true" /> Google Calendar</a>
      <button type="button" onClick={downloadIcs}><Download aria-hidden="true" /> Descargar .ics</button>
    </div>
  );
}
