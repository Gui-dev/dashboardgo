import { ElementType } from 'react'
import { Icon, Link, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react'

type NavLinkProps = ChakraLinkProps & {
  icon: ElementType
  children: string
}

export const NavLink = ({ icon, children, ...rest }: NavLinkProps) => {
  return (
    <Link display="flex" align="center" { ...rest }>
      <Icon as={ icon } fontSize="20"/>
      <Text fontWeight="medium" ml="4">{ children }</Text>
    </Link>
  )
}
