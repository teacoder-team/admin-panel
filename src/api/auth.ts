import type {
	LoginMfaResponse,
	LoginRequest,
	LoginSessionResponse
} from '../generated'
import { removeSessionToken } from '../lib/utils/auth'

import { api, instance } from './instance'

export const login = async (data: LoginRequest) => {
	const response = await api.post<LoginSessionResponse | LoginMfaResponse>(
		'/auth/session/login',
		data
	)

	return response
}

export const logout = async () =>
	await instance
		.post<boolean>('/auth/session/logout')
		.then(() => removeSessionToken())
