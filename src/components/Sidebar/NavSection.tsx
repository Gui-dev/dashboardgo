import { ReactNode } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'

type NavSectionProps = {
  title: string
  children: ReactNode
}

export const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <Box>
      <Text fontSize="small" fontWeight="bold" color="gray.400">{title}</Text>
      <Stack align="stretch" mt="4" spacing="4">
        { children }
      </Stack>
    </Box>
  )
}
