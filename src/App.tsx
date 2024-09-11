import MenuItem from "./components/menuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPorcentageForm from "./components/TipPorcentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hook/useOrder";

function App() { 
  const {order, tip, setTip, addItem, removeItem, placeOrder} = useOrder()

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
                  addItem = {addItem}
                />
              ))}
            </div>
          </div>

          <div>
              <h2>Consumo</h2>
              <div className="p-5 space-y-4 border border-dashed rounded-lg border-slate-300">
                {
                  order.length
                  ? 
                  (
                    <>
                      <OrderContents 
                        order={order}
                        removeItem={removeItem}
                      />

                      <TipPorcentageForm 
                        setTip={setTip}
                        tip={tip}
                      />

                      <OrderTotals 
                        order={order}
                        tip={tip}
                        placeOrder={placeOrder}
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
