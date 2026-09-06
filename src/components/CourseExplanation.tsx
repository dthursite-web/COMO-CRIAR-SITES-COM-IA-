import { CheckCircle2, HelpCircle, Laptop, Wrench, Shield, Mail, Globe, Users, ArrowRight } from 'lucide-react';

interface CourseExplanationProps {
  onOpenConfirmation?: () => void;
}

export default function CourseExplanation({ onOpenConfirmation }: CourseExplanationProps) {
  const handleClickCta = () => {
    if (onOpenConfirmation) {
      onOpenConfirmation();
    } else {
      window.location.hash = '#confirmacao';
    }
  };

  const points = [
    {
      icon: <Laptop className="w-5 h-5 text-[#00FF41]" />,
      title: "1. Preciso de um computador potente?",
      answer: "Não. Como as ferramentas de Inteligência Artificial processam tudo diretamente na nuvem (nos servidores das próprias ferramentas), qualquer computador ou notebook comum com acesso à internet e navegador atualizado (Chrome, Edge, Firefox) é suficiente para assistir às aulas e gerar seus sites."
    },
    {
      icon: <Wrench className="w-5 h-5 text-[#00FF41]" />,
      title: "2. Quais ferramentas são ensinadas e terei custos extras?",
      answer: "Você aprenderá a utilizar as principais IAs do mercado (como ChatGPT, Claude e construtores modernos de interfaces). O método foi desenhado utilizando os planos 100% gratuitos dessas plataformas, para que você não precise pagar assinaturas caras ou ferramentas adicionais para aprender e publicar seus sites."
    },
    {
      icon: <Globe className="w-5 h-5 text-[#00FF41]" />,
      title: "3. Onde e como o site fica publicado na internet?",
      answer: "No módulo de publicação, você aprende a colocar qualquer site no ar gratuitamente em servidores de alta performance (como Vercel e Netlify), com certificado de segurança SSL (o cadeado no navegador) incluso sem custo. Caso queira usar um domínio próprio (exemplo: seunome.com.br), ensinamos o passo a passo da configuração."
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-[#00FF41]" />,
      title: "4. Preciso entender de códigos ou falar inglês?",
      answer: "Não. O treinamento foi feito para quem está começando do zero absoluto. Todas as instruções e prompts fornecidos são 100% em português claro e objetivo. Você aprende a orientar a IA em linguagem natural para que ela escreva e estruture a página por você."
    },
    {
      icon: <Users className="w-5 h-5 text-[#00FF41]" />,
      title: "5. Como funciona a parte de achar clientes?",
      answer: "No Módulo 6, ensinamos uma metodologia prática, ética e profissional de prospecção. Você aprende como pesquisar pequenas empresas e comércios da sua região que não possuem site ou possuem páginas antigas que não abrem bem no celular, e como abordá-los com uma proposta de valor clara, sem promessas mirabolantes."
    },
    {
      icon: <Mail className="w-5 h-5 text-[#00FF41]" />,
      title: "6. Como recebo o acesso e quando posso começar?",
      answer: "O acesso é imediato. Assim que o pagamento de R$ 5,90 for confirmado pela Cakto (no PIX a confirmação ocorre em segundos, no cartão em até 2 minutos), um e-mail com seus dados de acesso à plataforma de aulas é enviado automaticamente. As aulas já estão gravadas e disponíveis para assistir no seu ritmo."
    },
    {
      icon: <Shield className="w-5 h-5 text-[#00FF41]" />,
      title: "7. E se eu não gostar ou achar difícil?",
      answer: "Você conta com a Garantia Legal Incondicional de 7 dias (Art. 49 do Código de Defesa do Consumidor). Se por qualquer razão você entender que o treinamento não era o que esperava, basta solicitar o reembolso na própria Cakto ou pelo e-mail de suporte (dthursite@gmail.com). O valor de R$ 5,90 é estornado integralmente."
    }
  ];

  return (
    <section id="como-funciona-detalhes" className="py-20 bg-[#050505] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono font-bold uppercase tracking-[0.2em] mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>TRANSPARÊNCIA TOTAL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            TUDO EXPLICADO <span className="text-transparent text-stroke-neon hover:text-[#00FF41] transition-colors">ÀS CLARAS</span>
          </h2>
          <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed">
            Sem promessas irreais, sem avaliações forjadas e sem letras miúdas. Aqui você encontra exatamente o que é o treinamento, como ele funciona e o que você precisa para aplicar.
          </p>
        </div>

        {/* Clear Explanations List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {points.map((pt, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center shrink-0 mt-0.5">
                  {pt.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-base sm:text-lg font-black uppercase text-white tracking-tight">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-mono leading-relaxed">
                    {pt.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action card */}
        <div className="mt-12 max-w-xl mx-auto text-center p-6 rounded-2xl bg-[#0A0A0A] border border-[#00FF41]/30">
          <p className="text-xs font-mono text-white/60 mb-4">
            Aprenda a criar sites com inteligência artificial e a prospectar clientes com um método direto e sem enrolação por apenas R$ 5,90.
          </p>
          <button
            type="button"
            onClick={handleClickCta}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black uppercase tracking-wider text-xs sm:text-sm text-[#050505] bg-[#00FF41] hover:bg-white transition-all shadow-[0_0_25px_rgba(0,255,65,0.3)] cursor-pointer"
          >
            <span>INSCREVER-SE POR R$ 5,90 (ACESSO VITALÍCIO)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
