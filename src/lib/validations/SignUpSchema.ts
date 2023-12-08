import { z } from 'zod';

export const SignUpSchema = z
	.object({
		name: z.string({ required_error: 'Name must be informed' }).min(3),
		email: z.string({ required_error: 'Email must be informed' }).email(),
		password: z
			.string({ required_error: 'Password must be informed' })
			.min(8, 'Password must contain at least 8 characters'),
		passwordConfirmation: z
			.string({ required_error: 'Password must be informed' })
			.min(8, 'Password Confirmation must contain at least 8 characters')
	})
	.refine((data) => data.password == data.passwordConfirmation, {
		message: "Passwords didn't match",
		path: ['passwordConfirmation']
	});
