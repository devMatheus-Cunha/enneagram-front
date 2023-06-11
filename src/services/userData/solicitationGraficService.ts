interface ApiResponse {
  status: number
  statusText: string
  base64: string
}

export async function solicitationGraficService(
  base64: string,
): Promise<ApiResponse> {
  try {
    const response = await fetch(
      'http://localhost:3000/api/solicitationGrafic',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ base64 }),
      },
    )

    const apiResponse: ApiResponse = {
      status: response.status,
      statusText: response.statusText,
      base64,
    }

    return apiResponse
  } catch (error) {
    throw new Error('Erro no servidor')
  }
}
