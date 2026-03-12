import React, { useState, useEffect } from 'react';
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Server,
  Shield,
  Cpu,
  Award,
  BookOpen,
  Briefcase,
  Users,
  Menu,
  X,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Maximize2,
  Heart
} from 'lucide-react';
import profileImg from './assets/profile2.jpg';
import pemiraImg from './assets/pemira.png';
import donPabloImg from './assets/don_pablo.png';
import secureQrImg from './assets/secure_qr.png';
import maduraStoreImg from './assets/madura_store.png';
import moodmealImg from './assets/moodmeal.png';


const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-red-900/20 animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">

        {/* Modal Header Image */}
        <div className="relative h-64 md:h-80 w-full shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-red-600 rounded-full text-white transition-colors backdrop-blur-md"
          >
            <X size={24} />
          </button>

          <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-red-400 uppercase bg-red-500/10 border border-red-500/20 rounded-full">
              {project.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{project.name}</h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8 overflow-y-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <BookOpen size={20} className="text-red-500" /> Deskripsi
                </h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {project.longDesc || project.desc}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <Cpu size={20} className="text-red-500" /> Teknologi
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies && project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-5 bg-slate-800/30 rounded-2xl border border-slate-800">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Link Proyek</h3>
                <div className="flex flex-col gap-3">
                  {project.links ? (
                    project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-3 bg-slate-800 hover:bg-red-600 text-white rounded-xl transition-all group"
                      >
                        <span className="font-medium">{link.label}</span>
                        <ExternalLink size={18} className="text-slate-400 group-hover:text-white" />
                      </a>
                    ))
                  ) : (
                    <a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all shadow-lg hover:shadow-red-600/20"
                    >
                      <span className="font-bold">Buka Repository</span>
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const data = {
    name: "M. Alief Alfaridzi",
    title: "Informatics Student | Software Engineering & Network Specialist",
    gpa: "3.94 / 4.00",
    email: "aliefalfaridzi12@gmail.com",
    ig: "alieffalfaridzi",
    linkedin: "https://www.linkedin.com/in/m-alief-alfaridzi-43253318b/",
    github: "https://github.com/Alieff19",
    location: "Surabaya, Indonesia",
    skills: {
      hard: ["Network Administration", "Web Development", "Users/Mobile Development", "Cybersecurity", "Modern Tools (Docker, Git)"],
      soft: ["Leadership", "Public Relations", "Problem Solving", "Adaptability"]
    },
    techStack: [
      { name: "Java", image: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" },
      { name: "Python", image: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
      { name: "PHP", image: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" },
      { name: "Supabase", image: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" },
      { name: "MySQL", image: "https://img.shields.io/badge/MySQL-000000?style=for-the-badge&logo=mysql&logoColor=white" },
      { name: "React", image: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
      { name: "Tailwind CSS", image: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
      { name: "Flutter", image: "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" }
    ],
    projects: [
      {
        id: 1,
        name: "Don Pablo Flashsale Simulation",
        desc: "Pengembangan sistem simulasi transaksi cepat dengan manajemen konkurensi tinggi.",
        tag: "Performance",
        link: "https://github.com/Alieff19/DonPablo_FlashSale_Simulation",
        image: donPabloImg,
        technologies: ["Python", "Concurrency", "Simulation", "Locust"],
        longDesc: "Simulasi backend flash sale yang dirancang untuk menangani trafik tinggi dalam waktu singkat. Sistem ini mengimplementasikan konsep locking dan antrian untuk mencegah race condition saat ribuan permintaan masuk secara bersamaan."
      },
      {
        id: 2,
        name: "Secure QR Vault",
        desc: "Sistem penyimpanan data terenkripsi yang diakses melalui otentikasi QR Code unik.",
        tag: "Security",
        link: "https://github.com/Alieff19/SecureQR_Vault",
        image: secureQrImg,
        technologies: ["Python", "Cryptography", "QR Code", "Security"],
        longDesc: "Aplikasi keamanan yang mengenkripsi file sensitif dan menghasilkan kunci akses berupa QR Code dinamis. Hanya pengguna dengan QR Code fisik yang valid yang dapat mendekripsi dan mengakses kembali file tersebut."
      },
      {
        id: 3,
        name: "Madura Store",
        desc: "Platform e-commerce untuk digitalisasi UMKM lokal dengan fitur inventaris real-time.",
        tag: "E-Commerce",
        links: [
          { label: "Frontend", url: "https://github.com/amad-IO/frontendkasir-madura" },
          { label: "Backend", url: "https://github.com/azteca22che/BACKEND-FIKS" }
        ],
        image: maduraStoreImg,
        technologies: ["React", "Express.js", "MySQL", "Tailwind CSS"],
        longDesc: "Solusi e-commerce lengkap untuk membantu UMKM Madura menjangkau pasar digital. Dilengkapi fitur manajemen stok real-time, laporan penjualan otomatis, dan integrasi payment gateway sederhana."
      },
      {
        id: 4,
        name: "Pemira (E-Voting System)",
        desc: "Website pemungutan suara digital yang mengutamakan integritas dan transparansi data.",
        tag: "Web App",
        image: pemiraImg,
        technologies: ["PHP", "MySQL", "Bootstrap", "Chart.js"],
        longDesc: "Sistem E-Voting yang digunakan untuk pemilihan raya mahasiswa. Mengutamakan keamanan suara pemilih, anonimitas, dan hasil perhitungan real-time yang transparan untuk mencegah kecurangan."
      },
      {
        id: 5,
        name: "Moodmeal",
        desc: "Website cerdas rekomendasi menu kuliner berdasarkan analisis suasana hati pengguna.",
        tag: "Website",
        image: moodmealImg,
        technologies: ["React", "AI Integration", "Tailwind CSS"],
        longDesc: "Platform rekomendasi makanan berbasis suasana hati (mood). Pengguna cukup memilih perasaan mereka saat ini, dan algoritma cerdas akan menyarankan menu kuliner yang dapat meningkatkan atau menyeimbangkan mood tersebut."
      }
    ],
    experience: [
      {
        type: "Pekerjaan",
        role: "Field Support",
        company: "ICON+ (PLN Group)",
        period: "Internship",
        desc: "Maintenance infrastruktur jaringan, konfigurasi routing, dan troubleshooting konektivitas."
      },
      {
        type: "Organisasi",
        role: "Anggota Komisi II Hukum",
        company: "DPM Telkom University Surabaya",
        period: "2025",
        desc: "Pengawasan regulasi internal dan perancangan hukum internal organisasi mahasiswa."
      }
    ]
  };

  const NavItem = ({ href, children }) => (
    <a href={href} className="text-gray-300 hover:text-red-500 transition-colors font-medium">
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-rose-500/30 selection:text-rose-500 relative overflow-hidden">

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[45%] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-purple-600/10 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-red-600 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-rose-600/20">A</div>
              <span className="font-bold text-xl tracking-tighter uppercase font-heading">Alief.</span>
            </div>

            <div className="hidden md:flex gap-8">
              <NavItem href="#about">Tentang</NavItem>
              <NavItem href="#skills">Keahlian</NavItem>
              <NavItem href="#projects">Proyek</NavItem>
              <NavItem href="#experience">Pengalaman</NavItem>
              <NavItem href="#contact">Kontak</NavItem>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden glass-panel p-6 flex flex-col gap-4 animate-in slide-in-from-top mt-2 mx-4 rounded-2xl border-white/10 shadow-2xl">
              <NavItem href="#about">Tentang</NavItem>
              <NavItem href="#skills">Keahlian</NavItem>
              <NavItem href="#projects">Proyek</NavItem>
              <NavItem href="#experience">Pengalaman</NavItem>
              <NavItem href="#contact">Kontak</NavItem>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="animate-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/10 text-rose-400 text-sm font-medium mb-8 shadow-rose-500/10 shadow-xl">
                <Award size={16} />
                <span>Full Scholarship Recipient (OPES)</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 font-heading tracking-tight">
                Halo, Saya <br className="hidden md:block" /> <span className="text-gradient">Alief</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
                Mahasiswa Informatika di <span className="text-white font-semibold">Telkom University</span>.
                Berfokus pada integrasi infrastruktur jaringan dan pengembangan perangkat lunak inovatif.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <a href="https://drive.google.com/file/d/1UP_YY5rqKGuhChqopxj8kxC_g6upKs6y/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 rounded-xl font-bold transition-all shadow-xl shadow-rose-600/20 hover:shadow-rose-600/40 flex items-center gap-2 text-white overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">Download CV <ExternalLink size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /></span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </a>
                <div className="flex items-center gap-5 px-2 text-slate-400">
                  <a href={`https://instagram.com/${data.ig}`} className="hover:text-white hover:scale-110 transition-all p-3 glass-panel rounded-full" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                  <a href={data.linkedin} className="hover:text-white hover:scale-110 transition-all p-3 glass-panel rounded-full" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                  <a href={data.github} className="hover:text-white hover:scale-110 transition-all p-3 glass-panel rounded-full" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                </div>
              </div>
            </div>

            <div className="relative animate-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="relative z-10 w-full aspect-[4/5] max-w-md mx-auto rounded-[2rem] overflow-hidden glass-panel p-2">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[rgba(5,5,5,0.1)] to-transparent opacity-90 z-10"></div>
                  {/* Profile Image */}
                  <img src={profileImg} alt="M. Alief Alfaridzi" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out" />

                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-panel border border-white/10 z-20 transform hover:-translate-y-1 transition-transform">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-rose-300/80 font-bold uppercase tracking-wider mb-1">Academic Excellence</p>
                        <p className="text-2xl font-bold text-white tracking-tight font-heading">GPA {data.gpa}</p>
                      </div>
                      <div className="p-3 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl shadow-lg shadow-rose-600/30">
                        <CheckCircle2 className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements around image */}
              <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl animate-blob"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="about" className="py-20 px-6 relative z-10 hidden md:block">
          <div className="max-w-6xl mx-auto -mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 glass-panel rounded-[2rem] shadow-rose-900/20 shadow-2xl">
              <div className="text-center p-6 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                <p className="text-4xl font-extrabold text-white mb-2 font-heading group-hover:scale-110 transition-transform">3.94</p>
                <p className="text-rose-400 text-xs font-bold uppercase tracking-widest">IPK Kumulatif</p>
              </div>
              <div className="text-center p-6 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                <p className="text-4xl font-extrabold text-white mb-2 font-heading group-hover:scale-110 transition-transform">5+</p>
                <p className="text-rose-400 text-xs font-bold uppercase tracking-widest">Proyek Utama</p>
              </div>
              <div className="text-center p-6 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                <p className="text-4xl font-extrabold text-white mb-2 font-heading group-hover:scale-110 transition-transform">Top 1</p>
                <p className="text-rose-400 text-xs font-bold uppercase tracking-widest">Lulusan Terbaik</p>
              </div>
              <div className="text-center p-6 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                <p className="text-4xl font-extrabold text-white mb-2 font-heading group-hover:scale-110 transition-transform">Full</p>
                <p className="text-rose-400 text-xs font-bold uppercase tracking-widest">Beasiswa OPES</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight text-white">Keahlian Utama</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-rose-500 to-red-600 mx-auto rounded-full shadow-lg shadow-rose-500/50"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              <div className="space-y-8 glass-panel p-8 md:p-10 rounded-[2rem]">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-white font-heading">
                  <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-rose-500">
                    <Code size={24} />
                  </div>
                  Hard Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {data.skills.hard.map(skill => (
                    <span key={skill} className="px-5 py-2.5 glass-panel border border-white/10 rounded-xl hover:bg-white/10 hover:border-rose-500/50 transition-all text-slate-200 font-medium text-sm cursor-default hover:-translate-y-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-8 glass-panel p-8 md:p-10 rounded-[2rem]">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-white font-heading">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Users size={24} />
                  </div>
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {data.skills.soft.map(skill => (
                    <span key={skill} className="px-5 py-2.5 glass-panel border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all text-slate-200 font-medium text-sm cursor-default hover:-translate-y-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-20 animate-in slide-in-from-bottom duration-700 delay-300">
              <h3 className="flex items-center justify-center gap-3 text-2xl font-bold text-slate-400 mb-10 uppercase tracking-widest text-sm text-center">
                <Server className="text-rose-500" size={18} /> Tech Stack & Tools Dikuasai
              </h3>
              <div className="flex flex-wrap justify-center gap-5 md:gap-8 max-w-4xl mx-auto">
                {data.techStack.map((tech) => (
                  <div key={tech.name} className="glass-panel p-3 rounded-2xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 group cursor-default">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-8 md:h-10 transition-transform group-hover:scale-105"
                      title={tech.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight text-white">Portofolio Proyek</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-rose-500 to-red-600 rounded-full shadow-lg shadow-rose-500/50 mb-6"></div>
                <p className="text-slate-400 text-lg">Inovasi solusi digital yang dikembangkan selama studi.</p>
              </div>
              <button className="flex items-center gap-2 text-rose-400 font-bold hover:gap-3 transition-all px-6 py-3 glass-panel border border-rose-500/20 rounded-xl hover:bg-rose-500/10 hover:text-rose-300">
                Lihat GitHub <ChevronRight size={18} />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {data.projects.map((p, idx) => (
                <div
                  key={p.id}
                  className={`group relative rounded-[2rem] glass-panel border border-white/5 overflow-hidden hover:border-rose-500/30 transition-all shadow-2xl hover:shadow-rose-500/20 cursor-pointer ${idx === 0 ? 'md:col-span-2' : ''}`}
                  onClick={() => setSelectedProject(p)}
                >
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-rose-600/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                    <div className="absolute top-4 right-4 z-20 glass-panel p-2.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <Maximize2 className="text-white w-5 h-5" />
                    </div>
                  </div>

                  <div className="relative z-10 p-8">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                      <Briefcase size={80} />
                    </div>

                    <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-widest mb-4">
                      {p.tag}
                    </span>
                    <h3 className="text-2xl font-bold mb-3 font-heading text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:to-red-500 transition-all leading-tight">{p.name}</h3>
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed line-clamp-2">{p.desc}</p>

                    <div className="flex items-center gap-2 text-sm font-bold text-rose-500 group-hover:gap-3 transition-all">
                      Lihat Detail <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight text-white">Perjalanan & Pengalaman</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-rose-500 to-red-600 mx-auto rounded-full shadow-lg shadow-rose-500/50"></div>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {data.experience.map((exp, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] bg-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-panel p-6 md:p-8 rounded-[2rem] border border-white/5 hover:border-rose-500/30 transition-colors shadow-xl hover:shadow-rose-500/10">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="text-rose-400 font-extrabold tracking-widest text-xs uppercase">{exp.period}</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-wider">{exp.type}</span>
                    </div>
                    <h4 className="text-2xl font-extrabold text-white mb-2 font-heading tracking-tight">{exp.role}</h4>
                    <p className="text-rose-200/80 font-bold text-sm mb-4">{exp.company}</p>
                    <p className="text-slate-400 leading-relaxed text-sm font-medium">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 relative z-10">
          <div className="max-w-5xl mx-auto glass-panel rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden border border-white/10 shadow-2xl shadow-rose-900/20">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-600/10 to-transparent"></div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white font-heading">Let's Connect!</h2>
              <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                Saya siap berkolaborasi untuk inovasi masa depan. Jangan ragu untuk menghubungi saya untuk proyek atau sekadar berdiskusi.
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                <a href={`mailto:${data.email}`} className="group flex flex-col items-center gap-4 glass-panel p-6 md:p-8 rounded-[2rem] hover:bg-white/5 transition-all w-full md:w-auto flex-1 hover:-translate-y-2 hover:shadow-rose-500/20 hover:border-rose-500/30">
                  <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center border border-rose-500/20 group-hover:bg-rose-500 group-hover:border-rose-400 transition-colors">
                    <Mail className="text-rose-400 group-hover:text-white transition-colors" size={28} />
                  </div>
                  <span className="text-white font-bold text-sm md:text-base tracking-tight">{data.email}</span>
                </a>
                <a href={`https://instagram.com/${data.ig}`} className="group flex flex-col items-center gap-4 glass-panel p-6 md:p-8 rounded-[2rem] hover:bg-white/5 transition-all w-full md:w-auto flex-1 hover:-translate-y-2 hover:shadow-rose-500/20 hover:border-rose-500/30" target="_blank" rel="noopener noreferrer">
                  <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center border border-rose-500/20 group-hover:bg-rose-500 group-hover:border-rose-400 transition-colors">
                    <Instagram className="text-rose-400 group-hover:text-white transition-colors" size={28} />
                  </div>
                  <span className="text-white font-bold text-sm md:text-base tracking-tight">@{data.ig}</span>
                </a>
                <div className="group flex flex-col items-center gap-4 glass-panel p-6 md:p-8 rounded-[2rem] border-white/5 w-full md:w-auto flex-1 cursor-default">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <MapPin className="text-slate-400" size={28} />
                  </div>
                  <span className="text-slate-300 font-bold text-sm md:text-base tracking-tight">{data.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5 relative z-10 glass-panel mt-20 rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-red-600 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-rose-600/20">A</div>
                <span className="font-bold text-xl tracking-tighter uppercase font-heading text-white">Alief Alfaridzi.</span>
              </div>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed font-medium">
                Membangun masa depan digital melalui infrastruktur jaringan dan pengembangan perangkat lunak yang aman.
              </p>
            </div>

            <div className="flex gap-12">
              <div className="flex flex-col gap-4">
                <p className="text-white font-bold text-xs mb-1 uppercase tracking-widest font-heading">Navigation</p>
                <a href="#about" className="text-slate-400 hover:text-rose-400 transition-colors text-sm font-medium">Tentang</a>
                <a href="#projects" className="text-slate-400 hover:text-rose-400 transition-colors text-sm font-medium">Proyek</a>
                <a href="#contact" className="text-slate-400 hover:text-rose-400 transition-colors text-sm font-medium">Kontak</a>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-white font-bold text-xs mb-1 uppercase tracking-widest font-heading">Socials</p>
                <a href={data.linkedin} className="text-slate-400 hover:text-rose-400 transition-colors text-sm font-medium" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={`https://instagram.com/${data.ig}`} className="text-slate-400 hover:text-rose-400 transition-colors text-sm font-medium" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href={data.github} className="text-slate-400 hover:text-rose-400 transition-colors text-sm font-medium" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} M. ALIEF ALFARIDZI. ALL RIGHTS RESERVED.</p>
            <p className="flex items-center gap-1">BUILT WITH <Heart size={12} className="text-rose-500" /> & REACT</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
