const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="flex gap-7">
            <a href="#beranda"
            className="hover:bg-red-700 rounded-3xl">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#project">Project</a> 
        </div>
        <div className="flex items-center gap-3">

            <a  href="https://github.com/Ferdiansyahmaulana07"
              className="cursor-pointer hover:text-gray-800"
            >
              <i className="ri-github-fill ri-2x"></i>
            </a>

            <a
              href="https://www.instagram.com/itsiyaann?igsh=MW40cnlxc2Jzbm1rZg=="
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-800"
            >
              <i className="ri-instagram-fill ri-2x"></i>
            </a>

            
            <a 
              href="https://www.linkedin.com/in/ferdiansyah-maulana-561a06347/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-800"
            >
              <i className="ri-linkedin-fill ri-2x"></i>
            </a>
            
        </div>
    </div>
  )
}

export default Footer