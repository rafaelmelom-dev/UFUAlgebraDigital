import { validarMatrizRetangular } from "../matrix/validation.js";
import { escalonar } from "../matrix/gauss.js";

export function extrairBaseDaMatriz(matriz) {
  if (!validarMatrizRetangular(matriz)) {
    return null;
  }

  const m = matriz.length;
  const n = matriz[0].length;

  const colunasPivos = new Array();
  const colunasLivres = new Array();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matriz[i][j] != 0) {
        colunasPivos.push(j);
        break;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!colunasPivos.includes(i)) colunasLivres.push(i);
  }

  // caso não haja colunas livres, a base é nula
  if (colunasLivres.length == 0) return new Array(new Array(n).fill(0));

  const base = colunasLivres.map((indiceLivre) => {
    const vetor = new Array(n).fill(0);
    vetor[indiceLivre] = 1;

    colunasPivos.forEach((indicePivo, indiceLinha) => {
      vetor[indicePivo] = -matriz[indiceLinha][indiceLivre];
    });

    return vetor;
  });
    console.log(base);

  return base;
}

export function calcularBaseAutovetores(matriz, autovalor) {
  if (!validarMatrizRetangular(matriz)) {
    return null;
  }

  // deep copy, para evitar de mudar algum elemento da matriz fora da função
  const matrizCopia = matriz.map((linha) => [...linha]);

  const m = matrizCopia.length;
  const n = matrizCopia[0].length;

  // como um autovetor está associado a uma transformação que leva a ela mesma,
  // a matriz tem que ser quadrada
  if (m != n) return null;

  for (let i = 0; i < m; i++) {
    matrizCopia[i][i] -= autovalor;
  }

  const matrizEscalonada = escalonar(matrizCopia);
  const base = extrairBaseDaMatriz(matrizEscalonada);

  return base;
}

export function calcularNucleo(matriz) {
  if (!validarMatrizRetangular(matriz)) {
    return null;
  }

  const matrizEscalonada = escalonar(matriz);
  const base = extrairBaseDaMatriz(matrizEscalonada);

    console.log(base);
  return base;
}
