import { createContext, useContext, useState, ReactNode } from "react";
import { LangCode, translations } from "./translations";

export const languages = [
  { code: "en" as LangCode, label: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "es" as LangCode, label: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "fr" as LangCode, label: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "de" as LangCode, label: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "ja" as LangCode, label: "日本語", flag: "🇯🇵", dir: "ltr" },
  { code: "zh" as LangCode, label: "中文", flag: "🇨🇳", dir: "ltr" },
  { code: "ar" as LangCode, label: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "pt" as LangCode, label: "Português", flag: "🇧🇷", dir: "ltr" },
];

interface LanguageContextValue {
  lang: (typeof languages)[0];
  setLang: (lang: (typeof languages)[0]) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState(languages[0]);

  const t = (key: string) =>
    translations[lang.code]?.[key] ?? translations["en"][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div dir={lang.dir}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
