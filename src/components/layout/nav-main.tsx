'use client'

import { ChevronRight, type LucideIcon } from 'lucide-react'
import Link from 'next/link'

import { Collapsible } from '@/components/ui/collapsible'
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from '@/components/ui/sidebar'

export function NavMain({
	items
}: {
	items: {
		title: string
		url: string
		icon: LucideIcon
	}[]
}) {
	return (
		<SidebarGroup>
			<SidebarMenu>
				{items.map((item, index) => (
					<SidebarMenuItem key={index}>
						<Link href={item.url}>
							<SidebarMenuButton tooltip={item.title}>
								{item.icon && <item.icon />}
								<span>{item.title}</span>
							</SidebarMenuButton>
						</Link>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	)
}
