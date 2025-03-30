'use client'

import { useQuery } from '@tanstack/react-query'

import { getUsers } from '@/api/users'

import { DataTable } from '../shared/data-table'

import { columns } from './columns'

export function Users() {
	const { data, isLoading } = useQuery({
		queryKey: ['get users'],
		queryFn: () => getUsers()
	})

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<DataTable columns={columns} data={data ?? []} />
	)
}
