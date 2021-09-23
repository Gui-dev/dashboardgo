import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react'

type InputProps = ChakraInputProps & {
  name: string
  label?: string
}

export const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor="email">label</FormLabel> }
      <ChakraInput
        name={ name }
        id={ name }
        { ...rest }
        bgColor="gray.900"
        focusBorderColor="pink.500"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'gray.900'
        }}
      />
    </FormControl>
  )
}
