'use client'

import React, { useState } from 'react'
import usePostSolicitationGrafic from '@/hooks/userData/usePostSolicitationGrafic'
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { RadarChart } from '@/components'

import {
  buttonValues,
  dataGrafic,
  downloadBase64ToPNG,
  questions,
  redirectToQuestion,
} from './utils'

import { useGetAllQuestions } from '@/hooks/questions/useGetAllQuestions'

export default function QuestionsDetails() {
  const [value, setValue] = useState('2')
  const [base64, setBase64] = useState<string>()

  const { allQuestionsData } = useGetAllQuestions()

  const { solicitationGrafic, isLoadingSolicitationGrafic } =
    usePostSolicitationGrafic()

  async function convertSVGToBase64() {
    const svgElement = document.querySelector('.recharts-surface')

    if (svgElement) {
      const serializer = new XMLSerializer()
      const svgContent = serializer.serializeToString(svgElement)
      const base64Data = btoa(svgContent)
      const res = await solicitationGrafic(
        'data:image/svg+xml;base64,' + base64Data,
      )
      setBase64(res.base64)
    }

    return null
  }

  return (
    <Grid
      p={['2', '2', '2', '4']}
      templateAreas={`
      "questions grafic"
    `}
      gridTemplateRows={['1fr', '2fr']}
      gridTemplateColumns={['1fr', '3fr 1fr']}
      gap={[1, 2, 2, 4]}
    >
      <GridItem area="questions">
        <Flex flexDirection="column" gap={8} w="100%">
          {allQuestionsData?.map((question, index) => (
            <Box
              key={index}
              bg="gray.700"
              p="0.8rem"
              borderRadius="md"
              id={`question-${question.texto}`}
            >
              <Text fontSize="md">{`${question.texto})`}</Text>
              <Flex flexDirection="column" gap={5} mt={4}>
                {question?.options?.map((option) => (
                  <Flex flexDirection="column" gap={2} key={option.id}>
                    <Text fontSize="md">{option.option}</Text>
                    <RadioGroup onChange={setValue} value={value}>
                      <Stack direction="row">
                        <Radio value="1">+</Radio>
                        <Radio value="2">-</Radio>
                      </Stack>
                    </RadioGroup>
                  </Flex>
                ))}
              </Flex>
            </Box>
          ))}
        </Flex>
      </GridItem>
      <GridItem
        area="grafic"
        position={['sticky', 'sticky']}
        top="3"
        alignSelf="flex-start"
      >
        <Flex
          flexDirection="column"
          aspectRatio={1}
          borderWidth="1px"
          borderColor="gray.600"
          borderRadius="md"
          height="auto"
          css={{
            '@media (max-width: 600px)': {
              display: 'none',
            },
          }}
        >
          <RadarChart data={dataGrafic} />
          <Button
            isLoading={isLoadingSolicitationGrafic}
            onClick={
              base64
                ? () => downloadBase64ToPNG(base64, 'grafico-mateus-pedreira')
                : () => convertSVGToBase64()
            }
          >
            {base64 ? 'Baixar Grafico' : 'Gerar Gráfico'}
          </Button>
        </Flex>
        <SimpleGrid
          columns={[1, 2, 3, 5]}
          spacing={1}
          mt={[0, 5]}
          p={[0, 2]}
          borderWidth={['0px', '1px']}
          borderColor="gray.600"
          borderRadius="md"
        >
          {buttonValues.map((row, rowIndex) => (
            <Button
              key={rowIndex}
              variant="outline"
              onClick={() => redirectToQuestion(row, questions)}
            >
              {row}
            </Button>
          ))}
        </SimpleGrid>
      </GridItem>
    </Grid>
  )
}
