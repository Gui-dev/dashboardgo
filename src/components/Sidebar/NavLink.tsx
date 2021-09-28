import { ElementType } from 'react'
import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react'
import { ActiveLink } from 'components/ActiveLink'

type NavLinkProps = ChakraLinkProps & {
  icon: ElementType
  href: string
  children: string
}

export const NavLink = ({ icon, href, children, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={ href } passHref>
      <ChakraLink display="flex" align="center" { ...rest }>
        <Icon as={ icon } fontSize="20"/>
        <Text fontWeight="medium" ml="4">{ children }</Text>
      </ChakraLink>
    </ActiveLink>
  )
}
