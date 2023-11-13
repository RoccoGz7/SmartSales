import { useState, useEffect } from 'react'
import './ProductList.css'
import { products as data } from "../../data/products"
import ft from '../../assets/pasteles.jpg'
import { useOrder } from '../../contexts/ContextOrder'

function ProductCard({ name, price }) {

    const { order, setOrder } = useOrder()

    function handleClick() {
        const productFound = order.find(({ name }) => name === name)
        if (!productFound) {
            setOrder([ ...order, { name, price, cantidad: 1 }])
            return
        }
        // console.log(o)
        // const productsFilter = order.filter(({ name }) => )
        console.log(productsFilter)
        setOrder([ ...order, { name, price, cantidad: productFound.cantidad + 1}])
    }

    return (
        <div className="product-card" onClick={handleClick}>
            <div className='img-product'> 
                <img src={ft} alt="pasteles" />
            </div>
            <div className='text-product'>
                <p>{ name }</p>
                <p>{ `$${price}` }</p>
            </div>
        </div>
    )
}

function ProductList() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            try {
                const res = await fetch("http://localhost:3000/api/products")
                const data = await res.json()
                 setProducts(data)
                console.log(data)
            } catch(e) {
                console.log(e)
            }
        }
        getProducts()
    }, [])

  return (
    <div className='container-product-list'>
        <div className='product-list'>
        {
            products.map(({ name, price }) => <ProductCard key={name} name={name} price={price} />)
        }
        </div>
    </div>
  )
}


export default ProductList