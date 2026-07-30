import { useState } from "react";
import { ChevronDown, Play, MapPin, Home, Trees, Bath, Bed, Waves, Wifi, Wind, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Lightbox, type LightboxPhoto } from "@/components/Lightbox";
import { DroneVideo } from "@/components/DroneVideo";
import { photos as mediaPhotos, photoSrc, photoThumbSrc, heroVideoSrc, featureVideoSrc, droneCasaVideoSrc, droneTerrenoVideoSrc, delineadoAereoSrc } from "@/data/media";

// Converte o manifest em LightboxPhoto[] já com src resolvido
// (thumb = versão leve usada nas grades; src = versão maior usada no lightbox)
const photos: Array<LightboxPhoto & { thumb: string }> = mediaPhotos.map((p) => ({
  index: p.index,
  section: p.section,
  caption: p.caption,
  src: photoSrc(p.file),
  thumb: photoThumbSrc(p.file),
}));

const Index = () => {
  const [active, setActive] = useState<number | null>(null);

  const open = (i: number) => setActive(i);
  const close = () => setActive(null);
  const navigate = (i: number) => setActive(i);

  // Helpers para selecionar fotos por seção
  const range = (a: number, b: number) => photos.slice(a - 1, b).map((_, idx) => a - 1 + idx);

  return (
    <div className="bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section id="inicio" className="relative h-screen min-h-[640px] w-full overflow-hidden">
        {/* Vídeo de fundo (placeholder). Substitua o src pelo seu arquivo em /public/hero.mp4 */}
        <video
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg"
          aria-hidden="true"
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
        {/* Fallback art enquanto o vídeo não carrega */}
        <div className="absolute inset-0 placeholder-art -z-10" />
        {/* Overlay escuro para legibilidade do texto */}
        <div className="absolute inset-0 bg-coffee/55" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-24 md:pb-32">
          <Reveal>
            <p className="eyebrow !text-gold-soft mb-4">Charqueada · São Paulo · Rod. SP-191</p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
              Um sítio onde o tempo
              <span className="italic text-gold-soft"> desacelera</span>.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-cream/85 text-base md:text-lg max-w-xl font-light">
              27.200 m² de natureza, jardim, pomar e riacho — a apenas 5 minutos do centro de Charqueada-SP.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10 flex flex-wrap items-end gap-6 md:gap-10">
              <div>
                <p className="eyebrow !text-cream/60 mb-2">Valor</p>
                <p className="font-serif text-cream text-3xl md:text-5xl">R$ 950.000</p>
              </div>
              <div className="hidden md:block h-16 w-px bg-cream/30" />
              <div className="text-cream/80 text-sm font-light max-w-xs">
                Avalia troca em imóvel de melhor valor na região.
              </div>
            </div>
          </Reveal>
        </div>

        <a
          href="#video"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/80 animate-scroll-hint"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="h-7 w-7" />
        </a>
      </section>

      {/* VÍDEO */}
      <section id="video" className="py-24 md:py-36 bg-cream">
        <div className="container-editorial">
          <Reveal className="text-center mb-12 md:mb-16">
            <p className="eyebrow mb-4">Apresentação</p>
            <h2 className="font-serif text-4xl md:text-6xl text-coffee">
              Conheça a <span className="italic">propriedade</span>
            </h2>
            <div className="divider-ornament max-w-xs mx-auto mt-8">
              <span className="text-xs">✦</span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative max-w-5xl mx-auto aspect-video shadow-photo overflow-hidden bg-coffee">
              {/* Vídeo real (controles nativos). Preenche todo o container. */}
              <video
                className="absolute inset-0 w-full h-full object-cover bg-coffee"
                controls
                preload="metadata"
                playsInline
              >
                <source src={featureVideoSrc} type="video/mp4" />
              </video>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-center mt-8 text-muted-foreground italic font-serif text-lg max-w-2xl mx-auto">
              Um passeio pelos detalhes que tornam este lugar único.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="py-20 bg-cream-deep border-y border-border">
        <div className="container-editorial">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
            {[
              { icon: Trees, label: "Terreno", value: "27.200 m²" },
              { icon: Home, label: "Construção", value: "151,30 m²" },
              { icon: Bed, label: "Dormitórios", value: "3" },
              { icon: Bath, label: "Banheiros", value: "2" },
              { icon: Waves, label: "Piscina", value: "Sim" },
              { icon: MapPin, label: "Centro", value: "5 min" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3} className="flex flex-col items-center text-center gap-3">
                <s.icon className="h-7 w-7 text-gold" strokeWidth={1.2} />
                <p className="font-serif text-2xl text-coffee">{s.value}</p>
                <p className="eyebrow !text-muted-foreground">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 md:py-36 bg-background">
        <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-7 order-2 lg:order-1">
            <p className="eyebrow mb-5">A Propriedade</p>
            <h2 className="font-serif text-4xl md:text-6xl text-coffee leading-[1.05]">
              Espaço, vista e <span className="italic text-olive">tranquilidade</span> — sem abrir mão da cidade.
            </h2>

            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Localizado em área privilegiada na Rodovia SP-191, em Charqueada-SP, o sítio reúne 27.200 m² de natureza generosa
                com 151,30 m² de construção bem distribuída: sala de estar e jantar conjuntas, três dormitórios espaçosos,
                banheiro, cozinha, área gourmet com piscina e banheiro dedicado, além de uma varanda em L na lateral da casa.
              </p>
              <p>
                O terreno conta com pomar de diversas frutíferas, coqueiros, um jardim com pergolato e um pé de uva sobre o poço.
                Há ainda uma segunda construção para guardar equipamentos, galinheiro com pés de laranja, limão, pitaya e outras
                frutas, área para cultivo e o terreno se estendendo em pasto até o Rio Calegaro.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-coffee/80">
              <div className="flex items-center gap-2"><Wind className="h-4 w-4 text-gold" /> Ar-condicionado em 2 quartos e sala</div>
              <div className="flex items-center gap-2"><Wind className="h-4 w-4 text-gold" /> Ventilador de teto em todos os cômodos</div>
              <div className="flex items-center gap-2"><Wifi className="h-4 w-4 text-gold" /> Internet rápida</div>
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-5 order-1 lg:order-2">
            <PhotoPlaceholder
              index={1}
              aspect="landscape"
              fit="contain"
              caption={photos[0].caption}
              src={photos[0].thumb}
              onClick={() => open(0)}
              className="bg-cream"
            />
          </Reveal>
        </div>
      </section>

      {/* GALERIAS TEMÁTICAS */}
      <div id="galerias">
        {/* Seção: A Casa */}
        <GallerySection
          eyebrow="01"
          title="A Casa"
          italic="que acolhe"
          description="Distribuição inteligente em 151,30 m² — três dormitórios espaçosos, sala conjunta, cozinha funcional e banheiro completo. Ambientes que respiram a luz do campo."
          featured={{ idx: 1, aspect: "wide" }}
          mosaic={range(3, 15)}
          onOpen={open}
          dark={false}
        />

        {/* Seção: Área Gourmet & Varanda */}
        <GallerySection
          eyebrow="02"
          title="Área Gourmet"
          italic="& Varanda"
          description="O coração dos encontros: piscina, pergolato, churrasqueira e a varanda em L que envolve a casa pela lateral."
          featured={{ idx: 15, aspect: "wide" }}
          mosaic={[16, 17, 18, 19, 20, 21, 22]}
          onOpen={open}
          dark
        />

        {/* Seção: Pomar, Horta & Jardim */}
        <GallerySection
          eyebrow="03"
          title="Pomar, Horta"
          italic="& Jardim"
          description="Frutíferas variadas, pergolato com pé de uva, canteiros de horta produtiva e uma edícula no quintal — um pequeno mundo verde dentro da propriedade."
          featured={{ idx: 23, aspect: "wide" }}
          mosaic={range(25, 30)}
          onOpen={open}
          dark={false}
        />

        {/* Seção: Galinheiro */}
        <GallerySection
          eyebrow="04"
          title="Galinheiro"
          italic="& Cultivo"
          description="Na parte baixa da casa: galinheiro amplo cercado por pés de laranja, limão e pitaya. Espaço para criação e cultivo próprios."
          featured={{ idx: 30, aspect: "wide" }}
          mosaic={range(32, 37)}
          onOpen={open}
          dark
        />

        {/* Seção: O Terreno */}
        <GallerySection
          eyebrow="05"
          title="O Terreno"
          italic="& o Rio Calegaro"
          description="Atrás do pomar, o terreno se abre em campo e desce até o Rio Calegaro, marcando o limite natural dos 27.200 m² da propriedade."
          featured={{ idx: 37, aspect: "wide" }}
          mosaic={range(39, 42)}
          onOpen={open}
          dark={false}
        />
      </div>

      {/* VISTA DO ALTO — DELIMITAÇÃO + DRONE */}
      <section id="vista-aerea" className="py-24 md:py-36 bg-cream">
        <div className="container-editorial">
          <Reveal className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            <p className="eyebrow mb-4">Vista do alto</p>
            <h2 className="font-serif text-4xl md:text-6xl text-coffee">
              Os 27.200 m² <span className="italic">vistos do céu</span>
            </h2>
            <p className="mt-6 text-muted-foreground font-light">
              Explore a dimensão real do terreno e sua localização privilegiada na Rodovia SP-191.
            </p>
          </Reveal>

          {/* Delineado do terreno */}
          <Reveal delay={1} className="max-w-6xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl text-coffee text-center leading-tight">
              O perímetro <span className="italic">da propriedade</span>
            </h3>
            <div className="mt-8 shadow-photo overflow-hidden bg-muted">
              <img
                src={delineadoAereoSrc}
                alt="Foto aérea da propriedade com o contorno dos 27.200 m² do terreno destacado"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </Reveal>

          {/* Vídeos de drone */}
          <Reveal delay={1} className="mt-20 max-w-6xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl text-coffee text-center leading-tight">
              A propriedade <span className="italic">em movimento</span>
            </h3>


            <div className="mt-10 grid lg:grid-cols-12 gap-8 items-start">
              <figure className="lg:col-span-7">
                <div className="aspect-video w-full shadow-photo overflow-hidden bg-coffee">
                  <DroneVideo
                    src={droneCasaVideoSrc}
                    volume={0.5}
                    title="Vídeo aéreo da casa"
                  />
                </div>
                <figcaption className="mt-3 text-sm font-light italic text-muted-foreground">
                  Sobrevoo da casa e da área gourmet
                </figcaption>
              </figure>

              <figure className="lg:col-span-5">
                <div className="aspect-[9/16] w-full shadow-photo overflow-hidden bg-coffee">
                  <DroneVideo
                    src={droneTerrenoVideoSrc}
                    volume={0.3}
                    title="Vídeo aéreo do terreno"
                  />
                </div>
                <figcaption className="mt-3 text-sm font-light italic text-muted-foreground">
                  Subida vertical mostrando o terreno inteiro
                </figcaption>
              </figure>
            </div>
          </Reveal>

          {/* Mapa de localização */}
          <Reveal delay={2} className="mt-20 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Localização</p>
              <h3 className="font-serif text-3xl md:text-4xl text-coffee leading-tight">
                Rodovia SP-191, <span className="italic">Charqueada-SP</span>
              </h3>
              <p className="mt-4 text-muted-foreground font-light">
                Charqueada — São Paulo. A 5 minutos do centro da cidade, com acesso a comércio, serviços, escolas e internet rápida.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rodovia+SP-191,+Charqueada+-+SP"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-gold hover:text-coffee transition-colors text-sm uppercase tracking-[0.25em] font-medium"
              >
                Ver no Google Maps <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="lg:col-span-7">
              <div className="aspect-[4/3] w-full shadow-elegant overflow-hidden bg-muted">
                <iframe
                  title="Mapa personalizado do sítio"
                  src="https://www.google.com/maps/d/u/0/embed?mid=1UFu7jrA7pxEXZf-ogAnqOqy7zNKzvSQ&ehbc=2E312F&noprof=1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="relative py-28 md:py-40 text-cream overflow-hidden"
        style={{ background: "var(--gradient-dark)" }}
      >
        <div className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "radial-gradient(circle at 20% 30%, hsl(38 55% 52%) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(38 55% 52%) 0%, transparent 50%)" }} />

        <div className="container-editorial relative z-10 text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="eyebrow !text-gold-soft mb-5">Faça seu interesse</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight">
              Vamos <span className="italic text-gold">conversar</span>?
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <div className="mt-12 inline-block">
              <p className="eyebrow !text-cream/50 mb-3">Valor pedido</p>
              <p className="font-serif text-5xl md:text-7xl text-cream">R$ 950.000</p>
              <p className="mt-4 text-cream/70 italic font-serif text-lg">
                Avalia troca em imóvel de melhor valor na região.
              </p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              <a
                href="https://wa.me/5515981272667?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20s%C3%ADtio%20em%20Charqueada-SP."
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gold hover:bg-cream text-coffee px-10 py-5 transition-all duration-500 shadow-elegant hover:shadow-photo"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
                <div className="text-left">
                  <span className="block eyebrow !text-coffee/60">WhatsApp</span>
                  <span className="block font-serif text-xl">(15) 98127-2667</span>
                </div>
              </a>

              <a
                href="mailto:vitor.casadei2@gmail.com?subject=Interesse%20no%20s%C3%ADtio%20em%20Charqueada-SP"
                className="group inline-flex items-center justify-center gap-3 border border-cream/40 hover:border-gold hover:bg-cream/5 text-cream px-10 py-5 transition-all duration-500"
              >
                <Mail className="h-5 w-5" strokeWidth={1.5} />
                <div className="text-left">
                  <span className="block eyebrow !text-cream/50">E-mail</span>
                  <span className="block font-serif text-lg">vitor.casadei2@gmail.com</span>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <p className="mt-16 text-cream/50 text-sm flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              Rodovia SP-191 · Charqueada · SP
            </p>
          </Reveal>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-coffee text-cream/60 py-10 text-center text-xs tracking-wider">
        <div className="container-editorial">
          <p>Anúncio de propriedade particular · Charqueada-SP</p>
          <p className="mt-2 italic font-serif text-sm">
            "Onde o tempo encontra a terra."
          </p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <Lightbox photos={photos} activeIndex={active} onClose={close} onNavigate={navigate} />
    </div>
  );
};

