import { X, ShieldCheck, FileText, Lock, Mail, HelpCircle } from 'lucide-react';

export type LegalModalType = 'terms' | 'privacy' | 'refund' | 'contact' | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export default function LegalModals({ activeModal, onClose }: LegalModalsProps) {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl bg-[#0A0A0A] border border-white/20 p-6 sm:p-8 flex flex-col shadow-2xl overflow-hidden text-white"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pb-4 border-b border-white/10 mb-4 flex items-center gap-3">
          {activeModal === 'terms' && (
            <>
              <div className="w-10 h-10 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center text-[#00FF41]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-black uppercase text-white">Termos de Uso</h3>
                <p className="text-xs text-white/50 font-mono">Curso Criando Sites com Inteligência Artificial</p>
              </div>
            </>
          )}

          {activeModal === 'privacy' && (
            <>
              <div className="w-10 h-10 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center text-[#00FF41]">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-black uppercase text-white">Política de Privacidade</h3>
                <p className="text-xs text-white/50 font-mono">Conformidade com a LGPD (Lei 13.709/2018)</p>
              </div>
            </>
          )}

          {activeModal === 'refund' && (
            <>
              <div className="w-10 h-10 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center text-[#00FF41]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-black uppercase text-white">Garantia & Reembolso</h3>
                <p className="text-xs text-white/50 font-mono">Direito de arrependimento (Art. 49 CDC)</p>
              </div>
            </>
          )}

          {activeModal === 'contact' && (
            <>
              <div className="w-10 h-10 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center text-[#00FF41]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-black uppercase text-white">Contato & Suporte</h3>
                <p className="text-xs text-white/50 font-mono">Canal oficial de atendimento ao aluno</p>
              </div>
            </>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto space-y-4 text-xs sm:text-sm text-white/80 font-sans pr-2 leading-relaxed">
          
          {/* TERMS OF USE */}
          {activeModal === 'terms' && (
            <>
              <p>
                Bem-vindo ao treinamento online <strong>Sites com IA</strong>. Ao adquirir o acesso através de nossa plataforma de pagamento oficial (Cakto Tecnologia Ltda.), você concorda com os seguintes termos e condições:
              </p>
              
              <h4 className="font-bold text-white uppercase text-xs font-mono text-[#00FF41]">1. Objeto do Treinamento</h4>
              <p>
                O produto consiste em um guia prático digital passo a passo, acompanhado de biblioteca de prompts mestres testados e materiais didáticos estruturados para capacitar o usuário a criar páginas web utilizando ferramentas de Inteligência Artificial e a prospectar clientes no mercado local.
              </p>

              <h4 className="font-bold text-white uppercase text-xs font-mono text-[#00FF41]">2. Acesso ao Conteúdo</h4>
              <p>
                O acesso é liberado de forma imediata e automatizada para o e-mail cadastrado no ato da compra, logo após a confirmação do pagamento pelo gateway da Cakto. O acesso concedido é pessoal, intransferível e com validade vitalícia para a versão adquirida.
              </p>

              <h4 className="font-bold text-white uppercase text-xs font-mono text-[#00FF41]">3. Propriedade Intelectual</h4>
              <p>
                Todo o material digital, roteiros, textos e apostilas são de propriedade exclusiva. É estritamente vedada a reprodução não autorizada, compartilhamento de arquivos ou comercialização de cópias piratas.
              </p>

              <h4 className="font-bold text-white uppercase text-xs font-mono text-[#00FF41]">4. Isenção de Resultados Garantidos</h4>
              <p>
                Não garantimos lucros fixos ou resultados financeiros automáticos. O sucesso na prestação de serviços a terceiros depende exclusivamente do empenho, estudo, habilidade técnica e dedicação individual de cada aluno.
              </p>
            </>
          )}

          {/* PRIVACY POLICY */}
          {activeModal === 'privacy' && (
            <>
              <p>
                Esta Política de Privacidade descreve como tratamos as informações e os dados pessoais dos usuários, em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>

              <h4 className="font-bold text-white uppercase text-xs font-mono text-[#00FF41]">1. Dados Coletados</h4>
              <p>
                Para processar sua matrícula e liberar seu acesso, coletamos apenas os dados essenciais fornecidos voluntariamente na página de checkout da Cakto: nome completo, endereço de e-mail e telefone para envio dos dados de login.
              </p>

              <h4 className="font-bold text-white uppercase text-xs font-mono text-[#00FF41]">2. Processamento Financeiro Seguro</h4>
              <p>
                Todos os dados de pagamento (como números de cartão de crédito e chaves PIX) são processados diretamente em ambiente seguro e criptografado com certificação SSL pela plataforma <strong>Cakto Tecnologia Ltda.</strong> Nós não armazenamos e não temos acesso aos seus dados financeiros bancários.
              </p>

              <h4 className="font-bold text-white uppercase text-xs font-mono text-[#00FF41]">3. Finalidade e Uso dos Dados</h4>
              <p>
                Seus dados serão utilizados unicamente para: (a) liberar seu login na área de membros; (b) enviar comunicados sobre atualizações e novas aulas; (c) prestar suporte técnico solicitado pelo aluno. Não compartilhamos, vendemos ou alugamos seus dados para terceiros.
              </p>

              <h4 className="font-bold text-white uppercase text-xs font-mono text-[#00FF41]">4. Direitos do Titular</h4>
              <p>
                A qualquer momento você poderá solicitar a confirmação da existência de tratamento, a correção de dados incompletos ou a exclusão de seus dados de nossa base de e-mails entrando em contato pelo e-mail <strong>dthursite@gmail.com</strong>.
              </p>
            </>
          )}

          {/* REFUND POLICY */}
          {activeModal === 'refund' && (
            <>
              <div className="p-4 rounded-xl bg-[#00FF41]/10 border border-[#00FF41]/30 text-white space-y-2">
                <span className="font-bold font-mono text-[#00FF41] text-xs uppercase block">
                  GARANTIA TOTAL DE 7 DIAS (RISCO ZERO)
                </span>
                <p className="text-xs text-white/80">
                  Em estrito cumprimento ao artigo 49 do Código de Defesa do Consumidor, você possui 7 (sete) dias corridos a partir da confirmação da compra para experimentar todo o conteúdo do treinamento.
                </p>
              </div>

              <h4 className="font-bold text-white uppercase text-xs font-mono text-[#00FF41]">Como solicitar o reembolso:</h4>
              <p>
                Se por qualquer motivo você considerar que o conteúdo não atendeu às suas expectativas, a devolução é simples e rápida:
              </p>

              <ol className="list-decimal pl-5 space-y-1.5 text-xs text-white/90">
                <li>
                  <strong>Pela plataforma Cakto:</strong> Acesse o e-mail de confirmação da compra enviado pela Cakto e clique no botão de suporte ou solicitação de reembolso.
                </li>
                <li>
                  <strong>Diretamente conosco por e-mail:</strong> Envie um e-mail para <strong>dthursite@gmail.com</strong> com o assunto &quot;Reembolso&quot; e o e-mail cadastrado na compra.
                </li>
              </ol>

              <h4 className="font-bold text-white uppercase text-xs font-mono text-[#00FF41]">Prazo e estorno do valor:</h4>
              <p>
                100% do valor de R$ 5,90 será restituído:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-white/80">
                <li><strong>No PIX:</strong> O valor retorna para a mesma conta bancária de origem em até 24 horas.</li>
                <li><strong>No Cartão de Crédito:</strong> O estorno é solicitado imediatamente junto à operadora do seu cartão.</li>
              </ul>
            </>
          )}

          {/* CONTACT & SUPPORT */}
          {activeModal === 'contact' && (
            <>
              <p>
                Estamos à disposição para ajudar com quaisquer dúvidas sobre as aulas, acesso à plataforma, materiais para download ou orientações técnicas.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs">
                <div>
                  <span className="text-white/50 block text-[11px] uppercase">E-mail Oficial de Atendimento:</span>
                  <a href="mailto:dthursite@gmail.com" className="text-[#00FF41] font-bold text-sm hover:underline">
                    dthursite@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-white/50 block text-[11px] uppercase">Horário de Funcionamento:</span>
                  <span className="text-white">Segunda a Sexta-feira, das 09:00 às 18:00 (Horário de Brasília)</span>
                </div>

                <div>
                  <span className="text-white/50 block text-[11px] uppercase">Tempo Médio de Resposta:</span>
                  <span className="text-white">Até 24 horas úteis</span>
                </div>

                <div>
                  <span className="text-white/50 block text-[11px] uppercase">Processamento de Pagamento:</span>
                  <span className="text-white">Cakto Tecnologia Ltda. (Checkout Seguro 256 bits)</span>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Modal Footer */}
        <div className="pt-4 mt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Entendido / Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
