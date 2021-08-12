<script>
	import Zuoce from './zuoce.svelte';
	// import {fly} from 'svelte/transition'
	import A from './player.svelte';
	let open = true;
</script>

<Zuoce
	zhuanfa={() => {
		open = !open;
		// console.log('底部收到', open);
	}}
/>
<main>
	<div class="dingbu-down" />
	<div id="content">
		<div class="zuoce-down" style="min-width: {open ? '180px' : '0px'};" />

		<div class="content-center">
			<slot />
		</div>
	</div>
</main>

<A />

<style>
	.dingbu-down {
		width: 100%;
		top: 0px;
		height: 50px;
		min-height: 50px;
		margin-bottom: 5px;
		/* background-color: antiquewhite; */
	}
	#content {
		height: 100%;
		display: flex;
		overflow: hidden;
	}
	.zuoce-down {
		height: 100%;
		/* background-color: bisque; */
		transition: all 0.5s;
	}

	.content-center {
		width: 100%;
		height: 100%;
		/* background-color: rgb(43, 248, 183); */
	}

	main {
		display: flex;
		flex-direction: column;
		position: absolute;
		height: 100%;
		width: 100%;
		
	}
</style>
