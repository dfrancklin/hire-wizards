<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';

	import OAuthButtons from '$lib/components/OAuthButtons.svelte';

	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	const { errors, constraints, enhance, submitting } = superForm(data.form);

	let loading = false;

	$: isDisabled = $submitting || loading;
</script>

<div class="min-h-screen flex">
	<div class="p-8 flex justify-center items-center flex-1 max-w-sm">
		<div class="space-y-8">
			<h1 class="h1 text-center">Sign In</h1>

			{#if form?.message}
				<p class="alert variant-ghost-error">{form.message}</p>
			{/if}

			<form class="space-y-4" method="post" use:enhance>
				<label class="label">
					<span>Email</span>
					<input
						class="input"
						class:input-error={$errors.email}
						type="email"
						placeholder="Email"
						name="email"
						{...$constraints.email}
						disabled={isDisabled}
					/>
					{#if $errors.email}
						<span class="text-error-200-700-token">{$errors.email}</span>
					{/if}
				</label>

				<label class="label">
					<span>Password</span>
					<input
						class="input"
						class:input-error={$errors.password}
						type="password"
						placeholder="Password"
						name="password"
						{...$constraints.email}
						disabled={isDisabled}
					/>
					{#if $errors.password}
						<span class="text-error-200-700-token">{$errors.password}</span>
					{/if}
				</label>

				<button class="btn variant-filled w-full" disabled={isDisabled}>
					{#if $submitting}
						<ProgressRadial width="w-5" />
					{/if}

					<span>Submit</span>
				</button>
			</form>

			<hr />

			<OAuthButtons disabled={$submitting} bind:loading />

			<p class="text-center">
				Don't have an account yet? <a class="anchor" href="/sign-up">Sign Up</a>
			</p>
		</div>
	</div>

	<div class="flex-1 bg-white/5">(image)</div>
</div>
