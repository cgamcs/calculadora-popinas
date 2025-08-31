import type { MenuItems } from "../types"

type MenuItemsProps = {
    item: MenuItems // prop con informacion del platillo
    addItem: (item: MenuItems) => void // prop con funcion para agregar platillo a la orden
}

function MenuItem({ item, addItem }: MenuItemsProps) {
    
    return (
        <button
            className="border border-teal-400 hover:bg-teal-200 w-full p-3 rounded-md flex justify-between cursor-pointer"
            onClick={() => addItem(item)} // agrega el platillo a la orden
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}

export default MenuItem