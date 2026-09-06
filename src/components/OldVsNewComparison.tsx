import { XCircle, CheckCircle2, Zap } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';

export default function OldVsNewComparison() {
  const comparisons = [
    {
      topic: "Tempo de Criação",
      oldWay: "De 3 a 6 semanas para entregar um site básico",
      newWay: "De 30 a 90 minutos para o site completo e no ar"
    },
    {
      topic: "Custo Financeiro",
      oldWay: "Mensalidades caras de plataformas ou R$ 3.000+ em agências",
      newWay: "Ferramentas 100% gratuitas ou de custo irrisório"
    },
    {
      topic: "Conhecimento Técnico",
      oldWay: "Anos estudando programação complexa, CSS e plugins que quebram",
      newWay: "Zero código. Apenas instruções simples em português para a IA"
    },
    {
      topic: "Alterações e Ajustes",
      oldWay: "Horas ou dias esperando suporte técnico para mudar uma frase",
      newWay: "Ajuste em poucos instantes pedindo diretamente para a IA"
    },
    {
      topic: "Produtividade & Entrega",
      oldWay: "Semanas de retrabalho com código confuso e plugins quebrados",
      newWay: "Alta produtividade: entregue sites profissionais com agilidade e qualidade"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-[#050505] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono font-bold uppercase tracking-[0.2em] mb-4">
            <Zap className="w-3.5 h-3.5 text-[#00FF41]" />
            <span>A REVOLUÇÃO DO DESENVOLVIMENTO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            O JEITO ANTIGO VS. <span className="text-transparent text-stroke-neon hover:text-[#00FF41] transition-colors">O NOVO MÉTODO IA</span>
          </h2>
          <p className="mt-4 text-white/70 text-sm sm:text-base">
            O desenvolvimento web evoluiu. Em vez de gastar semanas configurando servidores e plugins complexos, você aprende a instruir a Inteligência Artificial para estruturar páginas modernas com rapidez e autonomia.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Old Way Card */}
          <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-8 relative">
            <div className="flex items-center gap-3 pb-6 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-black uppercase text-white/80">O Jeito Tradicional & Lento</h3>
                <p className="text-xs font-mono text-white/40 uppercase tracking-wider">Demorado, caro e desgastante</p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {comparisons.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-white/30 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono font-bold text-white/40 block uppercase tracking-wider">
                      {c.topic}
                    </span>
                    <p className="text-sm text-white/60 mt-0.5">{c.oldWay}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Way Card (Highlighted) */}
          <div className="rounded-2xl border-2 border-[#00FF41] bg-[#0A0A0A] p-6 sm:p-8 relative shadow-[0_0_35px_rgba(0,255,65,0.15)]">
            <div className="absolute -top-3 right-6 bg-[#00FF41] text-[#050505] text-[10px] font-mono font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-[0_0_15px_rgba(0,255,65,0.5)]">
              MÉTODO OFICIAL
            </div>

            <div className="flex items-center gap-3 pb-6 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center text-[#00FF41]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-black uppercase text-white">O Novo Método com IA</h3>
                <p className="text-xs font-mono text-[#00FF41] uppercase tracking-wider">Rápido, elegante e lucrativo</p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {comparisons.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00FF41] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#00FF41] block uppercase tracking-wider">
                      {c.topic}
                    </span>
                    <p className="text-sm text-white font-medium mt-0.5">{c.newWay}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Link below comparison */}
        <div className="mt-12 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-[#050505] bg-[#00FF41] hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)]"
          >
            <span>QUERO MIGRAR PARA O MÉTODO COM IA</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
