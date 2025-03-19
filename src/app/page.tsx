import { LoginForm } from '@/components/auth/login-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Вход'
}

export default function HomePage() {
	return <LoginForm />
}
