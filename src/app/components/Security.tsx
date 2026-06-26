import { useLanguage } from "../i18n/LanguageContext";

export default function Security() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-70px)] bg-black py-8 sm:py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1
            className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            {t("security_title")}
          </h1>
        </div>

        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6">
          <p className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("security_intro")}
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6">
          <h2 className="text-base sm:text-lg text-white mb-3 sm:mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("security_timeline_title")}
          </h2>
          <p className="text-sm text-white leading-relaxed mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("security_timeline_p1")}
          </p>
          <p className="text-sm text-white mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("security_timeline_label")}
          </p>
          <ul className="space-y-2 mb-4">
            {["security_timeline_1", "security_timeline_2", "security_timeline_3"].map((key) => (
              <li key={key} className="flex items-start gap-2 text-sm text-white" style={{ fontFamily: "Orbitron, sans-serif" }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                {t(key)}
              </li>
            ))}
          </ul>
          <p className="text-sm text-white leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("security_timeline_p2")}
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6">
          <h2 className="text-base sm:text-lg text-white mb-3 sm:mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("security_ack_title")}
          </h2>
          <p className="text-sm text-white leading-relaxed mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("security_ack_p1")}
          </p>
          <p className="text-sm text-white mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("security_ack_label")}
          </p>
          <ul className="space-y-2 mb-4">
            {["security_ack_1", "security_ack_2", "security_ack_3", "security_ack_4"].map((key) => (
              <li key={key} className="flex items-start gap-2 text-sm text-white" style={{ fontFamily: "Orbitron, sans-serif" }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                {t(key)}
              </li>
            ))}
          </ul>
          <p className="text-sm text-white leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("security_ack_p2")}
          </p>
        </div>

        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6">
          <h2 className="text-base sm:text-lg text-white mb-3 sm:mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("security_report_title")}
          </h2>
          <p className="text-sm text-white mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("security_report_label")}
          </p>
          <ul className="space-y-2 mb-4">
            {["security_report_1", "security_report_2", "security_report_3", "security_report_4", "security_report_5", "security_report_6"].map((key) => (
              <li key={key} className="flex items-start gap-2 text-sm text-white" style={{ fontFamily: "Orbitron, sans-serif" }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                {t(key)}
              </li>
            ))}
          </ul>
          <p className="text-sm text-white leading-relaxed mb-3" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("security_report_p1")}
          </p>
          <p className="text-sm text-white leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("security_report_p2")}
          </p>
        </div>
      </div>
    </div>
  );
}
