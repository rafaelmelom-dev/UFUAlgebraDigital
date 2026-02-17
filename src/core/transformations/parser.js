import { evaluate } from "mathjs";

function* criarGeradorPermutacao(chaves) {
  for (let i = 0; i < chaves.length; i++) {
    const obj = {};

    chaves.forEach((e) => (obj[e] = 0));
    obj[chaves[i]] = 1;

    yield obj;
  }
}

export function encontrarMatrizTransformacao(funcs, vars) {
  try {
    if (!Array.isArray(vars) || !Array.isArray(funcs)) {
      return null;
    }

    const matriz = funcs.map((func) => {
      const gen = criarGeradorPermutacao(vars);
      let res = gen.next();
      const linha = new Array();

      while (!res.done) {
        linha.push(evaluate(func, res.value));
        res = gen.next();
      }

      return linha;
    });

    return matriz;
  } catch (error) {
    return null;
  }
}
