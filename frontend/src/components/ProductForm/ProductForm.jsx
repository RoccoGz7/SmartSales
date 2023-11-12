import './ProductForm.css'
import { useState } from 'react'

function isNumber(v) {
    return v == '0' || v == '1' || v == '2' || v == '3' || v == '4' || v == '5' || v == '6' || v == '7' || v == '8' || v == '9'
}

function ProductForm() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    function handleName(e) {
        setName(e.target.value)
    }

    function handlePrice(e) {
        const value = e.target.value[e.target.value.length - 1]

        if (isNumber(value)) {
            setPrice(e.target.value)
        } else {
            if (e.target.value.length === 0) {
                setPrice('')
            }
        }
    }

    function handleCategory(e) {
        setCategory(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const product = {
            name,
            price,
            category
        }
    }

  return (
    <form className='product-form' onSubmit={handleSubmit}>
        <h3>nuevo producto</h3>
        <input onChange={handleName} id='name' value={name} type="text" placeholder='Nombre' autoComplete='off'/>
        <input onChange={handlePrice} id='price' value={price} type="text" placeholder='Precio' autoComplete='off'/>
        <input onChange={handleCategory} id='category' value={category} type="text" placeholder='Categoria' autoComplete='off'/>
        <button type='submit'>Agregar</button>
    </form>
  )
}

export default ProductForm