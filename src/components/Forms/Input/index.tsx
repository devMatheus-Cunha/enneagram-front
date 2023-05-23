import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input as InputChakra,
  InputProps,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { EyeSlash, Eye } from '@phosphor-icons/react'

interface IInputProps<T extends FieldValues> extends InputProps {
  error: string | undefined
  label: string
  required?: boolean
  register: UseFormRegister<T>
  name: Path<T>
}

export default function Input<T extends FieldValues>({
  type,
  error,
  name,
  label,
  register,
  required,
  ...props
}: IInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const getInputType = () => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password'
    }
    return type
  }

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>{required ? `${label} *` : label}</FormLabel>
      <InputGroup>
        <InputChakra type={getInputType()} {...props} {...register(name)} />
        {type === 'password' && (
          <InputRightElement>
            <IconButton
              aria-label={showPassword ? 'Hide Password' : 'Show Password'}
              icon={showPassword ? <EyeSlash size={22} /> : <Eye size={22} />}
              variant="ghost"
              onClick={handleTogglePassword}
              _hover={{ background: 'none' }}
              _focus={{ boxShadow: 'none' }}
              _active={{ background: 'none' }}
            />
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  )
}
