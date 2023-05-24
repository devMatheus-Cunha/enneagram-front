interface User {
  id: string
  name: string
  date: Date
  pdfLink: string
  graphicLink: string
}

interface UsersResponse {
  data: User[]
}

export async function getAllUsersService(): Promise<UsersResponse> {
  try {
    const response = await fetch('http://localhost:3000/api/getUsers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const users: UsersResponse = await response.json()
    return users
  } catch (error) {
    throw new Error('Erro no servidor')
  }
}
