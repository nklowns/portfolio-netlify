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

<main>
	<nav>
		<div class="nav-container">
			<div></div>
			<h2>@cloudlessv</h2>
		</div>
	</nav>

	<header>
		<h2>@cloudlessv</h2>
	</header>

	<section>
		<h1>coming soon</h1>
	</section>
</main>

<style>
	main {
		position: relative;
		overflow: visible;

		width: 100%;
		min-height: 100%;
		transform: none;

		background: var(--surface1);
		color: var(--text1);
	}

	nav {
		position: sticky;
		left: 0px;
		top: 0px;
		z-index: 1;

		width: 100%;
		height: min-content;
		backdrop-filter: blur(10px);
		background-color: rgba(0, 0, 0, 0.7);
		will-change: transform;

		flex: 0 0 auto;
		flex-shrink: 0;
		opacity: 1;
		transform: perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg)
			rotateX(0deg) rotateY(0deg) translateZ(0px);
	}
	.nav-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 30px 30px 30px 30px;
		width: 100%;
		height: auto;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 60px;
		padding: 0px 0px 0px 0px;

		width: 100%;
		height: auto;
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
