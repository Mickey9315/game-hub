import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card width={"100%"} height={"100%"} borderRadius={10} overflow="hidden">
      <Skeleton height={{ sm: "400px", md: "200px" }}></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
