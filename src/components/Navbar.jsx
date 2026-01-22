import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
  let scrollTimeout;

  const handleScroll = () => {
    setIsScrolling(true);

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 200); // 200ms setelah berhenti scroll
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
    clearTimeout(scrollTimeout);
  };
}, []);

  return (
    <header
      className={`
        fixed md:static top-0 left-0 w-full z-50
        transition-all
        ${active ? "md:top-0" : ""}
      `}
    >
      <div className="navbar py-7 flex items-center justify-between relative px-6">

        <h1 className="hidden md:block text-3xl font-bold text-white">
          Portofolio
        </h1>

        {/* HAMBURGER (MOBILE ONLY) */}
        <button
          className={`
            md:hidden fixed top-6 right-6
            text-white text-3xl z-50
            transition-opacity duration-200
            ${isScrolling ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>



        {/* MENU */}
        <ul
          className={`
            menu flex flex-col md:flex-row items-center gap-6

            /* MOBILE */
            fixed md:static
            left-0 md:left-auto
            top-0 md:top-auto
            w-full md:w-auto
            h-screen md:h-auto
            bg-black/80 backdrop-blur-md md:bg-transparent
            p-6 md:p-0
            transition-all duration-300 z-40
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}

            /* DESKTOP RESET (BALIK KE CODE AWAL) */
            md:opacity-100 md:translate-y-0
          `}
        >
          {["beranda", "tentang", "project", "contact"].map(item => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-lg font-medium text-white hover:text-zinc-600"
                onClick={() => setOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </header>
  );
};

export default Navbar;
