import { forwardRef, ForwardRefRenderFunction } from 'react'
import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react'

type InputBaseProps = ChakraInputProps & {
  name: string
  label?: string
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputBaseProps> =
({ name, label, ...rest }, ref) => {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor="email">{ label }</FormLabel> }
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
        ref={ ref }
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
