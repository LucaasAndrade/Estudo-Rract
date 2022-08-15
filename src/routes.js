
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/App/App.js'
import ExOne from './pages/ExercicioOne'
import ExTwo from './pages/ExercicioTwo'
import ExTree from './pages/ExercicioTree'

export default function Index() {

    return(
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/exercicio" element={<ExOne/>} />
            <Route  path="/exercicio2" element={<ExTwo/>} />
            <Route path="/exercicio3" element={<ExTree/>} />
        </Routes>
    </BrowserRouter>
    )
}