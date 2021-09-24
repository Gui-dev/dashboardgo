import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack } from '@chakra-ui/react'
import { RiCloseLine, RiSaveLine } from 'react-icons/ri'

import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { Input } from 'components/Form/Input'

const UserCreate = () => {
  return (
    <Box>
      <Header />

      <Flex mx="auto" px="6" w="100%" maxWidth={1480}>
        <Sidebar />

        <Box flex="1" p="8" bg="gray.800" borderRadius={8}>
          <Heading fontWeight="normal" size="lg">Criar usuário</Heading>
          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid w="100%" minChildWidth="240px" spacing="8">
              <Input name="name" label="Nome completo"/>
              <Input type="email" name="email" label="E-mail"/>
            </SimpleGrid>

            <SimpleGrid w="100%" minChildWidth="240px" spacing="8">
              <Input type="password" name="password" label="Senha"/>
              <Input type="password" name="password_confirmation" label="Confirmação da senha"/>
            </SimpleGrid>
          </VStack>

          <Flex justify="flex-end" mt="8">
            <HStack spacing="4">
              <Button
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={RiCloseLine} fontSize="20"/>}
              >
                Cancelar
              </Button>
              <Button
                colorScheme="pink"
                leftIcon={<Icon as={RiSaveLine} fontSize="20"/>}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default UserCreate
