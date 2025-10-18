<img width="1872" height="921" alt="Screenshot 2025-10-18 183303" src="https://github.com/user-attachments/assets/c608d42e-73ef-41d4-a5c3-c7d5667ffcf8" /><img width="1872" height="921" alt="Screenshot 2025-10-18 183303" src="https://github.com/user-attachments/assets/d8ebc464-34ae-4d7f-8176-d472a26cf335" /># React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Features

✅ Track daily habits and completion streaks
✅ Beautiful, responsive UI
✅ Add, edit, or delete habits easily
✅ Calendar-based progress tracking
✅ Lightweight and blazing fast with Vite
✅ Organized folder structure


### 🏠 Home Page
![Home Page] (<img width="1872" height="921" alt="Screenshot 2025-10-18 183303" src="https://github.com/user-attachments/assets/c4b8e734-8f5a-4cf8-8d32-736128b2be44" />
)

###  📊 Analytics & 📅 Calendar View
![Calendar View] <img width="819" height="501" alt="Screenshot 2025-10-18 183406" src="https://github.com/user-attachments/assets/be2beb03-27b2-4a1c-94c4-cca4327a4a47" />



## Project Structure
habit-tracker/
│
├── public/                # Static files
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # Reusable React components
│   ├── pages/             # Page-level components
│   ├── App.jsx            # Main component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
│
├── .eslintrc.cjs          # ESLint configuration
├── package.json
├── vite.config.js         # Vite configuration
└── README.md

