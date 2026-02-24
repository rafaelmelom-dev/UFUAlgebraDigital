import { useLocation, useNavigate } from "react-router-dom";
import { useLinearAlgebraProperties } from "../hooks/useLinearAlgebraProperties";
import { useEffect, useState } from "react";
import Header from "../other/Header";
import MatrixDisplay from "../other/MatrixDisplay";
import Card from "../other/Card";
import Properties from "../other/Properties";
import Operations from "../other/Operations";
import { multiplicarMatrizes, somaMatriz } from "../core/matrix/operations";

function Dashboard() {
    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(false);
    const [toggleMatrix, setToggleMatrix] = useState(true);

    const location = useLocation();
    const { t1, t2 } = location.state || {};

    const [a, setA] = useState(null);
    const [b, setB] = useState(null);
    const [c, setC] = useState(null);

    const [findPropertiesT1, propertiesT1] = useLinearAlgebraProperties();
    const [findPropertiesT2, propertiesT2] = useLinearAlgebraProperties();

    const back = () => {
        navigate(-1);
    };

    // ========= style ================

    const inputStyle = {
        textAlign: "center",
        fontSize: "1.5rem",
        lineHeight: "1.5",
        width: "10ch",
        boxSizing: "content-box",
        backgroundColor: "var(--input-bg-color)",
        borderRadius: "5px",
        border: "1px solid #aaaaaaa0",
        outline: "none",
    };

    useEffect(() => {
        const find = () => {
            findPropertiesT1(t1);
        };

        find();
    }, [t1]);

    useEffect(() => {
        const find = () => {
            findPropertiesT2(t2);
        };

        find();
    }, [t2]);

    useEffect(() => {
        const checkSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkSize();

        window.addEventListener("resize", checkSize);

        return () => window.removeEventListener("resize", checkSize);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Header />
            <div style={{ display: "flex", flexWrap: "wrap", flexGrow: "1" }}>
                <div
                    style={{
                        backgroundColor: "var(--card-bg-color)",
                        padding: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: isMobile ? "100%" : "",
                    }}
                >
                    <button style={{ alignSelf: "flex-start" }} onClick={back}>
                        ← Voltar
                    </button>
                    <div
                        style={{
                            flexGrow: "1",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <p style={{ fontSize: "1.5rem", textAlign: "center" }}>Vetor (v)</p>
                        <div style={{ marginBottom: "0.25rem" }}>
                            <span style={{ fontSize: "2rem", paddingRight: "1rem" }}>
                                a =
                            </span>{" "}
                            <input
                                style={inputStyle}
                                value={a}
                                onChange={(e) => {
                                    setA(e.target.value);
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "0.25rem" }}>
                            <span style={{ fontSize: "2rem", paddingRight: "1rem" }}>
                                b =
                            </span>{" "}
                            <input
                                style={inputStyle}
                                value={b}
                                onChange={(e) => {
                                    setB(e.target.value);
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "0.25rem" }}>
                            <span style={{ fontSize: "2rem", paddingRight: "1rem" }}>
                                c =
                            </span>{" "}
                            <input
                                style={inputStyle}
                                value={c}
                                onChange={(e) => {
                                    setC(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: "1",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: "2rem",
                            padding: "1rem",
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                gap: "2rem",
                                flexDirection: "column",
                                flexGrow: "1",
                            }}
                        >
                            <Card
                                title="Matrizes de Transformação"
                                style={{ flexDirection: "column", flexGrow: "1" }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: isMobile ? "column" : "row",
                                        flexGrow: "1",
                                        gap: isMobile ? "2rem" : "0",
                                        // flexWrap: "wrap",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirecion: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            padding: "2rem",
                                        }}
                                    >
                                        <button onClick={() => setToggleMatrix(!toggleMatrix)}>
                                            Trocar ↺
                                        </button>
                                    </div>
                                    {toggleMatrix ? (
                                        <>
                                            <MatrixDisplay
                                                matrix={propertiesT1?.matriz}
                                                name={
                                                    <>
                                                        T<sub>1</sub>
                                                    </>
                                                }
                                            />
                                            <MatrixDisplay
                                                matrix={propertiesT2?.matriz}
                                                name={
                                                    <>
                                                        T<sub>2</sub>
                                                    </>
                                                }
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <MatrixDisplay
                                                matrix={somaMatriz(
                                                    propertiesT1?.matriz,
                                                    propertiesT2?.matriz,
                                                )}
                                                name={
                                                    <>
                                                        (T<sub>1</sub> + T<sub>2</sub>)
                                                    </>
                                                }
                                            />
                                            <MatrixDisplay
                                                matrix={multiplicarMatrizes(
                                                    propertiesT2?.matriz,
                                                    propertiesT1?.matriz,
                                                )}
                                                name={
                                                    <>
                                                        (T<sub>2</sub> ∘ T<sub>1</sub>)
                                                    </>
                                                }
                                            />
                                        </>
                                    )}
                                </div>
                            </Card>
                            {
                                isMobile ? (

                                    <Card title="Resultados e Operações" style={{ flexGrow: "1" }}>
                                        <Operations
                                            matrizT1={propertiesT1?.matriz}
                                            matrizT2={propertiesT2?.matriz}
                                            vetor={[[a], [b], [c]]}
                                        ></Operations>
                                    </Card>
                                ) : (

                                    <Card
                                        title={
                                            <>
                                                Propriedades e Núcleo de T<sub>1</sub>
                                            </>
                                        }
                                        style={{ flexGrow: "1" }}
                                    >
                                        <Properties
                                            dados={propertiesT1?.dados}
                                            baseNucleo={propertiesT1?.baseNucleo}
                                            n="1"
                                        ></Properties>
                                    </Card>
                                )
                            }
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: "2rem",
                                flexDirection: "column",
                                flexGrow: "1",
                            }}
                        >

                            {isMobile ? (

                                <Card
                                    title={
                                        <>
                                            Propriedades e Núcleo de T<sub>1</sub>
                                        </>
                                    }
                                    style={{ flexGrow: "1" }}
                                >
                                    <Properties
                                        dados={propertiesT1?.dados}
                                        baseNucleo={propertiesT1?.baseNucleo}
                                        n="1"
                                    ></Properties>
                                </Card>
                            ) : (

                                <Card title="Resultados e Operações" style={{ flexGrow: "1" }}>
                                    <Operations
                                        matrizT1={propertiesT1?.matriz}
                                        matrizT2={propertiesT2?.matriz}
                                        vetor={[[a], [b], [c]]}
                                    ></Operations>
                                </Card>
                            )}
                            <Card
                                title={
                                    <>
                                        Propriedades e Núcleo de T<sub>2</sub>
                                    </>
                                }
                                style={{ flexGrow: "1" }}
                                n="2"
                            >
                                <Properties
                                    dados={propertiesT2?.dados}
                                    baseNucleo={propertiesT2?.baseNucleo}
                                    n="2"
                                ></Properties>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
