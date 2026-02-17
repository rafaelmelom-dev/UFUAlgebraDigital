import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import HomePage from './pages/HomePage';
import DashBoard from './pages/DashBoard';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
