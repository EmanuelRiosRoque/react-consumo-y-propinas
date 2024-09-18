//Definir type nuevo
import { Dispatch } from "react"
import type { MenuItem } from "../types"
import type { OrderActions } from "../reducer/order-reducer"

type MenuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}


export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button
      onClick={() => dispatch({type:'add-item', payload: {item}})} //Llamamos a la funcion
      className="flex justify-between w-full p-3 border-2 border-teal-600 hover:bg-teal-200"
    >
        <p>{item.name}</p>
        <p className="font-bold ">${item.price}</p>
    </button>
  )
}
