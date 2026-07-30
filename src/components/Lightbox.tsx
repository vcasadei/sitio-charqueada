import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

export interface LightboxPhoto {
  index: number;
  caption?: string;
  section?: string;
  src?: string; // URL da imagem real (se existir)
}

interface LightboxProps {
  photos: LightboxPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox = ({ photos, activeIndex, onClose, onNavigate }: LightboxProps) => {
  const [failed, setFailed] = useState(false);

  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + photos.length) % photos.length);
  }, [activeIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % photos.length);
  }, [activeIndex, photos.length, onNavigate]);

  // reset estado de erro ao trocar de foto
  useEffect(() => { setFailed(false); }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, onClose, handlePrev, handleNext]);

  // Touch swipe
  useEffect(() => {
    if (activeIndex === null) return;
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 60) dx > 0 ? handlePrev() : handleNext();
    };
    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchend", onTouchEnd);
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [activeIndex, handlePrev, handleNext]);

  if (activeIndex === null) return null;
  const photo = photos[activeIndex];
  const showImage = photo.src && !failed;

  return (
    <div
      className="fixed inset-0 z-[100] bg-coffee/95 backdrop-blur-sm flex items-center justify-center lightbox-enter"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 z-10 rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/20 transition-colors"
        aria-label="Fechar"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
        className="absolute left-4 md:left-8 z-10 rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/20 transition-colors"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); handleNext(); }}
        className="absolute right-4 md:right-8 z-10 rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/20 transition-colors"
        aria-label="Próxima foto"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      <div
        className="relative max-w-[90vw] max-h-[85vh] w-full md:w-[80vw] aspect-[4/3] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {showImage ? (
          <img
            src={photo.src}
            alt={photo.caption ?? `Foto ${photo.index}`}
            onError={() => setFailed(true)}
            className="max-h-[85vh] max-w-full w-auto h-auto object-contain shadow-photo"
          />
        ) : (
          <div className="placeholder-art shadow-photo w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-coffee/40">
              <ImageIcon className="h-16 w-16" strokeWidth={1} />
              <span className="text-xs uppercase tracking-[0.3em]">
                Foto {String(photo.index).padStart(2, "0")}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center px-6">
        {photo.section && (
          <p className="eyebrow mb-2 !text-gold-soft">{photo.section}</p>
        )}
        {photo.caption && (
          <p className="font-serif text-cream text-xl md:text-2xl italic">{photo.caption}</p>
        )}
        <p className="text-cream/50 text-xs mt-3 tracking-widest">
          {activeIndex + 1} / {photos.length}
        </p>
      </div>
    </div>
  );
};
