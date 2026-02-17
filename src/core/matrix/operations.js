import { validarMatrizRetangular } from "./validation.js";

export function somaMatriz(matrizA, matrizB) {
  if (!validarMatrizRetangular(matrizA) || !validarMatrizRetangular(matrizB)) {
    return null;
  }

  const mMatrizA = matrizA.length;
  const nMatrizA = matrizA[0].length;

  const mMatrizB = matrizB.length;
  const nMatrizB = matrizB[0].length;

  if (mMatrizA != mMatrizB || nMatrizA != nMatrizB) {
    return null;
  }

  const matrizC = matrizA.map((linha, linhaIndice) => {
    return linha.map((elemento, colunaIndice) => {
      return elemento + matrizB[linhaIndice][colunaIndice];
    });
  });

  return matrizC;
}

export function multiplicarMatrizes(matrizA, matrizB) {
  if (!validarMatrizRetangular(matrizA) || !validarMatrizRetangular(matrizB)) {
    return null;
  }

  const mMatrizA = matrizA.length;
  const nMatrizA = matrizA[0].length;

  const mMatrizB = matrizB.length;
  const nMatrizB = matrizB[0].length;

  if (nMatrizA != mMatrizB) {
    return null;
  }

    const matrizC = matrizA.map((linha, linhaIndice) => {
        return matrizB[0].map((_, colunaIndice) => {
            return linha.reduce((soma, elemento, elementoIndice) => {
                return soma + elemento * matrizB[elementoIndice][colunaIndice];
            }, 0)
        })
    })

    console.log("m", matrizC);

  return matrizC;
}
