import { useState } from "react"
import './CategoryForm.css'

function CategoryForm() {

    const [name, setName] = useState('')

    function handleName(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

  return (
    <form className="category-form" onSubmit={handleSubmit}>
        <h3>Agregar Categoria</h3>
        <input id="name" value={name} onChange={handleName} placeholder="Nombre"/>
        <button type="submit">Agregar</button>
    </form>
  )
}

export default CategoryForm