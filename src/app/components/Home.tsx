import { useEffect, useState } from "react";
import im1 from "../../imports/image-removebg-preview.png";
import im2 from "../../imports/im2-removebg-preview.png";
import im3 from "../../imports/im3-removebg-preview.png";
import im4 from "../../imports/im4-removebg-preview.png";
import { useLanguage } from "../i18n/LanguageContext";

const images = [im1, im2, im3, im4];

function ImageSlideshow() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setVisible(true);
      }, 1500);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
      <div
        className="rounded-lg overflow-hidden w-64 sm:w-72 relative"
        style={{ boxShadow: "0 0 40px 10px rgba(0,0,0,0.9)" }}
      >
        <img
          src={images[current]}
          alt="TerminalX screenshot"
          className="w-full h-full object-cover"
          style={{
            opacity: visible ? 0.92 : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, black 100%)",
          }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();

  const features = [
    { titleKey: "home_feature_secure_title", bodyKey: "home_feature_secure_body" },
    { titleKey: "home_feature_packed_title", bodyKey: "home_feature_packed_body" },
    { titleKey: "home_feature_custom_title", bodyKey: "home_feature_custom_body" },
    { titleKey: "home_feature_portable_title", bodyKey: "home_feature_portable_body" },
    { titleKey: "home_feature_ready_title", bodyKey: "home_feature_ready_body" },
    { titleKey: "home_feature_tolerable_title", bodyKey: "home_feature_tolerable_body" },
  ];

  return (
    <div className="min-h-[calc(100vh-70px)] bg-black">
      {/* Hero */}
      <div className="text-center pt-16 pb-10 px-4">
        <p
          className="text-white text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          {t("home_hero")}
        </p>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a
            href="https://github.com/TerminalX-Offical/TerminalX-App-Download/releases/tag/Release"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white text-white px-8 py-3 rounded text-sm hover:bg-white hover:text-black transition-colors"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            {t("home_get_github")}
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=app.terminalx.mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white text-white px-8 py-3 rounded text-sm hover:bg-white hover:text-black transition-colors"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            GET ON PLAY STORE
          </a>
          <a
            href="https://terminalxapk-quickfile-v3.base44.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white text-white px-8 py-3 rounded text-sm hover:bg-white hover:text-black transition-colors"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            {t("home_get_fdroid")}
          </a>
        </div>
      </div>

      {/* Two-column: features left, slideshow right */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-16 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {/* Left — feature list */}
        <div className="flex-1 space-y-6">
          {features.map((f) => (
            <div key={f.titleKey}>
              <p
                className="text-white text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                <span className="font-bold">{t(f.titleKey)}.</span>{" "}
                {t(f.bodyKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Right — image slideshow */}
        <ImageSlideshow />
      </div>
    </div>
  );
}
