import {
  Box, Drawer, DrawerBody, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerOverlay,
  useBreakpointValue
} from '@chakra-ui/react'

import { SidebarNav } from './SidebarNav'
import { useSidebarDrawer } from 'hooks/useSidebarDrawer'

export const Sidebar = () => {
  const { isOpen, onClose } = useSidebarDrawer()
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={ isOpen } placement="left" onClose={ onClose }>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6"/>
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" mr="8" w="64">
      <SidebarNav />
    </Box>
  )
}
