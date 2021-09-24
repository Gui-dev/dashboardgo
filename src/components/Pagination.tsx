import { Box, Button, Stack } from '@chakra-ui/react'

export const Pagination = () => {
  return (
    <Stack align="center" justify="space-between" direction="row" mt="8" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
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
          1
        </Button>

        <Button
          fontSize="xs"
          size="sm"
          w="4"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          2
        </Button>

        <Button
          fontSize="xs"
          size="sm"
          w="4"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          3
        </Button>

        <Button
          fontSize="xs"
          size="sm"
          w="4"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  )
}
