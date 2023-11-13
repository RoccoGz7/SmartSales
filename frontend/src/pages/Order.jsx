import ProductList from "../components/ProductList/ProductList"
import CategoryList from "../components/CategoryList/CategoryList"
import { useOrder } from "../contexts/ContextOrder"
import { Container } from "@mui/material"
import './Order.css'
function ProductoAcutal({ nombre, precio, cantidad }) {
  return (
    <div className="flex">
      <div className="capitalaze">{nombre}</div>
      <div> ${precio}</div>
      <div> ${precio * cantidad}</div>
    </div>
  )
}

function Order() {

  const { order, setOrder } = useOrder()

  return (
    <Container>
        <div className="order">
          <div className="">
            <h1>Realizar Pedido</h1>
            <div>
            <CategoryList />
            </div>
            <div>
              <ProductList />
            </div>
          </div>
          <div className="order__current-order">
            <div className="order__current-order-title">
              <div className="order__text-title-1">
                <p>PRECIO</p>
              </div>
              <div className="order__text-title-2">
                <p>PRODUCTO</p>
              </div>
            </div>
            <div className="order__current-order-products">
                {
                  order.map(({ name, price, cantidad }) => <ProductoAcutal key={name} nombre={name} precio={price} cantidad={cantidad} />)
                }
            </div>
          </div>
        </div>
    </Container>
  )
}

export default Order