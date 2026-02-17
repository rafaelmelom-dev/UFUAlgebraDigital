import { useState } from "react";
import { somaMatriz } from "../core/matrix/operations";


export function useLinearAlgebraAdd() {
    const [resultados, setResultados] = useState(null);
    const [erro, setErro] = useState(null);

    const processarMatriz = (matrizA, matrizB) => {
        try {
            const matrizResultante = soma(matrizA, matrizB);

            if (!matrizResultante) throw new Error('Falha ao somar as matrizes');

            setErro(null);
            setResultados({ matrizResultante })
        } catch (e) {
            setErro(e.message);
            setResultados(null);
        }
    }

    return [processarMatriz, resultados, erro];
}
