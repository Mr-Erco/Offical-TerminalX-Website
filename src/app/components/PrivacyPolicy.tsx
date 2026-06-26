import { useLanguage } from "../i18n/LanguageContext";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-70px)] bg-black py-8 sm:py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_title")}
          </h1>
        </div>

        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6">
          <p className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_intro")}
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6">
          <h2 className="text-base sm:text-lg text-white mb-3 sm:mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_nocollect_title")}
          </h2>
          <p className="text-sm text-white mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_nocollect_label")}
          </p>
          <ul className="space-y-2 mb-4">
            {["privacy_nocollect_1","privacy_nocollect_2","privacy_nocollect_3","privacy_nocollect_4","privacy_nocollect_5","privacy_nocollect_6","privacy_nocollect_7"].map((key) => (
              <li key={key} className="flex items-start gap-2 text-sm text-white" style={{ fontFamily: "Orbitron, sans-serif" }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                {t(key)}
              </li>
            ))}
          </ul>
          <p className="text-sm text-white leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_nocollect_p")}
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6">
          <h2 className="text-base sm:text-lg text-white mb-3 sm:mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_local_title")}
          </h2>
          <p className="text-sm text-white leading-relaxed mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_local_p1")}
          </p>
          <p className="text-sm text-white leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_local_p2")}
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6">
          <h2 className="text-base sm:text-lg text-white mb-3 sm:mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_network_title")}
          </h2>
          <p className="text-sm text-white mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_network_label")}
          </p>
          <ul className="space-y-2 mb-4">
            {["privacy_network_1","privacy_network_2","privacy_network_3"].map((key) => (
              <li key={key} className="flex items-start gap-2 text-sm text-white" style={{ fontFamily: "Orbitron, sans-serif" }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                {t(key)}
              </li>
            ))}
          </ul>
          <p className="text-sm text-white leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_network_p")}
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6">
          <h2 className="text-base sm:text-lg text-white mb-3 sm:mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_crash_title")}
          </h2>
          <p className="text-sm text-white leading-relaxed mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_crash_p1")}
          </p>
          <p className="text-sm text-white leading-relaxed mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_crash_p2")}
          </p>
          <p className="text-sm text-white leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_crash_p3")}
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6">
          <h2 className="text-base sm:text-lg text-white mb-3 sm:mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_third_title")}
          </h2>
          <p className="text-sm text-white leading-relaxed mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_third_p1")}
          </p>
          <p className="text-sm text-white leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_third_p2")}
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6">
          <h2 className="text-base sm:text-lg text-white mb-3 sm:mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_children_title")}
          </h2>
          <p className="text-sm text-white leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_children_p")}
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6">
          <h2 className="text-base sm:text-lg text-white mb-3 sm:mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_changes_title")}
          </h2>
          <p className="text-sm text-white leading-relaxed mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_changes_p1")}
          </p>
          <p className="text-sm text-white leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("privacy_changes_p2")}
          </p>
        </div>
      </div>
    </div>
  );
}
