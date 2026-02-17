export function validarMatrizRetangular(matriz) {
  if (!Array.isArray(matriz)) return false;

  const n = matriz[0].length;

  return matriz.every((linha) => Array.isArray(linha) && linha.length == n);
}
