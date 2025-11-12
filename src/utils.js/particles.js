import Particles from "@tsparticles/react";
import { useCallback, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim"; // carga la versión ligera del motor

const ParticlesComponent = ({ id }) => {
  // Inicializa el motor de partículas una sola vez
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Se ejecuta cuando las partículas se cargan (puedes dejarlo vacío)
  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded:", container);
  }, []);

  // Configuración visual de las partículas
  const options = useMemo(
    () => ({
      background: { color: { value: "black" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: "#FFFFFF" },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true }, value: 150 },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id={id ?? "tsparticles"}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesComponent;
