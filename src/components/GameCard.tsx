import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { Game } from "../entities"
import getCroppedImageUrl from "../services/getCroppedImageUrl"
import CriticScore from "./CriticScore"
import Emoji from "./Emoji"
import PlatformIconList from "./PlatformIconList"

interface Props {
  game: Game
}
const GameCard = ({ game }: Props) => {
  const navigate = useNavigate()
  return (
    <Card onClick={() => navigate(`/games/${game.id}`)} cursor="pointer">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          {" "}
          <PlatformIconList
            platforms={game?.parent_platforms?.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game?.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          {game?.name}
          <Emoji rating={game?.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
