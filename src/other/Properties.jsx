function Properties({ dados, baseNucleo, n = 0 }) {
    if (!dados) return null;
    if (!baseNucleo) return null;

    const styles = {
        paragraph: {
            marginBottom: "0",
            marginTop: "0"
        },
        listItems: {
            marginTop: "10px",
        },
        list: {
            listStyle: "none",
            marginTop: "0",
            marginBottom: "10px"
        }
    }

    return (
        <div style={{ fontSize: "1.5rem" }}>
            <p style={styles.paragraph}>Autovalores de T<sub>{n}</sub>:</p>
            <ul style={styles.list}>
                {dados.map((element, index) => <li style={styles.listItems} key={index}>&nbsp; λ<sub>{index + 1}</sub> = {element.autovalor}</li>)}
            </ul>

            <p style={styles.paragraph}>Autovetores de T<sub>{n}</sub>:</p>
            <ul style={styles.list}>
                {dados.map((element, index) => <li style={styles.listItems} key={index}>&nbsp; λ<sub>{index + 1}</sub> ⇒ v = [ {element.vetores.map(e => `(${e.join(", ")})`).join(", ")} ]</li>)}
            </ul>

            <p style={styles.paragraph}>Núcleo de T<sub>{n}</sub>:</p>
            <ul style={styles.list}>
                <li style={styles.listItems}>&nbsp;Base = [ {baseNucleo.map(v => `(${v.join(", ")})`).join(", ")} ]</li>
            </ul>
        </ div>
    )
}

export default Properties;
