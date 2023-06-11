export function formatDate(date: string): string {
  const dateRes = new Date(date)
  return dateRes.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
