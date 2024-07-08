import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BsArrowUp } from "react-icons/bs"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreList from "../components/GenreList"
import PlatformList from "../components/PlatformList"
import SortSelector from "../components/SortSelector"
import { Platform } from "../entities"

export type GameQuery = {
  genreId?: number
  platform?: Platform
  sortOrder: string
  searchText: string
}

function HomePage() {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false)

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const toggoleVisibility = () => {
      if (window.scrollY > 500) {
        setIsBackToTopVisible(true)
      } else {
        setIsBackToTopVisible(false)
      }
    }

    window.addEventListener("scroll", toggoleVisibility)
    return () => window.removeEventListener("scroll", toggoleVisibility)
  })

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Flex flexDirection="column" marginLeft={3}>
            <GameHeading />
            <HStack gap={4} marginBottom={2}>
              <PlatformList />
              <SortSelector />
            </HStack>
          </Flex>
          <GameGrid />
          {isBackToTopVisible && (
            <Box
              onClick={scrollToTop}
              position="fixed"
              bottom="30px"
              right="30px"
              zIndex={3}
            >
              <Button
                size={"sm"}
                rightIcon={<BsArrowUp />}
                variant="outline"
                colorScheme="teal"
              >
                Scroll To Top
              </Button>
            </Box>
          )}
        </GridItem>
      </Grid>
    </>
  )
}

export default HomePage
