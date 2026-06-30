# 🔐 AuthFlow

> A production-ready authentication starter built with **Next.js**, **TypeScript**, **Firebase Authentication**, **Cloud Firestore**, **Tailwind CSS**, **shadcn/ui**, **React Hook Form**, and **Zod**.

---

## 📖 Overview

AuthFlow is a reusable authentication starter that provides everything needed to add secure user authentication to modern web applications.

It includes email/password authentication, Google Sign-In, password reset, protected routes, and Firestore user management—all organized with a clean, scalable architecture.

---

## ✨ Features

- 🔐 Email & Password Authentication
- 🔑 Google Sign-In
- 👤 User Registration
- 🔄 Forgot Password & Password Reset
- 🛡️ Protected Dashboard
- 📄 Firestore User Profile Creation
- ✅ Form Validation using Zod
- 🎯 React Hook Form Integration
- 🎨 Modern Responsive UI
- ⚡ Built with Next.js App Router
- 📱 Mobile Friendly
- ♻️ Reusable Authentication Module

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js (App Router) | Framework |
| TypeScript | Type Safety |
| Firebase Authentication | User Authentication |
| Cloud Firestore | Database |
| Tailwind CSS | Styling |
| shadcn/ui | UI Components |
| React Hook Form | Forms |
| Zod | Validation |
| Lucide React | Icons |

---

## 📂 Project Structure

```text
app/
├── (auth)/
│   ├── login/
│   ├── signup/
│   ├── forgot-password/
│   └── layout.tsx
│
├── dashboard/
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── auth/
└── ui/

hooks/
lib/
services/
types/
public/
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rudragosavi10/AuthFlow.git
```

### 2. Navigate into the project

```bash
cd AuthFlow
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create environment variables

Create a `.env.local` file in the project root and add your Firebase configuration.

Use `.env.example` as a reference.

### 5. Start the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

---

## 📸 Screenshots

### Login Page

> Add screenshot here

### Signup Page

> Add screenshot here

### Dashboard

> Add screenshot here

---

## 🔒 Authentication Flow

- User Signup
- Firestore User Creation
- Email Login
- Google Login
- Forgot Password
- Password Reset Email
- Protected Dashboard
- Logout

---

## 🌱 Future Improvements

- Email Verification
- Remember Me
- User Profile Page
- Change Password
- Dark Mode
- Toast Notifications
- User Avatar Upload
- Multi-Factor Authentication (MFA)

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

Feel free to fork the repository and submit a pull request.

---

## 👨‍💻 Author

**Rudra Gosavi**

GitHub: https://github.com/rudragosavi10

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps support future development.

---

## 📄 License

This project is licensed under the MIT License.
