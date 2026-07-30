
# Site do Sítio em Charqueada-SP

Página única, sofisticada, em estilo editorial de revista de imóveis de alto padrão. Tons terrosos (creme, verde-oliva profundo, marrom-café, dourado discreto), tipografia serifada elegante para títulos (Cormorant Garamond ou Playfair Display) combinada com sans-serif limpa para textos (Inter). Animações suaves de fade/slide ao rolar e transições refinadas.

Estrutura montada com **placeholders** (38 espaços para fotos e 1 para o vídeo). Você substitui depois enviando os arquivos.

## Estrutura da página (de cima para baixo)

**1. Hero cinematográfico**
- Tela cheia com imagem de destaque ao fundo (placeholder), sutilmente escurecida.
- Título grande em serifa: "Sítio em Charqueada-SP".
- Subtítulo: "27.200 m² de natureza, a 5 minutos do centro".
- Preço em destaque elegante e indicador de scroll animado.

**2. Vídeo de destaque**
- Bloco central, largura grande, com player do vídeo (placeholder por enquanto — depois você envia o mp4).
- Moldura sutil, título "Conheça a propriedade" e legenda curta.
- Animação de fade/zoom suave ao entrar na tela.

**3. Resumo & destaques rápidos**
- Faixa com ícones e números: 27.200 m² de terreno, 151,30 m² construídos, 3 dormitórios, piscina, pomar, riacho.
- Cards horizontais minimalistas.

**4. Sobre a propriedade**
- Texto editorial em duas colunas com a descrição completa (localização privilegiada, vista, tranquilidade, internet rápida, ar-condicionado em 2 quartos e sala, ventilador em todos os cômodos).
- Foto grande de apoio ao lado (placeholder).

**5. Galerias temáticas (mix de formatos, 38 fotos distribuídas)**
Sequência de blocos, cada um com título serifado, descrição curta e fotos. Alterna entre **foto grande individual** com legenda ao lado e **mosaicos em grade** (2-3 colunas).

Distribuição sugerida das 38 fotos:
- A Casa — sala, dormitórios, banheiro, cozinha (~8 fotos)
- Área Gourmet & Piscina — varanda em L (~6 fotos)
- Pomar & Jardim — frutíferas, coqueiros, pergolato com pé de uva sobre o poço (~7 fotos)
- Galinheiro & Cultivo — laranja, limão, pitaya, área de expansão (~5 fotos)
- O Terreno — pasto, Rio Calegaro, segunda construção (~7 fotos)
- Vista & Entorno (~5 fotos)

Você reorganiza depois conforme o que tiver. Todas as fotos clicáveis, abrem em **lightbox em tela cheia** com navegação por setas, ESC para fechar e swipe no mobile.

**6. Vista aérea — Google Earth**
- Seção dedicada com visualização do terreno via Google Earth incorporado (iframe) mostrando os 27.200 m² da propriedade vistos de cima.
- Acompanha um mapa do Google Maps logo abaixo com o endereço (Rod. SP-191, nº 925) para referência de localização e proximidade ao centro.
- Botão "Abrir no Google Earth" para visualização completa.

**7. Contato & Preço (seção final em destaque)**
- Faixa larga com fundo em tom escuro terroso.
- Preço grande: **R$ 950.000,00** e nota sobre avaliação de troca por imóvel de melhor valor na região.
- Botões grandes:
  - WhatsApp: (15) 98127-2667 (link `wa.me`).
  - E-mail: vitor.casadei2@gmail.com (`mailto:`).

**8. Rodapé discreto** com endereço, contatos e nota de propriedade particular.

## Animações e interações
- Fade-in + leve translate ao entrar na viewport (Intersection Observer).
- Parallax suave no hero e em fotos grandes individuais.
- Hover nas fotos: leve zoom e overlay com ícone de "ampliar".
- Menu fixo no topo com scroll suave (Início · Vídeo · A Casa · Galerias · Vista Aérea · Contato).
- Transições refinadas no lightbox (fade + scale).

## Detalhes técnicos
- React + Vite + Tailwind, design system em `index.css` com tokens HSL para a paleta terrosa.
- Lightbox custom acessível (foco capturado, navegação por teclado).
- Vídeo via tag `<video>` com poster, controles nativos e `preload="metadata"`.
- Placeholders de foto com `aspect-ratio` definido (sem layout shift quando você trocar pelas reais).
- Google Earth incorporado via iframe (formato `earth.google.com/web/...embed`); fallback para satélite do Google Maps caso o embed do Earth não carregue.
- Mapa via iframe do Google Maps no endereço da SP-191, 925.
- Totalmente responsivo (galerias reorganizam em 1 coluna no mobile).

## Próximo passo
Após aprovar, monto a estrutura completa com 38 placeholders + 1 placeholder de vídeo + área da vista aérea. Depois você me envia:
- O vídeo (mp4) e as 38 fotos (de preferência nomeadas por seção, mas tudo bem se vierem juntas).
- As coordenadas exatas ou um link do Google Earth do terreno (eu posiciono no embed; se não tiver, uso o endereço da SP-191, 925).
