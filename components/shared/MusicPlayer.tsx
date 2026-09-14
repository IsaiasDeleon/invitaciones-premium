'use client';

import { useEffect, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import type { InvitationVariant } from '@/config/types';

type MusicPlayerProps = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  file: string;
  title: string;
  artist: string;
  variant: InvitationVariant;
};

export function MusicPlayer({ audioRef, file, title, artist, variant }: MusicPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(.55);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const play = () => setPlaying(true);
    const pause = () => setPlaying(false);
    audio.addEventListener('play', play);
    audio.addEventListener('pause', pause);
    return () => { audio.removeEventListener('play', play); audio.removeEventListener('pause', pause); };
  }, [audioRef]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) await audio.play().catch(() => undefined); else audio.pause();
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  const changeVolume = (next: number | readonly number[]) => {
    const value = Array.isArray(next) ? next[0] : next;
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(value)) return;
    audio.volume = value;
    audio.muted = false;
    setMuted(false);
    setVolume(value);
  };

  return (
    <>
      {/* Instrumental background audio has no spoken content to caption. */}
      {/* oxlint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src={file} preload="metadata" loop />
      <div className={`music-control music-${variant}${playing ? ' is-playing' : ''}${expanded ? ' is-expanded' : ''}`}>
        <Button type="button" variant="ghost" size="icon-lg" className="music-main" onClick={toggle} aria-label={playing ? 'Pausar música' : 'Reproducir música'}>
          <span className="music-disc" aria-hidden="true" />{playing ? <Pause /> : <Play />}
        </Button>
        <button type="button" className="music-label" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} aria-label="Mostrar controles de volumen">
          <small>{artist}</small><strong>{title}</strong>
        </button>
        <div className="music-volume">
          <Button type="button" variant="ghost" size="icon-sm" onClick={toggleMute} aria-label={muted ? 'Activar sonido' : 'Silenciar música'}>{muted ? <VolumeX /> : <Volume2 />}</Button>
          <Slider aria-label="Volumen de la música" min={0} max={1} step={.05} value={[volume]} onValueChange={changeVolume} />
        </div>
      </div>
    </>
  );
}
