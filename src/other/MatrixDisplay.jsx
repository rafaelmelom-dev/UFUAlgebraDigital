import { validarMatrizRetangular } from "../core/matrix/validation";

function MatrixDisplay({ matrix, n = 0 }) {
    if (!matrix) return null;
    if (!validarMatrizRetangular(matrix)) return null;
    const cols = matrix[0].length;

    const styles = {
        grid: {
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            justifyContent: "center",
            columnGap: "2px",
            rowGap: "2px",
            width: "100px",
            height: "100px",
            backgroundColor: "var(--input-bg-color)",
            border: "2px solid var(--input-bg-color)"
        },
        cell: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem",
            width: "2.5rem",
            height: "2.5rem",
            textAlign: "center",
            backgroundColor: "var(--card-bg-color)"
        }
    }

    return (
        <div style={{ display: "flex", flexGrow: "1" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3 style={{ paddingRight: "1rem" }}>T<sub>{n}</sub> = </h3>
            </div>

            <div style={styles.grid}>
                {matrix.map((row, i) => {
                    return row.map((col, j) => {
                        return <div key={i * cols + j} style={styles.cell}>{col}</div>
                    })
                })}
            </div>
        </div >
    );
}


export default MatrixDisplay;
