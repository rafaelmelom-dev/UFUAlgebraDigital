function EntradaTransformacaoLinear({ n, x, y, z, onChangeX, onChangeY, onChangeZ }) {
    const style = {
        backgroundColor: "var(--secondary-color)",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        marginBottom: "5rem",
        borderRadius: "10px",
        border: "1px solid #aaaaaaa0"
    }

    const paragraphStyle = { fontSize: "2rem", fontFamily: "Times New Roman", margin: "0" }

    const inputStyle = {
        fontSize: "2rem",
        width: "10ch",
        boxSizing: "content-box",
        backgroundColor: "var(--terciary-color)",
        borderRadius: "10px",
        border: "1px solid #aaaaaaa0",
        outline: "none"
    }

    return (
        <div style={style}>
            <h1>Transformação Linear <span style={{ fontFamily: "Times New Roman", fontWeight: "normal" }}>T<sub>{n}</sub></span></h1>

            <div style={{ display: "flex" }}>

                <p style={paragraphStyle}>T<sub>{n}</sub>(x, y, z) = (</p>

                <input type="text" style={inputStyle} value={x} onChange={e => onChangeX(e.target.value)} />

                <p style={paragraphStyle}>,</p>

                <input type="text" style={inputStyle} value={y} onChange={e => onChangeY(e.target.value)} />

                <p style={paragraphStyle}>,</p>

                <input type="text" style={inputStyle} value={z} onChange={e => onChangeZ(e.target.value)} />

                <p style={paragraphStyle}>)</p>

            </div>
        </div>
    )
}

export default EntradaTransformacaoLinear;
