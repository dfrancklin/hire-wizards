import { OAuthRequestError } from '@lucia-auth/oauth';
import { error, redirect } from '@sveltejs/kit';

import { auth } from '$lib/server/lucia';
import { providerList } from '$lib/server/oauth-providers.js';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, cookies, locals, params }) => {
	const { provider } = params;

	if (!providerList[provider]) {
		throw error(400, { message: `Invalid provider: ${provider}` });
	}

	const cookieName = `${provider}_oauth_state`;
	const storedState = cookies.get(cookieName);
	const state = url.searchParams.get('state');
	const code = url.searchParams.get('code');

	if (!storedState || !state || storedState !== state || !code) {
		throw error(500, { message: 'Invalid provider state' });
	}

	try {
		const userAuth = await providerList[provider].validateCallback(code);

		let user = await userAuth.getExistingUser();

		if (!user) {
			const userData = providerList[provider].getUserData(userAuth);

			user = await userAuth.createUser({ attributes: userData });
		}

		const session = await auth.createSession({ userId: user.userId, attributes: {} });

		locals.auth.setSession(session);
	} catch (e) {
		console.error('Error:', e);

		if (e instanceof OAuthRequestError) {
			throw error(400, { message: 'Unable to complete authentication with provider' });
		}

		throw error(500, { message: 'An unexpected error occurred' });
	}

	throw redirect(302, '/');
};
