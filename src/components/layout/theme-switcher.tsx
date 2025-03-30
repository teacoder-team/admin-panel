'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '../ui/button'

export function ThemeSwitcher() {
	const { setTheme } = useTheme()

	return (
		// <div
		// 	className={cn(
		// 		'bg-background ring-border relative flex h-8 rounded-full p-1 ring-1',
		// 		className
		// 	)}
		// >
		// 	{themes.map(({ key, icon: Icon }) => {
		// 		const isActive = theme === key

		// 		return (
		// 			<button
		// 				type='button'
		// 				key={key}
		// 				className='relative size-6 rounded-full'
		// 				onClick={() =>
		// 					setTheme(key as 'light' | 'dark' | 'system')
		// 				}
		// 			>
		// 				{isActive && (
		// 					<div className='bg-secondary absolute inset-0 rounded-full' />
		// 				)}
		// 				<Icon
		// 					className={cn(
		// 						'relative m-auto h-4 w-4',
		// 						isActive
		// 							? 'text-foreground'
		// 							: 'text-muted-foreground'
		// 					)}
		// 				/>
		// 			</button>
		// 		)
		// 	})}
		// </div>

		<div className='flex items-center gap-1'>
			<Button
				variant='ghost'
				size='icon'
				className='h-7 w-7 rounded-md'
				onClick={() => setTheme('light')}
			>
				<Sun className='h-4 w-4' />
				<span className='sr-only'>Light theme</span>
			</Button>
			<Button
				variant='ghost'
				size='icon'
				className='h-7 w-7 rounded-md'
				onClick={() => setTheme('dark')}
			>
				<Moon className='h-4 w-4' />
				<span className='sr-only'>Dark theme</span>
			</Button>
			<Button
				variant='ghost'
				size='icon'
				className='h-7 w-7 rounded-md'
				onClick={() => setTheme('system')}
			>
				<Monitor className='h-4 w-4' />
				<span className='sr-only'>System theme</span>
			</Button>
		</div>
	)
}
