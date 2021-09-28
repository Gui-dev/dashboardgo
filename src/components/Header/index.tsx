import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import { Profile } from './Profile'
import { Notification } from './Notification'
import { Logo } from './Logo'
import { Search } from './Search'
import { useSidebarDrawer } from 'hooks/useSidebarDrawer'
import { RiMenuLine } from 'react-icons/ri'

export const Header = () => {
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
      { !isWideVersion && (
        <IconButton
          icon={ <Icon as={ RiMenuLine }/> }
          fontSize="24"
          mr="2"
          variant="unstyled"
          onClick={ onOpen }
          aria-label="Open navigation"
        />
      ) }
      <Logo />

      { isWideVersion && (
        <Search />
      ) }

      <Flex
        align="center"
        ml="auto"
      >
        <Notification />
        <Profile showProfileData={ isWideVersion }/>
      </Flex>

    </Flex>

  )
}
