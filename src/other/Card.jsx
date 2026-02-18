function Card({ title, subtitle, children, style }) {
    return (
        <div style={{ ...styles.container, ...style }}>
            {title && <h2 style={styles.title}>{title}</h2>}

            {subtitle && <p>{subtitle}</p>}

            <div style={styles.content}>
                {children}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "1.5rem",
        border: "1px solid var(--card-bg-color)",
    },
    content: {
        flex: "1",
    },
    title: {
        marginTop: "0"
    }
};

export default Card;
