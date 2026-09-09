'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import type { GalleryImage } from '@/config/types';

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const previous = useCallback(() => setIndex((current) => current === null ? null : (current - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((current) => current === null ? null : (current + 1) % images.length), [images.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'ArrowLeft') previous(); if (event.key === 'ArrowRight') next(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, next, previous]);

  const current = index === null ? null : images[index];
  return (
    <>
      <div className="editorial-gallery">
        {images.map((image, imageIndex) => (
          <button type="button" key={image.src} onClick={() => setIndex(imageIndex)} aria-label={`Abrir imagen ${imageIndex + 1}: ${image.alt}`}>
            <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" style={{ objectPosition: image.position }} />
            <span aria-hidden="true">{String(imageIndex + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      <Dialog open={index !== null} onOpenChange={(open) => { if (!open) setIndex(null); }}>
        <DialogContent className="lightbox" showCloseButton={false} onTouchStart={(event) => { touchX.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => {
          if (touchX.current === null) return;
          const distance = (event.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
          if (Math.abs(distance) > 45) {
            if (distance > 0) previous(); else next();
          }
          touchX.current = null;
        }}>
          <DialogTitle className="sr-only">Galería de fotografías</DialogTitle>
          <DialogDescription className="sr-only">Usa las flechas para navegar o desliza en tu teléfono.</DialogDescription>
          {current && <img src={current.src} alt={current.alt} width={current.width} height={current.height} />}
          <button type="button" className="lightbox-close" onClick={() => setIndex(null)} aria-label="Cerrar galería"><X /></button>
          <button type="button" className="lightbox-arrow is-prev" onClick={previous} aria-label="Fotografía anterior"><ChevronLeft /></button>
          <button type="button" className="lightbox-arrow is-next" onClick={next} aria-label="Fotografía siguiente"><ChevronRight /></button>
          <p>{index === null ? 0 : index + 1} / {images.length}</p>
        </DialogContent>
      </Dialog>
    </>
  );
}