// Componente reutilizável de galeria temática
interface GalleryProps {
  eyebrow: string;
  title: string;
  italic: string;
  description: string;
  featured: { idx: number; aspect: "wide" | "landscape" | "portrait" };
  mosaic: number[]; // índices em photos[]
  onOpen: (i: number) => void;
  dark: boolean;
}

const GallerySection = ({ eyebrow, title, italic, description, featured, mosaic, onOpen, dark }: GalleryProps) => {
  const featuredPhoto = photos[featured.idx];
  return (
    <section className={`py-24 md:py-32 ${dark ? "bg-cream-deep" : "bg-background"}`}>
      <div className="container-editorial">
        {/* Header da seção */}
        <Reveal className="mb-14 md:mb-20 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">{eyebrow} · Galeria</p>
            <h2 className="font-serif text-4xl md:text-6xl text-coffee leading-[1.05]">
              {title} <span className="italic text-olive">{italic}</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted-foreground font-light leading-relaxed">{description}</p>
          </div>
        </Reveal>

        {/* Foto destaque */}
        <Reveal delay={1}>
          <PhotoPlaceholder
            index={featuredPhoto.index}
            aspect={featured.aspect}
            caption={featuredPhoto.caption}
            src={featuredPhoto.thumb}
            onClick={() => onOpen(featured.idx)}
          />
        </Reveal>

        {/* Mosaico */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {mosaic.map((photoIdx, i) => {
            const p = photos[photoIdx];
            // Variação de aspect para layout dinâmico
            const aspects: Array<"square" | "portrait" | "landscape"> = ["landscape", "portrait", "square", "landscape", "square", "portrait"];
            const aspect = aspects[i % aspects.length];
            return (
              <Reveal key={p.index} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <PhotoPlaceholder
                  index={p.index}
                  caption={p.caption}
                  src={p.thumb}
                  aspect={aspect}
                  onClick={() => onOpen(photoIdx)}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Index;
