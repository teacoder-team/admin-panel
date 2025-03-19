import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../ui/card'

export function LoginForm() {
	return (
		<div className='flex h-[100vh] w-full items-center justify-center'>
			<div className='flex w-full flex-col items-center gap-4'>
				<Card className='w-[440px] border-none'>
					<CardHeader className='mt-2 grid gap-y-2 text-center'>
						<CardTitle className='text-3xl'>
							Войти в админ-панель
						</CardTitle>
						<CardDescription>
							Для доступа в админ панель используйте ваш email и
							пароль
						</CardDescription>
					</CardHeader>
					<CardContent></CardContent>
				</Card>
			</div>
		</div>
	)
}
