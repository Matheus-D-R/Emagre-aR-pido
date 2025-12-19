
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Clock, 
  Flame, 
  Target, 
  Zap,
  ChevronDown
} from 'lucide-react';

const CHECKOUT_URL = "https://pay.kiwify.com.br/IhX5Pmh?afid=oLjhX7j8";

/**
 * COMPONENT: CTAButton
 * Botão de alta conversão otimizado para o tema escuro.
 */
const CTAButton: React.FC<{ text: string; onClick?: () => void; className?: string }> = ({ text, onClick, className }) => (
  <button 
    onClick={onClick || (() => window.location.href = CHECKOUT_URL)}
    className={`
      gradient-primary text-white font-extrabold 
      py-5 px-6 md:px-10 rounded-full 
      shadow-[0_10px_30px_-5px_rgba(16,185,129,0.5)]
      hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.7)]
      hover:scale-[1.03] active:scale-[0.97] 
      transition-all duration-300 
      animate-pulse-slow 
      uppercase tracking-widest 
      text-lg md:text-2xl 
      flex items-center justify-center gap-3 
      w-full md:w-auto 
      border-b-4 border-emerald-900/40
      relative overflow-hidden
      group
      ${className}
    `}
  >
    <span className="relative z-10 flex items-center gap-3">
      {text}
      <ArrowRight size={24} className="flex-shrink-0 group-hover:translate-x-1 transition-transform" />
    </span>
    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
  </button>
);

/**
 * COMPONENT: Section Wrapper
 */
