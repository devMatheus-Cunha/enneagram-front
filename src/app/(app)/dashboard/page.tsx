'use client'

import React, { Fragment } from 'react'
import {
  VStack,
  Heading,
  Text,
  Box,
  Button,
  Flex,
  Spacer,
  SimpleGrid,
  useColorMode,
  Modal,
  useDisclosure,
} from '@chakra-ui/react'
import { IconButton } from '@/components'

import { useRouter } from 'next/navigation'

import { useGetAllUsers } from '@/hooks/userData/useGetAllUsers'
import { formatDate } from '@/utils/formattedDate'
import { ChartPieSlice, Eye, FilePdf } from '@phosphor-icons/react'
import { toast } from 'react-toastify'
import SkeletonUsersHome from './parts/SkeletonUsersHome'
import FilterModalContent from './parts/FilterModalContent'

export default function Dashboard() {
  const router = useRouter()

  const { colorMode } = useColorMode()
  const { allUsersData, isLoadingaAllUsersData } = useGetAllUsers()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const copyURL = () => {
    const urlToCopy = 'http://localhost:3000/questions'
    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => {
        toast.success('Link copiado com sucesso!', {
          theme: colorMode,
        })
      })
      .catch(() => {
        toast.error('Erro ao copiar Link. Tente novamente!', {
          theme: colorMode,
        })
      })
  }

  return (
    <>
      <VStack spacing={8} align="stretch" p={8}>
        <Box bg="gray.700" p={4} borderRadius={10} lineHeight={8}>
          <Heading size="lg">Olá, ETEL ROSSI, </Heading>
          <Text fontSize="md">
            Abaixo, você pode visualizar todos os formulários que já foram
            enviados pelos seus pacientes ou filtrar para acessar informações
            específicas.
          </Text>
        </Box>
        <Flex borderRadius={10}>
          <Button type="button" bg="gray.700" onClick={onOpen}>
            Filtrar
          </Button>
          <Spacer />
          <Button type="button" bg="gray.700" onClick={copyURL}>
            Compartilhar Formulario
          </Button>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
          minChildWidth="340px"
        >
          {isLoadingaAllUsersData ? (
            <SkeletonUsersHome />
          ) : (
            <>
              {allUsersData?.data?.map((item) => (
                <Fragment key={item.id}>
                  <Flex p={5} bg="gray.700" borderRadius={10} align="center">
                    <Flex direction="column" flex="1">
                      <Text fontSize="22px">{item.name}</Text>
                      <Text fontSize="sm" color="gray.400">
                        {formatDate(item.date)}
                      </Text>
                    </Flex>
                    <Spacer />
                    <Flex gap={3}>
                      <IconButton
                        aria-label="questionsDetails"
                        icon={<Eye size={20} />}
                        tooltip="Detalhes"
                        onClick={() =>
                          router.push(`questionsDetails/${item.id}`)
                        }
                      />
                      <IconButton
                        aria-label="downloadPdf"
                        icon={<FilePdf size={20} />}
                        tooltip="Baixar Pdf"
                        onClick={() => console.log('downloadPdf')}
                      />
                      <IconButton
                        aria-label="downloadGrafic"
                        icon={<ChartPieSlice size={20} />}
                        tooltip="Baixar Gráfico"
                        onClick={() => console.log('downloadGrafic')}
                      />
                    </Flex>
                  </Flex>
                </Fragment>
              ))}
            </>
          )}
        </SimpleGrid>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} id="filterModal" isCentered>
        <FilterModalContent
          onClose={onClose}
          onSubmit={(data: any) => console.log()}
        />
      </Modal>
    </>
  )
}
