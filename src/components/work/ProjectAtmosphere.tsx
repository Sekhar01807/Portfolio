"use client";

import React from "react";
import { getProjectTheme } from "@/utils/projectThemes";

interface ProjectAtmosphereProps {
  slug: string;
  title?: string;
}

export const ProjectAtmosphere: React.FC<ProjectAtmosphereProps> = ({ slug }) => {
  const theme = getProjectTheme(slug);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        height: "100%",
        maxHeight: "1200px",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Top Center Atmospheric Aura Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vw",
          maxWidth: "1400px",
          height: "700px",
          background: theme.topAura,
          filter: "blur(20px)",
          opacity: 0.9,
        }}
      />

      {/* Left Orbital Glow */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "5%",
          width: "600px",
          height: "600px",
          background: theme.orbitalLeft,
          filter: "blur(40px)",
          opacity: 0.75,
        }}
      />

      {/* Right Orbital Glow */}
      <div
        style={{
          position: "absolute",
          top: "60px",
          right: "5%",
          width: "600px",
          height: "600px",
          background: theme.orbitalRight,
          filter: "blur(40px)",
          opacity: 0.75,
        }}
      />
    </div>
  );
};

export default ProjectAtmosphere;
