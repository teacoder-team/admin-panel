'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Turnstile from 'react-turnstile'
import { toast } from 'sonner'
import { z } from 'zod'

import { setSessionToken } from '@/lib/utils'

import { Button } from '../ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '../ui/form'
import { Input } from '../ui/input'

import { AuthWrapper } from './auth-wrapper'
import { MfaForm } from './mfa-form'
import { instance, login } from '@/api'

const loginSchema = z.object({
	email: z
		.string()
		.email({ message: 'Введите корректный адрес электронной почты' }),
	password: z
		.string()
		.min(6, { message: 'Пароль должен содержать хотя бы 6 символов' })
		.max(128, { message: 'Пароль должен содержать не более 128 символов' }),
	captcha: z.string()
})

export type Login = z.infer<typeof loginSchema>

export function LoginForm() {
	const { push } = useRouter()

	const [methods, setMethods] = useState<string[]>([])
	const [ticket, setTicket] = useState<string | null>(null)

	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: Login) => login(data),
		onSuccess(data) {
			if ('ticket' in data && typeof data.ticket === 'string') {
				setTicket(data.ticket)
				setMethods(data.allowedMethods)
			}

			if ('token' in data && typeof data.token === 'string') {
				setSessionToken(data.token)

				instance.headers = {
					'X-Session-Token': data.token
				}

				push('/dashboard')
			}
		},
		onError(error) {
			toast.error(error.message ?? 'Ошибка при входе')
		}
	})

	const form = useForm<Login>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
			captcha: ''
		}
	})

	useEffect(() => {
		if (form.formState.isSubmitSuccessful && form.getValues('captcha')) {
			form.reset()
		}
	}, [form, form.reset, form.formState.isSubmitSuccessful])

	async function onSubmit(data: Login) {
		if (!data.captcha) {
			toast.warning('Пройдите капчу!')
			return
		}

		await mutateAsync(data)
	}

	return methods.length ? (
		<MfaForm ticket={ticket ?? ''} methods={methods} />
	) : (
		<AuthWrapper
			heading='Войти в админ панель'
			description='Для входа на сайт используйте ваш email и пароль, которые были указаны при регистрации на сайте'
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className='space-y-4'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Почта</FormLabel>
									<FormControl>
										<Input
											placeholder='email@teacoder.ru'
											disabled={isPending}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Пароль</FormLabel>
									<FormControl>
										<Input
											type='password'
											placeholder='******'
											disabled={isPending}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='captcha'
							render={({ field }) => (
								<FormItem className='flex flex-col items-center justify-center'>
									<FormControl>
										<Turnstile
											sitekey={
												process.env[
													'TURNSTILE_SITE_KEY'
												]
											}
											onVerify={token =>
												form.setValue('captcha', token)
											}
											theme='light'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button
							type='submit'
							variant='primary'
							isLoading={isPending}
							className='w-full'
						>
							Продолжить
						</Button>
					</div>
				</form>
			</Form>
		</AuthWrapper>
	)
}
