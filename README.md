# UI Code Generator — Frontend App

> **Note:** This repository contains the **Frontend** code for the UI Code Generator project. 
> For the **Backend** Java/Spring Boot API, please visit: [Insert Backend Repository Link Here]

A modern, responsive, and highly interactive React application that serves as the user interface for the UI Code Generator. It allows users to upload UI screenshots, generate code using Google Gemini AI via the backend, and instantly preview and edit the generated code in the browser.

---

## 🚀 Features

- **Modern Authentication Flow** — Complete custom UI for Firebase Email/Password authentication, including email verification and secure password resets.
- **Interactive Workspace** — Features a resizable split-pane layout using `react-resizable-panels`.
- **Integrated Code Editor** — Real-time frontend code editing powered by `@monaco-editor/react`.
- **Live Sandboxed Preview** — Instant live preview of generated HTML/CSS/JS code rendered safely in an iframe.
- **AI Chat Assistant** — Interactive chat window to converse with the AI, request changes, and refine the generated code.
- **Beautiful UI & Animations** — Styled with Tailwind CSS, custom theming (Dark/Light mode), Radix UI primitives, and animated with Framer Motion.
- **Project Dashboard** — View, manage, and load your past UI code generations.

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-----------|
| Library | React 18 |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v3 + clsx + tailwind-merge |
| UI Components | Radix UI + Custom Theme System |
| Animations | Framer Motion |
| Icons | Lucide React + React Icons |
| Code Editor | Monaco Editor |
| Forms & Validation | React Hook Form + Zod |
| Authentication | Firebase Web SDK |
| API Requests | Axios |
| Build Tool | CRA + Craco (for Tailwind config) |
| Hosting | Vercel (Ready) |

---

## 📁 Project Structure

```text
src/
├── components/      # Reusable UI components (Buttons, Inputs, Modals, Route Guards)
├── context/         # React Contexts (AuthContext, ThemeContext)
├── hooks/           # Custom React hooks
├── pages/           # Page level components (Login, Upload, Editor, Dashboard, etc.)
├── services/        # API client configuration (Axios instances connecting to backend)
├── utils/           # Helper functions
├── firebase.js      # Firebase SDK initialization
└── App.js           # Main application routing and providers
```

---

## ⚙️ Setup & Local Development

### 1. Prerequisites
- Node.js (v18+ recommended)
- `npm` or `yarn`
- A running instance of the [UI Code Generator Backend]
- A Firebase Web project configuration

### 2. Configure Environment

Copy the example environment file and fill in your details:

```bash
cp .env.example .env
```

Your `.env` should look something like this:
```env
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
# ... other Firebase config
```

### 3. Install Dependencies

```bash
npm install
# or
yarn install
```

### 4. Run Locally

```bash
npm start
# or
yarn start
```

The application will start in development mode at [http://localhost:3000](http://localhost:3000). The page will automatically reload when you make code changes.

---

## 🚀 Deployment

This project is configured and ready for deployment on **Vercel**.

1. Connect your repository to Vercel.
2. Ensure the framework preset is set to **Create React App**.
3. Add the environment variables from your `.env` file into the Vercel project settings.
4. Deploy!

The repository includes a `vercel.json` file which handles client-side routing rewrites automatically, ensuring that React Router paths work correctly on page refresh.

### Manual Build

To build the app for production manually:
```bash
npm run build
```
This optimizes the build for the best performance and outputs to the `build` folder.

---

## 🧠 Key Design Decisions

- **Craco over Ejecting** — We use `@craco/craco` to override Create React App's PostCSS configuration for Tailwind CSS without having to eject.
- **Custom Auth UI** — We completely bypassed Firebase's default drop-in web UI to create a seamless, deeply integrated authentication experience that matches the app's dark/light premium aesthetic, including custom handling for deep links like password resets (`/auth-action`).
- **Sandboxed Execution** — Generated code is executed inside a controlled `iframe` using `srcDoc` and `sandbox` attributes to prevent XSS vulnerabilities from AI-generated code.
