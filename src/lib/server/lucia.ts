import { prisma as prismaAdapter } from '@lucia-auth/adapter-prisma';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';

import { dev } from '$app/environment';
import { prisma } from '$lib/server/prisma';

export const auth = lucia({
	adapter: prismaAdapter(prisma),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	getUserAttributes: (data) => data
});

export type Auth = typeof auth;
