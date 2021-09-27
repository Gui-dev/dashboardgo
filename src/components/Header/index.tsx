import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { Profile } from './Profile'
import { Notification } from './Notification'
import { Logo } from './Logo'
import { Search } from './Search'

export const Header = () => {
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
