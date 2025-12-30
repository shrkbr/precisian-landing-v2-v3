/**
 * VideoSection - Manifesto video section
 * Lazy loads video with play button overlay
 */

import { useState, useRef, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';
import { trackVideoEvent } from '@/services/analytics';

interface VideoSectionProps {
  videoId?: string;
  videoUrl?: string;
  posterUrl?: string;
  title?: string;
  subtitle?: string;
}

export function VideoSection({
  videoId = 'manifesto',
  videoUrl,
  posterUrl = '/images/video-poster.jpg',
  title = 'Why decision integrity matters',
  subtitle = 'A 2-minute introduction to the DVQ framework',
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = useCallback(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      trackVideoEvent('pause', videoId, title);
    } else {
      videoRef.current.play();
      if (!hasStarted) {
        setHasStarted(true);
        trackVideoEvent('play', videoId, title);
      }
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, hasStarted, videoId, title]);

  const handleVideoEnd = useCallback(() => {
    setIsPlaying(false);
    trackVideoEvent('complete', videoId, title, 100);
  }, [videoId, title]);

  return (
    <section className="py-24 px-6 bg-[#030303]">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-[#FD68B3] tracking-wider mb-4 block uppercase">
            // THE MANIFESTO
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">
            {title}
          </h2>
          <p className="text-gray-500">{subtitle}</p>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden group">
          {/* Corner markers */}
          <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-[#FD68B3]/60 z-10" />
          <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-[#FD68B3]/60 z-10" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-[#FD68B3]/60 z-10" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-[#FD68B3]/60 z-10" />

          {/* Video or Placeholder */}
          {videoUrl ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={posterUrl}
              onEnded={handleVideoEnd}
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#1a0a15]">
              <div className="text-center">
                <p className="font-mono text-sm text-gray-600 mb-2">VIDEO_PLACEHOLDER</p>
                <p className="text-xs text-gray-700">Coming soon</p>
              </div>
            </div>
          )}

          {/* Play/Pause Button Overlay */}
          <button
            onClick={handlePlay}
            className={`
              absolute inset-0 flex items-center justify-center
              transition-opacity duration-300
              ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}
            `}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            <div className="w-20 h-20 rounded-full bg-[#FD68B3] flex items-center justify-center transition-transform hover:scale-110 group-hover:scale-110">
              {isPlaying ? (
                <Pause className="w-8 h-8 text-black" />
              ) : (
                <Play className="w-8 h-8 text-black ml-1" />
              )}
            </div>
          </button>

          {/* Scan line effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute w-full h-px bg-[#FD68B3]/30 animate-scan-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
