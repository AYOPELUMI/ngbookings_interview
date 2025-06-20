## Features Implemented

### 1. Homepage

- Cloned 80% of the homepage with dummy data

### 2. Authentication Page

- Login Page
- Sign up page
- Forgot password page

### 3. Responsive Design

- Optimized layouts for mobile, tablet, and desktop screens using Tailwind CSS.

### 4. TypeScript

- Type safety enforced throughout the application.
- Defined types/interfaces for API responses and components.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (for routing and data fetching)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (for responsive and modern styling)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/) (for strong typing)
- **API**: [TMDb API](https://developer.themoviedb.org/reference/intro/getting-started)
- **Zustand**: [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- **Shadcn**: [Shadcn](https://ui.shadcn.com/)

## Getting Started

Clone the repository:

```bash
git clone https://github.com/AYOPELUMI/ngbookings_interview.git
cd ngbookings_interview
```

### Setting Up API Access

To access the TMDb API:

1. Add the API key to the project:
   - Create a `.env` file in the project root.
   - Add the following environment variable:
     `plaintext
NEXT_PUBLIC_API_URL=base_url
`
     First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Login Page

To go the login page:

- [http://localhost:5173/login](http://localhost:5173/login)

## Sign Up Page

To go the sign Up page:

- [http://localhost:5173/sign-up](http://localhost:5173/sign-up)

## Forgot Password Page

To go the forgot password pages:

- [http://localhost:5173/forgot-password](http://localhost:5173/forgot-password)
