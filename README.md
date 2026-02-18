# Camera Shop - Professional Photography Equipment

A bilingual (Macedonian/English) Next.js 14+ camera shop catalog with dual currency support (EUR/MKD).

## Features

- **Bilingual Support**: Macedonian (MK) and English (EN) languages
- **Dual Currency**: EUR and MKD pricing
- **Product Catalog**: Browse cameras, lenses, and accessories
- **Advanced Filtering**: Filter by brand, category, type, mount, condition, and price range
- **Product Details**: Detailed product pages with image galleries and specifications
- **Instagram Integration**: "DM to Buy" functionality with prefilled messages
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: Meta tags and OpenGraph support
- **TypeScript**: Full TypeScript support

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **State Management**: React Context API

## Project Structure

```
camera-shop/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── (pages)/
│   │   │   ├── page.tsx     # Home page
│   │   │   ├── catalog/      # Product catalog
│   │   │   ├── product/      # Product detail pages
│   │   │   ├── about/        # About page
│   │   │   └── contact/      # Contact page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── metadata.ts      # SEO metadata
│   ├── components/           # Reusable components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Footer component
│   │   └── ProductCard.tsx   # Product card component
│   ├── lib/                  # Utility libraries
│   │   ├── i18n.ts          # Internationalization
│   │   ├── context.ts       # React context
│   │   └── utils.ts         # Utility functions
│   └── data/                 # Static data
│       └── products.json    # Product data
├── public/                   # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd camera-shop
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
NEXT_PUBLIC_INSTAGRAM_HANDLE=your-instagram-handle
```

### Product Data

Products are stored in `src/data/products.json`. Each product includes:

```json
{
  "id": 1,
  "slug": "product-slug",
  "name": {
    "en": "Product Name",
    "mk": "Име на производ"
  },
  "brand": "Brand Name",
  "category": "camera|lens|accessory",
  "filmDigital": "film|digital|both",
  "mount": "Mount Type",
  "condition": "like-new|excellent|very-good|good",
  "priceEUR": 1000,
  "priceMKD": 61000,
  "description": {
    "en": "Product description",
    "mk": "Опис на производ"
  },
  "specs": {
    "key": "value"
  },
  "images": [
    "/path/to/image.jpg"
  ]
}
```

## Internationalization

The app uses a simple dictionary-based i18n system:

- Translations are in `src/lib/i18n.ts`
- Language is stored in localStorage
- Currency preference is also stored in localStorage
- Components use the `useApp()` hook to access language/currency state

### Adding New Translations

1. Add the translation key to both `en` and `mk` objects in `src/lib/i18n.ts`
2. Use `getTranslation(language, 'path.to.key')` in components

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t camera-shop .
docker run -p 3000:3000 camera-shop
```

## Customization

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Export a default React component

### Styling

The app uses Tailwind CSS with custom design tokens:

- Colors are defined in CSS variables in `src/app/globals.css`
- Components use Tailwind utility classes
- Custom styles can be added to the globals.css file

### Instagram Integration

The "DM to Buy" feature creates Instagram DM links with prefilled messages:

1. Update the Instagram handle in environment variables
2. The `createInstagramDM()` utility function handles the link generation
3. Messages include product name, price, and URL

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please contact:

- Email: info@camerashop.com
- Instagram: @camerashop
- Phone: +389 123 456 78

## Performance Optimization

- Images are optimized with Next.js Image component
- Static generation where possible
- Code splitting automatic with Next.js
- Tailwind CSS purges unused styles in production

## SEO Features

- Dynamic meta tags for each page
- OpenGraph tags for social sharing
- Structured data for products
- Sitemap generation (can be added)
- Robots.txt configuration

## Security

- Input validation on forms
- CSRF protection (Next.js default)
- Secure headers configuration
- Environment variable protection
