import type { PropsWithChildren } from 'react'

import { AppSidebar } from '@/components/layout/app-sidebar'
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger
} from '@/components/ui/sidebar'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className='flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12'>
					<div className='flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6'>
						<SidebarTrigger className='-ml-1' />
					</div>
				</header>
				<div className='flex flex-1 flex-col'>
					<div className='@container/main flex flex-1 flex-col gap-2'>
						<div className='flex flex-col gap-4 px-4 py-4 md:gap-6 md:py-6 lg:px-6'>
							{children}
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
