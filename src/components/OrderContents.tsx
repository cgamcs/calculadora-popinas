import type { OrderItem } from "../types"

type OrderContentsProp = {
  order: OrderItem[]
}

function OrderContents({order} : OrderContentsProp) {
  return (
    <div>
      <h2 className="text-2xl font-black">Consumo</h2>

      <div className="space-y-3 mt-5">
        {order.length === 0 ? 
          <p className="text-center">La orden esta vacia</p>
        : (
          order.map(item => (
            <div className="flex" key={item.id}>
              <p>{item.name} - ${item.price} - {item.quantity}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default OrderContents