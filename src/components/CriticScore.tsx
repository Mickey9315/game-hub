import { Badge } from "@chakra-ui/react"

interface Props {
  score: number
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 6 ? "yellow" : ""
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  )
}

export default CriticScore
