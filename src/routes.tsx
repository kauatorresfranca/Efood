import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import PerfilItaliano from './pages/PerfilItaliano/index'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/PerfilItaliano" element={<PerfilItaliano />} />
  </Routes>
)

export default Rotas
