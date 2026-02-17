import { validarMatrizRetangular } from "../matrix/validation.js";
import { resolverEquacaoCubica } from "../numerical/roots.js";

export function calcularAutovalores3x3(matriz) {
  if (!validarMatrizRetangular) {
    return null;
  }

  const matrizCopia = [...matriz];
  if (matrizCopia.length != 3 || matrizCopia[0].length != 3) {
    return null;
  }

  const [[a, b, c], [d, e, f], [g, h, i]] = matrizCopia;

  // coefficients
  const B = a + e + i;
  const C = c * g + f * h + b * d - (a * i + a * e + e * i);
  const D =
    a * e * i + b * f * g + d * h * c - (c * e * g + b * d * i + f * h * a);

  const formula = `-x ^ 3 + ${B != 0 ? B + "x ^ 2 + ": ""}${C != 0 ? C + "x + ": ""}${D}`;
  const autovalores = resolverEquacaoCubica(formula);

  return autovalores;
}
