# Do Zé Burguer — Site One-Page

Site institucional e de pedidos da hamburgueria artesanal Do Zé Burguer,
nos Campos Elíseos, São Paulo.

## Stack

HTML5, CSS3 e JavaScript puro. Sem frameworks, sem build step, sem dependências
externas além das fontes do Google Fonts.

## Estrutura

    index.html      Página completa (HTML + CSS + JS)
    robots.txt      Diretivas para crawlers
    sitemap.xml     Mapa do site
    assets/         Imagens (ver lista abaixo)

## Imagens necessárias

    assets/
    ├── og-image.jpg              1200x630  Preview de compartilhamento
    ├── logo-doze-burguer.svg     vetorial  Logo do header e hero
    ├── hero-fachada.webp         1600x900  Fachada à noite (hero)
    ├── hero-fachada.jpg          1600x900  Fallback do hero
    ├── galeria-01-balcao.webp     800x800   Balcão no happy hour
    ├── galeria-02-burger.webp     800x800   Duplo Esquina na tábua
    ├── galeria-03-ambiente.webp   800x800   Mesas e clientes
    ├── galeria-04-chapa.webp      800x800   Chapa com burger selando
    ├── galeria-05-fachada.webp    800x800   Esquina vista da calçada
    ├── galeria-06-detalhe.webp    800x800   Detalhe de cheddar derretendo
    ├── favicon.ico                32x32
    └── apple-touch-icon.png       180x180

Cada imagem da galeria precisa de versão `.jpg` como fallback do `<picture>`.

## Conversão para WebP

    cwebp -q 80 foto-original.jpg -o galeria-01-balcao.webp

## Publicação

Netlify: arraste a pasta em https://app.netlify.com/drop
Vercel: arraste a pasta em https://vercel.com/new

Ambas entregam HTTPS automático. Configure o domínio em Settings → Domains.

## Antes de publicar

- Trocar a URL do canonical e do og:image pelo domínio real
- Confirmar o CEP real no JSON-LD
- Ajustar latitude e longitude no JSON-LD
- Substituir os links placeholder do iFood
- Testar o preview do WhatsApp com ?v=2 na URL da imagem