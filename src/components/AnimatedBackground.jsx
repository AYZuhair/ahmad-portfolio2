import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styled from "styled-components";

const ParticleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const AnimatedBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <ParticleContainer>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "transparent", // Transparent background
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "bubble", // Particles will bubble on hover
              },
              onClick: {
                enable: true,
                mode: "push", // Particles will push on click
              },
            },
            modes: {
              bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: "#bb86fc", // Purple color for particles
            },
            links: {
              color: "#bb86fc",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outMode: "bounce",
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50, // Number of particles
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle", // Particle shape
            },
            size: {
              value: { min: 1, max: 5 }, // Random size between 1 and 5
            },
          },
          detectRetina: true,
        }}
      />
    </ParticleContainer>
  );
};

export default AnimatedBackground;