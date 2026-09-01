export interface ProjectTheme {
  name: string;
  badge: string;
  category: string;
  colorStart: string;
  colorMiddle: string;
  colorEnd: string;
  accentColor: string;
  topAura: string;
  orbitalLeft: string;
  orbitalRight: string;
  dotColor: string;
  glowBoxShadow: string;
  tagBackground: string;
  tagBorder: string;
  gradientText: string;
  buttonGradient: string;
}

export const PROJECT_THEMES: Record<string, ProjectTheme> = {
  novacall: {
    name: "NovaCall",
    badge: "WebRTC Video Conferencing • Socket.IO Signaling",
    category: "Real-Time WebRTC Video Platform",
    colorStart: "#00d2ff",
    colorMiddle: "#38bdf8",
    colorEnd: "#0284c7",
    accentColor: "#00d2ff",
    topAura:
      "radial-gradient(ellipse 100% 75% at 50% -12%, rgba(0, 210, 255, 0.45) 0%, rgba(0, 210, 255, 0.25) 40%, rgba(0, 210, 255, 0.08) 70%, transparent 92%)",
    orbitalLeft:
      "radial-gradient(circle 620px at 15% 18%, rgba(0, 210, 255, 0.28), transparent 70%)",
    orbitalRight:
      "radial-gradient(circle 660px at 85% 15%, rgba(0, 210, 255, 0.25), transparent 70%)",
    dotColor: "rgba(0, 210, 255, 0.35)",
    glowBoxShadow: "0 0 50px -8px rgba(0, 210, 255, 0.45)",
    tagBackground: "rgba(0, 210, 255, 0.1)",
    tagBorder: "rgba(0, 210, 255, 0.3)",
    gradientText: "linear-gradient(135deg, #00d2ff 0%, #38bdf8 60%, #0284c7 100%)",
    buttonGradient: "linear-gradient(135deg, #00d2ff 0%, #0284c7 100%)",
  },
  pulsetrade: {
    name: "PulseTrade",
    badge: "Paper-Trading Platform • ACID MongoDB Engine",
    category: "Paper-Trading & Portfolio Platform",
    colorStart: "#00f5a0",
    colorMiddle: "#10b981",
    colorEnd: "#059669",
    accentColor: "#00f5a0",
    topAura:
      "radial-gradient(ellipse 100% 75% at 50% -12%, rgba(0, 245, 160, 0.45) 0%, rgba(0, 245, 160, 0.25) 40%, rgba(0, 245, 160, 0.08) 70%, transparent 92%)",
    orbitalLeft:
      "radial-gradient(circle 620px at 15% 15%, rgba(0, 245, 160, 0.28), transparent 70%)",
    orbitalRight:
      "radial-gradient(circle 660px at 85% 25%, rgba(0, 245, 160, 0.25), transparent 70%)",
    dotColor: "rgba(0, 245, 160, 0.35)",
    glowBoxShadow: "0 0 50px -8px rgba(0, 245, 160, 0.45)",
    tagBackground: "rgba(0, 245, 160, 0.1)",
    tagBorder: "rgba(0, 245, 160, 0.3)",
    gradientText: "linear-gradient(135deg, #00f5a0 0%, #10b981 60%, #059669 100%)",
    buttonGradient: "linear-gradient(135deg, #00f5a0 0%, #10b981 100%)",
  },
  golfforgood: {
    name: "GolfForGood",
    badge: "Charity SaaS • Supabase RLS & Stripe Billing",
    category: "Charity Golf Tournament SaaS",
    colorStart: "#014421",
    colorMiddle: "#02592b",
    colorEnd: "#002813",
    accentColor: "#014421",
    topAura:
      "radial-gradient(ellipse 100% 75% at 50% -12%, rgba(1, 68, 33, 0.7) 0%, rgba(1, 68, 33, 0.45) 38%, rgba(0, 40, 19, 0.2) 70%, transparent 92%)",
    orbitalLeft:
      "radial-gradient(circle 620px at 18% 22%, rgba(1, 68, 33, 0.45), transparent 70%)",
    orbitalRight:
      "radial-gradient(circle 660px at 82% 15%, rgba(1, 68, 33, 0.4), transparent 70%)",
    dotColor: "rgba(1, 68, 33, 0.5)",
    glowBoxShadow: "0 0 50px -8px rgba(1, 68, 33, 0.6)",
    tagBackground: "rgba(1, 68, 33, 0.2)",
    tagBorder: "rgba(1, 68, 33, 0.45)",
    gradientText: "linear-gradient(135deg, #027a3c 0%, #014421 50%, #002813 100%)",
    buttonGradient: "linear-gradient(135deg, #02592b 0%, #014421 100%)",
  },
  schoolsync: {
    name: "SchoolSync",
    badge: "School Management • Gemini 1.5 Flash AI Workers",
    category: "AI Academic Management Platform",
    colorStart: "#6366f1",
    colorMiddle: "#4f46e5",
    colorEnd: "#4338ca",
    accentColor: "#6366f1",
    topAura:
      "radial-gradient(ellipse 100% 75% at 50% -12%, rgba(99, 102, 241, 0.45) 0%, rgba(99, 102, 241, 0.25) 40%, rgba(99, 102, 241, 0.08) 70%, transparent 92%)",
    orbitalLeft:
      "radial-gradient(circle 620px at 15% 18%, rgba(99, 102, 241, 0.28), transparent 70%)",
    orbitalRight:
      "radial-gradient(circle 660px at 85% 15%, rgba(99, 102, 241, 0.25), transparent 70%)",
    dotColor: "rgba(99, 102, 241, 0.35)",
    glowBoxShadow: "0 0 50px -8px rgba(99, 102, 241, 0.45)",
    tagBackground: "rgba(99, 102, 241, 0.1)",
    tagBorder: "rgba(99, 102, 241, 0.3)",
    gradientText: "linear-gradient(135deg, #6366f1 0%, #4f46e5 60%, #4338ca 100%)",
    buttonGradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
  },
  wanderlust: {
    name: "WanderLust",
    badge: "Travel Marketplace • Express 5 MVC & Mapbox",
    category: "Vacation Rental Marketplace",
    colorStart: "#f43f5e",
    colorMiddle: "#e11d48",
    colorEnd: "#be123c",
    accentColor: "#f43f5e",
    topAura:
      "radial-gradient(ellipse 100% 75% at 50% -12%, rgba(244, 63, 94, 0.45) 0%, rgba(244, 63, 94, 0.25) 40%, rgba(244, 63, 94, 0.08) 70%, transparent 92%)",
    orbitalLeft:
      "radial-gradient(circle 620px at 15% 15%, rgba(244, 63, 94, 0.28), transparent 70%)",
    orbitalRight:
      "radial-gradient(circle 660px at 85% 25%, rgba(244, 63, 94, 0.25), transparent 70%)",
    dotColor: "rgba(244, 63, 94, 0.35)",
    glowBoxShadow: "0 0 50px -8px rgba(244, 63, 94, 0.45)",
    tagBackground: "rgba(244, 63, 94, 0.1)",
    tagBorder: "rgba(244, 63, 94, 0.3)",
    gradientText: "linear-gradient(135deg, #f43f5e 0%, #e11d48 60%, #be123c 100%)",
    buttonGradient: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)",
  },
};

