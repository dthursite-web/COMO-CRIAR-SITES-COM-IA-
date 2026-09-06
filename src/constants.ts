import { CourseModule, FaqItem, DemoPromptTemplate } from './types';

export const CHECKOUT_URL = "https://pay.cakto.com.br/d874g3f_1080971";

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    title: "Módulo 1: O Despertar da IA para Web",
    duration: "1h 45min",
    badge: "Fundamentos & Ferramentas",
    description: "Conheça o ecossistema das IAs mais poderosas para desenvolvimento web e aprenda a configurar seu ambiente de trabalho sem gastar nada.",
    lessons: [
      "Visão geral das principais IAs: ChatGPT, Claude, Gemini, v0, Bolt e Lovable",
      "Como formular prompts com engenharia reversa para websites perfeitos",
      "Configuração de conta e atalhos de produtividade 10x",
      "Evitando as armadilhas clássicas que fazem iniciantes perderem tempo"
    ]
  },
  {
    id: 2,
    title: "Módulo 2: Design, UI/UX e Copywriting Hipnótico",
    duration: "2h 10min",
    badge: "Design & Conversão",
    description: "Mesmo que você nunca tenha desenhado um botão na vida, a IA vai criar paletas harmoniosas, tipografia de luxo e textos que vendem.",
    lessons: [
      "Psicologia das cores aplicada com geradores de paleta inteligentes",
      "Técnicas de Copywriting AIDA & PAS geradas por prompts mestres",
      "Como estruturar hierarquia visual para guiar o olho do visitante até a compra",
      "Criação de imagens profissionais e mockups hiper-realistas sem custo"
    ]
  },
  {
    id: 3,
    title: "Módulo 3: Criando Landing Pages que Vendem em Minutos",
    duration: "2h 30min",
    badge: "Na Prática",
    description: "Passo a passo na tela: do rascunho mental ao site completo com hero section, provas sociais, tabelas de preço e botões de alta conversão.",
    lessons: [
      "Construindo uma Landing Page de captura e vendas do zero ao vivo",
      "Integração de botões de WhatsApp, checkout (Cakto, Kiwify, Hotmart, Stripe) e formulários",
      "Adaptação responsiva instantânea: visual perfeito no celular e no computador",
      "Inserção de elementos interativos e micro-animações que impressionam"
    ]
  },
  {
    id: 4,
    title: "Módulo 4: Sites Institucionais, Catálogos & E-commerce",
    duration: "2h 15min",
    badge: "Projetos Avançados",
    description: "Aprenda a construir múltiplos tipos de sites de alto valor de mercado para atender empresas locais, advogados, clínicas e lojas.",
    lessons: [
      "Sites multi-páginas institucionais para empresas e profissionais liberais",
      "Catálogos virtuais e cardápios interativos com pedidos no WhatsApp",
      "Portfólios modernos para fotógrafos, arquitetos e criadores",
      "Otimização de SEO para colocar o site na primeira página do Google"
    ]
  },
  {
    id: 5,
    title: "Módulo 5: Hospedagem Grátis, Domínio Próprio e Publicação",
    duration: "1h 30min",
    badge: "Publicação & Domínio",
    description: "Aprenda a colocar qualquer site no ar na internet com endereço profissional (.com.br ou .com) e certificado SSL de segurança gratuito.",
    lessons: [
      "Hospedagem profissional com zero mensalidade (Vercel, Netlify, Cloudflare)",
      "Como registrar e apontar domínios no Registro.br e Namecheap",
      "Certificado de segurança SSL (o cadeado verde) configurado em 3 cliques",
      "Testes de velocidade e pontuação 95+ no Google PageSpeed Insights"
    ]
  },
  {
    id: 6,
    title: "Módulo 6: Captação de Clientes — Como Encontrar e Atender Empresas Locais",
    duration: "2h 00min",
    badge: "Clientes & Negócios",
    description: "Aprenda como identificar estabelecimentos que precisam de presença online e como apresentar seus serviços de forma profissional e ética.",
    lessons: [
      "Onde encontrar empresas e profissionais liberais que ainda não possuem site moderno",
      "Modelos de mensagem e roteiros de abordagem respeitosos para WhatsApp e Instagram",
      "Como apresentar sua proposta comercial com segurança e transparência",
      "Como prestar suporte e manutenção básica para clientes satisfeitos"
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "O que exatamente é o produto e o que eu recebo?",
    answer: "O 'Guia Criando Sites com Inteligência Artificial' é um material prático e 100% digital passo a passo com biblioteca completa de prompts validados. Não há vídeos longos ou cansativos: você recebe tutoriais objetivos direto ao ponto para planejar, gerar, personalizar e publicar sites profissionais na internet sem precisar programar, além de roteiros para captar e atender clientes locais."
  },
  {
    id: 2,
    question: "O valor é realmente de apenas R$ 5,90? Tem mensalidade?",
    answer: "Sim! O valor promocional é de taxa única de apenas R$ 5,90. Não existe nenhuma mensalidade, assinatura ou cobrança oculta futura. Você paga uma única vez e garante acesso vitalício ao treinamento e a todas as futuras atualizações."
  },
  {
    id: 3,
    question: "Como e quando recebo o meu acesso?",
    answer: "O acesso é IMEDIATO! O processamento é realizado pela plataforma segura Cakto. Pagamentos via PIX têm liberação instantânea e via cartão de crédito levam cerca de 2 minutos. Os dados de acesso e link do material são enviados diretamente para o e-mail que você cadastrar no checkout."
  },
  {
    id: 4,
    question: "Quais são as formas de pagamento aceitas?",
    answer: "O pagamento é processado pela Cakto com ambiente criptografado e seguro. Você pode pagar via PIX (código copia e cola / QR Code com liberação na hora), Cartão de Crédito (Visa, Mastercard, Elo, Hipercard, Amex) ou Boleto Bancário."
  },
  {
    id: 5,
    question: "Preciso saber programar ou ter conhecimento prévio em tecnologia?",
    answer: "Não! O método foi estruturado especialmente para quem está começando do zero absoluto. A Inteligência Artificial cuida de toda a parte técnica e códigos complexos. Você só precisa seguir o passo a passo e copiar os comandos mestres (prompts) que entregamos prontos."
  },
  {
    id: 6,
    question: "Qual o canal de suporte caso eu tenha dúvidas durante a aplicação do método?",
    answer: "Oferecemos suporte oficial por e-mail através do endereço dthursite@gmail.com. Nosso horário de atendimento é de segunda a sexta-feira, das 09h às 18h, com prazo de resposta em até 24 horas úteis."
  },
  {
    id: 7,
    question: "Como funciona a política de reembolso e garantia de 7 dias?",
    answer: "Você tem 7 dias corridos de garantia incondicional (conforme o Art. 49 do Código de Defesa do Consumidor). Se por qualquer motivo você não ficar 100% satisfeito com o treinamento, basta solicitar o reembolso na Cakto ou nos enviar um e-mail para dthursite@gmail.com que devolvemos 100% do valor pago sem burocracia."
  },
  {
    id: 8,
    question: "As ferramentas de Inteligência Artificial ensinadas são gratuitas?",
    answer: "Sim! Durante todo o curso ensinamos como utilizar as versões gratuitas das ferramentas (como ChatGPT, Claude, Lovable, v0, etc.) e plataformas de hospedagem sem custo (como Vercel e Netlify), para que você possa criar e publicar sites sem precisar gastar dinheiro extra."
  }
];

