import { createContext } from "react";

import React from 'react'

cr
function ContextOrderProvider({ children }) {
  return (
    <ContextOrder.Provider>
        { children }
    </ContextOrder.Provider>
  )
}

export default ContextOrderProvider