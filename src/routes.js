
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/App/App.js'
import ExOne from './pages/ExercicioOne'
import ExTwo from './pages/ExercicioTwo'

export default function Index() {

    return(
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/exercicio" element={<ExOne/>} />
            <Route  path="/exercicio2" element={<ExTwo/>} />
        </Routes>
    </BrowserRouter>
    )
}