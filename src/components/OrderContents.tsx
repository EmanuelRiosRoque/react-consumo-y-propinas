import { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import type { OrderActions } from "../reducer/order-reducer"

type OrderContentProps = {
    order: OrderItem[],
    dispatch: Dispatch<OrderActions>
}


export default function OrderContents({order, dispatch}: OrderContentProps) {
  return (
    <div>
        <h2 className="text-4xl font-black">Consumo</h2>
        
          <div className="mt-5 space-y-3">
              {order.map(item => (
                  <div
                      key={item.id}
                      className="flex items-center justify-between p-8 py-2 border-t border-gray-200 last-of-type:border-b"
                  >
                      <div>
                          <p>{item.name}</p>
                          <p className="font-bold">{formatCurrency(item.price)}</p>
                          <p className="text-sm text-gray-400">Catidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                      </div>


                      <button
                          onClick={() => dispatch({type: 'remove-item', payload:{id: item.id}})}
                          className="w-8 h-8 font-black text-white bg-red-600 rounded-lg"
                      >
                          X
                      </button>
                  </div>
              ))
              }
          </div>

    </div>
  )
}
