import { menuItems } from "./data/db"

function App() {
  console.log(menuItems)
  
  return (
    <>
      <header className="bg-teal-500 py-5">
        <h1 className="text-center text-4xl font-black text-white">Calculadora de Propinas y Consumo</h1>
      </header>
    </>
  )
}

export default App
