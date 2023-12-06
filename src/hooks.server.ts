import { auth } from '$lib/server/lucia';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const authenticationHandler: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);

	return await resolve(event);
};

const authorizationHandler = (async ({ event, resolve }) => {
	const { locals, route, url } = event;
	const session = await locals.auth.validate();

	if (route.id?.includes('(protected)') && !session) {
		const { pathname, search } = url;
		const location = `/sign-in?redirectTo=${pathname}${search}`;

		throw redirect(302, location);
	}

	return resolve(event);
}) satisfies Handle;

export const handle = sequence(authenticationHandler, authorizationHandler);
