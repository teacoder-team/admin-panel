'use client'

import { AreaChart, Book, Users } from 'lucide-react'
import Link from 'next/link'
import type { ComponentProps } from 'react'

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from '@/components/ui/sidebar'

import { Logo } from '../shared/logo'

import { NavMain } from './nav-main'
import { NavUser } from './nav-user'

const data = [
	{
		title: 'Статистика',
		icon: AreaChart,
		url: '/dashboard'
	},
	{
		title: 'Пользователи',
		icon: Users,
		url: '/dashboard/users'
	},
	{
		title: 'Курсы',
		icon: Book,
		url: '/dashboard/courses'
	}
]

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size='lg' asChild>
							<Link href='/dashboard'>
								<div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-600'>
									<Logo
										className='size-5 pl-[1.6px]'
										color='fill-white'
									/>
								</div>
								<div className='flex flex-col gap-0.5 leading-none'>
									<span className='font-semibold'>
										TeaCoder
									</span>
									<span className='text-muted-foreground text-xs'>
										Админ Панель
									</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	)
}
