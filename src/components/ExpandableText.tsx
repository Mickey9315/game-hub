import { Button, Text } from "@chakra-ui/react"
import { useState } from "react"

const ExpandableText = ({ children }: { children: string }) => {
  const [isExpand, setIsExpand] = useState(false)

  const limit = 500
  if (!children) return null

  if (children.length <= limit) return <Text>{children}</Text>
  const visibleText = isExpand ? children : `${children.substring(0, limit)}...`
  return (
    <Text color="#aaa">
      {visibleText}
      <Button
        size="xs"
        variant="outline"
        colorScheme="gray"
        onClick={() => setIsExpand((s) => !s)}
      >
        {isExpand ? "Show Less" : "Show More"}
      </Button>
    </Text>
  )
}

export { ExpandableText }
