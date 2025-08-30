import type { MenuItems } from "../types"

type MenuItemsProps = {
    item: MenuItems
}

function MenuItem({ item }: MenuItemsProps) {
    const { name, price } = item
    return (
        <button
            className="border border-teal-400 hover:bg-teal-200 w-full p-3 rounded-md flex justify-between cursor-pointer"
        >
            <p>{name}</p>
            <p className="font-black">${price}</p>
        </button>
    )
}

export default MenuItem