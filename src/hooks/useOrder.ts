import { useState } from "react"
import type { MenuItems, OrderItem } from "../types"

function useOrder() {
  const [order, useOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItems) => {
    console.log('Agregando...', item)
  }
  return {
    addItem
  }
}

export default useOrder