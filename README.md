# Resume Builder

## 📌 Project Overview

Welcome to the **Resume Builder** repository! This project leverages cutting-edge tools and frameworks to create a dynamic and efficient resume-building platform. The Resume Builder provides a seamless experience, making resume creation straightforward and effective.

## 🌟 Features

- 🔐 **Authentication with Kinde** - Google Sign-In
- ➕ **Creating Resumes**
- ✏️ **Editing Resumes**
- 🎨 **Resume Theme Colors**
- 📸 **Resume Thumbnail**
- 🗨️ **Shareable Resume Link**
- 🔎 **Search Trash Resume**
- 📡 **Real-Time Editing**
- 🔗 **Preview Mode**
- 👨‍💻 **Download Resume to PDF Format**
- 🌐 **Built with Next.js 14**
- 🎨 **Styled with TailwindCSS and Shadcn UI**
- 🪝 **Hono API & Tanstack React Query**
- 💾 **Vercel PostgreSQL & Drizzle ORM**
- 🚀 **Deployed on Vercel**

## 🚀 Tools & Technologies

This project is built using:

- **Next.js**: For the fast, SEO-friendly frontend.
- **Hono**: Lightweight framework for building backend APIs.
- **Drizzle ORM**: SQL ORM for easy database management.
- **Tailwind CSS**: Rapid, responsive styling.
- **React Query**: For efficient data fetching and caching.
- **Vercel Postgres**: Reliable, scalable database solution.

## 📂 Clone the Repository
- **Open your terminal**: Clone the repository from GitHub: git clone <repository-url>
- **Navigate into the project directory**: cd JobGenius

## ⚙️ Install Dependencies
- **Make sure you have Node.js (v16+) and npm or yarn installed on your machine.**
- **Install project dependencies**: npm install or yarn install

## 🔑 Set Up Environment Variables
- **Create a .env.local file in the root of the project**: touch .env.local
- **Add the required environment variables (refer to .env.example for guidance)**: DATABASE_URL=<your-database-url>
KIND_AUTH_URL=<your-kinde-auth-url>
API_BASE_URL=<your-hono-api-url>

## 🗄️ Database Setup
- **Set up the database**: Ensure Vercel PostgreSQL is configured and running.
- **Use Drizzle ORM to run migrations**: npm run db:migrate or yarn db:migrate

## 🏃 Run the Project
- **Start the development server**: npm run dev or with Yarn:

