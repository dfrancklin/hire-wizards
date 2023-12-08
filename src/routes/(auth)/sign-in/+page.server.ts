import { fail, redirect, type Actions } from '@sveltejs/kit';
import { LuciaError } from 'lucia';
import { superValidate } from 'sveltekit-superforms/server';

import { auth } from '$lib/server/lucia';
import { SignInSchema } from '$lib/validations';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (event) => {
	const form = superValidate(event, SignInSchema);

	return { form };
};

export const actions: Actions = {
	async default({ request, locals }) {
		const form = await superValidate(request, SignInSchema);

		if (!form.valid) {
			return fail(400, { form, message: null });
		}

		const { email, password } = form.data;

		try {
			const key = await auth.useKey('email', email.toLowerCase(), password);
			const session = await auth.createSession({ userId: key.userId, attributes: {} });

			locals.auth.setSession(session);
		} catch (e) {
			console.log('Error:', e);

			const luciaErrors = ['AUTH_INVALID_KEY_ID', 'AUTH_INVALID_PASSWORD'];

			if (e instanceof LuciaError && luciaErrors.includes(e.message)) {
				return fail(400, { form, message: 'Incorrect username or password' });
			}

			return fail(500, { form, message: 'An unknown error occurred' });
		}

		throw redirect(302, '/');
	}
};
