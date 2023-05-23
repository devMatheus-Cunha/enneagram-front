export interface ForgetPasswordProps {
  email: string
}

export async function forgetPasswordService({ email }: ForgetPasswordProps) {
  try {
    const response = await fetch('URL_DA_API/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const user = await response.json()
    return user
  } catch (error) {
    throw new Error('Erro no servidor')
  }
}
