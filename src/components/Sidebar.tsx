import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

export const Sidebar = () => {
  return (
    <Box
      as="aside"
      mr="8"
      w="64"
    >
      <Stack
        align="flex-start"
        spacing="12"
      >
        <Box>
          <Text fontSize="small" fontWeight="bold" color="gray.400">GERAL</Text>
          <Stack align="stretch" mt="8" spacing="4">
            <Link display="flex" align="center">
              <Icon as={ RiDashboardLine } fontSize="20"/>
              <Text fontWeight="medium" ml="4">Dashboard</Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={ RiContactsLine } fontSize="20"/>
              <Text fontWeight="medium" ml="4">Usuários</Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontSize="small" fontWeight="bold" color="gray.400">AUTOMAÇÂO</Text>
          <Stack align="stretch" mt="8" spacing="4">
            <Link display="flex" align="center">
              <Icon as={ RiInputMethodLine } fontSize="20"/>
              <Text fontWeight="medium" ml="4">Formulários</Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={ RiGitMergeLine } fontSize="20"/>
              <Text fontWeight="medium" ml="4">Automação</Text>
            </Link>
          </Stack>
        </Box>

      </Stack>
    </Box>
  )
}
