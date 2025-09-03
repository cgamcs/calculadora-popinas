import { formatCurrency } from "../helpers"
import type { MenuItems, OrderItem } from "../types"
import { X } from "lucide-react"

type OrderContentsProp = {
  order: OrderItem[]
  removeItem: (id: MenuItems['id']) => void
}

function OrderContents({ order, removeItem }: OrderContentsProp) {
  return (
    <div>
      <h2 className="text-2xl font-black">Consumo</h2>

      <div className="mt-4">
        {order.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>

              <p className="font-black">
                Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}
              </p>

            </div>

            <button
              className="bg-red-600 h-8 w-8 flex justify-center items-center rounded-full cursor-pointer"
              onClick={() => removeItem(item.id)}
            >
              <X className="stroke-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderContents