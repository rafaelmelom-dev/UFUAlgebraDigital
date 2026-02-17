import { useState, useCallback } from 'react';
import { encontrarMatrizTransformacao } from '../core/transformations/parser';
import { calcularAutovalores3x3 } from '../core/algebra/eigenvalues';
import { calcularBaseAutovetores, calcularNucleo } from '../core/algebra/eigenvectors';

export function useLinearAlgebraProperties() {
    const [resultados, setResultados] = useState(null);
    const [erro, setErro] = useState(null);

    const processarMatriz = useCallback((funcoesStrings) => {
        try {
            const vars = ['x', 'y', 'z'];
            const matriz = encontrarMatrizTransformacao(funcoesStrings, vars);


            if (!matriz) throw new Error("Erro ao gerar matriz.");

            const autovaloresSet = calcularAutovalores3x3(matriz);
            const autovalores = Array.from(autovaloresSet);
            const baseNucleo = calcularNucleo(matriz);

            const dados = autovalores.map(lambda => {
                return {
                    autovalor: lambda,
                    vetores: calcularBaseAutovetores(matriz, lambda)
                };
            });

            setResultados({ matriz, dados, baseNucleo });
            setErro(null);
        } catch (e) {
            setErro(e.message);
            setResultados(null);
        }
    }, []);

    return [processarMatriz, resultados, erro];
}
