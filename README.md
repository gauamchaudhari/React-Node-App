# 🚀 React + Vite Admin Panel

A modern and customizable admin dashboard built using **React**, **Vite**, and **Tailwind CSS**. It includes a sidebar, topbar, footer layout, routing, dynamic theme switch (Dark/Light), and more!

---

## 📦 Tech Stack

- ⚛️ **React 18** – UI Library  
- ⚡ **Vite** – Build tool for lightning-fast development  
- 🎨 **Tailwind CSS** – Utility-first CSS framework  
- 🌗 **Dark/Light Theme** – Toggle support with Tailwind’s dark mode  
- 🔁 **React Router DOM** – Client-side routing  
- 🧹 **ESLint + Prettier** – Code formatting and linting  
- 💡 **React Icons** – Icon components  

---

## 🧱 Features

- ✅ Sidebar, Topbar, and Footer layout  
- ✅ Fully responsive across screen sizes  
- ✅ Dark & Light mode toggle (via button in Topbar)  
- ✅ Modular folder structure for scalability  
- ✅ Easy-to-extend architecture for pages and services  
- ✅ Integrated with Tailwind utility classes  
- ✅ Persistent theme using `localStorage`  

---

## 🛠️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```
### 2️⃣ Install Dependencies

```bash
npm install
```

### 🚀 Development
Start your local development server:
```bash
npm run dev
Then open http://localhost:5173 in your browser.
```

### 📦 Build for Production
Create a production-ready optimized build:
```bash
npm run build
```
This will generate output in the dist/ folder.

### 🔧 Linting & Formatting
Ensure consistent code quality:
```bash
npm run lint
```
You can configure .eslintrc and .prettierrc based on your team’s standards.

### 🌗 Dark/Light Theme
Tailwind CSS is configured to use class-based dark mode:
```bash
// tailwind.config.js
darkMode: 'class',
```bash
How It Works:
- We add dark class to <html> tag dynamically.

- Current theme is saved in localStorage.

- On load, your app reads from localStorage and applies theme.

- You can toggle the theme using a button in the Topbar.jsx.






