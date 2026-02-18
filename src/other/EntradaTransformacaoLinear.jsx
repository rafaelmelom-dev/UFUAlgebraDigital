import { useEffect, useState } from "react";

function EntradaTransformacaoLinear({
  n,
  x,
  y,
  z,
  onChangeX,
  onChangeY,
  onChangeZ,
}) {
  const [isMobile, setIsMobile] = useState(false);

  const style = {
    backgroundColor: "var(--card-bg-color)",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    marginBottom: "5rem",
    borderRadius: "10px",
    border: "1px solid #aaaaaaa0",
  };

  const paragraphStyle = {
    fontSize: isMobile ? "1.5rem" : "2rem",
    fontFamily: "Times New Roman",
    margin: "0",
  };

  const inputStyle = {
    fontSize: isMobile ? "1.5rem" : "2rem",
    width: "10ch",
    boxSizing: "content-box",
    backgroundColor: "var(--input-bg-color)",
    borderRadius: "10px",
    border: "1px solid #aaaaaaa0",
    outline: "none",
    margin: "2px",
  };

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkSize();

    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div style={style}>
      <h1 style={{ fontSize: isMobile ? "1.5rem" : "normal" }}>
        Transformação Linear{" "}
        <span style={{ fontFamily: "Times New Roman", fontWeight: "normal" }}>
          T<sub>{n}</sub>
        </span>
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <p style={paragraphStyle}>
          T<sub>{n}</sub>(x, y, z) = (
        </p>

        <input
          type="text"
          style={inputStyle}
          value={x}
          onChange={(e) => onChangeX(e.target.value)}
        />

        <p style={paragraphStyle}>,</p>

        <input
          type="text"
          style={inputStyle}
          value={y}
          onChange={(e) => onChangeY(e.target.value)}
        />

        <p style={paragraphStyle}>,</p>

        <input
          type="text"
          style={inputStyle}
          value={z}
          onChange={(e) => onChangeZ(e.target.value)}
        />

        <p style={paragraphStyle}>)</p>
      </div>
    </div>
  );
}

export default EntradaTransformacaoLinear;
