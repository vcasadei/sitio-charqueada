import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DroneVideoProps {
  src: string;
  volume: number; // 0..1
  className?: string;
  title?: string;
}

/** Vídeo com controles nativos, sem autoplay e com volume pré-definido. */
export const DroneVideo = ({ src, volume, className, title }: DroneVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.volume = volume;
  }, [volume, src]);

  return (
    <video
      ref={ref}
      src={src}
      title={title}
      controls
      preload="metadata"
      playsInline
      onLoadedMetadata={(e) => {
        e.currentTarget.volume = volume;
      }}
      className={cn("h-full w-full object-cover bg-coffee", className)}
    />
  );
};
