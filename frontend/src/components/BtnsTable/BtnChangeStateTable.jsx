import { useState } from 'react'
import './BtnsTable.css'

function BtnChangeStateTable({ state }) {

    const [available, setAvailable] = useState(state === 'disponible')

    const starComplete = <i className="fa-solid fa-star fa-sm"></i>
    const starMedium = <i className="fa-regular fa-star fa-sm"></i>

    function handleClick() {
        setAvailable(!available)
    }

  return (
    <button className={available ? 'btn-star-complete' : 'btn-star-medium'} onClick={handleClick}>{ available ? starComplete : starMedium}</button>
  )
}

export default BtnChangeStateTable