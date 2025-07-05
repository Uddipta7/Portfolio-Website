# 🚀 3D Portfolio Website

A visually stunning and interactive **3D Portfolio Website** built with modern technologies like **Three.js**, **React Three Fiber**, and **TailwindCSS**, featuring smooth animations, realistic 3D models, and responsive design across all devices.

## 🌐 Live Demo

👉 [Visit Website](https://your-vercel-url.vercel.app)

---

## 🔧 Tech Stack

| Technology          | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| **Three.js**        | A powerful 3D graphics library for rendering and animating 3D models.       |
| **React Three Fiber** | A React renderer for Three.js that simplifies building 3D scenes.          |
| **Tailwind CSS**    | A utility-first CSS framework for fast and responsive UI styling.           |
| **Framer Motion**   | The most popular animation library for React to bring components to life.   |
| **EmailJS**         | Used for handling contact form submissions and sending emails.              |

---

## ✨ Features

- 🌌 **3D Model Rendering**: Load and customize high-quality 3D models with advanced lighting and camera controls.
- 📦 **Reusable Codebase**: Organized with reusable components and Higher Order Components (HOCs) following best practices.
- 📧 **Contact Form with Email**: Send messages directly via the integrated contact form using EmailJS.
- 🎨 **Beautiful Animations**: Smooth transitions and scroll-based animations using Framer Motion.
- 📱 **Responsive Design**: Optimized for all screen sizes including desktops, tablets, and mobile devices.
- ⚡ **Performance Optimized**: Uses `Suspense`, `Preload`, and lazy loading techniques to enhance loading speed and UX.

---

## 🛠️ Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
2. **Install dependencies:**

```bash
npm install
```
3. **Add environment variables:**

Create a .env file in the root directory and include the following:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```
4. **Run locally:**

```bash
npm run dev
```
## 📂 Project Structure

```bash
src/
├── assets/          # Images and static files
├── components/      # UI components (Hero, About, Contact, etc.)
├── constants/       # Static data used across components
├── hoc/             # Higher Order Components for reusability
├── utils/           # Motion variants, helpers
├── styles/          # Tailwind configuration and custom classes
└── main.jsx         # Application entry point
```
