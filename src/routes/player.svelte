<script>
	import '../../node_modules/aplayer/dist/APlayer.min.css';
	import { onMount } from 'svelte';

	import { songList, currentPlayer, chooseSong, htmlList, playerlrc, lrcindex } from '../stores.js';

	//获取歌曲长度 长度为0不显示播放器
	export let listLength = 0;
	//播放器当前歌词信息
	let htmlLrc;
	let phonlrc;
	// let openPhoneLrc;

	// 加载播放器
	onMount(async () => {
		localStorage.setItem('aplayer-setting', null);
		const APlayer = import('aplayer');
		APlayer.then((res) => {
			const Aplayer = res.default;
			const ap = new Aplayer({
				container: document.getElementById('aplayer'),
				audio: [],
				mutex: true,
				theme: '#b7daff',
				lrcType: 3,
				preload: 'none',
				listFolded: true,
				storageName: 'aplayer-setting'
			});
			ap.lrc.hide();
			ap.play();
			//上传当前歌曲播放信息
			ap.on('canplay', () => {
				console.log('可以播放了');
				currentPlayer.set({
					playerIdex: ap.list.index, //当前播放跟歌曲序号
					playerImg: ap.list.audios[ap.list.index].cover //当前歌曲图片
				});
				
			});
			//播放结束
			ap.on('ended', () => {
				phonlrc.style.height = '0';
			});
			// ap.on('pause', () => {
			// 	phonlrc.style.height = '0px';
			// });
			ap.on('canplay', () => {
				phonlrc.style.height = '35px';
				console.log('播放了');
			});

			//绑定上传歌词事件
			ap.on('timeupdate', () => {
				if ($lrcindex !== ap.lrc.index) {
					let index = ap.lrc.index;
					lrcindex.set(index);
					phonlrc.innerHTML = ap.lrc.current[index][1];
				}
				if (htmlLrc !== ap.lrc.current) {
					playerlrc.set(ap.lrc.current);
				}
			});

			// html点击播放事件列表播放事件
			chooseSong.subscribe((value) => {
				if (value !== -1) {
					ap.list.switch(value);
					chooseSong.set(-1);
				}
			});

			//订阅搜索结果添加到播放器
			songList.subscribe((songListData) => {
				listLength = songListData.length;
				loadSongList(ap, songListData);
				// console.log(ap);
			});

			//订阅歌词用于对比当播放器歌词触发更新
			playerlrc.subscribe((value) => {
				htmlLrc = value;
			});
		});

		//添加设备宽度监听
		//   let isphone =window.matchMedia('(max-width: 768px)');
		//  openPhoneLrc =isphone.matches
		// function phoneChange(){
		// 	openPhoneLrc =this.matches;
		
		// } 
		// isphone.addListener(phoneChange);
		// $:console.log(openPhoneLrc);
	
});

	// 加载歌曲到播放器列表
	function loadSongList(ap, songData) {
		if (songData.length != 0) {
			ap.list.add(songData);
			htmlList.set(ap.list.audios);
		} else {
			console.log("aplayer hadn't been initialized");
		}
	}
</script>

<div class="songLrc"  bind:this={phonlrc} />
<div id="aplayer" style="height:{listLength <= 0 ? '0px' : ''}" />

<style>
	@media only screen and (max-width: 768px) {
		#aplayer {
			margin: 0px;
			position: fixed;
			width: 100%;
			bottom: 0px;
			z-index: 200;
		}
		.songLrc {
			position: fixed;
			text-align: center;
			font-weight: 600;
			z-index: 200;
			bottom: 90px;
			width: 100%;
			height: 0px;
			line-height: 35px;
			color: rgb(0, 175, 175);
			background-color: rgb(240, 248, 255);
		}
	}
	@media only screen and (min-width: 768px) {
		#aplayer {
			margin: 0px;
			position: fixed;
			width: 100%;
			bottom: 0px;
			z-index: 200;
		}
		.songLrc{
			display: none;
			height: 0;

		}
	}
</style>
