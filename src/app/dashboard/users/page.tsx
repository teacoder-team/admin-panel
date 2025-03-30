import type { Metadata } from 'next'

import { Users } from '@/components/users/users'

export const metadata: Metadata = {
	title: 'Пользователи'
}

export default function UsersPage() {
	return <Users />
}
