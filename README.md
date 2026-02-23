# Ecommerce Technical Test

Mobile e-commerce application built with Next.js 15.

## Requirements

- Node.js 18+
- npm

## Environment Variables

Create a `.env.local` file in the root of the project following the `.env.example` template and fill in your credentials.

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

## Pages

The application consists of three pages:

- **Home:** Displays the product catalogue with a live search functionality.
- **Detail:** Shows product information, specifications, color and storage selectors, and similar products carousel.
- **Cart:** Lists the added products and shows the total price.

## Architecture

### Server Components and Data Fetching

All API requests are made exclusively through Server Components. Pages fetch data on the server and pass it down to Client Components as props. This decision has two main benefits:

**Security:** The API key never reaches the client. In a Client Component, the key would be exposed in the browser. By fetching on the server, credentials remain protected.

**SEO:** The server sends fully rendered HTML to the browser instead of an empty shell that requires JavaScript hydration. Search engine crawlers receive the content directly, improving indexability.

### State Management

React Context API is used for the cart state with `useReducer` for action handling and `localStorage` for persistence. The implementation consists of:

- A `cartReducer` pure function that handles all cart actions: `ADD_ITEM`, `REMOVE_ITEM`, `CLEAR_CART` and `LOAD_CART`.
- A `CartProvider` that manages the state and synchronizes it with `localStorage` via `useEffect`.
- A `useCart` custom hook that exposes the cart state and actions to any component within the provider.

Derived values like total price and item count are calculated locally in each component to maintain a single source of truth.

### Styling

CSS Modules is used for styling. It is a native Next.js solution that keeps styles scoped to each component, ensuring that class names never conflict with each other across the application.

### Generic Components

`Carousel`, `ItemList` and `Table` are built as generic components with render props, allowing them to be reused across different pages with different data types without being coupled to a specific data structure.

### Accessibility

Semantic HTML is prioritized throughout the application: `<search>`, `<fieldset>`, `<legend>`, `<article>`, `<section>`. Radio buttons for color and storage selection are keyboard navigable with proper `aria-label` attributes. Visually hidden `<h1>` elements are used on pages where the design does not include a visible title.

### TypeScript

The project uses strict TypeScript throughout. Generic components like `Carousel`, `ItemList` and `Table` use type constraints to guarantee type safety without coupling to specific data structures. All API responses are typed via interfaces, and state actions are typed as discriminated unions in the cart reducer.

## Project Structure

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
├── store/                      # Context API cart store
├── styles/                     # CSS Modules
│   ├── components/             # Styles for shared components
│   └── pages/                  # Styles organized by page
├── tests/                      # Unit tests
└── types/                      # TypeScript types and interfaces
```

## Testing

Unit tests cover:

- Cart reducer actions (add, remove, clear, load, duplicate prevention)
- API utility functions (fetch, search, error handling)
- `removeDuplicates` utility function
- `Details` component interaction and cart integration

```bash
npm run test
```
