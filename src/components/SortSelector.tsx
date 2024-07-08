import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import useGameQueryStore from "../store"

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
]

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder)
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder)
  const currentSortOrder = sortOrders.find((order) => order.value == sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Sort by: ${
          currentSortOrder ? currentSortOrder?.label : sortOrders[0].label
        }`}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order, idx) => (
          <MenuItem
            key={order.value}
            onClick={() => setSortOrder(order.value)}
            backgroundColor={
              currentSortOrder?.value == order.value ||
              (currentSortOrder == null && idx == 0)
                ? "#2d2d2d"
                : ""
            }
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
