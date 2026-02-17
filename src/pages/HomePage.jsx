import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from '../other/Header';
import EntradaTransformacaoLinear from "../other/EntradaTransformacaoLinear";
import CenteredContainer from "../other/CenteredContainer";
import ContentBlock from "../other/ContentBlock";

function HomePage() {
    const [T1At0, setT1At0] = useState("");
    const [T1At1, setT1At1] = useState("");
    const [T1At2, setT1At2] = useState("");
    const [T2At0, setT2At0] = useState("");
    const [T2At1, setT2At1] = useState("");
    const [T2At2, setT2At2] = useState("");
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/dashboard', {
            state: {
                t1: [T1At0, T1At1, T1At2],
                t2: [T2At0, T2At1, T2At2]
            }
        });
    }

    return (
        <>
            <Header />
            <CenteredContainer>
                <ContentBlock>

                    <div style={{ textAlign: "center" }}>
                        <h1>Definindo as transformações</h1>
                        <h3 style={{ marginTop: "0", fontWeight: "normal" }}>Entre com as expressões algébricas para T<sub>1</sub> e T<sub>2</sub>. O sistema irá extrair as matrizes automaticamente.</h3>
                    </div>

                    <EntradaTransformacaoLinear n={1} x={T1At0} y={T1At1} z={T1At2} onChangeX={setT1At0} onChangeY={setT1At1} onChangeZ={setT1At2}></EntradaTransformacaoLinear>
                    <EntradaTransformacaoLinear n={2} x={T2At0} y={T2At1} z={T2At2} onChangeX={setT2At0} onChangeY={setT2At1} onChangeZ={setT2At2}></EntradaTransformacaoLinear>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div>
                            <button style={{ margin: "0.5rem" }} onClick={() => { setT1At0('2x + y'); setT1At1('2y + z'); setT1At2('2z + x'); }}>Carregar exemplo T<sub>1</sub></button>
                            <button style={{ margin: "0.5rem" }} onClick={() => { setT2At0('-y'); setT2At1('-z'); setT2At2('-x') }}>Carregar exemplo T<sub>2</sub></button>
                            <button style={{ margin: "0.5rem" }} onClick={handleRedirect} className="primary">Calcular</button>
                        </div>
                    </div>
                </ContentBlock>
            </CenteredContainer >
        </>
    )
}

export default HomePage;
