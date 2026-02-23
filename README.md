# Ecommerce Technical Test

Mobile e-commerce application built with Next.js 14+.

## Requirements

- Node.js 18+
- npm

## Environment Variables

Create a `.env.local` file in the root of the project following the `.env.example` template and fill in your credentials:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_API_KEY=your_api_key
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # production server
npm run lint     # run ESLint
npm run test     # run tests
```

## Architecture

The application uses Next.js App Router with a hybrid Server/Client Components approach.

### Server Components and Data Fetching

All API requests are made exclusively through Server Components. This decision has two main benefits:

**Security:** The API key never reaches the client. In a Client Component, the key would be exposed in the JavaScript bundle and visible in the browser. By fetching on the server, credentials remain protected.

**SEO:** The server sends fully rendered HTML to the browser instead of an empty shell that requires JavaScript hydration. Search engine crawlers receive the content directly, improving indexability.

### State Management

Zustand is used for the cart state instead of React Context for two reasons:

**Performance:** Context re-renders every subscribed component whenever any part of the state changes. Zustand allows selective subscriptions via selectors, so only the components that depend on the changed state re-render.

**Persistence:** Zustand's `persist` middleware handles localStorage synchronization out of the box, without additional code.

Additionally, Zustand scales better than Context for larger applications, making it a safer choice if the project requires future growth.

### Data fetching

Data fetching is handled entirely via Server Components. Pages fetch data on the server and pass it down to Client Components as props, avoiding unnecessary client-side requests and improving performance.

### Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── _components/            # Components exclusive to the home page
│   ├── items/[id]/             # Product detail page
│   │   └── _components/        # Components exclusive to the detail page
│   ├── cart/                   # Cart page
│   │   └── _components/        # Components exclusive to the cart page
│   └── layout.tsx
├── components/                 # Shared components
├── hooks/                      # Custom hooks
├── lib/                        # API utilities and helper functions
├── store/                      # Zustand store
├── styles/                     # CSS Modules
│   ├── components/             # Styles for shared components
│   └── pages/                  # Styles for pages and their exclusive components
├── tests/                      # Unit tests
└── types/                      # TypeScript types and interfaces
```

### Key Decisions

**Server vs Client Components:** Pages and data fetching are Server Components. Only components that require interactivity (selectors, cart, search) are Client Components.

**State management:** Zustand is used for the cart state with the `persist` middleware for localStorage persistence. Only `items` is stored; derived values like total price and item count are calculated locally to maintain a single source of truth.

**Generic components:** `Carousel`, `ItemList` and `Table` are built as generic components with render props, allowing them to be reused across different pages with different data types.

**Accessibility:** Semantic HTML is prioritized throughout (`<search>`, `<fieldset>`, `<legend>`, `<article>`). Radio buttons for color and storage selection are keyboard navigable with proper `aria-label` attributes.

**CSS Modules:** Scoped styles with no external UI library. Each component has its own CSS Module.

## Testing

Unit tests cover:

- Cart store actions (add, remove, clear, duplicate prevention)
- API utility functions (fetch, search, error handling)
- `removeDuplicates` utility function
- `Details` component interaction and cart integration

```bash
npm run test
```
