import { useState } from "react";
import { multiplicarMatrizes } from "../core/matrix/operations";


export function useLinearAlgebraMult() {
    const [resultados, setResultados] = useState(null);
    const [erro, setErro] = useState(null);

    const processarMatriz = (matrizA, matrizB) => {
        try {
            const matrizResultante = multiplicarMatrizes(matrizA, matrizB);

            if (!matrizResultante) throw new Error('Falha ao multiplicar as matrizes');

            setErro(null);
            setResultados({ matrizResultante })
        } catch (e) {
            setErro(e.message);
            setResultados(null);
        }
    }

    return [processarMatriz, resultados, erro];
}
