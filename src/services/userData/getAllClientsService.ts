interface User {
  date: string
  email: string
  ennegramGraph: null | string
  function: string
  id: string
  name: string
}

type UsersResponse = User[]

export async function getAllClientsService(): Promise<UsersResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENNEAGRAM}/clients/list`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const users: UsersResponse = await response.json()
    return users
  } catch (error) {
    throw new Error('Erro no servidor')
  }
}
