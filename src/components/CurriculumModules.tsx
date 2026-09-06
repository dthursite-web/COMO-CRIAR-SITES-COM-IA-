import { useState } from 'react';
import { BookOpen, CheckCircle, ChevronDown, ChevronUp, Clock, Sparkles } from 'lucide-react';
import { COURSE_MODULES } from '../constants';

interface CurriculumModulesProps {
  onOpenConfirmation?: () => void;
}

export default function CurriculumModules({ onOpenConfirmation }: CurriculumModulesProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  const handleCta = () => {
    if (onOpenConfirmation) {
      onOpenConfirmation();
    } else {
      window.location.hash = '#confirmacao';
    }
  };

  return (
    <section id="modulos" className="py-20 bg-[#050505] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono font-bold uppercase tracking-[0.2em] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>GRADE CURRICULAR 100% PRÁTICA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            O QUE VOCÊ VAI <span className="text-transparent text-stroke-neon hover:text-[#00FF41] transition-colors">DOMINAR NA PRÁTICA</span>
          </h2>
          <p className="mt-4 text-white/70 text-sm sm:text-base">
            Direto ao ponto, sem enrolação teórica ou vídeos longos. Você segue o passo a passo ilustrado, copia os prompts validados e cria seu próprio site no mesmo dia.
          </p>
        </div>

        {/* Modules List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {COURSE_MODULES.map((module) => {
            const isExpanded = expandedModule === module.id;
            return (
              <div
                key={module.id}
                className="rounded-2xl border border-white/10 bg-[#0A0A0A] transition-all overflow-hidden"
              >
                {/* Module Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleModule(module.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 focus:outline-none hover:bg-white/5 transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center text-[#00FF41] font-mono font-black text-base shrink-0">
                      0{module.id}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5 font-mono">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-[#00FF41] border border-white/10">
                          {module.badge}
                        </span>
                        <span className="text-xs text-white/50 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {module.duration}
                        </span>
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-black uppercase tracking-tight text-white leading-snug">
                        {module.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-2 rounded-full bg-white/10 text-white/70 shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Lesson Content */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-white/10 bg-[#050505]">
                    <p className="text-xs sm:text-sm text-white/70 mb-4 leading-relaxed">
                      {module.description}
                    </p>

                    <div className="space-y-2.5">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white/40 block">
                        Roteiros Práticos & Prompts Inclusos:
                      </span>
                      {module.lessons.map((lesson, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 bg-[#0A0A0A] p-3 rounded-xl border border-white/10"
                        >
                          <CheckCircle className="w-4 h-4 text-[#00FF41] shrink-0 mt-0.5" />
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Callout below modules */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-full bg-[#0A0A0A] border border-white/15 shadow-xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90 font-mono">
              <Sparkles className="w-4 h-4 text-[#00FF41]" />
              <span>ACESSO VITALÍCIO AO GUIA COMPLETO + PROMPTS MESTRES</span>
            </div>
            <button
              type="button"
              onClick={handleCta}
              className="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#00FF41] hover:bg-white text-[#050505] transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)] cursor-pointer"
            >
              GARANTIR VAGA POR R$ 5,90 →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
