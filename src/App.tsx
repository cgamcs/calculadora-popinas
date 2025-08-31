import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"

function App() {
  const { order, addItem } = useOrder()

  return (
    <>
      <header className="bg-teal-500 py-5">
        <h1 className="text-center text-4xl font-black text-white">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
        <div className="p-5 space-y-4">
          <h2 className="text-2xl font-black">Menú</h2>

          <div className="space-y-2">
            {/* itera sobre menuItem : MenuItems[] y muestra cada platillo del enu */}
            {menuItems.map(item => (

              <MenuItem
                key={item.id}
                item={item} // Prop con toda la informacion del platillo
                addItem={addItem} // Funcion para agregar platillo al useState de order
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents
            order={order}
          />
        </div>
      </main>
    </>
  )
}

export default App
