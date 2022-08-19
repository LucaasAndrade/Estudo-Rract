
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/App/App.js'
import ExOne from './pages/ExercicioOne'
import ExTwo from './pages/ExercicioTwo'
import ExTree from './pages/ExercicioTree'
import Renderizacao from "./pages/Renderizacao/index.js";
import PaginaArray from "./pages/ArrayReact/index.js";

export default function Index() {

    return(
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/exercicio" element={<ExOne/>} />
            <Route  path="/exercicio2" element={<ExTwo/>} />
            <Route path="/exercicio3" element={<ExTree/>} />
            <Route path="/exercicio4" element={<Renderizacao/>} />
            <Route path="/exercicio5" element={<PaginaArray/>} />
        </Routes>
    </BrowserRouter>
    )
}