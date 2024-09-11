//Definir type nuevo
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void //Tipo de dato recibido (funcion)
}


export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button
      onClick={() => addItem(item)} //Llamamos a la funcion
      className="flex justify-between w-full p-3 border-2 border-teal-600 hover:bg-teal-200"
    >
        <p>{item.name}</p>
        <p className="font-bold ">${item.price}</p>
    </button>
  )
}
