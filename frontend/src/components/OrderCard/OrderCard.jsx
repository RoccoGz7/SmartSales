import './OrderCard.css'

import { order } from '../../data/order'

import ft from '../../assets/pasteles.jpg'


function getWeekdays(now) {
    const weekdays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
    return weekdays[now.getDay() - 1]
}

function getTime(now) {
    return now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
}

function getDate(now) {
    return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
}

function getFullDate() {
    const now = new Date()
    return `${getWeekdays(now)} ${getDate(now)} ${getTime(now)}`
}

function getTotalPrice(order) {
    return order.products.reduce((acum, { price, amount }) => acum + (price * amount), 0)
}

function Product({ name, price, img, amount }) {
    return (
        <div className='product-order-card'>
            <div className='product-order-card-img'>
                <img src={ft} alt={name} />
            </div>
            <div className='product-order-card-text'>
                <div>
                    <p className='product-order-card-name-product'>{name}</p>
                    <p>x{amount}</p>
                </div>
                <div style={{textAlign: 'right'}}>
                    <p>{`$${price * amount}`}</p>
                </div>
            </div>
        </div>
    )
}

function OrderCard() {

  return (
    <div className='order-card'>
        <div className='header-order-card'>
            <h3>Smart Sale</h3>
            <p>Comprobante de pago</p>
            <p> { getFullDate() }</p>
        </div>
        <div className='main-order-card'>
            <div className='table-number-order-card'>
                <p>Mesa: { order.table }</p>
            </div>
            <div className='order-card-products'>
                <p>Productos</p>
                {
                    order.products.map(({ name, price, img, amount}) => <Product name={name} price={price} img={img} amount={amount}/>)
                }
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>Forma de pago: { order.payment }</p>
                    <h4>Total: { `${getTotalPrice(order)}` }</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderCard