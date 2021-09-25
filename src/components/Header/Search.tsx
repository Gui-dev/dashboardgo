import { Flex, Icon, Input } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export const Search = () => {
  return (
    <Flex
      as="label"
      position="relative"
      alignSelf="center"
      flex="1"
      color="gray.200"
      ml="6"
      py="4"
      px="8"
      maxWidth={400}
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
        variant="unstyled"
      />
      <Icon as={RiSearchLine} fontSize="20"/>
    </Flex>
  )
}
