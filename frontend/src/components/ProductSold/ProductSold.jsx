import './PorductSold.css'

import { useState, useEffect } from 'react'
import { soldProducts } from '../../data/products'

function includeProduct(products, nameProduct) {
    let include = false
    products.forEach(({ name }) => {
        if (nameProduct === name) {
            include = true
        }
    })
    return include
}

function orderSoldProducts(products, orderBy = true) {
    const productsSold = [...products]
    let aux
    for (let i = 0; i < products.length; i ++) {
        for (let j = 0; j < products.length; j ++) {
            if (orderBy) {
                if (productsSold[i].counter > productsSold[j].counter) {
                    aux = productsSold[i]
                    productsSold[i] = productsSold[j]
                    productsSold[j] = aux
                }
            } else {
                if (productsSold[i].counter < productsSold[j].counter) {
                    aux = productsSold[i]
                    productsSold[i] = productsSold[j]
                    productsSold[j] = aux
                }
            }
        }
    }
    return productsSold
}

function ProductSoldItem({ name, counter }) {
    return (
        <div className='Product-sold-item'>
            {name + ' ' + counter}
        </div>
    )
}

function ProductSold({ value }) {

    const [productsSold, setProductsSold] = useState([])

    useEffect(() => {
        const list = []
        soldProducts.forEach((product) => {
            const name = product.name
            let counter = 0
            soldProducts.forEach(oneProduct => {
                if (oneProduct.name === name) {
                    counter += 1
                }
            })
            if (!includeProduct(list, name)) {
                list.push({name, counter})
            }
        })
        setProductsSold(orderSoldProducts(list, value))
    }, [])

  return (
    <div>
        {
            productsSold.map(({ name, counter }) => <ProductSoldItem key={name} name={name} counter={counter} />)
        }
    </div>
  )
}

export default ProductSold