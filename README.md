# Next.js Marketing App

A responsive marketing-focused web application built with Next.js 14, demonstrating modern web development practices and SEO optimization.

## Features

- ✅ Product listing with filtering
- ✅ Product detail pages with SEO optimization
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ REST API implementation
- ✅ Loading states and error handling
- ✅ Server-side rendering
- ✅ Unit tests (27 tests passed)

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Jest & React Testing Library
- Docker

## Getting Started

### Prerequisites

- Node.js 18+
- Docker (optional)

### Installation

1. Install dependencies

   ```bash
   npm install
   ```

2. Run the development server

   ```bash
   npm run dev
   ```

3. Run the tests

   ```bash
   npm run test
   ```

   ### Docker

4. Build the Docker image
   ```bash
   docker build -t nextjs-marketing-app .
   ```
5. Run container
   ```bash
   docker run -p 3000:3000 nextjs-marketing-app
   ```

## Project Structure

- `src/`: Contains the main application code.
- `src/components/`: Reusable UI components.
- `src/pages/`: Page components.
- `src/types/`: TypeScript types.
- `src/utils/`: Utility functions.
- `src/app/`: Next.js app directory structure.
- `src/public/`: Static assets.
- `src/styles/`: Global styles.
- `src/lib/`: External libraries and helpers.
- `src/__tests__/`: Unit tests.

## Technical Decisions

1. **REST API**: Implemented using Next.js API routes for data fetching
2. **Testing**: Comprehensive test suite with 27 passing tests
3. **TypeScript**: Full type safety across components
4. **TailwindCSS**: Responsive design implementation
5. **SEO**: Server-side rendering with meta tags

## Development Time: ~5 hours

- Setup & Configuration: 1h
- Core Features: 2.5h
- Testing: 1h
- Documentation: 0.5h

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will automatically detect Next.js and deploy

### Manual Deployment

1. Build the application

```bash
npm run build
```

2. Start the production server

```bash
npm start
```

## Technical Details

### REST API Endpoints

- `GET /api/products` - List all products
- `GET /api/products/[id]` - Get single product
- Includes error handling and response validation

### SEO Implementation

- Dynamic meta tags per product
- Open Graph tags for social sharing
- Proper heading hierarchy
- Clean URL structure

### Testing Strategy

- Unit tests for components
- Integration tests for API
- Page rendering tests
- Loading & error states
- Total: 27 passing tests

### Performance Optimizations

- Server-side rendering
- Image optimization
- Route prefetching
- API response caching

### Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance

## Environment Variables

### Required Variables

Create a `.env.local` file in the root directory:

```bash
# Base URL Configuration
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Environment Files

- `.env.local`: Local development (not committed)
- `.env.development`: Development defaults
- `.env.production`: Production defaults

### Usage Examples

1. In API routes:

```typescript
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
```

2. For deployment, update NEXT_PUBLIC_BASE_URL to your domain:

```bash
# Production example
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

### Docker Configuration

When using Docker, the environment variable can be set in:

1. docker-compose.yml
2. Dockerfile
3. At runtime using -e flag:

```bash
docker run -e NEXT_PUBLIC_BASE_URL=http://localhost:3000 -p 3000:3000 nextjs-marketing-app
```
