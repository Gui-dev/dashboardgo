import { createContext, ReactNode, useEffect } from 'react'
import { useDisclosure, UseDisclosureProps } from '@chakra-ui/hooks'
import { useRouter } from 'next/router'

type SidebarDrawerContextProps = UseDisclosureProps

type SidebarDrawerProviderProps = {
  children: ReactNode
}

export const SidebarDrawerContext = createContext({} as SidebarDrawerContextProps)

export const SidebarDrawerProvider = ({ children }: SidebarDrawerProviderProps) => {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      { children }
    </SidebarDrawerContext.Provider>
  )
}
