<script>
	import { onMount } from 'svelte';

	import {
		playerlrc,
		currentPlayer,
		searchObj,
		chooseSong,
		search,
		htmlList,
		lrcindex,
		searchMore
	} from '../stores';
	import Conten from './conten.svelte';

	// 当前播放歌曲数据
	let imgSong = '';
	let SongIndex;
	let lrcIdex;
	let songlrc;
	let lrcMove;

	//是否可执行下一页
	let canNextpage;
	searchMore.subscribe((value) => {
		canNextpage = value;
		//  console.log('canNextpage:',canNextpage);
	});
	// lrcLenght.scrollTop=
	//当前播放器活动歌曲信息
	currentPlayer.subscribe((currentplay) => {
		imgSong = currentplay.playerImg;
		SongIndex = currentplay.playerIdex;
	});
	playerlrc.subscribe((value) => {
		songlrc = value;
	});
	lrcindex.subscribe((value) => {
		lrcIdex = value;
		if (lrcMove) {
			lrcMove.scrollTop = lrcIdex * 35 - 70;
		}
	});
	let show;
	//歌词移动
	onMount(() => {
		lrcMove;
	});
	//   播放器列表
	let htmldata = null;
	htmlList.subscribe((value) => {
		htmldata = value;
		// console.log(htmldata);
		if (htmldata.length !== 0) {
			show = false;
		} else {
			show = true;
		}
	});

	//点击播放列表歌曲
	function handleItemClick(index) {
		let clickedItem = htmldata[index];
		chooseSong.set(index);
	}

	// 下一页
	function nextPage() {
		searchObj.update((data) => {
			let next = parseInt(data.page) + 1;
			data.page = next.toString();
			return data;
		});
		search($searchObj);
	}
</script>

