import React from "react";

const Ima = () => {
  const containerStyles = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  };

  const imageStyles = {
    width: "100%",
    maxWidth: "100%",
    height: "auto",
  };

  const textStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "120px", // Tamaño de fuente predeterminado
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const responsiveTextStyles = {
    fontSize: "60px", // Ajusta el tamaño del texto para tamaños de pantalla pequeños
  };

  return (
    <div style={containerStyles}>
      <div style={{ width: "100%", maxWidth: "100%", height: "auto", position: "relative" }}>
        <img
          style={imageStyles}
          alt="NextUI hero Image with delay"
          src="3.jpg"
        />
        <div style={{ ...textStyles, ...responsiveTextStyles }}>
          INCLUYE UN TEXTO
        </div>
      </div>
    </div>
  );
};

export default Ima;
