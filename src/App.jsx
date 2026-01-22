import DataImage from "./data";
import {listTools, listProyek} from "./data"

function App() {

  return (
    <>
     <div id="beranda" className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
          <q>Kode yang indah,lahir dari ketekunan.</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6 ">Hi,Saya Ferdiansyah Maulana</h1>
        <p className="text-base/loose mb-6 opacity-50">
        Fresh Graduate Web Developer with freelance experience as a Website Developer using React.js and Next.js. Strong understanding of website development and maintenance, REST APIs, and database management. Experienced in developing independent projects to enhance technical skills. Fast learner, adaptable, and ready to contribute maximally as a full-time developer in a professional work environment.</p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a
            href="/assets/tools/CV-Ferdiansyah-Maulana.pdf"
            download
            className="bg-violet-500 p-4 rounded-2xl hover:bg-violet-900"
          >
            Download CV <i className="ri-download-fill ri-lg"></i>
          </a>

          <a href="#project" className="bg-zinc-800 p-4 rounded-2xl hover:bg-zinc-600">
           Project <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy"/>
     </div>

    {/*About*/}
    <div id="tentang" className="tentang mt-32 py-10">
      {/* <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up">
      <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
        <p className="text-base/loose mb-10">
          Hi,Let me introduce myself, my name is Ferdiansyah Maulana, I am a fullstack developer, I believe that design and functionality must go hand in hand, so that the projects I develop not only look attractive but also provide comfort and functions that run smoothly and well.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                45 <span className="text-violet-500">+</span>
              </h1>
              <p>Proyek Selesai</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                4 <span className="text-violet-500">+</span>
              </h1>
              <p>Tahun</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="tools mt-32">
       <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up">Tools I use</h1>
       <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up">Some tools that I usually use to create websites</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listTools.map(tool =>(
         <div className="flex items-center gap-2 p-3 border border-zinc-500 rounded-md hover:bg-zinc-600 group key ={tool.id}" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
           <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-600 p-1 group-hover:bg-zinc-900" loading="lazy"/>
           <div>
             <h4 className="font-bold ">{tool.nama}</h4>
           <p className="opacity-50">{tool.keterangan}</p>
           </div>
         </div>
          ))}

        </div>
      </div>
    </div>

      {/*Projek*/}
    <div id="project" className="project mt-32 py-10">
      <h1 className="text-center text-4xl font-bold mb-2"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Project</h1>
      <p className="text-base/loose text-center opacity-50"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Below are some projects that I have made</p>

      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listProyek.map(project => (
          <div key={project.id} className="p-4 bg-zinc-800 rounded-md"data-aos="fade-up" data-aos-duration="2000" data-aos-delay={project.dad} >
            <img src={project.gambar} alt="Project image" loading="lazy"/>
              <div>
                <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                <p className="text-base/loose mb-4">{project.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) =>(
                    <p className="py-1 px-3 border border-zinc-700 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
               <div className="mt-8 text-center">
              <a
                href={project.website ? project.website : project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
              >
                {project.website ? "View Website" : "View on my GitHub ❤️"}
              </a>
            </div>

              </div>
          </div>
        ))}
      </div>
    </div>

       {/*Contact*/}
       <div id="contact" className="contact mt-32 sm:p-10 p-0">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Mari terhubung dengan saya</p>
        <form action="https://formsubmit.co/ferdiansyahm60%40gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6 " >
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama lengkap</label>
              <input type="text" name="nama" placeholder="Masukan nama" className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email.." className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="id" cols="45" rows="7" placeholder="Pesan.." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
       </div>
    </>
  );
}

export default App
