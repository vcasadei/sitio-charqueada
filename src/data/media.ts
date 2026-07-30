// =============================================================
// MAPEAMENTO DE MÍDIA — Sítio Charqueada
// =============================================================
// As 42 fotos abaixo vieram do Google Drive com nomes descritivos
// (Casa1.jpg, Cozinha1.jpg, Galinheiro1.jpg, etc.) e estão em
// /public/fotos/ com esses mesmos nomes.
//
// Para trocar a ordem ou legenda, edite só este arquivo. As
// galerias em Index.tsx se atualizam sozinhas.
// =============================================================

export interface MediaPhoto {
  index: number;
  section: string;
  caption: string;
  file: string;
}

export const photos: MediaPhoto[] = [
  // ---- 1: destaque em "A Propriedade" ----
  { index: 1,  section: "A Propriedade",  caption: "Vista geral da casa",                       file: "Casa1.jpg" },

  // ---- A Casa (2-15) ----
  { index: 2,  section: "A Casa",         caption: "Sala e copa",                               file: "SalaCopa1.jpg" },
  { index: 3,  section: "A Casa",         caption: "Sala e copa — outro ângulo",                file: "SalaCopa2.jpg" },
  { index: 4,  section: "A Casa",         caption: "Cozinha",                                   file: "Cozinha1.jpg" },
  { index: 5,  section: "A Casa",         caption: "Cozinha — bancada",                         file: "Cozinha2.jpg" },
  { index: 6,  section: "A Casa",         caption: "Cozinha — detalhe",                         file: "Cozinha3.jpg" },
  { index: 7,  section: "A Casa",         caption: "Cozinha — armários",                        file: "Cozinha4.jpg" },
  { index: 8,  section: "A Casa",         caption: "Dormitório principal",                      file: "Quarto1.jpg" },
  { index: 9,  section: "A Casa",         caption: "Segundo dormitório",                        file: "Quarto2_1.jpg" },
  { index: 10, section: "A Casa",         caption: "Segundo dormitório — outro ângulo",         file: "Quarto2_2.jpg" },
  { index: 11, section: "A Casa",         caption: "Terceiro dormitório",                       file: "Quarto3.jpg" },
  { index: 12, section: "A Casa",         caption: "Banheiro",                                  file: "Banheiro1.jpg" },
  { index: 13, section: "A Casa",         caption: "Banheiro — vaso",                           file: "Banheiro2.jpg" },
  { index: 14, section: "A Casa",         caption: "Banheiro — chuveiro",                       file: "Banheiro3.jpg" },
  { index: 15, section: "A Casa",         caption: "Banheiro — detalhe",                        file: "Banheiro4.jpg" },

  // ---- Área Gourmet & Varanda (16-23) ----
  { index: 16, section: "Área Gourmet",   caption: "Piscina",                                   file: "Piscina.jpg" },
  { index: 17, section: "Área Gourmet",   caption: "Pergolato do quintal",                      file: "PergolatoQuintal.jpg" },
  { index: 18, section: "Área Gourmet",   caption: "Pergolato — outro ângulo",                  file: "PergolatoQuintal2.jpg" },
  { index: 19, section: "Área Gourmet",   caption: "Varanda com lavanderia e churrasqueira",    file: "VarandaLavanderiaChurrasqueira.jpg" },
  { index: 20, section: "Área Gourmet",   caption: "Varanda em L",                              file: "Varanda1.jpg" },
  { index: 21, section: "Área Gourmet",   caption: "Varanda — vista",                           file: "Varanda2.jpg" },
  { index: 22, section: "Área Gourmet",   caption: "Varanda — detalhe",                         file: "Varanda3.jpg" },
  { index: 23, section: "Área Gourmet",   caption: "Varanda — outro ângulo",                    file: "Varanda4.jpg" },

  // ---- Pomar, Horta & Jardim (24-30) ----
  { index: 24, section: "Pomar & Jardim", caption: "Jardim com pé de uva",                      file: "JardimUvas1.jpg" },
  { index: 25, section: "Pomar & Jardim", caption: "Pergolato de uvas",                         file: "JardimUvas2.jpg" },
  { index: 26, section: "Pomar & Jardim", caption: "Uvas — detalhe",                            file: "JardimUvas3.jpg" },
  { index: 27, section: "Pomar & Jardim", caption: "Horta",                                     file: "QuintalHorta1.jpg" },
  { index: 28, section: "Pomar & Jardim", caption: "Horta — canteiros",                         file: "QuintalHorta2.jpg" },
  { index: 29, section: "Pomar & Jardim", caption: "Horta — detalhe",                           file: "QuintalHorta3.jpg" },
  { index: 30, section: "Pomar & Jardim", caption: "Edícula no quintal",                        file: "QuintalEdicula.jpg" },

  // ---- Galinheiro (31-37) ----
  { index: 31, section: "Galinheiro",     caption: "Galinheiro",                                file: "Galinheiro1.jpg" },
  { index: 32, section: "Galinheiro",     caption: "Galinheiro — outro ângulo",                 file: "Galinheiro2.jpg" },
  { index: 33, section: "Galinheiro",     caption: "Galinheiro — interior",                     file: "Galinheiro3.jpg" },
  { index: 34, section: "Galinheiro",     caption: "Galinheiro — área externa",                 file: "Galinheiro4.jpg" },
  { index: 35, section: "Galinheiro",     caption: "Galinheiro — cercado",                      file: "Galinheiro5.jpg" },
  { index: 36, section: "Galinheiro",     caption: "Galinheiro — detalhe",                      file: "Galinheiro6.jpg" },
  { index: 37, section: "Galinheiro",     caption: "Galinheiro — vista geral",                  file: "Galinheiro7.jpg" },

  // ---- O Terreno (38-42) ----
  { index: 38, section: "O Terreno",      caption: "Campo e pomar",                             file: "QuintalCampoPomar.jpg" },
  { index: 39, section: "O Terreno",      caption: "Campo — vista ampla",                       file: "QuintalCampoPomar2.jpg" },
  { index: 40, section: "O Terreno",      caption: "Campo — outro ângulo",                      file: "QuintalCampoPomar3.jpg" },
  { index: 41, section: "O Terreno",      caption: "Edícula — vista externa",                   file: "QuintalEdicula2.jpg" },
  { index: 42, section: "O Terreno",      caption: "Entrada e portão vistos da rua",            file: "EntradaPortao_VisaoRua.jpg" },
];

// Fotos otimizadas: WebP 1800px (full) e 800px (thumb, usado nas grades)
const webpName = (file: string) => file.replace(/\.(jpe?g|png)$/i, ".webp");

// Caminho público da foto (resolve com base do Vite p/ funcionar no GH Pages)
export const photoSrc = (file: string) =>
  `${import.meta.env.BASE_URL}fotos/${encodeURIComponent(webpName(file))}`;

export const photoThumbSrc = (file: string) =>
  `${import.meta.env.BASE_URL}fotos/thumbs/${encodeURIComponent(webpName(file))}`;

// Vídeos — servidos direto de /public/videos (compatível com GitHub Pages)
export const featureVideoSrc = `${import.meta.env.BASE_URL}videos/video-destaque.mp4`;
export const heroVideoSrc = featureVideoSrc;

// Mídia aérea (drone)
export const droneCasaVideoSrc = `${import.meta.env.BASE_URL}videos/drone-casa.mp4`;
export const droneTerrenoVideoSrc = `${import.meta.env.BASE_URL}videos/drone-terreno.mp4`;
export const delineadoAereoSrc = `${import.meta.env.BASE_URL}fotos/DelineadoAereoCut.webp`;
