import { API } from '@/lib/api'
import { getSessionToken } from '@/lib/utils'

export const api = new API({
	baseUrl: process.env['API_URL']
})

export const instance = new API({
	baseUrl: process.env['API_URL'],
	headers: {
		'X-Session-Token': getSessionToken() ?? ''
	}
})
