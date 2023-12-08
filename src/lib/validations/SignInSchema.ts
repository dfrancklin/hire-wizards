import { z } from 'zod';

export const SignInSchema = z.object({
	email: z.string({ required_error: 'Email must be informed' }).email(),
	password: z
		.string({ required_error: 'Password must be informed' })
		.min(8, 'Password must contain at least 8 characters')
});
