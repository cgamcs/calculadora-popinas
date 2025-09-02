import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProp = {
  order: OrderItem[]
  tip: number
}

function OrderTotals({ order, tip } : OrderTotalsProp) {
  const subtotalAmout = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0 ), [order])

  const tipAmount = useMemo(() => subtotalAmout * tip, [tip, order])

  return (
    <>
      <div className="space-y-6">
        <h2 className="font-black text-2xl">Total y Propinas:</h2>

        <p>Subtotal a pagar: <span className="font-bold">{formatCurrency(subtotalAmout)}</span></p>
        
        <p>Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
        
        <p>Total a pagar: <span className="font-bold">$0</span></p>
      </div>

      <button></button>
    </>
  )
}

export default OrderTotals