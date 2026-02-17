import { useState, useEffect } from 'react';

function ContentBlock({ children }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkSize = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        checkSize();

        window.addEventListener("resize", checkSize);

        return () => window.removeEventListener("resize", checkSize);
    }, []);

    const styles = {
        width: isMobile ? "90%" : "60%",
        padding: "2rem"
    }

    return (
        <div style={styles}>
            {children}
        </div>
    )
}

export default ContentBlock;
