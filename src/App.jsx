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
  CheckCircle2
} from 'lucide-react';
import profileImg from './assets/profile.jpg';
import pemiraImg from './assets/pemira.png';
import donPabloImg from './assets/don_pablo.png';
import secureQrImg from './assets/secure_qr.png';
import maduraStoreImg from './assets/madura_store.png';
import moodmealImg from './assets/moodmeal.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    projects: [
      {
        id: 1,
        name: "Don Pablo Flashsale Simulation",
        desc: "Pengembangan sistem simulasi transaksi cepat dengan manajemen konkurensi tinggi.",
        tag: "Performance",
        link: "https://github.com/Alieff19/DonPablo_FlashSale_Simulation",
        image: donPabloImg
      },
      {
        id: 2,
        name: "Secure QR Vault",
        desc: "Sistem penyimpanan data terenkripsi yang diakses melalui otentikasi QR Code unik.",
        tag: "Security",
        link: "https://github.com/Alieff19/SecureQR_Vault",
        image: secureQrImg
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
        image: maduraStoreImg
      },
      {
        id: 4,
        name: "Pemira (E-Voting System)",
        desc: "Website pemungutan suara digital yang mengutamakan integritas dan transparansi data.",
        tag: "Web App",
        image: pemiraImg
      },
      {
        id: 5,
        name: "Moodmeal",
        desc: "Website cerdas rekomendasi menu kuliner berdasarkan analisis suasana hati pengguna.",
        tag: "Website",
        image: moodmealImg
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-red-500/30 selection:text-red-500">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-white">A</div>
            <span className="font-bold text-xl tracking-tighter uppercase">Alief.</span>
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
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top">
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
              <Award size={16} />
              <span>Full Scholarship Recipient (OPES)</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Alief</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
              Mahasiswa Informatika di <span className="text-white font-semibold">Telkom University</span>.
              Berfokus pada integrasi infrastruktur jaringan dan pengembangan perangkat lunak inovatif.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://drive.google.com/file/d/1UP_YY5rqKGuhChqopxj8kxC_g6upKs6y/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold transition-all shadow-lg shadow-red-600/20 flex items-center gap-2 text-white">
                Download CV <ExternalLink size={18} />
              </a>
              <div className="flex items-center gap-4 px-4 text-slate-400">
                <a href={`https://instagram.com/${data.ig}`} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                <a href={data.linkedin} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                <a href={data.github} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Github /></a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 group shadow-2xl shadow-red-600/5">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
              {/* Profile Image - Replaced Placeholder */}
              <img src={profileImg} alt="M. Alief Alfaridzi" className="w-full h-full object-cover object-top" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Academic Excellence</p>
                    <p className="text-2xl font-bold text-white tracking-tight">GPA {data.gpa}</p>
                  </div>
                  <div className="p-3 bg-red-600 rounded-lg shadow-lg shadow-red-600/20">
                    <CheckCircle2 className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-red-500/30 transition-colors">
              <p className="text-4xl font-bold text-red-500 mb-1">3.94</p>
              <p className="text-slate-400 text-sm font-medium">IPK Kumulatif</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-red-500/30 transition-colors">
              <p className="text-4xl font-bold text-red-500 mb-1">5+</p>
              <p className="text-slate-400 text-sm font-medium">Proyek Utama</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-red-500/30 transition-colors">
              <p className="text-4xl font-bold text-red-500 mb-1">Top 1</p>
              <p className="text-slate-400 text-sm font-medium">Lulusan Terbaik SMK</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-red-500/30 transition-colors">
              <p className="text-4xl font-bold text-red-500 mb-1">Full</p>
              <p className="text-slate-400 text-sm font-medium">Beasiswa OPES</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Keahlian Utama</h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-200">
                <Code className="text-red-500" /> Hard Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.skills.hard.map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:border-red-500/50 hover:bg-slate-800/50 transition-all text-slate-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-200">
                <Users className="text-red-500" /> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.skills.soft.map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:border-red-500/50 hover:bg-slate-800/50 transition-all text-slate-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-extrabold mb-3 tracking-tight">Portofolio Proyek</h2>
              <p className="text-slate-400 text-lg">Inovasi solusi digital yang dikembangkan selama studi.</p>
            </div>
            <button className="flex items-center gap-2 text-red-500 font-bold hover:gap-3 transition-all px-6 py-2 border border-red-500/20 rounded-lg hover:bg-red-500/5">
              Lihat GitHub <ChevronRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.projects.map((p, idx) => (
              <div key={p.id} className={`group relative rounded-[32px] bg-slate-900 border border-slate-800 overflow-hidden hover:border-red-500/50 transition-all shadow-xl hover:shadow-red-600/5 ${idx === 0 ? 'md:col-span-2' : ''}`}>

                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                <div className="relative z-10 p-8">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <Briefcase size={80} />
                  </div>

                  <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
                    {p.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors leading-tight">{p.name}</h3>
                  <p className="text-slate-400 mb-6 text-base leading-relaxed">{p.desc}</p>

                  {p.links ? (
                    <div className="flex gap-4">
                      {p.links.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-red-400 transition-all cursor-pointer bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-lg border border-slate-700/50">
                          {link.label} <ExternalLink size={14} className="text-red-500" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a href={p.link || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all cursor-pointer bg-red-600 hover:bg-red-700 px-6 py-2.5 rounded-xl shadow-lg shadow-red-600/20">
                      Lihat Detail <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Perjalanan & Pengalaman</h2>
            <div className="w-16 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16">
            {data.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-12 border-l-2 border-slate-800">
                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-red-600 rounded-full border-4 border-slate-950 shadow-lg shadow-red-600/40"></div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-red-500 font-extrabold tracking-widest text-xs uppercase">{exp.period}</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{exp.type}</span>
                </div>
                <h4 className="text-2xl font-extrabold text-white mb-1 tracking-tight">{exp.role}</h4>
                <p className="text-slate-300 font-bold text-lg mb-4">{exp.company}</p>
                <p className="text-slate-400 leading-relaxed text-base font-medium">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto rounded-[48px] bg-gradient-to-br from-red-600 to-red-800 p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-red-600/20">
          <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white">Let's Connect!</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Saya siap berkolaborasi untuk inovasi masa depan. Jangan ragu untuk menghubungi saya untuk proyek atau sekadar berdiskusi.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <a href={`mailto:${data.email}`} className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all border border-white/20">
                  <Mail className="text-white" size={28} />
                </div>
                <span className="text-white font-bold text-lg tracking-tight">{data.email}</span>
              </a>
              <a href={`https://instagram.com/${data.ig}`} className="group flex flex-col items-center gap-3" target="_blank" rel="noopener noreferrer">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all border border-white/20">
                  <Instagram className="text-white" size={28} />
                </div>
                <span className="text-white font-bold text-lg tracking-tight">@{data.ig}</span>
              </a>
              <div className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <MapPin className="text-white" size={28} />
                </div>
                <span className="text-white font-bold text-lg tracking-tight">{data.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center font-bold text-white text-xs">A</div>
              <span className="font-bold text-lg tracking-tighter uppercase">Alief Alfaridzi.</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Membangun masa depan digital melalui infrastruktur jaringan dan pengembangan perangkat lunak yang aman.
            </p>
          </div>

          <div className="flex gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Navigation</p>
              <a href="#about" className="text-slate-500 hover:text-red-500 transition-colors text-sm">Tentang</a>
              <a href="#projects" className="text-slate-500 hover:text-red-500 transition-colors text-sm">Proyek</a>
              <a href="#contact" className="text-slate-500 hover:text-red-500 transition-colors text-sm">Kontak</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Socials</p>
              <a href={data.linkedin} className="text-slate-500 hover:text-red-500 transition-colors text-sm" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`https://instagram.com/${data.ig}`} className="text-slate-500 hover:text-red-500 transition-colors text-sm" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={data.github} className="text-slate-500 hover:text-red-500 transition-colors text-sm" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} M. ALIEF ALFARIDZI. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH REACT & TAILWIND</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
