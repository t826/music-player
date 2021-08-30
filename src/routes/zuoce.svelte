<script>
	import { page } from '$app/stores';
	import Top from './dingbu.svelte';

	let openYingyinList = false;
	let openList = true;
	export let zhuanfa;
	// 左侧列表展开长度
	export let openHeight;

</script>

<Top
	on:maseege={(event) => {
		zhuanfa();
		openList = event.detail.text;
		// console.log('顶部接收到', openList);
	}}
/>

<link rel="stylesheet" href="/iconfont/iconfont.css" />

<div class="left-bar" style="left: {openList ? '0px' : ''};">
	<div class="left-1 ">
		<a
			href="javascript:;"
			class="yingyin-a"
			on:click={() => {
				openYingyinList = !openYingyinList;
			}}
		>
			<i class="iconfont page1"> &#xe624; </i>
			<span>影音娱乐 </span>
			<i class="iconfont jiantou" style="{openYingyinList ? 'transform:rotate(90deg)' : ''};">
				&#xe64a;
			</i>
		</a>
		<ul class="yingyin-list" style="height:{openYingyinList? openHeight : ''}">
			<li class:active={$page.path === '/music-search'}>
				<i class="iconfont page2">&#xe61c; </i>
				<span><a rel="prefetch" href="/music-search">音乐搜索</a> </span>
			</li>
			<li class:active={$page.path === '/music-list'}>
				<i class="iconfont page2">&#xe7fe;</i>
				<span><a rel="prefetch" href="/music-list">音乐列表</a> </span>
			</li>
		</ul>
	</div>
	<div class="left-1">
		<a href="http://www.baidu.com" target="_blank">
			<i class="iconfont page1"> &#xe613;</i>
			<span>优惠充值</span>
		</a>
	</div>
	<div class="left-1">一级菜单</div>
	<div class="left-1">一级菜单</div>
	<div class="left-1">一级菜单</div>

	<li class="nav-item">
		<a rel="prefetch" href="/login" class="nav-link" class:active={$page.path === '/login'}>
			<i class="ion-gear-a" />&nbsp;登陆
		</a>
	</li>
	<li class="nav-item">
		<a rel="prefetch" href="/" class="nav-link" class:active={$page.path === '/'}>
			<i class="ion-gear-a" />&nbsp;主页
		</a>
	</li>
</div>

<style>
	/* 手机样式 */
	@media only screen and (max-width: 768px) {
		a,
		ul {
			color: black;
			list-style-type: none;
		}
		.page1 {
			font-size: 20px;
			margin-right: 8px;
		}
		.page2 {
			font-size: 15px;
			color: rgb(38, 39, 39);
		}

		.left-bar {
			font-family: Helvetica, 'Hiragino Sans GBHiragino Sans GB', 'Microsoft Yahei', '微软雅黑',
				Arial, sans-serif;
			overflow-y: auto;
			overflow-x: hidden;
			/* 固定左侧栏不随鼠标滚动 */
			position: fixed;
			top: 50px;
			bottom: 0;
			left: -180px;
			width: 140px;
			transition: all 0.5s;
		/* 给火狐浏览器一个背景颜色 */
		background-color: rgb(157, 157, 157);
			backdrop-filter: blur(20px);
			-webkit-backdrop-filter: blur(20px);
			box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
			border-right: 1px solid #dee2e6;
			z-index: 100;
			text-align: center;

			/* 兼容火狐浏览器滚动条 */
			scrollbar-color: rgb(250, 76, 76) transparent;
			scrollbar-width: thin;
		}
		.left-bar::-webkit-scrollbar {
			width: 5px;
			height: 3px;
			border-radius: 3px;
		}
		.left-bar::-webkit-scrollbar-thumb {
			border-radius: 5px;
			background-color: rgb(250, 76, 76);
		}

		.left-1 {
			overflow: hidden;
			line-height: 30px;
			background-color: aliceblue;
			font-size: 20px;
			border-radius: 3px;
			margin: 20px 0px;
		}
		.yingyin-a {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.jiantou {
			display: block;
			transition: transform 0.5s;
			transform: rotate(0deg);
		}

		.yingyin-list {
			display: block;
			height: 0px;
			background-color: #d3d3d3;
			transition: height 0.5s;
			-webkit-transition: height 0.5s;
		}

		.active {
			background-color: rgb(0, 190, 190);
		}
	}

	/* 电脑样式 */
	@media only screen and (min-width: 768px) {
		a,
		ul {
			color: black;
			list-style-type: none;
		}
		.page1 {
			font-size: 25px;
			margin-right: 8px;
		}
		.page2 {
			font-size: 20px;
			color: rgb(38, 39, 39);
		}

		.left-bar {
			font-family: Helvetica, 'Hiragino Sans GBHiragino Sans GB', 'Microsoft Yahei', '微软雅黑',
				Arial, sans-serif;
			overflow-y: auto;
			overflow-x: hidden;
			/* 固定左侧栏不随鼠标滚动 */
			position: fixed;
			top: 50px;
			bottom: 0;
			left: -180px;
			width: 180px;
			transition: all 0.5s;
			backdrop-filter: blur(20px);
			-webkit-backdrop-filter: blur(20px);
			box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
			border-right: 1px solid #dee2e6;
			z-index: 100;
			text-align: center;
			transform: translateX(555);
		}
		.left-bar::-webkit-scrollbar {
			width: 5px;
			height: 3px;
			border-radius: 3px;
		}
		.left-bar::-webkit-scrollbar-thumb {
			border-radius: 5px;
			background-color: rgb(250, 76, 76);
		}

		.left-1 {
			overflow: hidden;
			line-height: 40px;
			background-color: aliceblue;
			font-size: 25px;
			border-radius: 3px;
			margin: 20px 0px;
		}
		.yingyin-a {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.jiantou {
			display: block;
			transition: transform 0.5s;
			transform: rotate(0deg);
		}

		.yingyin-list {
			display: block;
			height: 0px;
			background-color: #d3d3d3;
			transition: height 0.5s;
			-webkit-transition: height 0.5s;
		}

		.active {
			background-color: rgb(0, 190, 190);
		}
	}
</style>
