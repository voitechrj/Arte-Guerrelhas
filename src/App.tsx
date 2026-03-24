/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Brush, Leaf, Mail, MapPin, Share2, Camera, X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal = ({ isOpen, onClose, title, content }: ModalProps) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-surface rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-surface-container rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <h3 className="font-headline text-3xl font-bold text-on-surface-variant mb-6">{title}</h3>
          <div className="font-body text-on-surface-variant/70 leading-relaxed max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
            <p>{content}</p>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 max-w-6xl mx-auto">
          <div className="font-headline text-xl md:text-2xl font-bold italic text-on-surface-variant tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer">
            Arte Guerrelhas
          </div>
          <div className="hidden md:flex items-center gap-10 font-headline text-lg tracking-tight ml-auto">
            <a className="text-on-surface-variant/70 hover:text-primary transition-colors hover:scale-105" href="#gallery">Galeria</a>
            <a className="text-on-surface-variant/70 hover:text-primary transition-colors hover:scale-105" href="#story">História</a>
            <a className="text-on-surface-variant/70 hover:text-primary transition-colors hover:scale-105" href="#artist">Artista</a>
            <a className="text-on-surface-variant/70 hover:text-primary transition-colors hover:scale-105" href="#contact">Contato</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 text-on-surface-variant">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-container/20 via-surface to-secondary-container/20 opacity-60"></div>
        
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 md:px-8 max-w-6xl grid lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/30 text-secondary font-label text-xs md:text-sm tracking-widest uppercase font-semibold">
              Esculpido à Mão
            </span>
            <h1 className="font-headline text-5xl md:text-8xl font-bold text-on-surface-variant leading-tight tracking-tighter">
              Aura de <span className="text-secondary italic">Amora</span>
            </h1>
            <p className="font-body text-lg md:text-2xl text-on-surface-variant/80 max-w-lg leading-relaxed">
              Cerâmica artesanal que captura o brilho do sol em pétalas de porcelana fria. Peças únicas, nascidas do encontro entre a delicadeza da flor e a profundidade da amora.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/10">
                Explorar Galeria
              </button>
              <button className="px-6 md:px-8 py-3 md:py-4 border border-outline-variant/30 text-secondary font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                Nossa História
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-white/20 backdrop-blur-sm rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700"></div>
            <img 
              alt="Cerâmica Aura de Amora" 
              className="relative w-full aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAww_7stj-_15U-Jp5SyOKdnDBIdDJ7JDlvyjaHKgIn9vCEM8zi9SnNzcG4y3K7n33Z5X5gqTkfb1qr3J1xM9QLN8a1nj6h6BOGKLNa1N8VLBpQ28h0n-SpfsgOQ46rg5yWX-ylevfhATcwFL4nGFdMWYBQDaKt8-hhF3U2xm1ALCXIj2KkWAK2VSedw4G1Xq1K0c9ho35yH-HkbHaHf7T4lITIe52exL6TliSTQzrcqcTvsaNMdWC3FYSgpUsQKggqTNQCc5yf4tti"
              referrerPolicy="no-referrer"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 w-32 md:w-48 h-32 md:h-48 bg-surface-container-lowest p-3 md:p-4 rounded-2xl shadow-lg hidden sm:block rotate-6"
            >
              <img 
                alt="Blackberry Detail" 
                className="w-full h-full object-cover rounded-xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbh4rcEECediqF4P2sP5l1qhPHhQxaFjG7QNfLxFMLMbOXa7xQad2Y9tbkQBaw_ctbucsIDBgUW0SmQv8JF0ipa35UKEfiWHi-9RYlvrTEYmQu_9gfnwb8WYqNG8-7ELNbz587r6SYBRybOJd8VpfvrGUEziwustlDQDme-pOnTtELflqHTM7CD0pgB2ymE4Yrn07iSFOV56yqdFk8d1zmW5tgz6rgdk-QKD-3rABK6Vq8Mwc1ppTmkIjFluRAqE_b1M0vhRuww3F"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mural/Gallery Section */}
      <section id="gallery" className="py-24 md:py-32 bg-surface-container-low">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="max-w-3xl mb-16 md:mb-20">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface-variant mb-6">Mural de Criações</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mb-8"></div>
            <p className="font-body text-lg text-on-surface-variant/70">
              Cada peça é modelada individualmente, sem moldes, garantindo que sua escultura seja tão única quanto a natureza que a inspira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-8 group overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img 
                  alt="Floral Figurines" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACGAvZ8nYBFVBNd1RhEqPcJh3AGgM1-MZMo5vZe_7H0rgIL_70RNpKk9UVxptxcSbSmuMOsSqPcK4MAeESRrhblUeMvzzGcLs1C6mmQkwOVmko0haMAb-vjiHZP6ZNe6i9nuFMWpvL1DIHcqJGQusvOnaL0ITBbrAvvuJCkqlS3kHbj-uLn8zUruY_5Au5KHF4s1cx-dTxUy307gr1NIuPTGErSsllowY5JMotcXMxoOXpr_4Qqu3hjaEYISKjrQL1qBgGnj_xWcnr"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 group overflow-hidden rounded-full bg-surface-container-lowest shadow-sm border border-outline-variant/10"
            >
              <div className="relative overflow-hidden h-full aspect-[3/4] md:aspect-auto">
                <img 
                  alt="Petal Detail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYJ2dI0yvb32N4G0wBk9wGmKuj-75YFfANha4bHt4D2Md_1yP-_MukoVnn0Z21oF05ZwamqQOJDV8ydR8Xq0SN_HHJbmURKK05r4C_6-vRP2vV9bWa5Lc3MGFjgJcnhxRG8_qfulpUMJwX17iJwatqINPlcx3IDFXID86IGtwAuUUf6uVM_-vvgeiYIG9vNbrobYSFUtcIdpzhFf8e3EsRmoYyME8P7RZtS6xURHFg_lJnexkdOG8OFFKBPfont0vauReN1hJfT0Es"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 group overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm"
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  alt="Sunflower Bowl" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvhhoJ-Y8TBGkUghBMgj4gCG2I5p12QAFL86OSvhocpjwYbtnxsSEaH4OSgqUOmuKfHpp0ZrjDdYnqVbNCwvLC9lsYhAWXJw7uxkBScx97o9meErvkuK1pLm_kcrkzL01tq-7Pj6Q4PeJbnZPqfdJDkmhEBEo2hEN7hnDzsc796uwKEISkAYaueScjAHxkBcMEsNs3Ak4ts-hWYfxHHlkEcNJnf_ul-q2jVlBRzVa02nvykVSLZx4WBQejvBcMoNm42RsWZByMyvCz"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 group overflow-hidden rounded-[4rem] bg-surface-container-lowest shadow-sm"
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  alt="Porcelain Butterfly" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP5wkGSefPNIw8tFY2xEbYtE6b3b7OTIawAitwPAssbfxcVHLZYps5ivZG9LIO6CWSTAIqMs6jZvlVRWHHdI5rmnDXxvuuxTmOI813MGMnDpgrDHB2vhcC5Wd1VpQbWHu2iq2Svh-roOybUpWSmQTlgJFS5uDfzoyrUd6A6Y3HAwOTlx00M3iH6U4P4ZHrejPZa-XjKEnfllvfSuEkA-wSJliurQyf8uqre9lJVa7_LbSq7CWTYd9t55RGeqBegwTv9W13aO4AEswG"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 group overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm"
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  alt="Blackberry Branch" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVWVqLPmr59WMGOQ8TFfjxtHeYKeiH-m8cs7JPCmwDY0t9UF5aJhfPz5XDpr8rpvZHqunvrorY3kaMhoGwEGhr7VMxKytGrlSY1o9Mq5rRKsrxlKwwjK-58bQGvGQC5tI04--yCgJEow6gS_XCLz0t7E5kvWVXsQhe-3MRjEVOABtJV2_LH-5kFfuoksoSke5zEqUPcDvhv-TDgQOidEQ9CyXMF7SH8OBvF1Cc-9TNVCV20ObtiNJEksgHbgHVw7IZM8tZpbNWLvlS"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artist Section */}
      <section id="artist" className="py-24 md:py-32 bg-surface overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface-variant">A Alma por trás da <span className="italic text-secondary">Aura</span></h2>
            <div className="space-y-6 font-body text-lg text-on-surface-variant/80 leading-relaxed">
              <p>
                Olá, eu sou a Ana. Minha jornada com a porcelana fria começou como uma busca por traduzir a efemeridade das flores em algo eterno.
              </p>
              <p>
                Cada pétala que moldo é um exercício de paciência e observação. Não busco a perfeição industrial, mas sim a imperfeição orgânica que torna cada ser vivo único. Na Aura de Amora, transformo sentimentos em esculturas que você pode carregar consigo.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <div className="flex flex-col">
                <span className="font-headline text-2xl font-bold text-primary">10+</span>
                <span className="text-sm uppercase tracking-widest text-on-surface-variant/60">Anos de Arte</span>
              </div>
              <div className="w-px h-12 bg-outline-variant/30 mx-4"></div>
              <div className="flex flex-col">
                <span className="font-headline text-2xl font-bold text-primary">500+</span>
                <span className="text-sm uppercase tracking-widest text-on-surface-variant/60">Peças Únicas</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="asymmetric-shape-2 w-full aspect-[4/5] bg-secondary-container/20 absolute -z-10 translate-x-8 translate-y-8"></div>
            <img 
              src="https://picsum.photos/seed/artist/800/1000" 
              alt="A Artista" 
              className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-32 bg-surface-container-low">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="asymmetric-shape-1 w-full aspect-square bg-primary-container/10 absolute -z-10 scale-110 rotate-12"></div>
            <img 
              alt="Processo Criativo" 
              className="w-full aspect-square object-cover asymmetric-shape-1 shadow-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJU3_gPU44wezXPv4Wf8IvEAlgln7JCxdAdJJaYDPFKmWV15TmcwhQv3EJvvDkY4cjweuXM_YFfZdnSbptkmhzlWXDDT933T2zjnibyl6xWWDDL74x7kp3tKNH6wtqvgyoOc2vtG0v7lmphxpJXGIKJelNgZBbwdTMuX9AURZYlrfICgIGSNNm04ICZmpsfxybkidLPr8aaClnFUVlkavlxCQpa2m7Ar4T_OHoCiVkN34xUUhet28ilq4lxivGdq7ghRUVGz8cBkM6"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface-variant">Modelado por <span className="italic text-primary">Intuição</span></h2>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant/80">
              O processo da Aura de Amora respeita o tempo da matéria. Cada peça leva dias para secar naturalmente ao ar, resultando em um acabamento leve, resistente e levemente flexível, típico da porcelana fria de alta qualidade.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                  <Brush size={18} className="text-on-primary-container" />
                </span>
                <div>
                  <h4 className="font-bold text-on-surface-variant">Pintura Manual</h4>
                  <p className="text-on-surface-variant/60">Pigmentos importados para cores que não desbotam.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-secondary-container/50 flex items-center justify-center shrink-0">
                  <Leaf size={18} className="text-secondary" />
                </span>
                <div>
                  <h4 className="font-bold text-on-surface-variant">Matéria Orgânica</h4>
                  <p className="text-on-surface-variant/60">Fórmulas não tóxicas e sustentáveis.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-surface-container">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-surface-container-lowest rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 shadow-xl border border-outline-variant/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start relative z-10">
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline text-4xl font-bold text-on-surface-variant mb-4">Vamos criar algo?</h2>
                  <p className="font-body text-on-surface-variant/70">
                    Encomendas personalizadas ou apenas um "oi", adoraria ouvir de você.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-secondary">
                    <Mail size={20} />
                    <span className="font-medium">ola@auradeamora.com.br</span>
                  </div>
                  <div className="flex items-center gap-4 text-secondary">
                    <MapPin size={20} />
                    <span className="font-medium">Curitiba, PR - Brasil</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-secondary/10 transition-colors" href="#">
                    <Share2 size={20} className="text-secondary" />
                  </a>
                  <a className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-secondary/10 transition-colors" href="#">
                    <Camera size={20} className="text-secondary" />
                  </a>
                </div>
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-secondary/70 ml-1">Seu Nome</label>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                    placeholder="Como podemos te chamar?" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-secondary/70 ml-1">E-mail</label>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                    placeholder="seu@email.com" 
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-secondary/70 ml-1">Mensagem</label>
                  <textarea 
                    className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all resize-none outline-none" 
                    placeholder="Conte-nos sobre sua ideia..." 
                    rows={4}
                  ></textarea>
                </div>
                <button className="w-full py-4 bg-secondary text-on-secondary font-bold rounded-xl hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98]">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-low py-12 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
          <div className="font-headline text-xl text-primary font-bold">Arte Guerrelhas</div>
          <p className="font-body text-sm tracking-wide uppercase text-on-surface-variant/60">
            © 2026
            <a className="text-secondary font-bold hover:underline ml-1" href="https://voitechrj.github.io/">voitechrj</a>
          </p>
          <div className="flex gap-8">
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="font-body text-sm tracking-wide uppercase text-on-surface-variant/60 hover:text-secondary transition-all"
            >
              Privacidade
            </button>
            <button 
              onClick={() => setIsTermsOpen(true)}
              className="font-body text-sm tracking-wide uppercase text-on-surface-variant/60 hover:text-secondary transition-all"
            >
              Termos
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
        title="Política de Privacidade"
        content="Sua privacidade é importante para nós. Coletamos apenas as informações necessárias para processar suas encomendas e melhorar sua experiência. Seus dados nunca serão compartilhados com terceiros sem seu consentimento explícito."
      />
      <Modal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
        title="Termos de Uso"
        content="Ao utilizar este site, você concorda em respeitar os direitos de propriedade intelectual das obras aqui apresentadas. Todas as peças são artesanais e podem apresentar variações sutis em relação às fotos."
      />
    </div>
  );
}