<div class="content">
	<div class="lef">
		{#if htmldata == ''}
			<div class="none-list">
				<i class="iconfont" style="font-size: 150px;">&#xe621;</i>
				<h1>空空如也</h1>
			</div>
		{:else}
			<ol class="a">
				{#each htmldata as song, index}
					<li
						class="one-song"
						class:songplaying={SongIndex == index}
						on:click={() => handleItemClick(index)}
					>
						<span class="index"><b>{index + 1}</b></span>
						<span class="name-song"><b>{song.name}</b></span>
						<span class="songer">{song.artist}</span>
					</li>
				{/each}

				{#if htmldata.length >= 20 && canNextpage}
					<a href="javascript:;" class="next-page" on:click={nextPage}>加载更多...</a>
				{:else}
					<a href="javascript:;" class="next-page">没有更多了</a>
				{/if}
			</ol>
		{/if}
	</div>

	<div class="info-song"  hidden={show}>
		<div class="img-song"><img src={imgSong} alt="song-img" /></div>
		<div class="text-song">
			<div class="text-song-name">{htmldata.length > 0 ? htmldata[SongIndex].name : ''}</div>
		</div>
		<div class="aplayer-lrc" id="lrcLenght" bind:this={lrcMove}>
			<div class="aplayer-lrc-contents">
				{#each songlrc as p, index}
					<p class:red={lrcIdex == index}>
						{p[1]}
					</p>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	/* 手机样式 */
	@media only screen and (max-width: 768px) {
		.content {
			display: flex;
			position: relative;
			width: 100%;
			height: 100%;
			/* border: 1px solid red; */
			/* background-color: aliceblue; */
		}
		.lef {
		/* 音乐列表区布局 */
		position: relative;
		overflow-y: auto;
		width: 100%;

		/* background-color:  green; */
	}
	.lef::-webkit-scrollbar {
			width: 5px;
			height: 3px;
			border-radius: 3px;
	}
	.lef::-webkit-scrollbar-thumb {
			border-radius: 5px;
			background-color: rgb(250, 76, 76);
	}
	.one-song {
			display: flex;
			justify-content: space-between;
			height: 60px;
			line-height: 60px;
			padding: 0px 15px;
			border: 1px solid grey;
			background-color: rgba(198, 200, 202, 0.6);
			box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
			border-radius: 3px;
		}
		
		.index {
			width: 40px;
		}
		.name-song {
			padding-left: 10px;
			text-align: left;
			overflow: hidden;
			width: 80%;
			text-overflow: ellipsis;
			/*溢出的文字使用圆点显示*/
		}
		.songer {
			text-align: center;
			overflow: hidden;
			float: left;
			width: 20%;
		}

		.next-page {
			/* border: 1px solid yellow; */
			background-color: rgba(152, 157, 160, 0.3);
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
			display: block;
			text-align: center;
			font-weight: 800;
			letter-spacing: 5px;
			line-height: 30px;
			height: 30px;
			margin-bottom: 140px;
			color: rgb(250, 76, 76);
		}
	.none-list{
		text-align: center;
		margin: 50% auto;
	}
	/* 播放中歌曲样式 */
	.songplaying {
			background-color: rgb(0, 175, 175);
			color: aliceblue;
		}




	.info-song {
			/* 歌曲右半部分 图片和歌词信息 */
			display: none;
			background-color: rgb(25, 25, 25);
			backdrop-filter: blur(3px);
			-webkit-backdrop-filter: blur(3px);
			overflow-y: auto;
		}
	}

	/* 手机样式结束 */



























	@media only screen and (min-width: 768px)  {
		/* 电脑样式 */
		.content {
			display: flex;
			position: relative;
			width: 100%;
			height: 100%;
			/* border: 1px solid red; */
			/* background-color: aliceblue; */
		}

		/* 音乐列表区 */

		.lef {
			/* 音乐列表区布局 */
			position: relative;
			overflow-y: auto;
			width: 50%;
			/* border: 1px solid green; */
		}
		.lef::-webkit-scrollbar {
			width: 5px;
			height: 3px;
			border-radius: 3px;
		}
		.lef::-webkit-scrollbar-thumb {
			border-radius: 5px;
			background-color: rgb(250, 76, 76);
		}

		.one-song {
			display: flex;
			justify-content: space-between;
			height: 60px;
			line-height: 60px;
			padding: 0px 15px;
			border: 1px solid grey;
			background-color: rgba(198, 200, 202, 0.6);
			box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
			border-radius: 3px;
		}
		.one-song:hover {
			background-color: rgba(150, 151, 152, 0.6);
		}
		.index {
			width: 40px;
		}
		.name-song {
			padding-left: 10px;
			text-align: left;
			overflow: hidden;
			width: 80%;
			text-overflow: ellipsis;
			/*溢出的文字使用圆点显示*/
		}
		.songer {
			text-align: center;
			overflow: hidden;
			float: left;
			width: 20%;
		}

		.next-page {
			/* border: 1px solid yellow; */
			background-color: rgba(152, 157, 160, 0.3);
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
			display: block;
			text-align: center;
			font-weight: 800;
			letter-spacing: 5px;
			line-height: 30px;
			height: 30px;
			margin-bottom: 140px;
			color: rgb(250, 76, 76);
		}
		.none-list {
			text-align: center;
			position: absolute;
			left: 35%;
			top: 50%;
			/* background-color: aqua; */
		}
		/* 音乐列表结束 */

		/* 音乐图片区 */

		.info-song {
			/* 歌曲右半部分 图片和歌词信息 */
			width: 50%;
			background-color: rgba(198, 200, 202, 0.6);
			backdrop-filter: blur(3px);
			-webkit-backdrop-filter: blur(3px);
			overflow-y: auto;
		}
		.info-song::-webkit-scrollbar {
			width: 5px;
			height: 3px;
			border-radius: 3px;
		}
		.info-song::-webkit-scrollbar-thumb {
			border-radius: 5px;
			background-color: rgb(250, 76, 76);
		}

		/* 播放器播放中 */
		.songplaying {
			background-color: rgb(0, 175, 175);
			color: aliceblue;
		}

		.img-song {
			width: 350px;
			height: 350px;
			margin: 10px auto;
			box-sizing: border-box;
			border-radius: 5px;
			box-shadow: 5px -3px 10px 5px grey;
			border: 4px solid rgb(0, 175, 175);
		}
		.img-song img {
			border-radius: 3px;
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			background-size: cover;
			background-position: center;
			background-repeat: none;
			transition: all 0.3s ease;
		}
		/* 音乐图片结束 */
		/* 歌词歌曲部分 */
		.text-song {
			margin: 0 auto;
			/* background-color: aqua; */
			width: 400px;
		}
		.text-song-name {
			font-size: 30px;
			/* background-color: azure; */
			color: rgb(64, 64, 64);
			font-weight: 900;
			text-align: center;
			text-shadow: 1px 3px 7px grey;
			max-width: 400px;
		}

		.aplayer-lrc {
			margin: 5px auto 100px;

			width: 400px;
			height: auto;
			border-radius: 5px;
			max-height: 150px;
			overflow-y: auto;
			transition: all 0.5s ease-out;
			background-color: aliceblue;
		}

		.aplayer-lrc::-webkit-scrollbar {
			width: 5px;
			height: 3px;
			border-radius: 3px;
		}
		.aplayer-lrc::-webkit-scrollbar-thumb {
			border-radius: 5px;
			background-color: rgb(44, 42, 42);
		}

		.aplayer-lrc-contents {
			font-family: Barlow, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC',
				'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei',
				sans-serif;
			text-align: center;
			height: 100%;
			font-weight: 500;
			transition: all 0.5s ease-out;
			margin-top: 10px;
		}
		.aplayer-lrc-contents p {
			height: 30px;
			line-height: 30px;
			text-overflow: ellipsis; /* 溢出用省略号显示 */
			overflow: hidden; /* 超出的文本隐藏 */
			margin-top: 5px;
		}

		.red {
			color: rgb(0, 175, 175);
			font-weight: 600;
			font-size: 18px;
		}
	}
</style>
