import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import { auth } from '$lib/server/lucia';
import { ERROR_CODE_UNIQUE_CONSTRAINT } from '$lib/server/prisma';
import { SignUpSchema } from '$lib/validations';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (event) => {
	const form = superValidate(event, SignUpSchema);

	return { form };
};

export const actions: Actions = {
	async default({ request, locals }) {
		const form = await superValidate(request, SignUpSchema);

		if (!form.valid) {
			return fail(400, { form, message: null });
		}

		const { name, email, password } = form.data;

		try {
			const user = await auth.createUser({
				key: { providerId: 'email', providerUserId: email.toLowerCase(), password },
				attributes: { name, email }
			});
			const session = await auth.createSession({ userId: user.userId, attributes: {} });

			locals.auth.setSession(session);
		} catch (e) {
			console.log('Error:', e);

			if (e instanceof PrismaClientKnownRequestError) {
				const target = e.meta?.target as string[];

				if (e.code === ERROR_CODE_UNIQUE_CONSTRAINT && target.includes('email')) {
					return fail(400, { form, message: 'User with given email already exists' });
				}
			}

			return fail(500, { form, message: 'An unknown error occurred' });
		}

		throw redirect(302, '/');
	}
};
