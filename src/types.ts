export interface CourseModule {
  id: number;
  title: string;
  duration: string;
  badge: string;
  description: string;
  lessons: string[];
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface DemoPromptTemplate {
  id: string;
  label: string;
  category: string;
  prompt: string;
  previewTitle: string;
  previewSubtitle: string;
  previewTheme: {
    bg: string;
    accent: string;
    buttonColor: string;
  };
  features: string[];
  ctaText: string;
  sampleCode: string;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}
