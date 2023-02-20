import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Personajes from './components/Personajes/Personajes';
import NavBar from './components/NavBar/NavBar';
function RoutesApp() {
    return (
        <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/personajes/:id' element={<Personajes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;