<script lang="ts">
	const title: string = 'Daily TODO with Svelte';
</script>

<div class="header">
	<h1>{title}</h1>
</div>
<div class="line"></div>


<style lang="scss">
	.header {
		width: 100%;
		padding: 1px 0;
		background-color: $gray4;
		color: $white;
		text-align: center;
		font-weight: bold;
	}
	.line {
		height: 40px;
		border-bottom: 3px solid $gray4;
	}
</style>