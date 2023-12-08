import { redirect } from '@sveltejs/kit';

import { providerList } from '$lib/server/oauth-providers';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();

	if (session) throw redirect(302, '/');

	return {
		providers: Object.entries(providerList).map(([provider, { name, color }]) => ({
			provider,
			name,
			color
		}))
	};
};
