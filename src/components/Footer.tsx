import { Sparkles, ShieldCheck, Lock, Mail, HelpCircle, FileText } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';
import { LegalModalType } from './LegalModals';

interface FooterProps {
  onOpenLegalModal: (type: LegalModalType) => void;
}

export default function Footer({ onOpenLegalModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#050505] border-t border-white/10 pt-16 pb-28 text-xs text-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center text-[#00FF41]">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-lg uppercase tracking-tight text-white">
                SITES COM <span className="text-[#00FF41]">IA</span>
              </span>
            </div>
            <p className="text-white/70 text-xs max-w-md leading-relaxed font-mono">
              Guia prático 100% digital passo a passo com prompts mestres validados. Aprenda a criar sites profissionais com ferramentas de Inteligência Artificial sem saber programar e sem pagar mensalidades.
            </p>
            
            <div className="pt-2 flex flex-col gap-2 font-mono text-[11px] text-white/60">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00FF41]" />
                <span>Suporte ao Aluno: <strong className="text-white">dthursite@gmail.com</strong> (Seg a Sex, 09h às 18h)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00FF41]" />
                <span>Garantia de 7 dias com devolução integral via Cakto</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#00FF41]" />
                <span>Pagamento processado com segurança por Cakto Tecnologia Ltda.</span>
              </div>
            </div>
          </div>

          {/* Col 2: Legal & Transparency */}
          <div className="space-y-2 font-mono">
            <h4 className="font-display font-black text-white uppercase tracking-wider text-xs">LEGAL & SUPORTE</h4>
            <ul className="space-y-2 text-white/70 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('terms')}
                  className="hover:text-[#00FF41] transition-colors text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-white/40" />
                  <span>Termos de Uso</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('privacy')}
                  className="hover:text-[#00FF41] transition-colors text-left flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-white/40" />
                  <span>Política de Privacidade (LGPD)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('refund')}
                  className="hover:text-[#00FF41] transition-colors text-left flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-white/40" />
                  <span>Garantia & Reembolso (7 Dias)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('contact')}
                  className="hover:text-[#00FF41] transition-colors text-left flex items-center gap-1.5"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-white/40" />
                  <span>Contato & Atendimento</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Checkout & Formas de Pagamento */}
          <div className="space-y-2">
            <h4 className="font-display font-black text-white uppercase tracking-wider text-xs">INSCRIÇÃO OFICIAL</h4>
            <p className="text-white/60 text-xs leading-relaxed font-mono">
              Pagamento único de <strong>R$ 5,90</strong> com acesso vitalício imediato.
            </p>
            <div className="space-y-1 text-[11px] font-mono text-white/50 pt-1">
              <span className="block">Formas aceitas:</span>
              <span className="text-white block">• PIX (Liberação Imediata)</span>
              <span className="text-white block">• Cartão de Crédito em até 12x</span>
              <span className="text-white block">• Boleto Bancário</span>
            </div>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs font-mono font-bold text-[#00FF41] hover:text-white underline underline-offset-4"
            >
              IR PARA CHECKOUT SEGURO CAKTO →
            </a>
          </div>

        </div>

        {/* Legal Disclaimer & Google Ads Compliance Notice */}
        <div className="pt-8 text-center space-y-3 font-mono">
          <p className="text-[11px] text-white/40 max-w-3xl mx-auto leading-relaxed">
            Aviso de Transparência: Este site oferece o treinamento educacional online &quot;Curso Criando Sites com Inteligência Artificial&quot;. Os resultados dependem exclusivamente da dedicação individual e aplicação do conteúdo por cada aluno. As transações financeiras são intermediadas com total segurança e criptografia de 256 bits pela plataforma Cakto Tecnologia Ltda.
          </p>
          <p className="text-white/50 text-[11px]">
            © {currentYear} SITES COM IA — TODOS OS DIREITOS RESERVADOS. CONTATO: DTHURSITE@GMAIL.COM
          </p>
        </div>

      </div>
    </footer>
  );
}

