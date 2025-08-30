import { useState } from "react"
import type { OrderItem } from "../types"

function useOrder() {
  const [order, useOrder] = useState<OrderItem[]>([])

  const addItem = () => {
    console.log('Agregando...')
  }
  return {
    addItem
  }
}

export default useOrder