export const DEFAULT_THEME: ProjectTheme = {
  name: "Featured Project",
  badge: "Production Software Architecture",
  category: "Full-Stack Software Architecture",
  colorStart: "#3b82f6",
  colorMiddle: "#8b5cf6",
  colorEnd: "#ec4899",
  accentColor: "#3b82f6",
  topAura:
    "radial-gradient(ellipse 100% 75% at 50% -12%, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.28) 42%, rgba(236, 72, 153, 0.14) 68%, transparent 92%)",
  orbitalLeft:
    "radial-gradient(circle 600px at 15% 15%, rgba(59, 130, 246, 0.28), transparent 70%)",
  orbitalRight:
    "radial-gradient(circle 640px at 85% 20%, rgba(139, 92, 246, 0.28), transparent 70%)",
  dotColor: "rgba(59, 130, 246, 0.35)",
  glowBoxShadow: "0 0 40px -8px rgba(59, 130, 246, 0.4)",
  tagBackground: "rgba(59, 130, 246, 0.1)",
  tagBorder: "rgba(59, 130, 246, 0.3)",
  gradientText: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 60%, #ec4899 100%)",
  buttonGradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
};

export function getProjectTheme(slug?: string): ProjectTheme {
  if (!slug) return DEFAULT_THEME;
  const key = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
  for (const themeKey of Object.keys(PROJECT_THEMES)) {
    if (key.includes(themeKey) || themeKey.includes(key)) {
      return PROJECT_THEMES[themeKey];
    }
  }
  return DEFAULT_THEME;
}
