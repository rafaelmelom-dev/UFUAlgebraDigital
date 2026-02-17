import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const { t1, t2 } = location.state || {};

    return (
        <div>
            <h2>{t1}</h2>
            <h2>{t2}</h2>
        </div>
    )
}

export default Dashboard;
