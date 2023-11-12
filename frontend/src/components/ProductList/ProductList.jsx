import { useState, useEffect } from 'react'
import './ProductList.css'
import { products as data } from "../../data/products"
import ft from '../../assets/pasteles.jpg'

function ProductCard({ name, price }) {
    return (
        <div className="product-card">
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
            setProducts(data)
        }
        getProducts()
    })

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