function CenteredContainer({ children }) {
    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }

    return (
        <div style={styles}>
            {children}
        </div>
    )
}

export default CenteredContainer;
