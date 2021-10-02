import { useQuery } from 'react-query'

import { api } from 'services/api'
import { formatDate } from 'utils/formatDate'

type User = {
  id: string
  name: string
  email: string
  created_at: string
}

type GetUsersResponse = {
  users: User[]
  totalCount: number
}

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get('/users', {
    params: {
      page
    }
  })
  const totalCount = Number(headers['x-total-count'])
  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: formatDate(user.createdAt)
    }
  })
  return {
    users,
    totalCount
  }
}

export const useUsers = (page: number) => useQuery(['users', { page }], () => getUsers(page), {
  staleTime: 1000 * 5 // 5 segundos
})
