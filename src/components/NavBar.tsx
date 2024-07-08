import { HStack, Image } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import logo from "../assets/Logo/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <HStack padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        onClick={() => navigate("/")}
        cursor="pointer"
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
