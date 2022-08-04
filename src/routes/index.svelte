<script context="module">
	export const prerender = true;
</script>

<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Portfolio @cloudlessv</title>
	<meta name="description" content="A sveltekit portfolio project with typescript" />
</svelte:head>

<section>
	<h1>coming soon</h1>

	<h2>@cloudlessv</h2>
</section>

<style>
	section {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;

		background: #151515;
		color: #f4f4f4;
	}

	section h1 {
		font-size: 1rem;
		opacity: 0.5;

		user-select: none; /* supported by Chrome and Opera */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none;
	}

	section h2 {
		position: absolute;
		bottom: 0.1rem;
		right: 0.5rem;

		margin: 0;
		font-size: 1rem;
		font-weight: 900;
	}
</style>
