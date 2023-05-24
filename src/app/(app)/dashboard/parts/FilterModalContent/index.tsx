import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react'
import React from 'react'

interface IFilterModalProps {
  onClose: () => void
  onSubmit: (values: any) => void
}

export default function FilterModalContent({
  onClose,
  onSubmit,
}: IFilterModalProps) {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filtrar Dados da Listagem</ModalHeader>
        <ModalCloseButton />
        <ModalBody>TEste</ModalBody>

        <ModalFooter>
          <Button variant="link" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button>Filtrar</Button>
        </ModalFooter>
      </ModalContent>
    </>
  )
}
