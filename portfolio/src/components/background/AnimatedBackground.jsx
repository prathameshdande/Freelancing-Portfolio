import FloatingBlob from "./FloatingBlob";
import GridPattern from "./GridPattern";
import MouseGlow from "./MouseGlow";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-white dark:bg-[#050816] transition-colors duration-700" />

      {/* Aurora Gradient */}
      <div className="absolute inset-0 aurora-bg" />

      {/* Grid */}
      <GridPattern />

      {/* Mouse Glow */}
      <MouseGlow />

      {/* Floating Blobs */}

      <FloatingBlob
        size={420}
        className="top-[-120px] left-[-120px]"
        lightColor="rgba(139,92,246,.25)"
        darkColor="rgba(124,58,237,.22)"
        duration={20}
      />

      <FloatingBlob
        size={320}
        className="bottom-[-80px] right-[-60px]"
        lightColor="rgba(59,130,246,.20)"
        darkColor="rgba(14,165,233,.18)"
        duration={25}
      />

      <FloatingBlob
        size={260}
        className="top-[40%] left-[45%]"
        lightColor="rgba(236,72,153,.12)"
        darkColor="rgba(236,72,153,.15)"
        duration={18}
      />

      {/* Noise Texture */}

      <div className="absolute inset-0 opacity-[0.03] bg-noise dark:opacity-[0.05]" />
    </div>
  );
}
