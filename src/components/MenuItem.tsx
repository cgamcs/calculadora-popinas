import type { MenuItems } from "../types"

type MenuItemsProps = {
    item: MenuItems
    addItem: (item: MenuItems) => void
}

function MenuItem({ item, addItem }: MenuItemsProps) {
    
    return (
        <button
            className="border border-teal-400 hover:bg-teal-200 w-full p-3 rounded-md flex justify-between cursor-pointer"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}

export default MenuItem