import type { ReactNode } from 'react'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../ui/card'

interface Props {
	children: ReactNode
	heading: string
	description?: string
}

export function AuthWrapper({ children, heading, description }: Props) {
	return (
		<div className='flex h-[100vh] w-full items-center justify-center'>
			<div className='flex w-full flex-col items-center gap-4'>
				<Card className='w-[440px] border-none'>
					<CardHeader className='mt-2 grid gap-y-2 text-center'>
						<CardTitle className='text-3xl'>{heading}</CardTitle>
						<CardDescription>{description}</CardDescription>
					</CardHeader>
					<CardContent>{children}</CardContent>
				</Card>
			</div>
		</div>
	)
}
