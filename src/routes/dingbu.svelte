<script>
	import { createEventDispatcher } from 'svelte';
	const dispatcher= createEventDispatcher();

	export let listOpen =true;
	function listShow(){
		listOpen=!listOpen;
		dispatcher('maseege',{text:listOpen})
	}

</script>

<div class="top-bar">
	<div class="zuobu">
		<a href="javascript:;">
			<div class="list" on:click={()=>listShow()}	>
				<i class="iconfont" style="font-size :35px">&#xe77a; </i>
			</div>
		</a>
		<div class="logo">
			<img src="/meifannao.svg" style="height: 35px;" alt="没烦恼" />
			<img
				src="/meifannao.png"
				style="height: 60px;position: relative; bottom: -5px;left: -15px;"
				alt="莓资源"
			/>
		</div>
	</div>
	<div class="user">
		<i class="iconfont">&#xe60e; </i>
	</div>
</div>

<style>
	.top-bar {
		z-index: 99;
		position: fixed;
		top: 0;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 1px solid #dee2e6;
		box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
		border-radius: 3px;
		box-sizing: border-box;
		width: 100%;
		height: 50px;
		/* border: 1px solid yellow;	 */
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.user {
		text-align: center;
		margin-right: 10px;
		width: 40px;
		height: 40px;
		float: right;
		/* border: 1px solid red; */
	}
	.user i {
		font-size: 30px;
		line-height: 40px;
	}
	.zuobu {
		display: flex;
	}
	.logo {
		/* border: 1px solid red; */
		margin-left: 20px;
		height: 40px;
		/* width:100px; */
		justify-content: space-around;
		display: flex;
		justify-items: center;
		align-items: center;
		text-align: center;
	}
	.list {
		height: 40px;
		width: 40px;
		margin-right: 5px;
		margin: 5px 5px 0px 5px;
		/* border: 1px solid red; */
		text-align: center;
		/* margin: ; */
	}
</style>
