import { Heading } from "@chakra-ui/react"
import useTrailers from "../hooks/useTrailer"

interface Props {
  gameId: number
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId)

  if (isLoading) return null

  if (error) throw error

  const first = data?.results[0]
  return first ? (
    <>
      <Heading size="lg" marginBottom={3}>
        Trailer
      </Heading>
      <video src={first.data[480]} poster={first.preview} controls />
    </>
  ) : null
}

export default GameTrailer
