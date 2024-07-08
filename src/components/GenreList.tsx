import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/getCroppedImageUrl"
import useGameQueryStore from "../store"

const GenreList = () => {
  const { data: genres, isLoading } = useGenres()
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId)
  const setSelectedId = useGameQueryStore((s) => s.setGenreId)
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    )
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre, idx) => {
          return (
            <ListItem paddingY="5px" paddingLeft="5px" key={genre.id}>
              <HStack>
                <Image
                  objectFit="cover"
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  fontWeight="normal"
                  variant="link"
                  fontSize="lg"
                  whiteSpace="normal"
                  textAlign="left"
                  onClick={() => {
                    setSelectedId(genre.id)
                  }}
                  style={{
                    fontWeight:
                      (selectedGenreId == null && idx == 0) ||
                      genre.id == selectedGenreId
                        ? "bold"
                        : "normal",
                    textDecoration:
                      (selectedGenreId == null && idx == 0) ||
                      genre.id == selectedGenreId
                        ? "underline"
                        : "none",
                  }}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default GenreList
