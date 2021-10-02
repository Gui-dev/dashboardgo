import { useQuery } from 'react-query'

import { api } from 'services/api'
import { formatDate } from 'utils/formatDate'

type UserProps = {
  id: string
  name: string
  email: string
  created_at: string
}

export const getUsers = async (): Promise<UserProps[]> => {
  const { data } = await api.get('/users')
  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: formatDate(user.createdAt)
    }
  })
  return users
}

export const useUsers = () => useQuery('users', getUsers, {
  staleTime: 1000 * 5 // 5 segundos
})
