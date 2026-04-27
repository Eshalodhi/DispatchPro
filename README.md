# 🚛 DispatchPro – Truck Dispatch Service Website

DispatchPro is a modern and responsive **frontend-focused web application** built using **Next.js 14** and **Tailwind CSS**.
It is designed to showcase truck dispatch services and allow users and drivers to submit their information through forms.

---

## 🌐 Live Demo

👉 (Add your deployed link here)

---

## 📌 Features

### 🏠 Home Page

* Modern hero section with call-to-action
* Services overview (Load Booking, Route Planning, Driver Support)
* “Why Choose Us” section with animated cards
* Smooth UI animations using Framer Motion

### 📄 About Page

* Company introduction and mission
* Statistics and highlights
* Work process explanation

### 💰 Pricing Page

* 3 pricing plans (Starter, Pro, Enterprise)
* Interactive hover effects
* Clean pricing layout

### 📞 Contact Page

* Functional contact form
* Sends data to backend API (`/api/contact`)
* Displays success message after submission

### 🚚 Driver Registration Page

* Driver signup form
* Sends data to backend API (`/api/driver`)
* Collects driver details (name, phone, MC/DOT, truck type, etc.)

---

## ⚙️ Tech Stack

* **Frontend:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** React Icons
* **API Handling:** Next.js API Routes

---

## 📁 Project Structure

```
app/
 ├── api/
 │    ├── contact/route.js
 │    └── driver/route.js
 ├── components/
 │    ├── Navbar.js
 │    ├── Footer.js
 │    ├── HeroSection.js
 │    └── ServiceCard.js
 ├── about/
 ├── contact/
 ├── drivers/
 ├── pricing/
 └── page.js
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/dispatchpro.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

```bash
npm run dev
```

👉 Open in browser:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

### 📩 Contact Form

```
POST /api/contact
```

* Receives user data
* Logs data to server console

### 🚛 Driver Registration

```
POST /api/driver
```

* Receives driver data
* Logs data to server console

---

## 🎨 Design Highlights

* Dark theme with modern UI
* Gradient backgrounds and glassmorphism effects
* Fully responsive design
* Smooth animations and transitions

---

## 📱 Responsiveness

The website is optimized for:

* Mobile devices
* Tablets
* Desktop screens

---

## Author

**Esha Khan**

---

## License

This project is created for educational and internship purposes.

---

##Final Note

This project demonstrates:

* Strong frontend development skills
* Component-based architecture in Next.js
* API route handling (basic backend logic)
* Modern UI/UX design principles

---

*Built to showcase truck dispatch services with a modern web experience*
