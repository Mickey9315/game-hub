import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"

const GameGrid = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useGames()

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

  if (data?.pages[0].count == 0) {
    return (
      <Text paddingLeft={5} paddingTop={5}>
        Opps... There is No data
      </Text>
    )
  }
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => {
            return <GameCardSkeleton key={i} />
          })}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <Box
                key={game.id}
                _hover={{
                  transform: "scale(1.03)",
                  transition: "transform .15s ease-in",
                }}
                borderRadius={10}
                overflow="hidden"
              >
                <GameCard game={game} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  )
}

export default GameGrid
