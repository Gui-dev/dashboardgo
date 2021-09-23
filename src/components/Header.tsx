import { Avatar, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      h="20"
      w="100%"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="62">
        Dash
        <Text as="span" color="pink" ml="1">.</Text>
      </Text>

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

      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          color="gray.300"
          mx="8"
          pr="8"
          py="1"
          borderRightWidth={ 1 }
          borderColor="gray.700"
          spacing="8"
        >
          <Icon as={ RiNotificationLine } fontSize="20"/>
          <Icon as={ RiUserAddLine } fontSize="20"/>
        </HStack>

        <Flex align="center">
          <Box textAlign="right" mr="4">
            <Text>Gui Silva</Text>
            <Text fontSize="small" color="gray.300">gui@email.com</Text>
          </Box>

          <Avatar
            size="md"
            name="Gui Silva"
            src="https://github.com/Gui-dev.png"
          />
        </Flex>
      </Flex>

    </Flex>

  )
}
