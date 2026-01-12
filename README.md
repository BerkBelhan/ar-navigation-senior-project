# Guide-AR: Indoor Navigation Reimagined

![Project Status](https://img.shields.io/badge/Status-In%20Development-blue?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-CSS-38B2AC?style=flat-square&logo=tailwind-css)

> **A senior design project delivering real-time augmented reality navigation using SLAM, Meta Quest 3, and mobile platforms.**

---

## 📖 About The Project

Navigating large indoor environments—such as university campuses, hospitals, and shopping malls—is notoriously difficult. GPS signals are weak or non-existent indoors, leading to confusion and wasted time.

**Guide-AR** solves this by leveraging **Spatial Computing** and **Simultaneous Localization and Mapping (SLAM)** to create a digital twin of the indoor world. Our system projects real-time, 3D navigational overlays directly into the user's field of view via **Meta Quest 3** or mobile AR, guiding them seamlessly to their destination.

### 🚀 Key Features

* **Precise Indoor Localization:** Uses SLAM algorithms to determine position without GPS.
* **Real-Time AR Pathfinding:** Visual 3D arrows and markers overlaid on the real world.
* **Cross-Platform Support:** Designed for Meta Quest 3 (Immersive) and Mobile (Accessible).
* **Modern Web Portal:** A high-performance landing page featuring 3D glassmorphism and fluid animations to showcase the project.

---

## 🛠️ Technology Stack

### Web Portal (This Repository)
The project showcase website is built with the latest modern web technologies:
* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap)
* **3D Graphics:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) & [Drei](https://github.com/pmndrs/drei)
* **UI Components:** Custom Glassmorphism, Chroma Grids, and Fluid distortions.

### Core AR System
* **Hardware:** Meta Quest 3, Mobile Devices
* **Engine:** Unity 3D
* **Algorithms:** SLAM (Simultaneous Localization and Mapping), A* Pathfinding
* **Backend:** Cloud-based spatial map storage

---

## 💻 Getting Started

This repository contains the source code for the **Guide-AR Web Portal**. Follow these steps to run the project locally.

### Prerequisites
* Node.js (v18 or higher)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/BerkBelhan/ar-navigation-senior-project.git](https://github.com/BerkBelhan/ar-navigation-senior-project.git)
    cd ar-navigation-senior-project
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 👥 The Team

This project is developed by a team of Senior Computer Engineering students.

| Name | Role | Socials |
| :--- | :--- | :--- |
| **Berk Belhan** | Backend Developer | [![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/berkbelhan/) |
| **Alperen Karadağ** | Backend Developer | [![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat-square&logo=linkedin)](https://linkedin.com) |
| **Altuğ Berke Akman** | Backend Developer | [![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat-square&logo=linkedin)](https://linkedin.com) |
| **Ceren Duru Kızılırmak**| Backend Developer | [![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat-square&logo=linkedin)](https://linkedin.com) |

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

© 2026 Guide-AR. Senior Design Project.
