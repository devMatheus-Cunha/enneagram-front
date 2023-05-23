export interface LoginProps {
  email: string
  password: string
}

export async function loginService({ email, password }: LoginProps) {
  try {
    const response = await fetch('URL_DA_API/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const user = await response.json()
    return user
  } catch (error) {
    throw new Error('Erro no servidor')
  }
}
