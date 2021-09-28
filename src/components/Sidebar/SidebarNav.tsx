import { Stack, Text } from '@chakra-ui/react'

import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'

import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export const SidebarNav = () => {
  return (
    <Stack align="flex-start" spacing="12">

      <NavSection title="GERAL">
        <Text fontSize="small" fontWeight="bold" color="gray.400">GERAL</Text>
        <Stack align="stretch" mt="8" spacing="4">
          <NavLink icon={ RiDashboardLine }>Dashboard</NavLink>
          <NavLink icon={ RiContactsLine }>Usuários</NavLink>
        </Stack>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <Text fontSize="small" fontWeight="bold" color="gray.400">AUTOMAÇÂO</Text>
        <Stack align="stretch" mt="8" spacing="4">
          <NavLink icon={ RiInputMethodLine }>Formulários</NavLink>
          <NavLink icon={ RiGitMergeLine }>Automação</NavLink>
        </Stack>
      </NavSection>

    </Stack>
  )
}
