import { validarMatrizRetangular } from "./validation";

export function escalonar(matrizEntrada) {
  let matriz = matrizEntrada.map((linha) => [...linha]);

  if (!validarMatrizRetangular(matriz)) {
    return null;
  }

  let pivoLinha = 0;
  let pivoColuna = 0;

  const m = matriz.length;
  const n = matriz[0].length;

  while (pivoLinha < m && pivoColuna < n) {
    // encontrando um pivô
    let i_max = pivoLinha;
    let val_max = Math.abs(matriz[pivoLinha][pivoColuna]);

    for (let i = pivoLinha; i < m; i++) {
      const abs = Math.abs(matriz[i][pivoColuna]);

      if (abs > val_max) {
        val_max = abs;
        i_max = i;
      }
    }

    if (matriz[i_max][pivoColuna] == 0) {
      pivoColuna++;
    } else {
      let linha = matriz[pivoLinha];
      matriz[pivoLinha] = matriz[i_max];
      matriz[i_max] = linha;

      const valorPivo = matriz[pivoLinha][pivoColuna];
      for (let i = 0; i < n; i++) {
        matriz[pivoLinha][i] /= valorPivo;

        if (Math.abs(matriz[pivoLinha][i]) < 1e-9) matriz[pivoLinha][i] = 0;
      }

      for (let i = 0; i < m; i++) {
        if (i != pivoLinha) {
          let factor = matriz[i][pivoColuna] / matriz[pivoLinha][pivoColuna];

          matriz[i][pivoColuna] = 0;

          for (let j = pivoColuna + 1; j < n; j++) {
            matriz[i][j] -= matriz[pivoLinha][j] * factor;

            if (Math.abs(matriz[i][j]) < 1e-9) matriz[i][j] = 0;
          }
        }
      }

      pivoLinha += 1;
      pivoColuna += 1;
    }
  }

  return matriz;
}
