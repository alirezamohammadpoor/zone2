<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Zone 2 - Running Shoes E-commerce

A modern e-commerce website for running shoes, built with React and Vite.

## Features

- 🏃‍♂️ Browse running shoes from top brands (Nike, Adidas, Asics)
- 🔍 Filter products by brand and type
- 🛍️ Shopping cart functionality
- 💳 Checkout process
- 📱 Responsive design for all devices

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.0.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the repository**

   ```bash
   git clone [your-repository-url]
   cd zone2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment variables**
   Create a `.env` file in the root directory and add your KicksDB API key:

   ```
   VITE_KICKSDB_API_KEY=your_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit `http://localhost:5173` to see the application

## Project Structure

```
src/
├── assets/         # Images and other static assets
├── components/     # Reusable React components
├── context/        # React context for state management
├── pages/          # Page components
├── services/       # API services
└── styles/         # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

- React
- Vite
- React Router
- CSS3
- KicksDB API

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
>>>>>>> e6d607b (Added README file and minor css tweaks)
