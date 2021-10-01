export const formatDate = (date: string) => {
  const result = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date(date))

  return result
}
