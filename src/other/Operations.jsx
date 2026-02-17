import { multiplicarMatrizes, somaMatriz } from "../core/matrix/operations";
import { multiply } from "mathjs";

function Operations({ matrizT1, matrizT2, vetor }) {
    if (!matrizT1) return null;
    if (!matrizT2) return null;
    if (!vetor) return null;

    console.log(multiplicarMatrizes(matrizT2, matrizT1))

    return (
        <div style={{ fontSize: "1.5rem" }}>
            <p>T1(v) = ({multiplicarMatrizes(matrizT1, vetor).join(", ")})</p>
            <p>T2(v) = ({multiplicarMatrizes(matrizT2, vetor).join(", ")})</p>
            <p>(T1 + T2)(v) = ({multiplicarMatrizes(somaMatriz(matrizT1, matrizT2), vetor).join(", ")})</p>
            <p>(T2 ∘ T1)(v) = ({multiplicarMatrizes(multiplicarMatrizes(matrizT2, matrizT1), vetor).join(", ")})</p>
        </ div>
    )
}

export default Operations;
