

function Header() {
    const style = {
        background: "var(--secondary-color)",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem"
    }

    const textStyle = {
        color: "white",
    }

    return (
        <div style={style}>
            <div>
                <h1 style={textStyle}>UFU - Álgebra Linear - Transformações Lineares</h1>
            </div>
        </div >
    )
}

export default Header;