const Section: React.FC<{ children: React.ReactNode; bg?: string; id?: string; className?: string }> = ({ children, bg = "bg-transparent", id, className = "" }) => (
  <section id={id} className={`py-12 md:py-24 px-4 md:px-6 ${bg} ${className}`}>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      initials: "M.S.",
      name: "Mariana S.",
      result: "-5kg em 21 dias",
      text: "Em 2 semanas eu já sentia minhas calças folgadas. Perdi 4kg sem sofrer e sem parar de comer o que eu gosto. Mudou minha vida!"
    },
    {
      initials: "R.O.",
      name: "Ricardo O.",
      result: "-8kg em 1 mês",
      text: "Nunca pensei que seria tão simples. O suporte é incrível e o método realmente entrega o que promete. Finalmente me sinto bem comigo mesmo."
    },
    {
      initials: "F.L.",
      name: "Fernanda L.",
      result: "-6kg em 21 dias",
      text: "O que mais me impressionou foi a energia que ganhei. Antes eu vivia cansada, agora acordo disposta e as roupas estão entrando novamente."
    },
    {
      initials: "C.T.",
      name: "Carlos T.",
      result: "-12kg em 2 meses",
      text: "Sempre tive dificuldade com dietas porque viajava muito a trabalho. O Seca21 foi o único que consegui adaptar à minha rotina louca."
    },
    {
      initials: "B.G.",
      name: "Beatriz G.",
      result: "-4kg em 15 dias",
      text: "Recuperei minha autoestima. O método é muito direto ao ponto e não tem enrolação. Recomendo para todas as minhas amigas."
    },
    {
      initials: "L.M.",
      name: "Luciana M.",
      result: "-9kg em 30 dias",
      text: "O Seca21 foi o divisor de águas que eu precisava. O plano é tão fácil de seguir que nem parece que estou em um processo de emagrecimento. Recuperei roupas que não serviam há anos!"
    }
  ];

  return (
    // Fundo degradê: Começa preto e vai clareando para um cinza chumbo/slate conforme desce
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 text-slate-100 selection:bg-emerald-500 selection:text-white">
      
      {/* Top Banner - Urgency */}
      <div className="bg-red-700 text-white text-center py-2.5 px-4 text-xs md:text-sm font-bold sticky top-0 z-50 shadow-lg">
        ⚠️ ATENÇÃO: Oferta exclusiva para as próximas {timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds} minutos!
      </div>

      {/* 1. HERO SECTION */}
      <Section className="flex flex-col items-center text-center pt-8 md:pt-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
            <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[100px] animate-float opacity-50"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[120px] animate-float-delayed opacity-50"></div>
        </div>

        <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 relative z-10">
          Finalmente revelado
        </span>
        <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 px-2 relative z-10 drop-shadow-2xl">
          Elimine até <span className="text-emerald-400">7kg em apenas 21 dias</span> sem pisar em uma academia.
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl font-medium leading-relaxed relative z-10">
          Descubra o segredo metabólico para queimar gordura localizada de forma natural, sem dietas restritivas e sem passar fome.
        </p>
        <div className="w-full flex justify-center px-2 relative z-10">
          <CTAButton text="Quero Secar Agora" />
        </div>
        <div className="mt-8 text-slate-400 text-sm md:text-base font-semibold flex items-center gap-2 relative z-10">
          <Users size={18} className="text-emerald-500" />
          <span>+4.200 pessoas já transformaram seus corpos</span>
        </div>
      </Section>

      {/* 2. IDENTIFICAÇÃO COM A DOR */}
      <Section className="bg-white/5 backdrop-blur-sm border-y border-white/5 my-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 leading-tight text-white">Isso parece familiar para você?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            "Você já tentou de tudo, mas o ponteiro da balança parece travado?",
            "Sente vergonha de se olhar no espelho ou de usar aquela roupa que ama?",
            "Começa uma dieta na segunda e já desistiu totalmente na quarta-feira?",
            "Sente cansaço constante e falta de disposição para o dia a dia?"
          ].map((text, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 bg-black/40 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all group">
              <XCircle className="text-red-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-base md:text-lg text-slate-200 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center italic text-slate-400 text-sm md:text-base border-t border-white/5 pt-8">
          "Eu sei exatamente como é... Mas a culpa não é sua. Você apenas não conhecia o caminho certo."
        </div>
      </Section>

      {/* 3. APRESENTAÇÃO DO MÉTODO */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">Conheça o Método Seca21</h2>
          <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Prático • Testado • Aprovado</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {[
            { icon: <Zap className="text-emerald-400" />, title: "Simples e Prático", desc: "Passo a passo direto ao ponto, sem enrolação técnica ou termos difíceis." },
            { icon: <Flame className="text-orange-500" />, title: "Queima Ativada", desc: "Ative hormônios naturais que destroem a gordura visceral de forma automática." },
            { icon: <Target className="text-blue-400" />, title: "Sem Academia", desc: "Foco 100% nutricional e em hábitos simples que você faz em casa." },
            { icon: <Users className="text-purple-400" />, title: "Zero Fome", desc: "Aprenda a comer o que gosta nas quantidades certas para o seu biotipo." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 p-6 md:p-8 rounded-3xl flex flex-col items-center text-center border border-white/10 hover:border-emerald-500/20 transition-all shadow-2xl">
              <div className="mb-4 bg-emerald-500/10 p-4 rounded-2xl ring-1 ring-emerald-500/20">{item.icon}</div>
              <h3 className="font-bold text-lg md:text-xl text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. QUEBRA DE OBJEÇÕES (FAQ) */}
      <Section className="bg-black/20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-white">Ainda com dúvidas?</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "Funciona mesmo?", a: "Sim! O método baseia-se em ciência nutricional avançada que foca na regulação da insulina, o hormônio que controla o estoque de gordura." },
            { q: "Preciso de muito tempo?", a: "Apenas 15 minutos por dia são suficientes para organizar seu plano e seguir as orientações práticas do método." },
            { q: "É seguro?", a: "Totalmente. O foco é em alimentos naturais e saudáveis que você já conhece. Não usamos remédios ou suplementos perigosos." },
            { q: "Serve para qualquer idade?", a: "Sim, temos alunos de 18 a 65 anos. O método é adaptável para diferentes ritmos de vida e necessidades biológicas." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.05] transition-colors group cursor-pointer">
              <h4 className="font-bold text-base md:text-lg flex items-center gap-3 text-white mb-2">
                <ChevronDown size={20} className="text-emerald-500 flex-shrink-0 group-hover:rotate-180 transition-transform" />
                {item.q}
              </h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed pl-8">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. PROVA SOCIAL */}
      <Section className="max-w-6xl">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-white leading-tight px-4">Quem já testou, aprovou!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/[0.05] p-6 md:p-8 rounded-3xl border-t-4 border-emerald-500 shadow-2xl flex flex-col justify-between hover:bg-white/[0.08] transition-colors">
              <p className="text-slate-200 font-medium italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center font-bold text-emerald-400 border border-emerald-500/30 flex-shrink-0">{t.initials}</div>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-xs md:text-sm text-emerald-400 font-black uppercase tracking-wider">{t.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. O QUE VOCÊ VAI RECEBER (OFERTA) */}
      <Section id="offer">
        <div className="bg-black rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 text-white overflow-hidden relative border border-emerald-500/20 shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
          <h2 className="text-2xl md:text-5xl font-black mb-8 text-center px-4 leading-tight text-white">Tudo o que você leva hoje:</h2>
          <div className="space-y-4 mb-10 max-w-2xl mx-auto">
            {[
              "Método Seca21 Completo (Passo a Passo)",
              "Guia de Cardápios Inteligentes",
              "BÔNUS: 50 Receitas de Shakes Detox",
              "Acesso Vitalício e Imediato",
              "Grupo Exclusivo de Suporte VIP"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-sm md:text-lg bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-emerald-500/10 transition-colors group">
                <CheckCircle2 className="text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center bg-emerald-500/5 p-6 md:p-10 rounded-3xl border border-emerald-500/20 backdrop-blur-sm shadow-inner">
            <p className="text-slate-500 line-through text-base md:text-xl mb-1 font-medium">De R$ 197,00</p>
            <p className="text-emerald-400 text-xs md:text-sm font-black uppercase tracking-[0.2em] mb-3">Oferta Relâmpago</p>
            <div className="text-5xl md:text-7xl font-black mb-1 text-white tracking-tighter">6X de <span className="text-emerald-400">R$ 5,24</span></div>
            <div className="text-xl md:text-3xl font-bold text-slate-300 mb-8 italic">ou apenas R$ 27,90 à vista</div>
            <CTAButton text="Garantir Minha Vaga" />
            <p className="text-slate-500 text-xs mt-8 italic opacity-80 uppercase tracking-widest font-bold">Acesso liberado imediatamente após a confirmação</p>
          </div>
        </div>
      </Section>

      {/* 7. GARANTIA */}
      <Section className="text-center">
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 md:p-12 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
          <ShieldCheck size={70} className="text-emerald-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
          <h2 className="text-xl md:text-3xl font-black text-white mb-4">Garantia Incondicional de 15 Dias</h2>
          <p className="text-sm md:text-lg text-slate-300 leading-relaxed mb-6 font-medium px-2">
            Eu tenho tanta certeza que o <strong>Seca21</strong> vai transformar seu corpo que eu assumo todo o risco. Se em 15 dias você não notar resultados ou simplesmente não gostar, eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </p>
          <div className="inline-block bg-emerald-500/20 text-emerald-400 px-8 py-3 rounded-full font-black text-sm md:text-base uppercase tracking-widest border border-emerald-500/30">
            Risco Zero para Você
          </div>
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <Section className="bg-emerald-600/90 text-white text-center shadow-inner mt-12" id="checkout">
        <div className="flex flex-col items-center py-4">
          <Clock size={48} className="mb-6 opacity-60 animate-pulse" />
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-[1.1] px-2 max-w-3xl drop-shadow-lg">Sua última chance de mudar seu corpo ainda este mês!</h2>
          <p className="text-base md:text-2xl mb-10 max-w-xl opacity-95 font-bold leading-relaxed px-4">
            Em poucos dias você poderá estar se sentindo leve, confiante e feliz com o que vê no espelho... ou continuar exatamente onde está. A escolha é sua.
          </p>
          <div className="w-full max-w-md px-2">
            <button 
              onClick={() => window.location.href = CHECKOUT_URL}
              className="
                group w-full bg-white text-emerald-700 font-black 
                py-6 px-8 rounded-full 
                shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4)]
                hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)]
                hover:scale-[1.05] active:scale-[0.95] 
                transition-all duration-300 
                uppercase tracking-widest 
                text-xl md:text-3xl 
                flex items-center justify-center gap-3
                border-b-4 border-emerald-900/20
              "
            >
              Comprar Agora
              <ArrowRight size={32} className="flex-shrink-0 group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="mt-6 text-white font-black text-2xl md:text-3xl drop-shadow-xl">Apenas R$ 27,90</p>
          </div>
          <p className="mt-12 text-xs md:text-sm font-black uppercase tracking-[0.3em] opacity-80 flex items-center gap-2 justify-center">
            <ShieldCheck size={18} />
            Compra 100% Segura • Acesso Imediato
          </p>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-16 px-6 bg-black text-slate-500 text-center text-[10px] md:text-sm border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-bold text-slate-400 uppercase tracking-widest">© 2024 Seca21 - Transformando Vidas</p>
          <p className="px-4 leading-relaxed max-w-3xl mx-auto opacity-50">
            Aviso Legal: Os resultados podem variar de pessoa para pessoa. Todas as informações contidas neste site são apenas para fins informativos. Este produto não substitui o acompanhamento médico e nutricional especializado.
          </p>
          <div className="flex justify-center gap-8 font-black uppercase tracking-widest text-[9px] md:text-xs text-slate-600">
            <a href="#" className="hover:text-emerald-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Políticas de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
