import Link from 'next/link'
import {
  Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Text, Tbody,
  Thead, Td, Th, Tr, useBreakpointValue
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { Pagination } from 'components/Pagination'
import { useUsers } from 'hooks/useUsers'

const UserList = () => {
  const { data, error, isLoading } = useUsers()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex mx="auto" px={['4', '4', '6']} w="100%" maxWidth={1480}>
        <Sidebar />

        <Box flex="1" p="8" bg="gray.800" borderRadius={8}>
          <Flex align="center" justify="space-between" mb="8">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          { isLoading
            ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
              )
            : error
              ? (
                <Flex justify="center">
                  <Text>Falha ao obter dados do usuário</Text>
                </Flex>
                )
              : (
                <>
                  <Table colorScheme="whiteAlpha">
                    <Thead>
                      <Tr>
                        <Th color="gray.300" px={['4', '4', '6']} w="8">
                          <Checkbox colorScheme="pink"/>
                        </Th>
                        <Th>Usuário</Th>
                        { isWideVersion && <Th>Data de Cadastro</Th> }
                        { isWideVersion && <Th w="8"></Th> }
                      </Tr>
                    </Thead>

                    <Tbody>

                      { data.map(user => {
                        return (
                          <Tr key={ String(user.email) }>
                            <Td px={['4', '4', '6']}>
                              <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                              <Box>
                                <Text fontWeight="bold">{ user.name }</Text>
                                <Text fontSize="sm" color="gray.300">{ user.email }</Text>
                              </Box>
                            </Td>
                            { isWideVersion && <Td>{ user.created_at }</Td> }
                            { isWideVersion && (
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
                            ) }
                          </Tr>
                        )
                      }) }

                    </Tbody>
                  </Table>

                  <Pagination />
                </>
                )
          }

        </Box>
      </Flex>
    </Box>
  )
}

export default UserList
