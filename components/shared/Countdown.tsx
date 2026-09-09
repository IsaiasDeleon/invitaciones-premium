'use client';

import { useEffect, useMemo, useState } from 'react';

type CountdownValue = {
  days: number; hours: number; minutes: number; seconds: number;
  status: 'upcoming' | 'today' | 'past' | 'unset';
};

const empty = (status: CountdownValue['status']): CountdownValue => ({ days: 0, hours: 0, minutes: 0, seconds: 0, status });

function dateKey(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
}

function calculate(startsAt: string, timeZone: string): CountdownValue {
  if (!startsAt) return empty('unset');
  const target = new Date(startsAt);
  if (Number.isNaN(target.getTime())) return empty('unset');
  const now = new Date();
  if (dateKey(now, timeZone) === dateKey(target, timeZone)) return empty('today');
  const distance = target.getTime() - now.getTime();
  if (distance <= 0) return empty('past');
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
    status: 'upcoming',
  };
}

const labels = ['Días', 'Horas', 'Minutos', 'Segundos'];

export function Countdown({ startsAt, timeZone }: { startsAt: string; timeZone: string }) {
  const getValue = useMemo(() => () => calculate(startsAt, timeZone), [startsAt, timeZone]);
  const [value, setValue] = useState<CountdownValue>(getValue);

  useEffect(() => {
    const timer = window.setInterval(() => setValue(getValue()), 1_000);
    return () => window.clearInterval(timer);
  }, [getValue]);

  if (value.status !== 'upcoming') {
    const messages = { today: 'Hoy celebramos', past: 'Este día vive en nuestros recuerdos', unset: 'Fecha por confirmar' };
    return <p className="countdown-status" aria-live="polite">{messages[value.status]}</p>;
  }

  return (
    <div className="countdown" aria-label="Cuenta regresiva para el evento" aria-live="polite">
      {[value.days, value.hours, value.minutes, value.seconds].map((unit, index) => (
        <div key={labels[index]}><strong>{String(unit).padStart(2, '0')}</strong><span>{labels[index]}</span></div>
      ))}
    </div>
  );
}
