import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

type ProfileProps = {
  showProfileData: boolean
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box textAlign="right" mr="4">
          <Text>Gui Silva</Text>
          <Text fontSize="small" color="gray.300">gui@email.com</Text>
        </Box>
      ) }

      <Avatar
        size="md"
        name="Gui Silva"
        src="https://github.com/Gui-dev.png"
      />
    </Flex>
  )
}
