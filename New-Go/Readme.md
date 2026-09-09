<!-- markdownlint-disable -->

# React From Scratch (New-Go) — Practical Commands Guide

This guide contains the exact terminal commands used across `EP-01` to `EP-10`. Each command includes a description and an explanation of how it works under the hood.

---

## 1. Project Initialization & Setup Commands

### `npm init`

- **Description:** Initializes a new Node.js project in the current directory.
- **How it works:** It asks a series of interactive questions in the terminal (project name, version, description, entry point, author, etc.) and creates a `package.json` file to track project metadata and dependencies.

### `npm init -y`

- **Description:** Initializes a project without answering prompts.
- **How it works:** The `-y` (or `--yes`) flag tells npm to skip the questionnaire and generate a default `package.json` file with standard default settings.

### `npm create vite@latest <project-name> -- --template react`

- **Description:** Scaffolds a complete React project using Vite.
- **How it works:** It downloads and executes Vite's project generator (`create-vite`), creates the specified project folder, sets up `index.html`, `src/`, `vite.config.js`, and configures standard scripts (`dev`, `build`, `lint`, `preview`).

### `cd <folder-name>`

- **Description:** Navigates into the specified project folder.
- **How it works:** Changes the working directory of your terminal so subsequent commands execute within that folder.

---

## 2. Dependency Installation Commands

### `npm i` or `npm install`

- **Description:** Installs all project dependencies.
- **How it works:** Reads the `package.json` and `package-lock.json` files, resolves all direct and transitive dependencies from the npm registry, and downloads them into the local `node_modules` folder.

### `npm i react react-dom`

- **Description:** Installs React core and the ReactDOM renderer as production dependencies.
- **How it works:**
  - `react`: Provides the component architecture, JSX runtime, and Hooks (`useState`, `useEffect`, etc.).
  - `react-dom`: Provides the DOM-specific methods like `createRoot` to render React components into real browser HTML elements.
  - Adds both under the `"dependencies"` section in `package.json`.

### `npm i -D parcel`

- **Description:** Installs the Parcel bundler as a development dependency.
- **How it works:** The `-D` flag places Parcel in `"devDependencies"`, meaning it is only used during development/build time on your machine and not bundled into the final user-facing app.

### `npm i -D vite`

- **Description:** Installs the Vite bundler and development server as a development dependency.
- **How it works:** Installs Vite's lightning-fast ES-module dev server and Rollup-based production builder into `node_modules` and registers the `vite` CLI executable.

### `npm i react-shimmer-effects`

- **Description:** Installs the shimmer effect UI library.
- **How it works:** Downloads pre-styled shimmer skeleton placeholder components into `node_modules` so you can render visual placeholders while your API fetches live data.

### `npm i react-router-dom`

- **Description:** Installs React Router for client-side routing.
- **How it works:** Provides browser navigation utilities (`createBrowserRouter`, `RouterProvider`, `<Outlet />`, `<Link />`, `useParams`, `useRouteError`) so your app can switch views instantly without full browser page reloads.

### `npm install -D tailwindcss postcss autoprefixer`

- **Description:** Installs Tailwind CSS along with PostCSS and Autoprefixer.
- **How it works:**
  - `tailwindcss`: The utility-first CSS framework engine.
  - `postcss`: The CSS tool that runs Tailwind's plugins.
  - `autoprefixer`: Automatically adds vendor prefixes (like `-webkit-`) to CSS rules for browser compatibility.
  - All three are saved as dev dependencies.

### `npx tailwindcss init -p`

- **Description:** Generates Tailwind and PostCSS configuration files.
- **How it works:** Creates `tailwind.config.js` and `postcss.config.js` with default settings so Vite knows how to compile Tailwind utility classes in your JSX files.

---

## 3. Development Server & Bundling Commands

### `npx parcel index.html`

- **Description:** Starts a local development server using Parcel.
- **How it works:** Reads `index.html`, traces all linked scripts and stylesheets, compiles JSX using Babel, watches for file changes using a C++ file watcher, and serves the app locally (default: `http://localhost:1234`) with Hot Module Replacement (HMR).

### `npm run dev` (or `npx vite`)

- **Description:** Starts the local development server using Vite.
- **How it works:** Spins up Vite's dev server (default: `http://localhost:5173`) using native browser ES Modules (ESM). Instead of bundling everything upfront, Vite transforms files on-the-fly as requested by the browser, making server startup near-instant.

### `npm start`

- **Description:** Starts the application using the `"start"` script in `package.json`.
- **How it works:** `start` is a special reserved lifecycle keyword in npm. You can run `npm start` directly without needing the `run` keyword.

### `npm run build` (or `npx vite build`)

- **Description:** Creates an optimized production build.
- **How it works:** Analyzes your source code, runs tree-shaking (removes unused code), minifies HTML/CSS/JS, bundles assets into chunks, and saves production-ready output files inside the `dist/` directory.

### `npm run preview` (or `npx vite preview`)

- **Description:** Previews your production build locally.
- **How it works:** Boots a lightweight static file server serving the files directly from the `dist/` folder, allowing you to test the actual production build before deploying.

---

## 4. Linting Commands

### `npx eslint .` (or `npm run lint`)

- **Description:** Runs ESLint across all project files.
- **How it works:** Parses your `.js` and `.jsx` files against configured lint rules (e.g., React Hooks rules, Fast Refresh component export rules) and prints any errors or warnings in the terminal with line numbers.

---

## 5. Episode Breakdown of Commands

### EP-01: Inception

- **No npm commands used.**
- React and ReactDOM were loaded directly in `index.html` via CDN `<script>` tags.

### EP-02: Igniting our App

Commands to set up an app from scratch without `create-react-app`:

```bash
npm init
npm i react react-dom
npm i -D parcel vite
npx parcel index.html
```

### EP-03: Laying the Foundation

Configuring package.json scripts and running different bundlers:

```bash
npm start
npm run dev1
npm run dev2
npm run build
```

### EP-04: Talk is Cheap, Show Me the Code

Creating the Food Delivery app with Vite:

```bash
npm create vite@latest food_delivery_app -- --template react
cd food_delivery_app
npm i
npm run dev
```

### EP-05: Let's Get Hooked!

Working with React hooks (`useState`, `useEffect`):

```bash
cd food_delivery_app_with_hooks
npm i
npm run dev
```

### EP-06: Exploring the World

Adding live API calls and shimmer effect:

```bash
npm i react-shimmer-effects
npm run dev
```

### EP-07: Finding the Path

Setting up client-side routing:

```bash
npm i react-router-dom
npm run dev
```

### EP-08: Let's Get Classy

Class-based components and lifecycle:

```bash
cd class_based_components
npm i
npm run dev
```

### EP-09: Optimizing Our App

Custom hooks, dynamic imports, chunking, and lazy loading:

```bash
cd custom_hooks
npm i
npm run dev
npx eslint .
```

### EP-10: Jo Dikhta Hai, Wo Bikta Hai

Tailwind CSS setup and integration:

```bash
cd TailWindCSS
npm i
npm i react react-dom react-router-dom react-shimmer-effects
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
```
