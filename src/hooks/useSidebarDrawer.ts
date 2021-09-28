import { useContext } from 'react'

import { SidebarDrawerContext } from 'context/SidebarDrawerContex'

export const useSidebarDrawer = () => {
  const context = useContext(SidebarDrawerContext)

  return context
}
