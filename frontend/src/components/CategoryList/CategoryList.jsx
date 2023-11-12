import { useState, useEffect } from 'react'
import { categories as data } from '../../data/categories'
import './CategoryList.css'

function CategoryCard({ name }) {
    return (
        <div className='category-card'>
            <h4>{ name }</h4>
        </div>
    )
}

function CategoryList() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        (async function getCategories() {
            setCategories(data)
        })()
    }, [])

  return (
    <div className='category-list'>
        {
            categories.map(({ name }) => <CategoryCard key={name} name={name}/>)
        }
    </div>
  )
}

export default CategoryList