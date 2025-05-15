import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '../Layout/Layout.jsx'
import Accueil from '../../pages/Accueil.jsx'
import Apropos from '../../pages/Apropos.jsx'
import ErrorPage from '../../pages/ErrorPage.jsx'
import LogementPage from '../../pages/LogementPage.jsx'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/apropos" element={<Apropos />} />
                    <Route path="/logement/:id" element={<LogementPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router