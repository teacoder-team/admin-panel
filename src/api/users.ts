import { api } from './instance'
import { UserResponse } from '@/generated'

export const getUsers = () => api.get<UserResponse[]>('/users')
