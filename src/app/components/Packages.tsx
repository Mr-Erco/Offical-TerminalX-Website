import { useLanguage } from "../i18n/LanguageContext";

export default function Packages() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-70px)] bg-black py-8 sm:py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1
            className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            {t("packages_title")}
          </h1>
        </div>
      </div>
    </div>
  );
}
