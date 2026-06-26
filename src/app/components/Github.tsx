import { Github as GithubIcon, ExternalLink } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Github() {
  const { t } = useLanguage();

  const repos = [
    { nameKey: "github_repo1_name", descKey: "github_repo1_desc" },
    { nameKey: "github_repo2_name", descKey: "github_repo2_desc" },
  ];

  return (
    <div className="min-h-[calc(100vh-70px)] bg-black py-8 sm:py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("github_title")}
          </h1>
          <p className="text-sm sm:text-base text-white/70" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("github_subtitle")}
          </p>
        </div>

        {/* Intro Paragraph */}
        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6">
          <p className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("github_intro")}
          </p>
        </div>

        {/* Profile Link */}
        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <GithubIcon className="w-8 h-8 text-white shrink-0" />
            <div>
              <p className="text-white text-sm sm:text-base font-semibold" style={{ fontFamily: "Orbitron, sans-serif" }}>
                TerminalX-Offical
              </p>
              <p className="text-white/60 text-xs sm:text-sm" style={{ fontFamily: "Orbitron, sans-serif" }}>
                github.com/TerminalX-Offical
              </p>
            </div>
          </div>
          <a
            href="https://github.com/TerminalX-Offical"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white border border-[#404040] hover:bg-[#2A2A2A] transition-colors px-4 py-2 rounded text-sm shrink-0"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            {t("github_view_profile")}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Owner Profile Link */}
        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <GithubIcon className="w-8 h-8 text-white shrink-0" />
            <div>
              <p className="text-white/50 text-xs sm:text-xs mb-0.5" style={{ fontFamily: "Orbitron, sans-serif" }}>
                Owner
              </p>
              <p className="text-white text-sm sm:text-base font-semibold" style={{ fontFamily: "Orbitron, sans-serif" }}>
                Mr Erco
              </p>
              <p className="text-white/60 text-xs sm:text-sm" style={{ fontFamily: "Orbitron, sans-serif" }}>
                github.com/Mr-Erco
              </p>
            </div>
          </div>
          <a
            href="https://github.com/Mr-Erco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white border border-[#404040] hover:bg-[#2A2A2A] transition-colors px-4 py-2 rounded text-sm shrink-0"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            View Profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Repositories */}
        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6 mb-6">
          <h2 className="text-base sm:text-lg text-white mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("github_repos_title")}
          </h2>
          <div className="space-y-4">
            {repos.map((repo) => (
              <div
                key={repo.nameKey}
                className="border border-[#2A2A2A] rounded p-4 flex items-start justify-between gap-4 hover:border-[#404040] transition-colors"
              >
                <div>
                  <p className="text-white text-sm sm:text-base mb-1" style={{ fontFamily: "Orbitron, sans-serif" }}>
                    {t(repo.nameKey)}
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "Orbitron, sans-serif" }}>
                    {t(repo.descKey)}
                  </p>
                </div>
                <a
                  href="https://github.com/TerminalX-Offical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors shrink-0 mt-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contribute */}
        <div className="bg-[#1A1A1A] border border-[#404040] rounded p-4 sm:p-6">
          <h2 className="text-base sm:text-lg text-white mb-3 sm:mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("github_contribute_title")}
          </h2>
          <p className="text-sm text-white/80 leading-relaxed mb-4" style={{ fontFamily: "Orbitron, sans-serif" }}>
            {t("github_contribute_p")}
          </p>
          <a
            href="https://github.com/TerminalX-Offical"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white border border-[#404040] hover:bg-[#2A2A2A] transition-colors px-4 py-2 rounded text-sm"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            <GithubIcon className="w-4 h-4" />
            {t("github_get_involved")}
          </a>
        </div>
      </div>
    </div>
  );
}
