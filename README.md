# METALFORM — Tienda conceptual de tarjetas metálicas

Sitio ecommerce visual hecho con Next.js (App Router), TypeScript, Motion y CSS responsive. Incluye catálogo, animaciones, vista previa del grabado, selección de acabados, control de cantidades y carrito de demostración.

## Ejecución local

Requiere Node.js 20.9 o superior.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrir http://localhost:3000.

## GitHub + Vercel

1. Creá un repositorio nuevo en GitHub y subí los archivos de esta carpeta (no subas `.env.local`).
2. En Vercel elegí **Add New → Project → Import Git Repository**.
3. Seleccioná el repositorio. Vercel reconoce Next.js automáticamente.
4. Agregá `NEXT_PUBLIC_ORDER_EMAIL` en **Settings → Environment Variables**, con el correo real donde quieras recibir consultas.
5. Desplegá el proyecto. Los pushes posteriores a la rama principal dispararán nuevos despliegues según tu configuración de Vercel.

## IMPORTANTE — antes de vender

- Esta versión es un prototipo comercial, **no cobra pagos reales**, ni guarda pedidos en una base de datos.
- El botón de solicitar pedido abre `mailto:` con los productos y datos para consultar. Si no hay correo configurado se muestra un aviso. Depende de que el cliente tenga una app de correo configurada.
- Los precios expresados en ARS son de **demostración**: reemplazalos por precios reales editando `products` en `app/page.tsx`.
- El grabado en la tarjeta es una simulación digital. Para producción faltan la carga de archivos vectoriales, verificación de diseños y validación del pedido.
- El nombre METALFORM es provisorio. Comprobar marca y disponibilidad del dominio antes de usarlo comercialmente.
- Antes de lanzar, incorporar pasarela de pago (p. ej., Mercado Pago con backend y webhooks), base de datos, stock, gestión de envíos, políticas, contacto real, SEO ampliado y analítica. No colocar tokens privados en variables `NEXT_PUBLIC_`.

## Personalización

- Marca y copys: `app/page.tsx`.
- Paleta, diseño, animaciones CSS y adaptación móvil: `app/globals.css`.
- Productos y precios: constante `products` en `app/page.tsx`.
- Título y descripción para buscadores: `app/layout.tsx`.

Las imágenes de tarjetas son renders en CSS, sin fotos externas ni archivos con licencias de terceros. Fuente de Google Fonts cargada por CSS; si se necesita autoalojamiento por privacidad o performance, cambiar a `next/font`.