export const DEMO_PROMPTS: DemoPromptTemplate[] = [
  {
    id: "clinic",
    label: "Clínica & Odonto",
    category: "Saúde & Bem-Estar",
    prompt: "Crie uma Landing Page moderna e acolhedora para uma clínica odontológica de estética em São Paulo, com agendamento via WhatsApp, galeria de tratamentos e localização interativa.",
    previewTitle: "Sorrisos Radiantes com Tecnologia & Cuidado Humanizado",
    previewSubtitle: "Transforme sua autoestima com facetas, clareamento a laser e ortodontia invisível. Atendimento VIP no Jardins.",
    previewTheme: {
      bg: "from-cyan-950/80 to-slate-950",
      accent: "text-cyan-400",
      buttonColor: "bg-cyan-500 hover:bg-cyan-400 text-slate-950"
    },
    features: [
      "Botão flutuante integrado ao WhatsApp da clínica",
      "Galeria interativa com fotos reais dos tratamentos",
      "Mapa interativo com rota e horários de funcionamento",
      "Formulário rápido de pré-avaliação sem filas"
    ],
    ctaText: "Agendar Avaliação sem Custo",
    sampleCode: `// Prompt IA Gerado em 12 segundos:
<section className="bg-gradient-to-b from-cyan-950 to-slate-900 py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-semibold">
      ✨ Excelência em Estética Dental
    </span>
    <h1 className="text-4xl font-bold mt-4 text-white">Sorrisos Radiantes com Cuidado Humanizado</h1>
    <a href="#agendamento" className="inline-block mt-8 px-8 py-3 bg-cyan-500 text-black font-bold rounded-lg shadow-lg">
      Agendar Avaliação
    </a>
  </div>
</section>`
  },
  {
    id: "advocacia",
    label: "Escritório de Advocacia",
    category: "Serviços Jurídicos",
    prompt: "Gere uma página institucional sofisticada em tom escuro para advocacia empresarial e tributária, destacando histórico de causas ganhas e consulta confidencial.",
    previewTitle: "Segurança Jurídica e Estratégia para o Crescimento da sua Empresa",
    previewSubtitle: "Mais de 15 anos defendendo o patrimônio e reduzindo riscos tributários para médias e grandes corporações.",
    previewTheme: {
      bg: "from-amber-950/70 to-slate-950",
      accent: "text-amber-400",
      buttonColor: "bg-amber-500 hover:bg-amber-400 text-slate-950"
    },
    features: [
      "Layout sóbrio e autoridade executiva imediata",
      "Seção com métricas comprovadas (R$ 80M+ recuperados)",
      "Canal criptografado de contato direto com sócio sênior",
      "Publicações de artigos jurídicos com SEO para Google"
    ],
    ctaText: "Solicitar Consulta Sigilosa",
    sampleCode: `// Prompt IA Gerado em 9 segundos:
<div className="border border-amber-500/20 bg-slate-900/90 p-8 rounded-2xl">
  <h2 className="text-3xl font-serif text-amber-300">Defesa Patrimonial de Alta Complexidade</h2>
  <p className="text-slate-300 mt-2">Atuação cirúrgica em contencioso estratégico e governança tributária.</p>
  <button className="mt-6 bg-amber-500 hover:bg-amber-400 text-black font-medium px-6 py-3 rounded-md">
    Falar com Especialista
  </button>
</div>`
  },
  {
    id: "fitness",
    label: "Personal & Academia",
    category: "Fitness & Nutrição",
    prompt: "Faça uma página de alta conversão para consultoria fitness online, focada em queima de gordura e ganho de massa, com contador regressivo e prova social.",
    previewTitle: "Conquiste o Melhor Físico da Sua Vida em 90 Dias Sem Dietas Malucas",
    previewSubtitle: "Treinos personalizados no seu celular + plano alimentar adaptado à sua rotina com acompanhamento diário via aplicativo.",
    previewTheme: {
      bg: "from-rose-950/80 to-slate-950",
      accent: "text-rose-400",
      buttonColor: "bg-rose-500 hover:bg-rose-400 text-white"
    },
    features: [
      "Calculadora rápida de taxa metabólica integrada",
      "Feed dinâmico com fotos de transformação real",
      "Módulos do protocolo exibidos de forma interativa",
      "Checkout integrado com pagamento em 1 clique"
    ],
    ctaText: "Garantir Vaga no Desafio 90D",
    sampleCode: `// Prompt IA Gerado em 14 segundos:
<div className="bg-rose-950/40 border border-rose-500/30 p-6 rounded-xl">
  <div className="flex items-center gap-2 text-rose-400 font-bold">
    <Flame className="w-5 h-5" /> PROTOCOLO METABÓLICO ACELERADO
  </div>
  <p className="text-2xl font-black text-white mt-3">Treinos de 35 minutos sem sair de casa</p>
  <button className="w-full bg-rose-600 text-white font-bold py-4 rounded-xl shadow-rose-600/30 shadow-lg">
    COMEÇAR AGORA
  </button>
</div>`
  },
  {
    id: "burger",
    label: "Hamburgueria Gourmet",
    category: "Gastronomia & Delivery",
    prompt: "Construa um cardápio digital irresistível com fotos apetitosas de burgers artesanais, cálculo automático de frete e envio direto do pedido para o WhatsApp.",
    previewTitle: "Os Melhores Burgers Artesanais Defumados na Brasa da Sua Cidade",
    previewSubtitle: "Pão brioche quentinho, blend de Angus 180g selado no ponto perfeito e queijo derretido de verdade. Peça agora!",
    previewTheme: {
      bg: "from-orange-950/80 to-slate-950",
      accent: "text-orange-400",
      buttonColor: "bg-orange-500 hover:bg-orange-400 text-slate-950"
    },
    features: [
      "Cardápio com fotos dinâmicas e adicionais selecionáveis",
      "Botão de compra direta: 'Pedir pelo WhatsApp em 1 clique'",
      "Aviso de tempo estimado de entrega em tempo real",
      "Cupom de primeira compra aplicado automaticamente"
    ],
    ctaText: "Ver Cardápio & Fazer Pedido",
    sampleCode: `// Prompt IA Gerado em 8 segundos:
<div className="grid md:grid-cols-2 gap-4">
  <div className="bg-slate-900 border border-orange-500/20 rounded-xl p-4">
    <h3 className="text-xl font-bold text-orange-400">Monster Cheddar Bacon</h3>
    <p className="text-sm text-slate-400">Pão australiano, 200g angus, cebola caramelizada e bacon crocante.</p>
    <div className="mt-4 flex justify-between items-center">
      <span className="text-lg font-bold text-white">R$ 38,90</span>
      <button className="bg-orange-500 px-4 py-2 rounded-lg text-black font-semibold">+ Pedir</button>
    </div>
  </div>
</div>`
  }
];
