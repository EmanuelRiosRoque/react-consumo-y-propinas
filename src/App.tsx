import { useReducer } from "react";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPorcentageForm from "./components/TipPorcentageForm";
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducer/order-reducer";

function App() { 

  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
        <header className="py-4 bg-teal-700">
          <h1 className="text-4xl text-center text-white">Calculadora de propinas y consumos</h1>
        </header>

        <main className="grid py-20 mx-auto max-w-7xl md:grid-cols-2 ">
          <div className="p-5">
            <h2 className="text-4xl font-black">Menú</h2>

            <div className="space-y-1">
              {menuItems.map(item =>(
                <MenuItem
                  key = {item.id}
                  item = {item}

                  // Funcion addItem
                  dispatch = {dispatch}
                />
              ))}
            </div>
          </div>

          <div>
              <h2>Consumo</h2>
              <div className="p-5 space-y-4 border border-dashed rounded-lg border-slate-300">
                {
                  state.order.length
                  ? 
                  (
                    <>
                      <OrderContents 
                        order={state.order}
                        dispatch={dispatch}
                      />

                      <TipPorcentageForm 
                        dispatch={dispatch}
                        tip={state.tip}
                      />

                      <OrderTotals 
                        order={state.order}
                        tip={state.tip}
                        dispatch={dispatch}
                      />
                    </>
                  )
                  : 
                  (
                    <p className="text-center">No hay ordenes aun</p>
                  )
                }

                
              </div>
            

          </div>
        </main>
    </>
  )
}

export default App
