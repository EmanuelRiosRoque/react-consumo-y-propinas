import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder}: OrderTotalsProps) {
    const subTotalsAmount   = useMemo(() => order.reduce((total, item)=> total + (item.quantity * item.price), 0), [order])
    const tipAmount         = useMemo(() => subTotalsAmount * tip, [tip, order])
    const totalAmount       = useMemo(() => subTotalsAmount + tipAmount, [tip, order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="text-2xl font-bold">Totales y propina</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subTotalsAmount)}</span> 
            </p>

            <p>Propina: {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span> 
            </p>    

            <p>Total a Pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span> 
            </p>
        </div>

        <button 
            onClick={placeOrder}
            className="w-full p-3 mt-10 font-bold text-white uppercase bg-black disabled:opacity-10" 
            disabled={totalAmount === 0}
        >
            Guardar Orden
        </button>
    </>
  )
}
