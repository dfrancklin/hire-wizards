<script lang="ts">
	import { AppBar, ProgressRadial } from '@skeletonlabs/skeleton';

	let loading = false;
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a class="font-semibold text-xl" href="/">Hire Wizards</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		{#if loading}
			<ProgressRadial width="w-11" />
		{:else}
			<a
				class="btn hover:variant-ghost-tertiary"
				href="/sign-out"
				on:click|once={() => (loading = true)}
			>
				<span class="flex-auto">Sign Out</span>
			</a>
		{/if}
	</svelte:fragment>
</AppBar>

<div class="container mx-auto p-8">
	<slot />
</div>
