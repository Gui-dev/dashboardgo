import { Flex, Button, Stack } from '@chakra-ui/react'

import { Input } from 'components/Form/Input'

const SignIn = () => (
  <Flex align="center" justify="center" h="100vh" w="100vw">
    <Flex as="form"flexDir="column" w="100%" maxWidth="360" bg="gray.800" p="8" borderRadius={8}>
      <Stack spacing="4">

        <Input
          type="email"
          name="email"
          label="E-mail"
        />

        <Input
          type="password"
          name="password"
          label="Senha"
        />

      </Stack>
      <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
    </Flex>
  </Flex>
)

export default SignIn
