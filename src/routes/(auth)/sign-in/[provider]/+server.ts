import { error, redirect } from '@sveltejs/kit';

import { dev } from '$app/environment';

import { providerList } from '$lib/server/oauth-providers';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies, params }) => {
	const { provider } = params;

	if (!providerList[provider]) {
		throw error(400, { message: `Invalid provider: ${provider}` });
	}

	const [url, state] = await providerList[provider].getAuthorizationUrl();

	if (!state) {
		throw error(500, { message: `Invalid provider state` });
	}

	const cookieOptions = { httpOnly: true, secure: !dev, path: '/', maxAge: 360 };
	const cookieName = `${provider}_oauth_state`;

	cookies.set(cookieName, state, cookieOptions);

	throw redirect(302, url.toString());
};
