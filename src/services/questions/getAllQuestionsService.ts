export interface Option {
  id: string
  option: string
}

export interface Questions {
  id: string
  texto: string
  options: Option[]
}

export type QuestionsResponse = Questions[]

export async function getAllQuestionsService(): Promise<QuestionsResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENNEAGRAM}/questions/list`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const users: QuestionsResponse = await response.json()
    return users
  } catch (error) {
    throw new Error('Erro no servidor')
  }
}
