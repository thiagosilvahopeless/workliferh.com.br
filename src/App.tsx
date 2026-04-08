import { motion, AnimatePresence } from "motion/react";
import { 
  MessageCircle, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Building2, 
  HardHat, 
  Factory, 
  Palmtree, 
  ShoppingBag, 
  Hotel,
  ChevronRight,
  Menu,
  X,
  Phone,
  MapPin,
  Calendar
} from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "5521977220296";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-worklife-accent selection:text-worklife-blue">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-10 h-10 bg-worklife-blue rounded-lg flex items-center justify-center">
              <span className="text-worklife-accent font-bold text-xl italic">W</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-worklife-blue font-black text-xl tracking-tighter">WORKLIFE</span>
              <span className="text-slate-500 text-[10px] font-bold tracking-[0.2em]">RECURSOS HUMANOS</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("solucoes")} className="text-sm font-semibold text-slate-600 hover:text-worklife-blue transition-colors">Soluções</button>
            <button onClick={() => scrollToSection("como-funciona")} className="text-sm font-semibold text-slate-600 hover:text-worklife-blue transition-colors">Como Funciona</button>
            <button onClick={() => scrollToSection("segmentos")} className="text-sm font-semibold text-slate-600 hover:text-worklife-blue transition-colors">Segmentos</button>
            <button onClick={() => scrollToSection("trabalhadores")} className="text-sm font-semibold text-slate-600 hover:text-worklife-blue transition-colors">Trabalhadores</button>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="bg-worklife-blue text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-blue-900/10"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-worklife-blue" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <button onClick={() => scrollToSection("solucoes")} className="text-2xl font-bold text-worklife-blue text-left">Soluções</button>
              <button onClick={() => scrollToSection("como-funciona")} className="text-2xl font-bold text-worklife-blue text-left">Como Funciona</button>
              <button onClick={() => scrollToSection("segmentos")} className="text-2xl font-bold text-worklife-blue text-left">Segmentos</button>
              <button onClick={() => scrollToSection("trabalhadores")} className="text-2xl font-bold text-worklife-blue text-left">Trabalhadores</button>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="bg-worklife-green text-white px-6 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle size={24} />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[100px] hidden lg:block" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-worklife-accent/10 border border-worklife-accent/20 text-worklife-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck size={14} className="text-worklife-accent" />
              Gestão Especializada de Mão de Obra
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-worklife-blue leading-[1.1] mb-6 tracking-tight">
              Reduza custos operacionais e resolva sua demanda de mão de obra <span className="text-transparent bg-clip-text bg-gradient-to-r from-worklife-blue to-blue-600">sem burocracia</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              A Worklife assume recrutamento, gestão e substituição de profissionais temporários enquanto você foca no crescimento da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="bg-worklife-green text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-green-500/20 group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                Falar no WhatsApp
              </a>
              <button 
                onClick={() => scrollToSection("solucoes")}
                className="bg-white border-2 border-slate-200 text-worklife-blue px-8 py-4 rounded-xl font-bold hover:border-worklife-blue transition-all flex items-center justify-center gap-2"
              >
                Solicitar profissionais
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 grayscale opacity-50">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500 italic">
                +500 empresas atendidas no Rio de Janeiro
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border-8 border-white">
              <img 
                src="https://picsum.photos/seed/business/800/600" 
                alt="Business Management" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Redução de Custos</p>
                  <p className="text-lg font-black text-worklife-blue">-35% ao ano</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-worklife-blue p-4 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Agilidade</p>
                  <p className="text-lg font-black">Substituição em 24h</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="solucoes" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-worklife-blue mb-4 tracking-tight">
              Soluções estratégicas para o seu negócio
            </h2>
            <p className="text-slate-600">
              Elimine a sobrecarga administrativa e foque no que realmente importa: o crescimento da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="text-blue-600" />,
                title: "Redução de Custos Trabalhistas",
                desc: "Otimize sua folha de pagamento e reduza encargos diretos com nossa gestão terceirizada."
              },
              {
                icon: <Clock className="text-amber-500" />,
                title: "Substituição Rápida",
                desc: "Garantimos a continuidade da sua operação com reposição ágil de profissionais em caso de faltas ou desligamentos."
              },
              {
                icon: <Users className="text-green-600" />,
                title: "Escalabilidade sob Demanda",
                desc: "Aumente ou reduza sua equipe conforme a sazonalidade do seu mercado sem complicações."
              },
              {
                icon: <ShieldCheck className="text-purple-600" />,
                title: "Segurança Jurídica",
                desc: "Gestão completa de contratos e obrigações legais, mitigando riscos trabalhistas para sua empresa."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-worklife-blue mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-worklife-blue mb-8 tracking-tight">
                Como funciona a nossa parceria
              </h2>
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Contato Inicial",
                    desc: "Sua empresa entra em contato e detalha a necessidade de mão de obra e o perfil desejado."
                  },
                  {
                    step: "02",
                    title: "Seleção e Gestão",
                    desc: "A Worklife realiza o recrutamento, seleção e assume toda a gestão administrativa dos profissionais."
                  },
                  {
                    step: "03",
                    title: "Alocação Rápida",
                    desc: "Os profissionais são alocados rapidamente na sua operação, prontos para entregar resultados."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="text-4xl font-black text-slate-100 select-none">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-bold text-worklife-blue mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-worklife-blue font-bold hover:gap-4 transition-all"
                >
                  Começar agora <ChevronRight size={20} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-[60px] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/team/800/800" 
                  alt="Team working" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-worklife-accent rounded-full -z-10 blur-3xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section id="segmentos" className="py-24 bg-worklife-blue text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
              Especialistas em diversos segmentos
            </h2>
            <p className="text-blue-100/70">
              Atendemos as principais verticais do mercado com profissionais qualificados e prontos para o trabalho.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <Hotel />, label: "Hotelaria" },
              { icon: <HardHat />, label: "Construção Civil" },
              { icon: <Factory />, label: "Indústria" },
              { icon: <Calendar />, label: "Eventos" },
              { icon: <ShoppingBag />, label: "Comércio" },
              { icon: <Palmtree />, label: "Turismo" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center gap-4 transition-all"
              >
                <div className="text-worklife-accent">{item.icon}</div>
                <span className="font-bold text-sm tracking-wide uppercase">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Gestão de Contratos", desc: "Cuidamos de toda a parte burocrática e contratual." },
                  { title: "Obrigações Legais", desc: "Total conformidade com as leis trabalhistas vigentes." },
                  { title: "Profissionais Qualificados", desc: "Rigoroso processo de seleção técnica e comportamental." },
                  { title: "Mitigação de Riscos", desc: "Sua empresa protegida contra passivos trabalhistas." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 text-worklife-green">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-worklife-blue mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-black text-worklife-blue mb-6 tracking-tight">
                Por que escolher a Worklife?
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Nossa expertise em Recursos Humanos permite que sua empresa tenha flexibilidade total na gestão de pessoal, garantindo eficiência e segurança jurídica em todas as etapas do processo.
              </p>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="bg-worklife-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all inline-flex items-center gap-2"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workers Section */}
      <section id="trabalhadores" className="py-24 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/5 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <div className="w-12 h-12 bg-worklife-accent/20 text-worklife-blue rounded-xl flex items-center justify-center mb-8">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-worklife-blue mb-6 tracking-tight">
                Trabalhe com flexibilidade e tenha novas oportunidades todos os dias
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Cadastre-se e participe de vagas em diferentes áreas e empresas. Valorizamos seu talento e conectamos você às melhores oportunidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-worklife-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  Ver vagas
                </a>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white border-2 border-slate-200 text-worklife-blue px-8 py-4 rounded-xl font-bold hover:border-worklife-blue transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 bg-worklife-blue relative min-h-[400px]">
              <img 
                src="https://picsum.photos/seed/worker/800/1000" 
                alt="Worker smiling" 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-worklife-blue via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="glass p-6 rounded-2xl text-white">
                  <p className="text-sm font-medium italic opacity-80 mb-4">
                    "Consegui meu primeiro emprego temporário através da Worklife e hoje estou efetivado em uma grande empresa do Rio."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                      <img src="https://picsum.photos/seed/testimonial/100/100" alt="Testimonial" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Ricardo Silva</p>
                      <p className="text-[10px] uppercase tracking-wider opacity-60">Logística</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black text-worklife-blue mb-8 tracking-tight">
              Fale com nossa equipe e resolva sua demanda hoje
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Estamos prontos para oferecer a melhor solução em gestão de pessoas para o seu negócio.
            </p>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="bg-worklife-green text-white px-12 py-6 rounded-2xl text-xl font-black hover:bg-green-600 transition-all inline-flex items-center gap-3 shadow-2xl shadow-green-500/30 group"
            >
              <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
              SOLICITAR AGORA NO WHATSAPP
            </a>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full -z-10 blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-amber-100 rounded-full -z-10 blur-3xl opacity-50" />
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-worklife-blue font-bold text-lg italic">W</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-white font-black text-lg tracking-tighter">WORKLIFE</span>
                  <span className="text-slate-500 text-[8px] font-bold tracking-[0.2em]">RECURSOS HUMANOS</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Especialistas em terceirização de mão de obra, recrutamento e seleção e gestão de trabalhadores temporários no Rio de Janeiro.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-worklife-blue hover:text-white transition-all">
                  <Phone size={18} />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-worklife-green hover:text-white transition-all">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Links Rápidos</h4>
              <ul className="space-y-4 text-sm">
                <li><button onClick={() => scrollToSection("solucoes")} className="hover:text-white transition-colors">Nossas Soluções</button></li>
                <li><button onClick={() => scrollToSection("como-funciona")} className="hover:text-white transition-colors">Como Funciona</button></li>
                <li><button onClick={() => scrollToSection("segmentos")} className="hover:text-white transition-colors">Segmentos Atendidos</button></li>
                <li><button onClick={() => scrollToSection("trabalhadores")} className="hover:text-white transition-colors">Área do Trabalhador</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-worklife-accent shrink-0" />
                  <span>Av. Alm. Barroso, 6 - sala 701 - Centro, Rio de Janeiro - RJ<br/><span className="text-slate-500">Condomínio do Edifício Capital</span></span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-worklife-accent shrink-0" />
                  <a href="tel:+5521977220296" className="hover:text-white transition-colors">(21) 97722-0296</a>
                </li>
                <li className="flex gap-3">
                  <Clock size={18} className="text-worklife-accent shrink-0" />
                  <span>Segunda a Sexta: 08h às 17h</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Institucional</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="https://workliferh.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Site Oficial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-4 text-xs font-medium">
            <p>© {new Date().getFullYear()} Worklife Recursos Humanos Ltda. Todos os direitos reservados.</p>
            <p>Desenvolvido com foco em resultados.</p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <motion.a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-worklife-green text-white p-4 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-worklife-blue px-4 py-2 rounded-xl font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none border border-slate-100">
          Como podemos ajudar?
        </span>
      </motion.a>
    </div>
  );
}
