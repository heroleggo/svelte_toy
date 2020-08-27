<script lang="ts">
	const title: string = 'TODO with Svelte';
</script>

<div class="header">
	<h1>{title}</h1>
	<div class="line"></div>
</div>

<style lang="scss">
	.header {
		width: 100%;
		background-color: #74787d;
		color: $white;
		text-align: center;
		font-weight: bold;
	}
	.line {
		border-bottom: 1px solid $gray8;
	}
</style>