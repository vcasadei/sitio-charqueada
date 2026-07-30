import { useState } from "react";
import { ImageIcon, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  index: number;
  caption?: string;
  src?: string;                 // URL da imagem real (se existir)
  aspect?: "square" | "portrait" | "landscape" | "wide" | "tall";
  onClick?: () => void;
  className?: string;
  fit?: "cover" | "contain";    // como a imagem preenche o quadro
}

const aspectMap: Record<NonNullable<PhotoPlaceholderProps["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  tall: "aspect-[2/3]",
};

export const PhotoPlaceholder = ({
  index,
  caption,
  src,
  aspect = "landscape",
  onClick,
  className,
  fit = "cover",
}: PhotoPlaceholderProps) => {
  // Tenta carregar a imagem; se 404, cai no placeholder
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("photo-frame group block w-full text-left", aspectMap[aspect], className)}
      aria-label={caption ? `Ampliar foto: ${caption}` : `Ampliar foto ${index}`}
    >
      {/* Placeholder (sempre por baixo, fica visível enquanto carrega ou se falhar) */}
      <div className="ph-inner placeholder-art absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center gap-2 text-coffee/40">
          <ImageIcon className="h-10 w-10" strokeWidth={1} />
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">
            Foto {String(index).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Imagem real */}
      {showImage && (
        <img
          src={src}
          alt={caption ?? `Foto ${index}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "absolute inset-0 z-[2] h-full w-full transition-opacity duration-700",
            fit === "contain" ? "object-contain" : "object-cover",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      <div className="photo-zoom-icon">
        <div className="rounded-full bg-cream/95 p-3 shadow-elegant">
          <ZoomIn className="h-5 w-5 text-coffee" strokeWidth={1.5} />
        </div>
      </div>
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 z-[3] bg-gradient-to-t from-coffee/85 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="text-cream text-sm font-light italic">{caption}</span>
        </div>
      )}
    </button>
  );
};
