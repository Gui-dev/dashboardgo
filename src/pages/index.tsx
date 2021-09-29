import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from 'components/Form/Input'

type SignInFormData = {
  email: string
  password: string
}

const SignIn = () => {
  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (data, event) => {
    event.preventDefault()
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <Flex align="center" justify="center" h="100vh" w="100vw">
    <Flex
      as="form"
      flexDir="column"
      w="100%"
      maxWidth="360"
      bg="gray.800"
      p="8"
      borderRadius={8}
      onSubmit={ handleSubmit(handleSignIn) }
    >
      <Stack spacing="4">

        <Input
          type="email"
          name="email"
          label="E-mail"
          { ...register('email') }
        />

        <Input
          type="password"
          name="password"
          label="Senha"
          { ...register('password') }
        />

      </Stack>
      <Button
        type="submit"
        mt="6"
        colorScheme="pink"
        size="lg"
        isLoading={ formState.isSubmitting }
      >
        Entrar
      </Button>
    </Flex>
  </Flex>
  )
}

export default SignIn
