# 👕 iClothes E-commerce Application

**iClothes** is a modern, high-performance, full-stack e-commerce platform built on **Next.js** and **TypeScript**. It offers a dynamic shopping experience with robust backend management, leveraging **PostgreSQL** for data persistence.

| Technology | Status |
| :--- | :--- |
| **Next.js** | ![Next.js Badge](https://img.shields.io/badge/Next.js-15.5.5-black) |
| **TypeScript** | ![TypeScript Badge](https://img.shields.io/badge/TypeScript-5.9.3-blue) |
| **Prisma** | ![Prisma Badge](https://img.shields.io/badge/Prisma-6.5.0-green) |
| **Database** | ![PostgreSQL Badge](https://img.shields.io/badge/Database-PostgreSQL-blue) |

---

## 🌐 Live Demo & Deployment Architecture

The application is engineered for performance and scalability using a modern, distributed architecture:

* **Frontend & API Layer (Vercel):** The **Next.js** application is deployed on **Vercel**, utilizing **serverless functions** and global CDN distribution.
* **Database Service (Render/Neon):** The **PostgreSQL** database is hosted on a professional cloud service, such as **Render** or **Neon**, guaranteeing high availability.
* **Database ORM (Prisma):** **Prisma** manages the schema and connections, specifically leveraging the **Neon adapter** for efficient, serverless database interactions.

> **View the Live Application:**
> [Live Application Link Here](https://iclothes.vercel.app)

---

## 🛠️ Tech Stack & Key Dependencies

iClothes is built upon a high-performance, **full-stack TypeScript** architecture. This stack was selected to prioritize **type safety**, **developer experience (DX)**, and **scalability**.

| Category | Technology | Version | Rationale & Explanation |
| :--- | :--- | :--- | :--- |
| **Frontend/Backend** | **Next.js** | `15.5.5` | Full-stack React Framework enabling Server Components and optimized routing. |
| **Language** | **TypeScript** | `5.9.3` | Essential for large-scale development, providing end-to-end type safety. |
| **Database ORM** | **Prisma** | `6.5.0` | Type-safe ORM simplifying schema management and queries, integrated with the Neon adapter. |
| **Database** | **PostgreSQL** | Cloud DB | Chosen for its reliability, transaction integrity, and robustness. |
| **Authentication** | **NextAuth.js (Auth.js)** | `5.0.0-beta.29` | Flexible, secure authentication solution with Prisma adapter integration. |
| **Styling** | **Tailwind CSS** | Latest | Utility-first framework for rapid, consistent, and responsive UI development. |
| **Forms/Validation** | **React Hook Form / Zod** | Latest | Combination for performant form management and schema-based validation. |
| **Deployment** | **Vercel** & **Render/Neon** | Service | Industry-leading services for Next.js deployment and scalable cloud PostgreSQL hosting. |

---

## 📦 Core Dependencies Summary

This project relies on a comprehensive set of packages to support its features:

* **Database & ORM:** `@prisma/client`, `prisma`, `@prisma/adapter-neon`, `@neondatabase/serverless`.
* **Authentication & Security:** `next-auth`, `@auth/prisma-adapter`, `bcrypt-ts-edge`.
* **UI & Styling:** `next-themes`, `tailwind-merge`, `clsx`, `lucide-react`, **Radix UI components** (`@radix-ui/...`).
* **Forms & Validation:** `react-hook-form`, `@hookform/resolvers`, `zod`.
* **Payments & E-commerce:** `@paypal/react-paypal-js`, `slugify`, `query-string`.
* **Utilities:** `sonner` (toasts), `embla-carousel-react`, `@uploadthing/react`.

---

## 🚀 Getting Started (Local Development Setup)

Follow this professional, step-by-step guide to set up the **iClothes** development environment.

### Prerequisites

Ensure the following tools are installed: **Node.js** (LTS 18+), **npm** or **yarn**, and access to a **PostgreSQL** database instance.

### Step 1: Clone the Repository

```bash
git clone [https://github.com/rayancmorais/iClothes-db-PostgreSQL-.git](https://github.com/rayancmorais/iClothes-db-PostgreSQL-.git)
cd iClothes-db-PostgreSQL-
```

### Step 2: Install Dependencies

Install all necessary packages, which includes all libraries listed in the `package.json`:

```bash
npm install
# or
yarn install
```

### Step 3: Configure Environment Variables

Create a file named **`.env`** and define the following essential variables:

```env
# Database Connection String - Required for Prisma
DATABASE_URL="YOUR_POSTGRES_CONNECTION_STRING" 

# NextAuth.js Security Secret - MUST be a long, random string
NEXTAUTH_SECRET="A_CRYPTOGRAPHICALLY_SECURE_SECRET"
NEXTAUTH_URL="http://localhost:3000"

# UPLOADTHING_SECRET="..." # Include other service secrets here
```

### Step 4: Initialize the Database Schema

Synchronize the **Prisma** schema with your database and generate the type-safe Prisma Client:

```bash
# Pushes the schema to the database and generates the Prisma Client
npx prisma db push
```

### Step 5: Start the Development Server

Execute the development script. This will compile the TypeScript and start the **Next.js** application:

```bash
npm run dev
# or
yarn dev
```
The application will be accessible at: **[http://localhost:3000](http://localhost:3000)**.

# ⚙️ Available Scripts

The following scripts are available in the `package.json` for development, build, and testing:

| **Script**      | **Command**                                | **Description**                                                                 |
|------------------|--------------------------------------------|---------------------------------------------------------------------------------|
| `dev`            | `next dev`                                 | Starts the Next.js development server with hot-reloading.                       |
| `build`          | `prisma generate && next build`            | **Production build:** Generates the Prisma Client and creates an optimized Next.js production bundle. |
| `start`          | `next start`                               | Starts the Next.js application in production mode.                              |
| `postinstall`    | `prisma generate`                          | Runs automatically after dependency installation to ensure the Prisma Client is up-to-date. |
| `test`           | `jest`                                     | Executes all defined unit and integration tests.                                |
| `test:watch`     | `jest --watch`                             | Runs tests in interactive watch mode for continuous testing.                    |

# ⚖️ Copyright and Licensing

**Copyright (c) 2025 Rayan C. Morais. All rights reserved.**






