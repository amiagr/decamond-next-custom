# Auth & Dashboard - Simple Version

A basic authentication flow built with **Next.js App Router**, **TypeScript**, and **SCSS Modules**.

## 📌 Features

- `/auth` page with:
    - Iran phone number input with validation
    - "Login" button triggering a random user fetch from [randomuser.me](https://randomuser.me)
    - Stores user data in `localStorage`
    - Redirects to `/dashboard` on success

- `/dashboard` page with:
    - Welcome message
    - Redirects to `/auth` if user is not logged in
    - "Logout" button that clears storage and redirects

## 🛠️ Tech Stack

- Next.js 15 (App Router)
- TypeScript
- SCSS Modules
- Responsive design
- No external UI libraries used

## 🚀 How to Run

```bash
npm install
npm run dev
```

Or

```bash
yarn install
yarn dev
```

powered by [Chatgpt!](https://chatgpt.com/)
