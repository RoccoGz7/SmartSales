import { tables } from '../../data/tables'
import './TableList.css'
import { useState } from 'react'

function Table({ id, state }) {

    const [available, setAvailable] = useState(state === 'disponible')
    
    const star = <i class="fa-solid fa-star fa-xl star-icon star-is-available"></i>
    const mediumStart = <i class="fa-solid fa-star fa-xl star-icon star-is-not-available"></i>

    function handleClick() {
      setAvailable(!available)
    }

    return (
        <div className='Table' onClick={handleClick}>
          { available ? star : mediumStart }
          <div style={{display:'grid', placeItems: 'center'}}>
            <p style={{fontWeight: 'bold', fontSize: '22px'}}>{ id + 1}</p>
          </div>
        </div>
    )
}

function TableList() {
  return (
    <div className='Table-list'>
        {
            tables.map(({ id, state }) => <Table key={id} id={id} state={state} />)
        }
    </div>
  )
}

export default TableList