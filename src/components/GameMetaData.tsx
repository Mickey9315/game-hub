import { SimpleGrid, Text } from "@chakra-ui/react"
import { Game } from "../entities"
import CriticScore from "./CriticScore"
import MetaItem from "./MetaItem"
import PlatformIconList from "./PlatformIconList"
// import PlatformIconList from "./PlatformIconList"

const GameMetaData = ({ game }: { game: Game }) => {
  const platformList = game.parent_platforms.map((item) => item.platform)
  return (
    <SimpleGrid columns={2} as="dl">
      <MetaItem term="Platforms">
        <PlatformIconList platforms={platformList} />
        {game.parent_platforms?.map(({ platform }, idx) => (
          <span key={platform.id} style={{ color: "#aaa" }}>
            {idx != 0 ? " | " : ""} {platform.name}
          </span>
        ))}
      </MetaItem>
      <MetaItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </MetaItem>
      <MetaItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id} color="#aaa">
            {genre.name}
          </Text>
        ))}
      </MetaItem>
      <MetaItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id} color="#aaa">
            {publisher.name}
          </Text>
        ))}
      </MetaItem>
    </SimpleGrid>
  )
}

export default GameMetaData
