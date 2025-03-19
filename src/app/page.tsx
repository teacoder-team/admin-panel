import type { Metadata } from 'next'

import { LoginForm } from '@/components/auth/login-form'

export const metadata: Metadata = {
	title: 'Вход'
}

export default function HomePage() {
	return <LoginForm />
}
