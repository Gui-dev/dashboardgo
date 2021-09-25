import { Button } from '@chakra-ui/react'

type PaginationItemProps = {
  number: number
  isCurrent?: boolean
}

export const PaginationItem = ({ number, isCurrent = false }: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        fontSize="xs"
        size="sm"
        colorScheme="pink"
        w="4"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default'
        }}
      >
        { number }
      </Button>
    )
  }

  return (
    <Button
      fontSize="xs"
      size="sm"
      w="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
    >
      { number }
    </Button>
  )
}
