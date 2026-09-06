import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Play, Zap } from 'lucide-react';

interface HeroProps {
  onOpenConfirmation?: () => void;
}

export default function Hero({ onOpenConfirmation }: HeroProps) {
  const handleClickCta = () => {
    if (onOpenConfirmation) {
      onOpenConfirmation();
    } else {
      window.location.hash = '#confirmacao';
    }
  };

  return (
    <header id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-white/10">
      {/* Background Watermark & Grid Accent */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none -z-10 select-none opacity-5 font-display font-black text-[22vw] leading-none text-white tracking-tighter uppercase">
        CRIAR
      </div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00FF41]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Tag Pill aligned with Google Ads */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono font-bold tracking-[0.15em] uppercase mb-6 shadow-[0_0_20px_rgba(0,255,65,0.15)]">
            <span className="flex h-2 w-2 rounded-full bg-[#00FF41] animate-ping" />
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURSO COMPLETO • APRENDA A CRIAR SITES COM IA POR APENAS R$ 5,90</span>
          </div>

          {/* Main Title with Bold Typography & Realistic Scope */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
            APRENDA A CRIAR <br className="hidden sm:inline" />
            <span className="text-transparent text-stroke-neon hover:text-[#00FF41] transition-colors duration-300">
              SITES COM IA
            </span>,{" "}
            MESMO DO ZERO
          </h1>

          {/* Subtitle with Honest, Realistic Language */}
          <p className="mt-6 text-sm sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-normal">
            Guia prático 100% digital passo a passo com prompts mestres validados. Aprenda a estruturar, personalizar e publicar sites modernos e landing pages profissionais para seus próprios projetos ou para atender empresas locais — sem precisar escrever códigos, sem vídeos enrolados e sem mensalidades caras.
          </p>

          {/* Hero Immediate Price & Product Transparency Box */}
          <div className="mt-8 max-w-xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#0A0A0A] border border-[#00FF41]/30 shadow-[0_0_30px_rgba(0,255,65,0.12)]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-[11px] font-mono font-bold text-white/50 uppercase tracking-wider block">
                  VALOR PROMOCIONAL DE LANÇAMENTO:
                </span>
                <div className="flex items-baseline justify-center sm:justify-start gap-2">
                  <span className="text-xs font-mono text-white/40 line-through">R$ 97,00</span>
                  <span className="font-display text-4xl sm:text-5xl font-black text-[#00FF41] tracking-tight">
                    R$ 5,90
                  </span>
                  <span className="text-[11px] font-mono text-white/70">PAGAMENTO ÚNICO</span>
                </div>
                <span className="text-[11px] font-mono text-[#00FF41] block mt-0.5">
                  ⚡ Sem mensalidade • Acesso Vitalício • Início Imediato
                </span>
              </div>

              <button
                id="hero-primary-cta"
                type="button"
                onClick={handleClickCta}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider text-[#050505] bg-[#00FF41] hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(0,255,65,0.4)] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>GARANTIR VAGA POR R$ 5,90</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Trust Guarantees under CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-white/70 font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00FF41]" />
              <span>PAGAMENTO SEGURO PROCESSADO PELA CAKTO</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00FF41]" />
              <span>7 DIAS DE GARANTIA INCONDICIONAL</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#00FF41]" />
              <span>ACESSO ENVIADO IMEDIATAMENTE POR E-MAIL</span>
            </div>
          </div>

          {/* Genuine Highlights (Zero fake reviews) */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-mono text-white/70 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF41]" />
              <span>Sem Necessidade de Código</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF41]" />
              <span>Guia Prático Ilustrado + Prompts Mestres</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF41]" />
              <span>Ferramentas Acessíveis e Gratuitas</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF41]" />
              <span>Suporte por E-mail</span>
            </span>
          </div>

        </div>

        {/* Hero Interactive Visual Showcase */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <div className="bg-[#0A0A0A] rounded-[15px] overflow-hidden border border-white/10">
              
              {/* Browser Window Header */}
              <div className="bg-[#050505] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-[#00FF41]" />
                  <span className="ml-2 text-xs text-white/50 font-mono hidden sm:inline-block">
                    https://meu-site-profissional.com.br
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[10px] font-mono uppercase font-bold text-[#00FF41] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" /> Gerado por IA em 45 segundos
                  </span>
                </div>
              </div>

              {/* Inside Window: Mock Preview of what the AI builds */}
              <div className="p-6 sm:p-8 bg-[#0A0A0A]">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left: Prompt representation */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="p-4 rounded-xl bg-[#050505] border border-white/10">
                      <div className="flex items-center justify-between text-xs text-white/50 mb-2 font-mono uppercase tracking-wider">
                        <span className="font-bold text-white/80">Comando Prompt do Usuário:</span>
                        <span className="text-[#00FF41]">100% em Português</span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/90 font-mono bg-[#0A0A0A] p-3 rounded-lg border border-white/10 leading-relaxed">
                        &quot;Crie uma landing page moderna para consultório odontológico com agendamento online, tabela de serviços e botão direto para WhatsApp.&quot;
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono uppercase">
                        <span className="text-white/60">Processando arquitetura e código</span>
                        <span className="text-[#00FF41] font-bold">100% Concluído</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-[#00FF41] h-1.5 rounded-full w-full shadow-[0_0_10px_#00FF41]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-[#050505] border border-white/10 flex items-center gap-2 text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-[#00FF41] shrink-0" />
                        <span>Copy persuasiva</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#050505] border border-white/10 flex items-center gap-2 text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-[#00FF41] shrink-0" />
                        <span>100% Responsivo</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#050505] border border-white/10 flex items-center gap-2 text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-[#00FF41] shrink-0" />
                        <span>SEO no Google</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#050505] border border-white/10 flex items-center gap-2 text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-[#00FF41] shrink-0" />
                        <span>Pronto p/ publicar</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Rendered Mock Website Result */}
                  <div className="lg:col-span-6">
                    <div className="rounded-xl border border-white/15 bg-[#050505] p-5 shadow-inner">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono">
                        <div className="font-bold text-xs uppercase tracking-wider text-white flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#00FF41]" />
                          Clínica Odonto Prime
                        </div>
                        <span className="text-[10px] bg-[#00FF41]/10 text-[#00FF41] px-2 py-0.5 rounded-full border border-[#00FF41]/30 uppercase font-bold">
                          Online
                        </span>
                      </div>
                      <div className="py-6 text-center">
                        <span className="text-[10px] uppercase font-mono font-bold text-[#00FF41] tracking-[0.2em]">
                          Sorrisos Perfeitos
                        </span>
                        <h4 className="text-lg sm:text-xl font-display font-black uppercase text-white mt-1.5 tracking-tight">
                          Transforme Seu Sorriso Hoje
                        </h4>
                        <p className="text-xs text-white/60 mt-2 line-clamp-2 max-w-sm mx-auto">
                          Tratamentos avançados com tecnologia 3D e atendimento sem dor em até 12x.
                        </p>
                        <div className="mt-5 flex justify-center gap-2.5">
                          <span className="text-xs font-black uppercase tracking-wider bg-[#00FF41] text-[#050505] px-4 py-2 rounded-full">
                            Agendar Avaliação
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider bg-white/10 text-white px-3.5 py-2 rounded-full border border-white/15">
                            WhatsApp
                          </span>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                        <span>Página 100% Responsiva</span>
                        <span className="text-[#00FF41] font-bold">Criada com Prompts de IA</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
