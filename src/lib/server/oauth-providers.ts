import type { OAuth2ProviderAuth } from '@lucia-auth/oauth';
import {
	github,
	google,
	type GithubUserAuth,
	type GoogleUserAuth
} from '@lucia-auth/oauth/providers';
import type { Auth, GlobalDatabaseUserAttributes } from 'lucia';

import {
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	HOST_ADDRESS
} from '$env/static/private';

import { auth } from './lucia';

type ProviderAdapter = {
	name: string;
	color: string;
	getAuthorizationUrl: OAuth2ProviderAuth['getAuthorizationUrl'];
	validateCallback: (code: string) => Promise<GoogleUserAuth<Auth> | GithubUserAuth<Auth>>;
	getUserData(userAuth: GoogleUserAuth<Auth> | GithubUserAuth<Auth>): GlobalDatabaseUserAttributes;
};

const googleAuth = google(auth, {
	clientId: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_SECRET,
	redirectUri: `${HOST_ADDRESS}/sign-in/google/callback`,
	scope: ['profile', 'email']
});

const githubAuth = github(auth, {
	clientId: GITHUB_CLIENT_ID,
	clientSecret: GITHUB_CLIENT_SECRET,
	redirectUri: `${HOST_ADDRESS}/sign-in/github/callback`
});

export const providerList: Record<string, ProviderAdapter> = {
	google: {
		name: 'Google',
		color: '!bg-red-800 !text-white',
		...googleAuth,
		getUserData: (userAuth: GoogleUserAuth<Auth>) => {
			const { name, email, picture } = userAuth.googleUser;
			return { name, email, picture };
		}
	},
	github: {
		name: 'GitHub',
		color: '!bg-stone-800 !text-white',
		...githubAuth,
		getUserData(userAuth: GithubUserAuth<Auth>) {
			const { name, email, avatar_url: picture } = userAuth.githubUser;
			return { name, email, picture };
		}
	}
};
