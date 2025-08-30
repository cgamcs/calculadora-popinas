import { useState } from "react"
import type { OrderItem } from "../types"

function useOrder() {
  const [order, useOrder] = useState<OrderItem[]>([])

  return {

  }
}

export default useOrder