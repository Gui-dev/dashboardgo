import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import {
  Input as ChakraInput, FormErrorMessage, FormLabel, FormControl,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

type InputBaseProps = ChakraInputProps & {
  name: string
  label?: string
  error?: FieldError
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputBaseProps> =
({ name, label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={ !!error }>
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
      { !!error && (
        <FormErrorMessage>
          { error.message }
        </FormErrorMessage>
      ) }
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
