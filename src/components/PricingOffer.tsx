import { ShieldCheck, Check, Zap, Sparkles, ArrowRight, Lock, CreditCard, QrCode } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';

interface PricingOfferProps {
  onOpenConfirmation?: () => void;
}

export default function PricingOffer({ onOpenConfirmation }: PricingOfferProps) {
  const handleClickCta = () => {
    if (onOpenConfirmation) {
      onOpenConfirmation();
    } else {
      window.location.hash = '#confirmacao';
    }
  };

  return (
    <section id="oferta" className="py-24 bg-[#050505] relative border-b border-white/10 overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00FF41]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Transparent Offer Header (Zero fake urgency) */}
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono font-bold mb-4 uppercase tracking-wider">
            <span className="flex h-2 w-2 rounded-full bg-[#00FF41]" />
            <span>VALOR OFICIAL • PAGAMENTO ÚNICO DE R$ 5,90</span>
          </div>

          <h2 className="font-display text-3xl sm:text-6xl font-black uppercase tracking-tight text-white">
            ACESSO IMEDIATO COM <span className="text-transparent text-stroke-neon hover:text-[#00FF41] transition-colors">RISCO ZERO</span>
          </h2>
          <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed">
            Aprenda a estruturar websites profissionais com Inteligência Artificial e a prospectar clientes de forma transparente e prática. Sem mensalidades ou custos ocultos.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto rounded-3xl border-2 border-[#00FF41] bg-[#0A0A0A] p-6 sm:p-10 relative shadow-[0_0_50px_rgba(0,255,65,0.18)]">
          
          {/* Top Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00FF41] text-[#050505] text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest px-6 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,255,65,0.6)] flex items-center gap-1.5 whitespace-nowrap">
            <Sparkles className="w-4 h-4 fill-current" />
            <span>ACESSO COMPLETO POR APENAS R$ 5,90</span>
          </div>

          <div className="text-center pt-4 pb-6 border-b border-white/10">
            <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-[#00FF41]">
              MÉTODO COMPLETO: CRIE SITES COM IA & ENCONTRE CLIENTES
            </span>

            {/* Old Price */}
            <div className="mt-3 text-xs sm:text-sm font-mono text-white/40">
              DE <span className="line-through text-white/30">R$ 97,00</span> POR APENAS:
            </div>

            {/* Highlights Price */}
            <div className="mt-2 flex items-baseline justify-center gap-2">
              <span className="font-display text-5xl sm:text-7xl font-black text-[#00FF41] tracking-tight">
                R$ 5,90
              </span>
            </div>
            <p className="text-sm font-mono text-white/80 mt-2">
              PAGAMENTO ÚNICO COM ACESSO VITALÍCIO (NO PIX OU CARTÃO)
            </p>

            <span className="inline-block mt-3 text-xs font-mono bg-white/5 text-[#00FF41] px-3.5 py-1 rounded-full border border-white/10">
              ⚡ Pagamento único de apenas R$ 5,90 sem mensalidades nem taxas ocultas
            </span>
          </div>

          {/* Checklist included */}
          <div className="py-6 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 mb-2">
              O QUE ESTÁ INCLUSO NO SEU ACESSO:
            </h4>

            {[
              "Guia 100% digital passo a passo com biblioteca de prompts mestres (6 módulos)",
              "Acesso imediato enviado diretamente para o seu e-mail após a compra",
              "Aprenda a criar sites e landing pages profissionais mesmo começando do zero",
              "Biblioteca de Prompts Mestres validados para copiar e colar nas IAs",
              "Técnicas de publicação gratuita em nuvem com domínio próprio e SSL",
              "Módulo exclusivo de captação ética de clientes para empresas locais",
              "Suporte ao aluno por e-mail (dthursite@gmail.com) para tirar dúvidas",
              "Garantia Incondicional de 7 Dias com reembolso total de 100% do valor",
              "Acesso vitalício sem cobrança de mensalidades ou anuidades futuras"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-xs sm:text-sm text-white/90 font-mono">
                <div className="w-5 h-5 rounded-full bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Transparent Purchase Details Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs mb-6">
            <div className="flex items-center gap-2 text-[#00FF41] font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>DADOS TRANSPARENTES DA COMPRA:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/80 text-[11px] sm:text-xs">
              <div>
                <span className="text-white/40 block">Nome do Produto:</span>
                <span className="font-bold text-white">Curso Criando Sites com IA</span>
              </div>
              <div>
                <span className="text-white/40 block">Valor & Formato:</span>
                <span className="font-bold text-[#00FF41]">R$ 5,90 • Pagamento Único</span>
              </div>
              <div>
                <span className="text-white/40 block">Liberação do Acesso:</span>
                <span className="text-white">Imediata via e-mail (PIX na hora, Cartão em 2 min)</span>
              </div>
              <div>
                <span className="text-white/40 block">Plataforma de Pagamento:</span>
                <span className="text-white">Cakto Tecnologia (Ambiente Criptografado SSL)</span>
              </div>
              <div>
                <span className="text-white/40 block">Formas de Pagamento:</span>
                <span className="text-white">PIX, Cartão de Crédito e Boleto</span>
              </div>
              <div>
                <span className="text-white/40 block">Suporte Oficial:</span>
                <a href="mailto:dthursite@gmail.com" className="text-[#00FF41] hover:underline">
                  dthursite@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Primary Checkout Button */}
          <div className="space-y-4">
            <button
              id="pricing-checkout-cta"
              type="button"
              onClick={handleClickCta}
              className="w-full group relative flex items-center justify-center gap-3 px-8 py-5 rounded-full text-base sm:text-lg font-black uppercase tracking-wider text-[#050505] bg-[#00FF41] hover:bg-white transition-all duration-300 shadow-[0_0_35px_rgba(0,255,65,0.4)] hover:shadow-[0_0_45px_rgba(255,255,255,0.5)] hover:scale-[1.01] active:scale-100 text-center cursor-pointer"
            >
              <Zap className="w-6 h-6 fill-current shrink-0" />
              <span>GARANTIR MEU ACESSO POR R$ 5,90</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform shrink-0" />
            </button>

            {/* Direct Link indicator */}
            <p className="text-center text-xs font-mono text-white/50">
              Pagamento 100% protegido e processado pela plataforma <strong>Cakto Tecnologia</strong>:
              <br />
              <span className="text-[11px] text-[#00FF41]">{CHECKOUT_URL}</span>
            </p>
          </div>

          {/* Trust Badges footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/60">
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#00FF41]" />
              <span>AMBIENTE CRIPTOGRAFADO SSL</span>
            </div>
            <div className="flex items-center gap-1.5">
              <QrCode className="w-4 h-4 text-[#00FF41]" />
              <span>PIX: LIBERAÇÃO IMEDIATA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-[#00FF41]" />
              <span>CARTÃO ATÉ 12X</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00FF41]" />
              <span>GARANTIA 7 DIAS CAKTO</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
