import { Box, Heading } from "@chakra-ui/react"
import { ReactNode } from "react"

const MetaItem = ({
  term,
  children,
}: {
  term: string
  children: ReactNode
}) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  )
}

export default MetaItem
