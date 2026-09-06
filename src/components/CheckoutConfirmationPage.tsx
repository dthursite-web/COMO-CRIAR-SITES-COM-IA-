import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowDown,
  Lock, 
  Cookie, 
  AlertCircle, 
  Sparkles, 
  ArrowLeft, 
  Layers, 
  Wrench, 
  Code, 
  PenTool, 
  Smartphone, 
  Share2, 
  Globe, 
  CreditCard, 
  QrCode, 
  Zap,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { CHECKOUT_URL } from '../constants';
import { trackGoogleConversion } from '../utils/analytics';

interface CheckoutConfirmationPageProps {
  onBackToHome: () => void;
}

export default function CheckoutConfirmationPage({ onBackToHome }: CheckoutConfirmationPageProps) {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(() => {
    return localStorage.getItem('cookies_accepted') === 'true';
  });
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToPayment = () => {
    const el = document.getElementById('secao-pagamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAcceptCookies = () => {
    setCookiesAccepted(true);
    localStorage.setItem('cookies_accepted', 'true');
  };

  const handleProceedToCheckout = () => {
    // Record consent
    localStorage.setItem('cookies_accepted', 'true');
    setCookiesAccepted(true);

    // Track conversion event for Google Ads
    trackGoogleConversion();

    // Redirect to official Cakto checkout
    window.location.href = CHECKOUT_URL;
  };

  const stepsToCreateWebsite = [
    {
      number: "01",
      icon: <Layers className="w-5 h-5 text-[#00FF41]" />,
      title: "Definição do Nicho & Estrutura da Página",
      desc: "Você aprende a identificar o que o cliente ou negócio precisa (ex: dentista, barbearia, restaurante ou consultor) e monta o rascunho de seções que o site deve ter."
    },
    {
      number: "02",
      icon: <Wrench className="w-5 h-5 text-[#00FF41]" />,
      title: "Acesso & Configuração das IAs Gratuitas",
      desc: "Mostramos quais ferramentas de IA utilizar sem precisar assinar planos pagos. Você ativa seu ambiente de criação 100% gratuito e pronto para uso."
    },
    {
      number: "03",
      icon: <Code className="w-5 h-5 text-[#00FF41]" />,
      title: "Geração da Base com Prompts Validados",
      desc: "Você copia e cola nossos comandos mestres em português. A IA gera todo o código estrutural e visual da página de forma instantânea, sem você precisar programar."
    },
    {
      number: "04",
      icon: <PenTool className="w-5 h-5 text-[#00FF41]" />,
      title: "Criação dos Textos Persuasivos (Copywriting)",
      desc: "A inteligência artificial escreve títulos chamativos, apresentação de serviços, quebra de objeções e benefícios que prendem a atenção do visitante."
    },
    {
      number: "05",
      icon: <Smartphone className="w-5 h-5 text-[#00FF41]" />,
      title: "Design Visual e Adaptação Perfeita para Celular",
      desc: "Ajuste de cores harmoniosas, inclusão de imagens profissionais sem direitos autorais e garantia de que o site abrirá com velocidade e encaixe perfeito no smartphone."
    },
    {
      number: "06",
      icon: <Share2 className="w-5 h-5 text-[#00FF41]" />,
      title: "Configuração de Botões de Ação e WhatsApp",
      desc: "Inserção do botão flutuante de WhatsApp do cliente, formulários de contato ou botões de checkout para que o visitante possa comprar ou agendar."
    },
    {
      number: "07",
      icon: <Globe className="w-5 h-5 text-[#00FF41]" />,
      title: "Publicação Online Gratuita com Cadeado SSL",
      desc: "Passo a passo prático para colocar o site no ar na internet com link seguro e hospedagem de alta performance sem pagar mensalidades."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#00FF41] selection:text-[#050505] pb-24">
      
      {/* Top Bar with Security Badges */}
      <header className="border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-[#00FF41] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>VOLTAR PARA A PÁGINA ANTERIOR</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-[#00FF41] bg-[#00FF41]/10 px-3 py-1 rounded-full border border-[#00FF41]/30">
            <Lock className="w-3.5 h-3.5" />
            <span>CONFIRMAÇÃO SEGURA</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 space-y-10">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ETAPA DE CONFIRMAÇÃO & TRANSPARÊNCIA</span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            DETALHES DO CURSO & <span className="text-[#00FF41]">CONFIRMAÇÃO DO PEDIDO</span>
          </h1>
          <p className="text-white/70 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Antes de ir ao pagamento de apenas <strong className="text-white">R$ 5,90</strong>, queremos que você saiba exatamente o que está adquirindo, como o treinamento funciona e quais são os seus direitos de garantia.
          </p>

          {/* Banner em Destaque: Arraste para baixo para o pagamento */}
          <div className="pt-2">
            <button
              type="button"
              onClick={scrollToPayment}
              className="w-full max-w-md mx-auto p-3.5 rounded-2xl bg-[#00FF41]/15 border-2 border-[#00FF41] text-white flex items-center justify-between gap-3 shadow-[0_0_30px_rgba(0,255,65,0.25)] hover:bg-[#00FF41] hover:text-[#050505] transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-2.5 text-left">
                <span className="text-xl animate-bounce">👇</span>
                <div>
                  <span className="block text-xs sm:text-sm font-mono font-black uppercase tracking-wider">
                    ARRASTE PARA BAIXO PARA O PAGAMENTO
                  </span>
                  <span className="block text-[11px] font-mono text-[#00FF41] group-hover:text-[#050505]">
                    Ou clique aqui para rolar direto ao checkout (R$ 5,90)
                  </span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#00FF41] text-[#050505] group-hover:bg-[#050505] group-hover:text-[#00FF41] flex items-center justify-center shrink-0">
                <ArrowDown className="w-4 h-4 stroke-[3] group-hover:translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        {/* 1. Cookie Acceptance Box */}
        <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center shrink-0 text-[#00FF41]">
              <Cookie className="w-5 h-5" />
            </div>
            <div className="space-y-1 flex-1">
              <h2 className="text-sm sm:text-base font-display font-black uppercase text-white tracking-wide flex items-center justify-between">
                <span>POLÍTICA DE PRIVACIDADE E COOKIES</span>
                {cookiesAccepted ? (
                  <span className="text-[11px] font-mono font-bold text-[#00FF41] bg-[#00FF41]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> ACEITO
                  </span>
                ) : (
                  <span className="text-[11px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded-full">
                    Aguardando confirmação
                  </span>
                )}
              </h2>
              <p className="text-xs text-white/70 leading-relaxed font-mono">
                Utilizamos cookies essenciais para manter a integridade da sua navegação, viabilizar a comunicação segura com a plataforma de pagamento (Cakto) e registrar a medição de conversão de anúncios do Google. Nenhum dado financeiro sensível é armazenado em nosso site.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <label className="flex items-center gap-2.5 text-xs text-white/80 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={cookiesAccepted} 
                onChange={(e) => {
                  setCookiesAccepted(e.target.checked);
                  localStorage.setItem('cookies_accepted', e.target.checked ? 'true' : 'false');
                }}
                className="w-4 h-4 rounded bg-black border-white/20 text-[#00FF41] focus:ring-[#00FF41] focus:ring-offset-0"
              />
              <span>Concordo com o uso de cookies e com a Política de Privacidade</span>
            </label>

            {!cookiesAccepted && (
              <button
                type="button"
                onClick={handleAcceptCookies}
                className="text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 rounded-lg bg-white/10 hover:bg-[#00FF41] hover:text-[#050505] text-white transition-all self-end sm:self-auto"
              >
                Aceitar Cookies
              </button>
            )}
          </div>
        </div>

        {/* 2. Clear Ad Explanation ("Explicações do Anúncio") */}
        <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#00FF41]">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h2 className="text-base sm:text-lg font-display font-black uppercase text-white tracking-wide">
              O QUE VOCÊ VIU NO ANÚNCIO E O QUE REALMENTE VAI RECEBER
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00FF41]">
                <CheckCircle2 className="w-4 h-4" />
                <span>O QUE ESTÁ INCLUSO POR R$ 5,90:</span>
              </div>
              <ul className="text-xs text-white/70 space-y-1.5 font-mono">
                <li>• Guia prático passo a passo ilustrado e estruturado</li>
                <li>• Sem vídeos longos ou cansativos: direto à prática</li>
                <li>• Prompts prontos em português para copiar e colar</li>
                <li>• Instruções de hospedagem 100% gratuita</li>
                <li>• Método prático de prospecção de clientes locais</li>
                <li>• Acesso vitalício e sem mensalidades futuras</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400">
                <AlertCircle className="w-4 h-4" />
                <span>O QUE NÃO EXISTE AQUI (SEM ENGANAÇÃO):</span>
              </div>
              <ul className="text-xs text-white/70 space-y-1.5 font-mono">
                <li>• Não é robô de dinheiro fácil ou ganho automático</li>
                <li>• Não há mensalidade surpresa nem cobrança oculta</li>
                <li>• Não exige computador caro nem ferramentas pagas</li>
                <li>• Não precisa saber inglês nem linguagem de programação</li>
                <li>• Você é o responsável por aplicar o método ensinado</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. The 7 Steps to Create the Website ("Onde aprende em 7 passos a criar o site") */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-[#00FF41]/30 space-y-6">
          <div className="text-center sm:text-left space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00FF41] uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>METODOLOGIA PRÁTICA</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-black uppercase text-white tracking-tight">
              COMO VOCÊ APRENDE A CRIAR O SITE EM 7 PASSOS SIMPLES
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              Cada etapa é demonstrada em tela, do zero até a página estar funcionando na internet:
            </p>
          </div>

          <div className="space-y-3">
            {stepsToCreateWebsite.map((step, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-black/50 border border-white/10 hover:border-white/20 transition-colors flex items-start gap-4"
              >
                <div className="flex flex-col items-center justify-center shrink-0">
                  <span className="font-mono text-xs font-black text-[#00FF41] bg-[#00FF41]/10 px-2 py-1 rounded border border-[#00FF41]/30">
                    PASSO {step.number}
                  </span>
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    {step.icon}
                    <h3 className="text-sm font-display font-black uppercase text-white tracking-wide">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-white/70 font-mono leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. 7-Day Legal Guarantee Details */}
        <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center shrink-0 text-[#00FF41]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-display font-black uppercase text-white tracking-wide">
                GARANTIA INCONDICIONAL DE 7 DIAS (CÓDIGO DE DEFESA DO CONSUMIDOR)
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-mono leading-relaxed">
                Você tem 7 dias corridos após a compra para acessar todo o conteúdo, testar as ferramentas e avaliar se o treinamento atende às suas expectativas. Se por qualquer motivo você decidir que não quer continuar, basta solicitar o reembolso na plataforma da Cakto ou enviar um e-mail para <strong className="text-white">dthursite@gmail.com</strong>.
              </p>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-[#00FF41]">
                <FileCheck className="w-4 h-4 shrink-0" />
                <span>Seus R$ 5,90 são restituídos integralmente sem questionamentos ou burocracia.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Purchase Decision & Checkout CTA ("Se ela realmente quer continuar para a compra") */}
        <div id="secao-pagamento" className="p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border-2 border-[#00FF41] shadow-[0_0_35px_rgba(0,255,65,0.15)] space-y-6">
          
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-display font-black uppercase text-white tracking-tight">
              VOCÊ REALMENTE DESEJA CONTINUAR PARA A COMPRA?
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto">
              Confirme o resumo do seu pedido abaixo e clique no botão para ser direcionado à página oficial de pagamentos da Cakto.
            </p>
          </div>

          {/* Order Summary Box */}
          <div className="p-5 rounded-xl bg-black border border-white/10 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center text-white/70">
              <span>Item:</span>
              <span className="text-white font-bold">Guia Completo Criando Sites com IA</span>
            </div>
            <div className="flex justify-between items-center text-white/70">
              <span>Formato & Acesso:</span>
              <span className="text-[#00FF41] font-bold">Vitalício (Guia Prático + Prompts Mestres)</span>
            </div>
            <div className="flex justify-between items-center text-white/70">
              <span>Preço Regular:</span>
              <span className="line-through text-white/40">R$ 97,00</span>
            </div>
            <div className="pt-3 border-t border-white/10 flex justify-between items-center text-sm">
              <span className="text-white font-bold uppercase">Total Hoje (Taxa Única):</span>
              <div className="text-right">
                <span className="text-xl font-black text-[#00FF41]">R$ 5,90</span>
                <p className="text-[10px] text-white/50">Sem mensalidades</p>
              </div>
            </div>
          </div>

          {/* Payment Methods Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-white/70">
            <div className="flex items-center gap-1.5">
              <QrCode className="w-4 h-4 text-[#00FF41]" />
              <span>PIX (Liberação Imediata)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-[#00FF41]" />
              <span>Cartão de Crédito</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#00FF41]" />
              <span>Checkout Criptografado Cakto</span>
            </div>
          </div>

          {/* Checkbox agreement */}
          <div className="flex items-start gap-2.5 max-w-md mx-auto">
            <input 
              id="confirm-terms"
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded bg-black border-white/20 text-[#00FF41] focus:ring-[#00FF41]"
            />
            <label htmlFor="confirm-terms" className="text-xs text-white/70 select-none cursor-pointer leading-tight">
              Confirmo que li os detalhes do curso, concordo com os termos e desejo prosseguir para o checkout da Cakto.
            </label>
          </div>

          {/* Big CTA Button */}
          <div className="space-y-3 max-w-md mx-auto">
            <button
              onClick={handleProceedToCheckout}
              disabled={!agreedToTerms}
              className={`w-full py-4 px-6 rounded-full font-display font-black text-sm sm:text-base uppercase tracking-wider transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,255,65,0.4)] ${
                agreedToTerms 
                  ? 'bg-[#00FF41] text-[#050505] hover:bg-white hover:scale-[1.02] cursor-pointer' 
                  : 'bg-white/20 text-white/40 cursor-not-allowed'
              }`}
            >
              <span>ADICIONAR AO CARRINHO & COMPRAR (R$ 5,90)</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-center text-[11px] font-mono text-white/50">
              Você será redirecionado para o ambiente 100% seguro da Cakto.
            </p>
          </div>

          {/* Back button link */}
          <div className="text-center pt-2">
            <button
              onClick={onBackToHome}
              className="text-xs font-mono text-white/50 hover:text-white underline transition-colors"
            >
              Ainda com dúvidas? Voltar para rever os módulos na página principal
            </button>
          </div>

        </div>

      </main>

      {/* Floating Bottom Bar: Arraste para baixo para o pagamento */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4 pointer-events-auto">
        <button
          type="button"
          onClick={scrollToPayment}
          className="w-full py-3 px-5 rounded-full bg-[#050505]/95 border-2 border-[#00FF41] text-white backdrop-blur-md font-mono font-black text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(0,255,65,0.4)] flex items-center justify-between gap-2 hover:bg-[#00FF41] hover:text-[#050505] transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-2">
            <span className="animate-bounce">👇</span>
            <span>ARRASTE PARA BAIXO PARA O PAGAMENTO</span>
          </div>
          <span className="text-[#00FF41] group-hover:text-[#050505] font-bold">R$ 5,90</span>
        </button>
      </div>

    </div>
  );
}
