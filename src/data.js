import HeroImage from "/assets/profil.jpeg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/expressjs.jpg";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/Laravel.jpeg";
import Tools13 from "/assets/tools/MySQL.png";
import Tools14 from "/assets/tools/PostgreSQL.png";
import Tools15 from "/assets/tools/midtrans.jpeg";
import Tools16 from "/assets/tools/vercel.jpeg";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Express JS",
    ket: "Framework App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Laravel",
    ket: "Framework App",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "MySql",
    ket: "Database",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "PostgreSQL",
    ket: "Database",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Midtrans",
    ket: "Tools backend",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Vercel",
    ket: "Tools Deploy ",
    dad: "1600",
  },
];

import Proyek1 from "/public/assets/proyek/WEBSITE E-COMMERCE.jpg";
import Proyek2 from "/public/assets/proyek/Booking-Hotel.png";
import Proyek3 from "/public/assets/proyek/Pusat-Spare-Part.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website E-COMMERCE",
    desk: "Developed a full-stack cosmetic website using React (TypeScript) for a responsive and maintainable frontend, and Laravel for a robust backend architecture, powered by MySQL for reliable data storage. Built an elegant and efficient admin dashboard with Filament to simplify product, content, and transaction management, improving overall operational efficiency.",
    tools: ["HTML", "TAILWIND", "REACT", "TYPESCRIPT", "LARAVEL"],
    dad: "200",
    website: null,
    github: "https://github.com/Ferdiansyahmaulana07/Shayna-ecommerce.git",
  },
   {
    id: 2,
    gambar: Proyek2,
    nama: "Wesite Booking Hotel",
    desk: "This hotel booking website is built using JavaScript-based Next.js technology, with TypeScript and Tailwind CSS implemented for interface development. The payment system is integrated through Midtrans, and data storage is provided using Vercel Storage. Implementation details and source code can be found in the GitHub repository I've provided.",
    tools: ["TAILWIND", "TYPESCRIPT", "Vercel", "Midtrans", "NextJS"],
    dad: "300",
    website: null,
    github: "https://github.com/Ferdiansyahmaulana07/hotel-booking-app.git",
  },
   {
    id: 3,
    gambar: Proyek3,
    nama: "Ecommerce-MUP",
    desk: "Developed a full-stack e-commerce application as a freelance project using Next.js and Tailwind CSS to deliver a modern, responsive interface, with Redux for structured state management. The backend is powered by Laravel and supported by a MySQL database to ensure performance, security, and reliability. This solution enables companies to efficiently find and purchase spare parts through a seamless and user-friendly experience.",
    tools: ["TAILWIND", "Javascript", "NextJs", "Redux", "Laravel", "MySQL"],
    dad: "400",
    website: "https://www.pusat-sparepart.com/",
    github: null,
  },
];
