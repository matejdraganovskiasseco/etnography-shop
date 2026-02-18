'use client';

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  toggleMute: () => void;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Create the audio once (on mount)
  useEffect(() => {
    const audio = new Audio('/background-music.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.35;

    // Start muted to maximize autoplay success
    audio.muted = true;
    audioRef.current = audio;

    const tryPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Autoplay blocked until user interaction
        setIsPlaying(false);
      }
    };

    tryPlay();

    // On first interaction: unmute + play
    const onFirstInteraction = async () => {
      const a = audioRef.current;
      if (!a) return;

      try {
        a.muted = false;
        setIsMuted(false);

        await a.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    window.addEventListener('click', onFirstInteraction, { once: true });
    window.addEventListener('touchstart', onFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('touchstart', onFirstInteraction);

      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Keep HTMLAudioElement muted state synced with React state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = isMuted;
  }, [isMuted]);

  const toggleMute = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.muted = true;
      setIsMuted(true);
      // If you prefer pausing instead of muting, uncomment:
      // audio.pause();
      // setIsPlaying(false);
    }
  };

  const value = useMemo<AudioContextType>(
    () => ({
      isPlaying,
      setIsPlaying,
      toggleMute,
      isMuted,
      setIsMuted,
    }),
    [isPlaying, isMuted]
  );

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
