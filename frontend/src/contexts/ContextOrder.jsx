import { useState, useContext, createContext } from "react";

export const ContextOrder = createContext()

export function useOrder() {
  return useContext(ContextOrder)
}

export function ContextOrderProvider({ children }) {

  const [order, setOrder] = useState([])

  return (
    <ContextOrder.Provider value={{
      order,
      setOrder
    }}>
        { children }
    </ContextOrder.Provider>
  )
}