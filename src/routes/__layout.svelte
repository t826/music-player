<script>
	import Zuoce from './zuoce.svelte';
	 import {onMount} from 'svelte'
	import A from './player.svelte';
	let open = true;
	let leftLength;

	onMount(() => {
		// 创建查询列表
		let mql = [window.matchMedia('(max-width: 768px)'), window.matchMedia('(min-width: 768px)')];
		function mediaMatchs() {
			if (mql[0].matches) {
				leftLength = '0px';
			} else {
				leftLength = '180px';
			}
		};
		mediaMatchs()
		for (let i = 0; i < mql.length; i++) {
    mql[i].addListener(mediaMatchs)
}
	});
</script>

<Zuoce
	zhuanfa={() => {
		open = !open;
	}}
	openHeight={leftLength=='180px'? '85px':'65px'}
/>
<main>
	<div class="dingbu-down" />
	<div id="content">
		<div class="zuoce-down" style="min-width:{open ? leftLength: '0px'};" />

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
		/* border: 1px solid red; */
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
