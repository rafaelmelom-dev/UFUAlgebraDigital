import { validarMatrizRetangular } from "../core/matrix/validation";

function MatrixDisplay({
  matrix,
  name = (
    <>
      T<sub>0</sub>
    </>
  ),
}) {
  if (!matrix) return null;
  if (!validarMatrizRetangular(matrix)) return null;
  const cols = matrix[0].length;

  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, minmax(min-content, 1fr))`,
      justifyContent: "center",
      columnGap: "2px",
      rowGap: "2px",
      width: "50%",
    },
    cell: {
      aspectRatio: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.4rem",
      textAlign: "center",
      backgroundColor: "var(--card-bg-color)",
    },
  };

  return (
    <div style={{ display: "flex", flexGrow: "1" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{ paddingRight: "1rem" }}>{name} = </h3>
      </div>

      <div style={styles.grid}>
        {matrix.map((row, i) => {
          return row.map((col, j) => {
            return (
              <div key={i * cols + j} style={styles.cell}>
                {col}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default MatrixDisplay;
