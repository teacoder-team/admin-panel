import { Eye, EyeOff } from 'lucide-react'
import { type ComponentProps, forwardRef, useState } from 'react'

import { cn } from '@/lib/utils/tailwind-merge'

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
	({ className, type, ...props }, ref) => {
		const [typeState, setTypeState] = useState(type)

		const isPassword = type === 'password'

		return (
			<div className='relative w-full'>
				<input
					type={isPassword ? typeState : type}
					className={cn(
						'border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground flex h-10 w-full rounded-md border px-3 py-2 text-sm transition-colors duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:dark:ring-blue-700/30',
						isPassword && 'pr-10',
						className
					)}
					ref={ref}
					{...props}
				/>
				{isPassword && (
					<div
						className={cn(
							'absolute right-0 bottom-0 flex h-full items-center justify-center px-3'
						)}
					>
						<button
							className={cn(
								'h-fit w-fit cursor-pointer rounded-sm transition-all outline-none',
								'text-gray-400 dark:text-gray-600',
								'hover:text-gray-500 hover:dark:text-gray-500'
							)}
							type='button'
							onClick={() => {
								setTypeState(
									typeState === 'password'
										? 'text'
										: 'password'
								)
							}}
						>
							<span className='sr-only'>
								{typeState === 'password'
									? 'Show password'
									: 'Hide password'}
							</span>
							{typeState === 'password' ? (
								<Eye
									aria-hidden='true'
									className='size-5 shrink-0'
								/>
							) : (
								<EyeOff
									aria-hidden='true'
									className='size-5 shrink-0'
								/>
							)}
						</button>
					</div>
				)}
			</div>
		)
	}
)
Input.displayName = 'Input'

export { Input }
