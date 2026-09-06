import { UserCheck, Briefcase, Palette, Rocket, Check } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';

export default function TargetAudience() {
  const audiences = [
    {
      icon: <UserCheck className="w-6 h-6 text-emerald-400" />,
      title: "Iniciantes Absolutos",
      desc: "Quem nunca viu código na vida, mas quer uma habilidade digital prática para ter uma renda extra ou trabalhar de casa."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-teal-400" />,
      title: "Empresários & Autônomos",
      desc: "Donos de negócios, médicos, advogados e comerciantes que precisam de um site de alto padrão sem gastar fortunas com agências."
    },
    {
      icon: <Palette className="w-6 h-6 text-cyan-400" />,
      title: "Designers & Gestores de Tráfego",
      desc: "Profissionais que já trabalham com digital e querem agregar criação de sites ao seu portfólio, aumentando o ticket cobrado por cliente."
    },
    {
      icon: <Rocket className="w-6 h-6 text-amber-400" />,
      title: "Afiliados & Criadores de Conteúdo",
      desc: "Quem vende infoprodutos e precisa colocar páginas de captura, pré-sell e VSLs no ar em questão de minutos para testar campanhas."
    }
  ];

  return (
    <section className="py-20 bg-[#050505] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono font-bold uppercase tracking-[0.2em] mb-4">
            <span>PERFIL DO ALUNO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            ESTE TREINAMENTO <span className="text-transparent text-stroke-neon hover:text-[#00FF41] transition-colors">É PARA VOCÊ?</span>
          </h2>
          <p className="mt-4 text-white/70 text-sm sm:text-base">
            Desenvolvido para ser acessível, intuitivo e com foco em resultados práticos no menor tempo possível.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center mb-4 text-[#00FF41]">
                  {item.icon}
                </div>
                <h3 className="font-display text-base font-black uppercase tracking-tight text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-mono text-[#00FF41] font-bold">
                <Check className="w-3.5 h-3.5" />
                <span>ADEQUADO PARA VOCÊ</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-[#050505] bg-[#00FF41] hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)]"
          >
            <span>QUERO COMEÇAR MEU TREINAMENTO HOJE</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
