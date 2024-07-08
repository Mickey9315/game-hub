import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import useGameQueryStore from "../store"

const PlatformList = () => {
  const { data: platforms, isLoading } = usePlatforms()
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platform)
  const setPlatform = useGameQueryStore((s) => s.setPlatform)
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        disabled={isLoading}
      >
        {selectedPlatform ? selectedPlatform.name : platforms?.results[0]?.name}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform, idx) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatform(platform)}
            backgroundColor={
              selectedPlatform?.id == platform.id ||
              (selectedPlatform?.id == null && idx == 0)
                ? "#2d2d2d"
                : ""
            }
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformList
