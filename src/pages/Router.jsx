import { BrowserRouter, Routes, Route } from "react-router";
import Accueil from './Accueil.jsx'
import Apropos from './Apropos.jsx'
import ErrorPage from './ErrorPage.jsx'
import LogementPage from './LogementPage.jsx'

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="/LogementPage/:id" element={<LogementPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router