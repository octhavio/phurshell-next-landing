'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  src: string
  poster: string
  title: string
  // Nome usado nos eventos do GTM (video_start / video_complete)
  trackingName: string
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function track(event: string, video: string) {
  ;(window as any).dataLayer?.push({ event, video })
}

export default function BrandVideoPlayer({ src, poster, title, trackingName }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout>>()
  const started = useRef(false)

  const [hasStarted, setHasStarted] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [controlsVisible, setControlsVisible] = useState(true)

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    video.paused ? video.play() : video.pause()
  }

  // Controles somem sozinhos enquanto toca e voltam ao mexer o mouse/tocar
  const showControls = () => {
    setControlsVisible(true)
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => {
      if (!videoRef.current?.paused) setControlsVisible(false)
    }, 2500)
  }

  useEffect(() => () => clearTimeout(hideTimer.current), [])

  const onPlay = () => {
    setPlaying(true)
    setHasStarted(true)
    showControls()
    if (!started.current) {
      started.current = true
      track('video_start', trackingName)
    }
  }

  const onPause = () => {
    setPlaying(false)
    setControlsVisible(true)
  }

  const onEnded = () => {
    setPlaying(false)
    setControlsVisible(true)
    track('video_complete', trackingName)
  }

  const seek = (value: number) => {
    if (videoRef.current) videoRef.current.currentTime = value
    setCurrent(value)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  const toggleFullscreen = () => {
    const wrapper = wrapperRef.current as any
    const video = videoRef.current as any
    if (document.fullscreenElement) return document.exitFullscreen()
    if (wrapper?.requestFullscreen) return wrapper.requestFullscreen()
    // iOS Safari só deixa o próprio <video> ir para tela cheia
    video?.webkitEnterFullscreen?.()
  }

  const progress = duration ? (current / duration) * 100 : 0

  return (
    <div
      ref={wrapperRef}
      onMouseMove={showControls}
      onTouchStart={showControls}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-dark shadow-[0_24px_80px_-20px_rgba(255,81,0,0.45)] ring-1 ring-dark/10"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        aria-label={title}
        onClick={toggle}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        className="h-full w-full cursor-pointer object-cover"
      />

      {/* Capa: botão grande antes do primeiro play e no fim do vídeo */}
      {!playing && (
        <button
          type="button"
          onClick={toggle}
          aria-label={hasStarted ? 'Continuar vídeo' : `Assistir: ${title}`}
          className={`absolute inset-0 flex items-center justify-center transition-colors ${
            hasStarted ? 'bg-dark/40' : 'bg-gradient-to-t from-dark/50 via-transparent to-transparent'
          }`}
        >
          {hasStarted ? (
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-orange shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
              <i className="fa-solid fa-play ml-1 text-2xl text-white sm:text-3xl" />
            </span>
          ) : (
            // Antes do primeiro play o botão fica no canto, para não cobrir o título da capa
            <span className="absolute bottom-3 right-3 flex items-center gap-3 rounded-full bg-brand-orange py-2 pl-2 pr-5 text-white shadow-[0_8px_30px_rgba(255,81,0,0.55)] transition-transform duration-300 group-hover:scale-105 sm:bottom-6 sm:right-6">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white sm:h-11 sm:w-11">
                <span className="absolute inset-0 animate-ping rounded-full bg-white/50" />
                <i className="fa-solid fa-play relative ml-0.5 text-brand-orange sm:text-lg" />
              </span>
              <span className="text-sm font-black sm:text-base">
                Assistir{duration > 0 && <span className="font-semibold text-white/80"> · {formatTime(duration)}</span>}
              </span>
            </span>
          )}
        </button>
      )}

      {/* Barra de controles */}
      {hasStarted && (
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/90 to-transparent px-4 pb-3 pt-10 transition-opacity duration-300 ${
            controlsVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={current}
            onChange={(e) => seek(Number(e.target.value))}
            aria-label="Posição do vídeo"
            className="brand-video-range mb-2 h-1.5 w-full cursor-pointer appearance-none rounded-full"
            style={{ background: `linear-gradient(to right, #FF5100 ${progress}%, rgba(255,255,255,0.25) ${progress}%)` }}
          />
          <div className="flex items-center gap-4 text-white">
            <button type="button" onClick={toggle} aria-label={playing ? 'Pausar' : 'Reproduzir'} className="w-5 transition-colors hover:text-brand-orange">
              <i className={`fa-solid ${playing ? 'fa-pause' : 'fa-play'}`} />
            </button>
            <button type="button" onClick={toggleMute} aria-label={muted ? 'Ativar som' : 'Silenciar'} className="w-5 transition-colors hover:text-brand-orange">
              <i className={`fa-solid ${muted ? 'fa-volume-xmark' : 'fa-volume-high'}`} />
            </button>
            <span className="text-sm font-semibold tabular-nums text-white/80">
              {formatTime(current)} / {formatTime(duration)}
            </span>
            <button type="button" onClick={toggleFullscreen} aria-label="Tela cheia" className="ml-auto transition-colors hover:text-brand-orange">
              <i className="fa-solid fa-expand" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
