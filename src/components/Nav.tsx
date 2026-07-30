import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "inicio", label: "Início" },
  { id: "video", label: "Vídeo" },
  { id: "sobre", label: "Sobre" },
  { id: "galerias", label: "Galerias" },
  { id: "vista-aerea", label: "Vista Aérea" },
  { id: "contato", label: "Contato" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        <a
          href="#inicio"
          className={`font-serif text-xl md:text-2xl tracking-wide transition-colors ${
            scrolled ? "text-coffee" : "text-cream"
          }`}
        >
          Sítio <span className="italic text-gold">Charqueada</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs uppercase tracking-[0.25em] font-medium transition-colors hover:text-gold ${
                scrolled ? "text-coffee/80" : "text-cream/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled ? "text-coffee" : "text-cream"}`}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-border mt-3 animate-fade-in">
          <nav className="container-editorial flex flex-col py-6 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-coffee text-sm uppercase tracking-[0.25em] font-medium py-2"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
