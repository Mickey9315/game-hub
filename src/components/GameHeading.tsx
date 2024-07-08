import { Heading } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"
import useGameQueryStore from "../store"

const GameHeading = () => {
  const platform = useGameQueryStore((s) => s.gameQuery.platform)
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId)
  const genre = useGenre(genreId)

  return (
    <Heading as="h1" marginY={5} fontSize="4xl">{`${platform?.name || "PC"} ${
      genre?.name || "Action"
    } Games`}</Heading>
  )
}

export default GameHeading
