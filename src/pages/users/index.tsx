import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Text, Tbody, Thead, Td, Th, Tr } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { Pagination } from 'components/Pagination'

const UserList = () => {
  return (
    <Box>
      <Header />

      <Flex mx="auto" px="6" w="100%" maxWidth={1480}>
        <Sidebar />

        <Box flex="1" p="8" bg="gray.800" borderRadius={8}>
          <Flex align="center" justify="space-between" mb="8">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Button
              as="a"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th color="gray.300" px="6" w="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>

            <Tbody>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gui Silva</Text>
                    <Text fontSize="sm" color="gray.300">gui@email.com</Text>
                  </Box>
                </Td>
                <Td>24 de Setembro, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gui Silva</Text>
                    <Text fontSize="sm" color="gray.300">gui@email.com</Text>
                  </Box>
                </Td>
                <Td>24 de Setembro, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gui Silva</Text>
                    <Text fontSize="sm" color="gray.300">gui@email.com</Text>
                  </Box>
                </Td>
                <Td>24 de Setembro, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}

export default UserList
