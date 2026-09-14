'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryImage, InvitationVariant } from '@/config/types';

type GalleryProps = { images: GalleryImage[]; variant: InvitationVariant };

export function Gallery({ images, variant }: GalleryProps) {
  const [index, setIndex] = useState<number | null>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const savedScroll = useRef(0);
  const opener = useRef<HTMLElement | null>(null);
  const closeButton = useRef<HTMLButtonElement | null>(null);

  const previous = useCallback(() => setIndex((current) => current === null ? null : (current - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((current) => current === null ? null : (current + 1) % images.length), [images.length]);
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    savedScroll.current = window.scrollY;
    const { body, documentElement } = document;
    const previousStyles = {
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      bodyOverflow: body.style.overflow,
      htmlOverflow: documentElement.style.overflow,
      htmlScrollBehavior: documentElement.style.scrollBehavior,
    };

    body.style.position = 'fixed';
    body.style.top = `-${savedScroll.current}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';
    documentElement.style.scrollBehavior = 'auto';
    window.setTimeout(() => closeButton.current?.focus(), 0);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIndex(null);
      if (event.key === 'ArrowLeft') previous();
      if (event.key === 'ArrowRight') next();
      if (event.key === 'Tab') {
        const controls = Array.from(document.querySelectorAll<HTMLElement>('.lightbox-portal button'));
        if (!controls.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      body.style.position = previousStyles.bodyPosition;
      body.style.top = previousStyles.bodyTop;
      body.style.width = previousStyles.bodyWidth;
      body.style.overflow = previousStyles.bodyOverflow;
      documentElement.style.overflow = previousStyles.htmlOverflow;
      window.scrollTo(0, savedScroll.current);
      opener.current?.focus({ preventScroll: true });
      documentElement.style.scrollBehavior = previousStyles.htmlScrollBehavior;
    };
  }, [isOpen, next, previous]);

  const open = (imageIndex: number, target: HTMLElement) => {
    opener.current = target;
    setIndex(imageIndex);
  };

  const current = index === null ? null : images[index];
  const lightbox = index !== null && current && typeof document !== 'undefined' ? createPortal(
    <dialog
      open
      className={`lightbox-portal lightbox-${variant}`}
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onPointerDown={(event) => { pointerStart.current = { x: event.clientX, y: event.clientY }; }}
      onPointerUp={(event) => {
        if (!pointerStart.current) return;
        const dx = event.clientX - pointerStart.current.x;
        const dy = event.clientY - pointerStart.current.y;
        if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.2) {
          if (dx > 0) previous(); else next();
        }
        pointerStart.current = null;
      }}
    >
      <button type="button" className="lightbox-backdrop" onClick={() => setIndex(null)} aria-label="Cerrar galería al tocar el fondo" />
      <h2 id="lightbox-title" className="sr-only">Galería de fotografías</h2>
      <figure className="lightbox-figure">
        <img src={current.src} alt={current.alt} width={current.width} height={current.height} draggable={false} />
        <figcaption>{current.alt}</figcaption>
      </figure>
      <button ref={closeButton} type="button" className="lightbox-close" onClick={() => setIndex(null)} aria-label="Cerrar galería"><X aria-hidden="true" /></button>
      <button type="button" className="lightbox-arrow is-prev" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Fotografía anterior"><ChevronLeft aria-hidden="true" /></button>
      <button type="button" className="lightbox-arrow is-next" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Fotografía siguiente"><ChevronRight aria-hidden="true" /></button>
      <p className="lightbox-count" aria-live="polite"><strong>{String(index + 1).padStart(2, '0')}</strong><span>/</span>{String(images.length).padStart(2, '0')}</p>
    </dialog>,
    document.body,
  ) : null;

  return (
    <>
      <div className={`gallery-layout gallery-${variant}`}>
        {images.map((image, imageIndex) => (
          <button
            type="button"
            className={`gallery-item gallery-item-${imageIndex + 1}`}
            key={image.src}
            onClick={(event) => open(imageIndex, event.currentTarget)}
            aria-label={`Abrir imagen ${imageIndex + 1}: ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" style={{ objectPosition: image.position }} />
            <span aria-hidden="true">{String(imageIndex + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      {lightbox}
    </>
  );
}
