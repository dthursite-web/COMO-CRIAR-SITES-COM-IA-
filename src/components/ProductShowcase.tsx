import { useState } from 'react';
import { 
  Laptop, 
  BookOpen, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  Lock, 
  Mail, 
  Layers,
  ArrowRight,
  Terminal,
  Copy,
  Check,
  Zap
} from 'lucide-react';

interface ProductShowcaseProps {
  onOpenConfirmation?: () => void;
}

export default function ProductShowcase({ onOpenConfirmation }: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'platform' | 'examples' | 'workflow'>('platform');
  const [selectedExample, setSelectedExample] = useState<number>(0);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);

  const handleClickCta = () => {
    if (onOpenConfirmation) {
      onOpenConfirmation();
    } else {
      window.location.hash = '#confirmacao';
    }
  };

  const handleCopySamplePrompt = () => {
    const text = 'Aja como um desenvolvedor web sênior e crie uma landing page de alta conversão para clínica odontológica. Inclua cabeçalho moderno, lista de 4 serviços com ícones, seção de contato via WhatsApp e rodapé institucional pronto para publicação.';
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const siteExamples = [
    {
      title: "Landing Page para Clínica Odontológica / Estética",
      category: "Saúde & Estética",
      tag: "Alta Conversão",
      description: "Página moderna com botão direto para WhatsApp, tabela de procedimentos e layout adaptado para celulares.",
      features: ["Agendamento direto no WhatsApp", "Galeria de antes e depois", "Carregamento ultra-rápido (< 1.2s)", "SEO otimizado para Google"],
      mockupImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80",
      accent: "#00FF41"
    },
    {
      title: "Site Institucional para Escritório de Advocacia",
      category: "Serviços Corporativos",
      tag: "Institucional",
      description: "Design sóbrio e elegante com foco em credibilidade, apresentação de áreas de atuação e formulário de consulta confidencial.",
      features: ["Tipografia executiva de prestígio", "Páginas de áreas de atuação", "Canal de contato seguro", "Zero custo de mensalidade"],
      mockupImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
      accent: "#38bdf8"
    },
    {
      title: "Cardápio Digital & Delivery para Gastronomia",
      category: "Restaurantes & Bares",
      tag: "Cardápio Interativo",
      description: "Cardápio online com fotos em alta resolução, opções de pedidos com 1 clique para WhatsApp e cálculo automático de itens.",
      features: ["Fotos apetitosas dos pratos", "Pedido formatado para o WhatsApp", "Fácil atualização de preços", "Sem taxas de aplicativos"],
      mockupImage: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80",
      accent: "#fb923c"
    },
    {
      title: "Página de Captura para Consultorias & Cursos",
      category: "Infoprodutos & Serviços",
      tag: "Lead Generation",
      description: "Estrutura moderna com apresentação clara da proposta de valor, tópicos explicativos e botão de contato direto.",
      features: ["Textos persuasivos gerados por IA", "Integração com formulários", "Totalmente responsivo", "Pontuação 98+ no PageSpeed"],
      mockupImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      accent: "#a855f7"
    }
  ];

  return (
    <section id="demonstracao" className="py-20 bg-[#070707] border-b border-white/10 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00FF41]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono font-bold uppercase tracking-[0.2em] mb-4">
            <Laptop className="w-3.5 h-3.5" />
            <span>TRANSPARÊNCIA TOTAL • VEJA POR DENTRO</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            VEJA EXATAMENTE <span className="text-transparent text-stroke-neon hover:text-[#00FF41] transition-colors">O QUE VOCÊ RECEBE</span>
          </h2>

          <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed">
            Sem caixas pretas nem surpresas. Conheça a área de membros, os materiais práticos inclusos e o tipo de site profissional que você vai aprender a criar a partir da primeira aula.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#0F0F0F] border border-white/15 max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('platform')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'platform'
                  ? 'bg-[#00FF41] text-[#050505] shadow-[0_0_20px_rgba(0,255,65,0.4)]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1. GUIA PRÁTICO & PROMPTS MESTRES</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('examples')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'examples'
                  ? 'bg-[#00FF41] text-[#050505] shadow-[0_0_20px_rgba(0,255,65,0.4)]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>2. EXEMPLOS DE SITES CRIADOS</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('workflow')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'workflow'
                  ? 'bg-[#00FF41] text-[#050505] shadow-[0_0_20px_rgba(0,255,65,0.4)]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>3. COMO FUNCIONA NA PRÁTICA</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Platform & Practical Guide Preview */}
        {activeTab === 'platform' && (
          <div className="space-y-8">
            {/* Mockup Window */}
            <div className="rounded-3xl border border-white/15 bg-[#0A0A0A] overflow-hidden shadow-2xl">
              {/* Browser/Platform Chrome Header */}
              <div className="px-5 py-3.5 bg-[#121212] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-[11px] text-white/50 hidden sm:inline">
                    Área de Membros • Guia Prático Passo a Passo + Prompts Mestres
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-white/60">
                  <span className="flex items-center gap-1.5 text-[#00FF41]">
                    <ShieldCheck className="w-4 h-4" /> Acesso Imediato sem Vídeos Longos
                  </span>
                </div>
              </div>

              {/* Main Member Area Simulation */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Guide & Prompt Studio Column */}
                <div className="lg:col-span-8 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#050505]">
                  {/* Interactive Digital Guide Box */}
                  <div className="rounded-2xl bg-[#0F0F0F] border border-white/10 overflow-hidden flex flex-col justify-between p-4 sm:p-6 space-y-4">
                    {/* Top Guide Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded bg-[#00FF41]/20 text-[#00FF41] font-mono text-[10px] font-bold uppercase border border-[#00FF41]/40">
                          GUIA PRÁTICO DIGITAL
                        </span>
                        <span className="text-xs font-mono text-white/80">
                          Módulo 3 • Passo 02: Estruturando a Landing Page
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#00FF41] bg-[#00FF41]/10 px-2 py-0.5 rounded border border-[#00FF41]/30">
                        ⚡ Direto ao Ponto
                      </span>
                    </div>

                    {/* Step Content & Prompt Instruction */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center shrink-0 text-[#00FF41] font-mono text-xs font-bold">
                          01
                        </div>
                        <div className="text-xs font-mono text-white/80 space-y-1">
                          <p className="font-bold text-white uppercase">Instrução Prática:</p>
                          <p className="text-white/70 leading-relaxed">
                            Abra a ferramenta de Inteligência Artificial gratuita recomendada no Módulo 1. Copie o comando validado abaixo e cole no campo de mensagem:
                          </p>
                        </div>
                      </div>

                      {/* Prompt Terminal Box */}
                      <div className="p-4 rounded-xl bg-black border border-[#00FF41]/30 space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <div className="flex items-center gap-2 text-white/60">
                            <Terminal className="w-3.5 h-3.5 text-[#00FF41]" />
                            <span>PROMPT MESTRE PARA COPIAR E COLAR:</span>
                          </div>
                          <button
                            type="button"
                            onClick={handleCopySamplePrompt}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#00FF41]/15 hover:bg-[#00FF41] text-[#00FF41] hover:text-[#050505] transition-all text-xs font-bold cursor-pointer"
                          >
                            {copiedPrompt ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-white" />
                                <span className="text-white">Copiado!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copiar Prompt</span>
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-xs sm:text-sm font-mono text-white/90 bg-[#080808] p-3 rounded-lg border border-white/10 leading-relaxed">
                          &quot;Aja como um desenvolvedor web sênior e crie uma landing page de alta conversão para clínica odontológica. Inclua cabeçalho moderno, lista de 4 serviços com ícones, seção de contato via WhatsApp e rodapé institucional pronto para publicação.&quot;
                        </p>
                      </div>

                      {/* Benefits Bullets */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                        <div className="flex items-center gap-2 text-[11px] font-mono text-white/70 bg-white/5 p-2 rounded-lg border border-white/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                          <span>Sem vídeos longos</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-white/70 bg-white/5 p-2 rounded-lg border border-white/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                          <span>Aplicação imediata</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-white/70 bg-white/5 p-2 rounded-lg border border-white/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                          <span>100% em português</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Meta info & Action */}
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                    <div>
                      <h4 className="font-display font-black text-lg text-white uppercase tracking-tight">
                        Criando a Estrutura da Página com a Inteligência Artificial
                      </h4>
                      <p className="text-xs text-white/60 font-mono mt-0.5">
                        Passo a passo na prática: você copia os comandos mestres e obtém o site pronto em minutos.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleClickCta}
                      className="px-5 py-2.5 rounded-full bg-[#00FF41] text-[#050505] font-mono font-black text-xs uppercase tracking-wider hover:bg-white transition-colors shrink-0 text-center cursor-pointer"
                    >
                      ACESSAR POR R$ 5,90
                    </button>
                  </div>
                </div>

                {/* Modules Playlist Column */}
                <div className="lg:col-span-4 p-4 sm:p-5 bg-[#0A0A0A] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 font-mono">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        CONTEÚDO DO GUIA (6 MÓDULOS)
                      </span>
                      <span className="text-[11px] text-[#00FF41]">100% Liberado</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { title: "Módulo 1: O Despertar da IA para Web", type: "Guia Prático", active: false, checked: true },
                        { title: "Módulo 2: Design, UI/UX & Copywriting", type: "Roteiro", active: false, checked: true },
                        { title: "Módulo 3: Criando Landing Pages Rápidas", type: "Passo a Passo", active: true, checked: false },
                        { title: "Módulo 4: Sites Institucionais & Catálogos", type: "Passo a Passo", active: false, checked: false },
                        { title: "Módulo 5: Hospedagem Grátis & Domínio Próprio", type: "Tutorial", active: false, checked: false },
                        { title: "Módulo 6: Captação de Clientes Locais", type: "Roteiro Comercial", active: false, checked: false },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-xl border transition-all text-xs font-mono flex items-center justify-between gap-2 ${
                            item.active
                              ? 'bg-[#00FF41]/10 border-[#00FF41]/40 text-white font-bold'
                              : 'bg-white/5 border-white/5 text-white/70 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] bg-white/10 text-[#00FF41]">
                              {index + 1}
                            </span>
                            <span className="truncate">{item.title}</span>
                          </div>
                          <span className="text-[10px] text-[#00FF41]/80 shrink-0 font-bold">{item.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Attached Downloads Box */}
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <span className="text-[11px] font-mono uppercase text-white/50 block mb-2 font-bold">
                      MATERIAIS PARA DOWNLOAD INCLUSOS:
                    </span>
                    <div className="space-y-1.5 text-xs font-mono text-white/80">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                        <FileText className="w-3.5 h-3.5 text-[#00FF41]" />
                        <span>Caderno de Prompts Mestres (Copie e Cole)</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                        <FileText className="w-3.5 h-3.5 text-[#00FF41]" />
                        <span>Modelos de Contratos & Propostas Comerciais</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Summary Highlights: Exactly what you receive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/30 flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-display font-black text-white uppercase text-base tracking-wide">
                  Guia Prático Passo a Passo
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-mono">
                  Material 100% digital, ilustrado e direto ao ponto. Sem vídeos longos ou enrolação: leia as instruções, copie os prompts mestres e aplique no seu tempo.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/30 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-display font-black text-white uppercase text-base tracking-wide">
                  Acesso Imediato & Vitalício
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-mono">
                  Pagamento único de apenas R$ 5,90. O acesso chega no seu e-mail na hora via Cakto e não há mensalidades.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/30 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-display font-black text-white uppercase text-base tracking-wide">
                  Suporte Direto por E-mail
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-mono">
                  Dúvidas com as aulas? Conte com nosso canal de atendimento ao aluno (dthursite@gmail.com) para auxílio rápido.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Real Website Examples */}
        {activeTab === 'examples' && (
          <div className="space-y-6">
            {/* Example Selection Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {siteExamples.map((ex, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedExample(idx)}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    selectedExample === idx
                      ? 'bg-[#00FF41]/10 border-[#00FF41] shadow-[0_0_15px_rgba(0,255,65,0.2)]'
                      : 'bg-[#0A0A0A] border-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase text-[#00FF41] font-bold block mb-1">
                    Exemplo 0{idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug">
                    {ex.category}
                  </h4>
                </button>
              ))}
            </div>

            {/* Selected Example Detail Card */}
            <div className="rounded-3xl border border-white/15 bg-[#0A0A0A] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-[#00FF41] uppercase">
                  <span>{siteExamples[selectedExample].category}</span>
                  <span>•</span>
                  <span>{siteExamples[selectedExample].tag}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-snug">
                  {siteExamples[selectedExample].title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed font-mono">
                  {siteExamples[selectedExample].description}
                </p>

                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/40 block">
                    Recursos implementados com a IA:
                  </span>
                  {siteExamples[selectedExample].features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-mono text-white/85">
                      <CheckCircle2 className="w-4 h-4 text-[#00FF41] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleClickCta}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-mono font-black uppercase tracking-wider text-[#050505] bg-[#00FF41] hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)] cursor-pointer"
                  >
                    <span>APRENDA A CRIAR SITES COMO ESTE (R$ 5,90)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Preview Image Column */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-white/15 overflow-hidden bg-[#050505] shadow-xl relative group">
                  <img
                    src={siteExamples[selectedExample].mockupImage}
                    alt={siteExamples[selectedExample].title}
                    className="w-full h-72 sm:h-96 object-cover object-top filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold">100% Responsivo no Celular e PC</span>
                    <span className="text-[#00FF41]">Criado sem programar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: How it Works Workflow */}
        {activeTab === 'workflow' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  step: "01",
                  title: "Copie o Prompt Mestre",
                  desc: "Você recebe nossa biblioteca com comandos prontos testados para cada tipo de negócio (médico, advogado, restaurante, loja).",
                  icon: FileText
                },
                {
                  step: "02",
                  title: "A IA Estrutura o Site",
                  desc: "A inteligência artificial gera todo o layout, paleta de cores moderna, imagens de alta qualidade e textos persuasivos em segundos.",
                  icon: Sparkles
                },
                {
                  step: "03",
                  title: "Personalize sem Código",
                  desc: "Ajuste os dados do cliente (WhatsApp, logotipo, fotos reais) com instruções simples em português direto.",
                  icon: Layers
                },
                {
                  step: "04",
                  title: "Publique Grátis na Nuvem",
                  desc: "Coloque o site no ar com segurança SSL e endereço profissional sem pagar mensalidade para plataformas caras.",
                  icon: ExternalLink
                }
              ].map((st, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 relative flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 font-mono">
                      <span className="font-display font-black text-2xl text-[#00FF41]">{st.step}</span>
                      <st.icon className="w-5 h-5 text-white/50" />
                    </div>
                    <h4 className="font-display font-black text-white uppercase text-base tracking-tight mb-2">
                      {st.title}
                    </h4>
                    <p className="text-xs text-white/70 font-mono leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick CTA box */}
            <div className="p-6 rounded-2xl bg-[#00FF41]/10 border border-[#00FF41]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="font-display font-black text-white uppercase text-base block">
                  Pronto para começar a criar hoje mesmo?
                </span>
                <span className="text-xs text-white/70 font-mono">
                  Por apenas R$ 5,90 pagamento único, você recebe acesso imediato a todas as aulas e prompts.
                </span>
              </div>
              <button
                type="button"
                onClick={handleClickCta}
                className="px-8 py-3 rounded-full text-xs font-mono font-black uppercase tracking-wider text-[#050505] bg-[#00FF41] hover:bg-white transition-all whitespace-nowrap shadow-[0_0_20px_rgba(0,255,65,0.4)] cursor-pointer"
              >
                QUERO COMEÇAR POR R$ 5,90 →
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
