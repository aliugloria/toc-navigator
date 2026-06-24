import {
  GrainGradient,
  SimplexNoise,
  StaticMeshGradient,
  Swirl,
  Warp,
} from "@paper-design/shaders-react";

export const GrainGradients = () => {
  return (
    <div className="h-6 w-6 rounded-full overflow-hidden">
      <GrainGradient
        style={{ width: "100%", height: "100%" }}
        colors={["#7300ff", "#eba8ff", "#00bfff", "#2b00ff"]}
        colorBack="#000000"
        softness={0.5}
        intensity={0.5}
        noise={0.25}
        shape="corners"
        speed={1}
      />
    </div>
  );
};

export const MeshGradients = () => {
  return (
    <div className="h-6 w-6 rounded-full overflow-hidden">
      <StaticMeshGradient
        width={1280}
        style={{ width: "100%", height: "100%" }}
        colors={["#ffad0a", "#6200ff", "#e2a3ff", "#ff99fd"]}
        positions={2}
        waveX={1}
        waveXShift={0.6}
        waveY={1}
        waveYShift={0.21}
        mixing={0.93}
        grainMixer={0}
        grainOverlay={0}
        rotation={270}
      />
    </div>
  );
};

export const WarpGradient = () => {
  return (
    <div className="h-6 w-6 rounded-full overflow-hidden">
      <Warp
        style={{ width: "100%", height: "100%" }}
        colors={["#121212", "#9470ff", "#121212", "#8838ff"]}
        proportion={0.45}
        softness={1}
        distortion={0.25}
        swirl={0.8}
        swirlIterations={10}
        shape="checks"
        shapeScale={0.1}
        speed={1}
      />
    </div>
  );
};

export const SimplexNoiseGradient = () => {
  return (
    <div className="h-8 w-8 rounded-full overflow-hidden">
      <SimplexNoise
        style={{ width: "100%", height: "100%" }}
        colors={["#4449cf", "#ffd1e0", "#f94346", "#ffd36b", "#ffffff"]}
        stepsPerColor={2}
        softness={0}
        speed={5}
        scale={0.1}
      />
    </div>
  );
};



export const SwirlGradient = () => {
  return (
    <div className="h-10 w-10 rounded-md overflow-hidden">
      <Swirl
        style={{ width: "100%", height: "100%" }}
        colors={["#ffd1d1", "#ff8a8a", "#660000"]}
        colorBack="#330000"
        bandCount={4}
        twist={0.1}
        center={0.2}
        proportion={0.5}
        softness={0}
        noise={0.2}
        noiseFrequency={0.4}
        speed={2}
      />
    </div>
  );
};