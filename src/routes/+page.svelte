<script lang="ts">
    import { onMount } from 'svelte';

    /** @type {import('./$types').PageData} */
	export let data;

	let componenents: any = [];
	onMount(async () => {
        for (let index = 0; index < data.list.length; index++) {
            const element = (data.list[index] as string).split('.')[0];
            const component = (await import(`../../componenents/${element}.svelte`)).default;
            componenents = [...componenents, component];
        }
	});
</script>

{#each componenents as item}
    <svelte:component this={item} answer={42}>
        <p>some slotted content</p>
    </svelte:component>
{/each}

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
