import {
  Container,
  Button
} from '@mui/material'
import ProductForm from '../components/ProductForm/ProductForm'
import CategoryForm from '../components/CategoryForm/CategoryForm'
import BtnAddTable from '../components/BtnsTable/BtnAddTable'
import BtnSubtracTable from '../components/BtnsTable/BtnSubtracTable'
import BtnChangeStateTable from '../components/BtnsTable/BtnChangeStateTable'
import ProductEditForm from '../components/ProductEditForm/ProductEditForm'
import CategoryList from '../components/CategoryList/CategoryList'
import ProductList from '../components/ProductList/ProductList'
import OrderCard from '../components/OrderCard/OrderCard'
import TableList from '../components/TableList/TableList'
import ProductSold from '../components/ProductSold/ProductSold'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Container maxWidth='xl' >
      {/* <div className='Home__categories'>
        <CategoryList />
      </div>
      <div className='Home__products'>
        <ProductList />
      </div> */}

      <div className='home__container-buttons-container'>
        <main className='home__main-container'>
          <div className='home__container-buttons'>
            <Button variant='contained' LinkComponent={Link} to='/pedidos'>Pedidos</Button>
            <Button variant='contained' LinkComponent={Link} to='/pedidos'>Realizar Pedidos</Button>
            <Button variant='contained' LinkComponent={Link} to='/pedidos'>Ajustes</Button>
            <Button variant='contained' LinkComponent={Link} to='/pedidos'>Estadisticas</Button>
          </div>
        </main>
      </div>
    </Container>
  )
}

export default Home