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
