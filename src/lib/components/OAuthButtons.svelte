<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	import { page } from '$app/stores';

	export let disabled = false;
	export let loading = false;

	let selectedProvider = '';

	$: isDisabled = disabled || loading ? 'opacity-30 pointer-events-none' : '';
</script>

{#if $page.data?.providers?.length}
	<div class="space-y-4">
		{#each $page.data.providers as { provider, name, color }}
			<a
				href="/sign-in/{provider}"
				class="btn variant-filled w-full {color} {isDisabled}"
				on:click|once={() => {
					loading = true;
					selectedProvider = provider;
				}}
			>
				{#if selectedProvider === provider}
					<ProgressRadial width="w-5" />
				{/if}

				<span>Sign In with {name}</span>
			</a>
		{/each}
	</div>

	<hr />
{/if}
