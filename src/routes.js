
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/App/App.js'
import ExOne from './pages/ExercicioOne'

export default function Index() {

    return(
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/exercicio" element={<ExOne/>} />
        </Routes>
    </BrowserRouter>
    )
}