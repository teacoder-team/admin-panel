'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import type { UserResponse } from '@/generated'

export const columns: ColumnDef<UserResponse>[] = [
	{
		accessorKey: 'createdAt',
		header: 'Дата создания'
	},
	{
		accessorKey: 'displayName',
		header: 'Имя'
	},
	{
		accessorKey: 'email',
		header: 'Почта'
	},
	{
		accessorKey: 'isMfaEnabled',
		header: 'MFA'
	},
	{
		accessorKey: 'actions',
		header: 'Действия',
		cell: ({ row }) => <MoreHorizontal />
	}
]
