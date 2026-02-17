import { derivative, evaluate, rationalize } from "mathjs";

export function newtonRaphson(x0, func, tolerance, epsilon, maxIterations) {
    try {
        const der = derivative(func, "x");

        for (let i = 0; i < maxIterations; i++) {
            const y = evaluate(func, { x: x0 });
            const y_der = der.evaluate({ x: x0 });

            if (Math.abs(y_der) < epsilon) {
                break;
            }

            let x1 = x0 - y / y_der;

            if (Math.abs(x1 - x0) < tolerance) {
                return x1;
            }

            x0 = x1;
        }


        return null;
    } catch (erro) {
        return null;
    }
}

export function resolverEquacaoCubica(func) {
    let primeiraRaiz;
    const raizes = new Set();

    for (let i = 10; i < 1001; i *= 10) {
        primeiraRaiz = newtonRaphson(i, func, 0.00001, 0.000000001, 100);

        if (primeiraRaiz !== null) {
            break;
        }
    }

    if (primeiraRaiz === null) return null;

    raizes.add(+primeiraRaiz.toFixed(4));

    // calculando as outras duas raízes pela quadrática

    try {
        const [d, c, b, a] = rationalize(func, {}, true).coefficients;
        const A = a;
        const B = b + A * primeiraRaiz;
        const C = c + B * primeiraRaiz;

        const delta = B * B - 4 * A * C;

        if (Math.abs(delta) < 1e-10) {
            // podem haver deltas muito perto de 0
            let raiz = (-B / 2) * A;

            raizes.add(+raiz.toFixed(4));
        } else if (delta > 0) {
            let raiz = (-B + Math.sqrt(delta)) / (2 * A);
            let raiz_linha = (-B - Math.sqrt(delta)) / (2 * A);

            raizes.add(+raiz.toFixed(4));
            raizes.add(+raiz_linha.toFixed(4));
        }
        // caso delta < 0, as raízes são complexas
    } catch (erro) {
        console.log(erro);
    }

    return raizes;
}
