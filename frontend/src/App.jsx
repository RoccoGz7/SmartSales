import Home from './pages/Home'
import Order from './pages/Order'
import Check from './pages/Check'
import Voucher from './pages/Voucher'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pedidos' element={<Order />}/>
        <Route path='/realizar-pedido' element={<Home />}/>
        <Route path='/ajustes' element={<Home />}/>
        <Route path='/estadisticas' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App