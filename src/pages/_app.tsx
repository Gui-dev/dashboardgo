import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { theme } from 'styles/theme'
import { SidebarDrawerProvider } from 'context/SidebarDrawerContex'
import { makeServer } from 'services/mirage'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={ theme }>
        <SidebarDrawerProvider>
          <Component { ...pageProps }/>
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
