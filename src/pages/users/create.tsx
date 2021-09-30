import Link from 'next/link'
import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack } from '@chakra-ui/react'
import { RiCloseLine, RiSaveLine } from 'react-icons/ri'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { formCreateUserSchema } from 'validations/formCreateUser'
import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { Input } from 'components/Form/Input'

type CreateFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const UserCreate = () => {
  const { formState: { errors, isSubmitting }, handleSubmit, register } = useForm<CreateFormData>({
    resolver: yupResolver(formCreateUserSchema)
  })

  const handleCreateUser: SubmitHandler<CreateFormData> = async (data, event) => {
    event.preventDefault()
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <Box>
      <Header />

      <Flex mx="auto" px={['6', '8']} w="100%" maxWidth={1480}>
        <Sidebar />

        <Box
          as="form"
          flex="1" p={['6', '8']}
          bg="gray.800"
          borderRadius={8}
          onSubmit={ handleSubmit(handleCreateUser) }
        >
          <Heading fontWeight="normal" size="lg">Criar usuário</Heading>
          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid w="100%" minChildWidth="240px" spacing={['6', '8']}>
              <Input
                name="name"
                label="Nome completo"
                { ...register('name') }
                error={ errors.name }
              />
              <Input
                type="email"
                name="email"
                label="E-mail"
                { ...register('email') }
                error={ errors.email }
              />
            </SimpleGrid>

            <SimpleGrid w="100%" minChildWidth="240px" spacing={['6', '8']}>
              <Input
                type="password"
                name="password"
                label="Senha"
                { ...register('password') }
                error={ errors.password }
              />
              <Input
                type="password"
                name="password_confirmation"
                label="Confirmação da senha"
                { ...register('password_confirmation') }
                error={ errors.password_confirmation }
              />
            </SimpleGrid>
          </VStack>

          <Flex justify="flex-end" mt="8">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button
                  as="a"
                  colorScheme="whiteAlpha"
                  leftIcon={<Icon as={RiCloseLine} fontSize="20"/>}
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                leftIcon={<Icon as={RiSaveLine} fontSize="20"/>}
                isLoading={ isSubmitting }
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default UserCreate
