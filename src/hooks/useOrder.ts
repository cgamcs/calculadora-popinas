import { useState } from "react"
import type { MenuItems, OrderItem } from "../types"

function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItems) => {
    const itemExist = order.find(orderItem => orderItem.id === item.id)
    // busca el elemento y si existe lo guarda
    // se usa find en vez de findIndex para evitar mutacion

    if (itemExist) {
      const updateOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem) // busca el elemento existente en el arreglo de orden
      setOrder(updateOrder)
    } else {
      const newItem = { ...item, quantity: 1 } // copia del platillo para poder agregarlo a la order ya que diferente type
      setOrder([...order, newItem])
    }
  }

  const removeItem = (id: MenuItems['id']) => {
    setOrder(order.filter(item => item.id !== id))
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem
  }
}

export default useOrder