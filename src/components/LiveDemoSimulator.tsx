import { useState, FormEvent } from 'react';
import { Sparkles, ArrowRight, Laptop, Smartphone, Code2, Eye, CheckCircle, RefreshCw, Wand2 } from 'lucide-react';
import { DEMO_PROMPTS, CHECKOUT_URL } from '../constants';
import { DemoPromptTemplate } from '../types';

export default function LiveDemoSimulator() {
  const [selectedTemplate, setSelectedTemplate] = useState<DemoPromptTemplate>(DEMO_PROMPTS[0]);
  const [customPrompt, setCustomPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  const [activeTab, setActiveTab] = useState<'preview' | 'prompt' | 'code'>('preview');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');

  const handleSelectTemplate = (template: DemoPromptTemplate) => {
    setSelectedTemplate(template);
    setCustomPrompt('');
    runGenerationSimulation();
  };

  const runGenerationSimulation = () => {
    setIsGenerating(true);
    setGenerationStep(1);

    setTimeout(() => setGenerationStep(2), 500);
    setTimeout(() => setGenerationStep(3), 1000);
    setTimeout(() => setGenerationStep(4), 1400);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerationStep(0);
    }, 1800);
  };

  const handleCustomGenerate = (e: FormEvent) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;

    // Build synthetic template from custom prompt
    const newTemplate: DemoPromptTemplate = {
      id: 'custom-' + Date.now(),
      label: 'Personalizado',
      category: 'Seu Negócio',
      prompt: customPrompt,
      previewTitle: customPrompt.length > 50 ? customPrompt.substring(0, 50) + '...' : customPrompt,
      previewSubtitle: 'Site moderno construído sob medida com copywriting persuasivo, otimizado para conversão no celular e computador.',
      previewTheme: {
        bg: 'from-emerald-950/80 to-slate-950',
        accent: 'text-emerald-400',
        buttonColor: 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
      },
      features: [
        'Estrutura focada em geração de leads e vendas',
        'Carregamento ultra-rápido em menos de 1 segundo',
        'Integração direta com WhatsApp e meios de pagamento',
        'SEO otimizado para indexação automática no Google'
      ],
      ctaText: 'Solicitar Orçamento Agora',
      sampleCode: `// Código do seu site personalizado gerado por IA:
<section className="bg-slate-900 py-16 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-3xl font-extrabold text-white">${customPrompt.replace(/"/g, '')}</h1>
    <p className="text-slate-300 mt-4">Solução sob medida para alavancar seu faturamento.</p>
    <button className="mt-6 px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-xl">
      Entrar em Contato
    </button>
  </div>
</section>`
    };

    setSelectedTemplate(newTemplate);
    runGenerationSimulation();
  };

  return (
    <section id="simulador" className="py-20 bg-[#050505] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono font-bold uppercase tracking-[0.2em] mb-4">
            <Wand2 className="w-3.5 h-3.5" />
            <span>SIMULADOR EM TEMPO REAL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            VEJA ACONTECER: <span className="text-transparent text-stroke-neon hover:text-[#00FF41] transition-colors">DO PROMPT AO SITE PRONTO</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70">
            Experimente os exemplos abaixo ou digite a sua própria ideia de negócio para ver como a Inteligência Artificial cria páginas estruturadas, textos de alta conversão e designs em segundos.
          </p>
        </div>

        {/* Templates Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {DEMO_PROMPTS.map((template) => {
            const isSelected = selectedTemplate.id === template.id;
            return (
              <button
                key={template.id}
                id={`template-btn-${template.id}`}
                onClick={() => handleSelectTemplate(template)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#00FF41] text-[#050505] border-[#00FF41] shadow-[0_0_20px_rgba(0,255,65,0.4)]'
                    : 'bg-[#0A0A0A] text-white/70 hover:text-white border-white/10 hover:border-white/20'
                }`}
              >
                <span>{template.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-black/20 text-[#050505]' : 'bg-white/10 text-white/60'
                }`}>
                  {template.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Custom Prompt Input Box */}
        <div className="max-w-3xl mx-auto mb-10">
          <form onSubmit={handleCustomGenerate} className="flex flex-col sm:flex-row gap-2 bg-[#0A0A0A] p-2 rounded-full border border-white/15 focus-within:border-[#00FF41] transition-colors shadow-lg">
            <input
              id="custom-prompt-input"
              type="text"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Digite seu nicho (ex: Hamburgueria artesanal em SP com delivery)..."
              className="flex-1 bg-transparent px-5 py-2.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none font-mono"
            />
            <button
              id="generate-custom-btn"
              type="submit"
              disabled={isGenerating || !customPrompt.trim()}
              className="px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-[#00FF41] hover:bg-white text-[#050505] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,255,65,0.3)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Simular com IA</span>
            </button>
          </form>
        </div>

        {/* Simulator Workbench */}
        <div className="max-w-5xl mx-auto bg-[#0A0A0A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Top Bar with Controls */}
          <div className="bg-[#050505] px-4 sm:px-6 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            
            {/* View Mode Tabs */}
            <div className="flex items-center gap-1 bg-[#0A0A0A] p-1 rounded-full border border-white/10 text-xs font-mono font-bold uppercase">
              <button
                id="tab-preview-btn"
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-colors ${
                  activeTab === 'preview' ? 'bg-[#00FF41] text-[#050505]' : 'text-white/60 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Visual</span>
              </button>
              <button
                id="tab-prompt-btn"
                onClick={() => setActiveTab('prompt')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-colors ${
                  activeTab === 'prompt' ? 'bg-[#00FF41] text-[#050505]' : 'text-white/60 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Prompt</span>
              </button>
              <button
                id="tab-code-btn"
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-colors ${
                  activeTab === 'code' ? 'bg-[#00FF41] text-[#050505]' : 'text-white/60 hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Código</span>
              </button>
            </div>

            {/* Device Switcher & Re-run */}
            <div className="flex items-center gap-3">
              {activeTab === 'preview' && (
                <div className="flex items-center gap-1 bg-[#0A0A0A] p-1 rounded-full border border-white/10 text-white/50">
                  <button
                    onClick={() => setPreviewDevice('desktop')}
                    className={`p-1.5 rounded-full ${previewDevice === 'desktop' ? 'bg-white/10 text-[#00FF41]' : 'hover:text-white'}`}
                    title="Visualização Computador"
                    aria-label="Visualização Computador"
                  >
                    <Laptop className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPreviewDevice('mobile')}
                    className={`p-1.5 rounded-full ${previewDevice === 'mobile' ? 'bg-white/10 text-[#00FF41]' : 'hover:text-white'}`}
                    title="Visualização Celular"
                    aria-label="Visualização Celular"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              )}

              <button
                onClick={runGenerationSimulation}
                disabled={isGenerating}
                className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-[#00FF41] transition-colors px-3 py-1.5 rounded-full border border-white/10 bg-[#0A0A0A]"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin text-[#00FF41]' : ''}`} />
                <span>Regenerar</span>
              </button>
            </div>

          </div>

          {/* Body Content Area */}
          <div className="p-4 sm:p-8 min-h-[420px] flex items-center justify-center bg-[#050505]">
            
            {/* Loading / Generating State */}
            {isGenerating ? (
              <div className="py-12 text-center max-w-md mx-auto space-y-5">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="w-16 h-16 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,65,0.3)]">
                    <Sparkles className="w-8 h-8 text-[#00FF41] animate-spin" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-display font-black uppercase text-white tracking-tight">Criando Site com IA...</h3>
                  <p className="text-xs font-mono text-white/50 mt-1 uppercase tracking-wider">Apenas alguns segundos</p>
                </div>

                {/* Pipeline Step Indicators */}
                <div className="space-y-2 text-left bg-[#0A0A0A] p-4 rounded-xl border border-white/10 text-xs font-mono">
                  <div className={`flex items-center gap-2 ${generationStep >= 1 ? 'text-[#00FF41] font-bold' : 'text-white/40'}`}>
                    <CheckCircle className={`w-4 h-4 ${generationStep >= 1 ? 'text-[#00FF41]' : 'text-white/20'}`} />
                    <span>1. Analisando mercado, personas e nicho</span>
                  </div>
                  <div className={`flex items-center gap-2 ${generationStep >= 2 ? 'text-[#00FF41] font-bold' : 'text-white/40'}`}>
                    <CheckCircle className={`w-4 h-4 ${generationStep >= 2 ? 'text-[#00FF41]' : 'text-white/20'}`} />
                    <span>2. Redigindo copy persuasiva de alta conversão</span>
                  </div>
                  <div className={`flex items-center gap-2 ${generationStep >= 3 ? 'text-[#00FF41] font-bold' : 'text-white/40'}`}>
                    <CheckCircle className={`w-4 h-4 ${generationStep >= 3 ? 'text-[#00FF41]' : 'text-white/20'}`} />
                    <span>3. Harmonizando tipografia e layout responsivo</span>
                  </div>
                  <div className={`flex items-center gap-2 ${generationStep >= 4 ? 'text-[#00FF41] font-bold' : 'text-white/40'}`}>
                    <CheckCircle className={`w-4 h-4 ${generationStep >= 4 ? 'text-[#00FF41]' : 'text-white/20'}`} />
                    <span>4. Compilando código e publicando online</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Generated Result Content */
              <div className="w-full">
                {activeTab === 'preview' && (
                  <div className={`mx-auto transition-all duration-300 ${previewDevice === 'mobile' ? 'max-w-sm' : 'max-w-4xl'}`}>
                    <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl p-6 sm:p-8">
                      
                      {/* Inner Mock Navigation */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#00FF41] animate-ping" />
                          <span className="font-display font-black text-sm uppercase text-white tracking-wider">{selectedTemplate.label}</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#00FF41] bg-[#00FF41]/10 border border-[#00FF41]/30 px-2.5 py-0.5 rounded-full uppercase font-bold">
                          Site Ao Vivo
                        </span>
                      </div>

                      {/* Mock Hero Inside */}
                      <div className="text-center py-4">
                        <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#00FF41] mb-2">
                          {selectedTemplate.category}
                        </span>
                        <h3 className="font-display text-xl sm:text-3xl font-black uppercase text-white leading-snug tracking-tight">
                          {selectedTemplate.previewTitle}
                        </h3>
                        <p className="mt-3 text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
                          {selectedTemplate.previewSubtitle}
                        </p>

                        <div className="mt-6 flex justify-center">
                          <button
                            type="button"
                            className="px-6 py-3 rounded-full font-black uppercase tracking-wider text-xs sm:text-sm transition-all shadow-lg bg-[#00FF41] text-[#050505] hover:bg-white"
                          >
                            {selectedTemplate.ctaText}
                          </button>
                        </div>
                      </div>

                      {/* Feature Pills */}
                      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-6 border-t border-white/10">
                        {selectedTemplate.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-mono text-white/80 bg-[#050505] p-2.5 rounded-lg border border-white/10">
                            <CheckCircle className="w-4 h-4 text-[#00FF41] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                )}

                {activeTab === 'prompt' && (
                  <div className="max-w-3xl mx-auto space-y-4">
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5">
                      <div className="flex items-center justify-between text-xs text-white/50 mb-2 font-mono uppercase tracking-wider">
                        <span className="font-bold text-[#00FF41] flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" /> Prompt Mestre Utilizado:
                        </span>
                        <span>Linguagem Natural</span>
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-white/90 bg-[#050505] p-4 rounded-lg border border-white/10 leading-relaxed">
                        {selectedTemplate.prompt}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#00FF41]/10 border border-[#00FF41]/20 text-xs text-white/80">
                      <strong className="text-[#00FF41] block mb-1 font-mono uppercase tracking-wider">O Segredo Revelado no Treinamento:</strong>
                      Não basta pedir &quot;faça um site&quot;. No curso você recebe nossa biblioteca com <strong>mais de 70 prompts de engenharia reversa</strong> testados para gerar layouts profissionais com alta taxa de conversão em vendas.
                    </div>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden">
                      <div className="bg-[#050505] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                        <span>estrutura-gerada.tsx</span>
                        <span className="text-[#00FF41] font-bold">100% CÓDIGO LIMPO</span>
                      </div>
                      <pre className="p-4 text-xs font-mono text-[#00FF41]/90 overflow-x-auto bg-[#050505] leading-relaxed max-h-72">
                        <code>{selectedTemplate.sampleCode}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Bottom Card Linking to the Purchase */}
          <div className="bg-[#050505] border-t border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm sm:text-base font-display font-black uppercase text-white tracking-tight flex items-center gap-2">
                <span>Quer dominar essa habilidade e criar sites profissionais em minutos?</span>
              </h4>
              <p className="text-xs sm:text-sm text-white/60 mt-0.5">
                No treinamento você aprende o passo a passo completo, da primeira linha de comando à publicação com domínio próprio.
              </p>
            </div>

            <a
              id="simulator-cta-btn"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-black uppercase tracking-wider text-xs sm:text-sm text-[#050505] bg-[#00FF41] hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)]"
            >
              <span>QUERO APRENDER O MÉTODO</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
