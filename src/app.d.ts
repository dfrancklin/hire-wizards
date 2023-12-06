// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia').AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}

	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;

		type DatabaseUserAttributes = {
			name?: string | null;
			email?: string | null;
			picture?: string | null;
		};

		type DatabaseSessionAttributes = Record<string, never>;
	}
}

export {};
