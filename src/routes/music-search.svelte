<!-- <script context="module">
	export function load({ session }) {
		return {
			props: {
				musicListJson: session.musicListJson
			}
		};
	}
</script> -->
<script>
	import { goto } from '$app/navigation';
	import { songList, searchObj, search} from '../stores.js';

	export let musicListJson;
	let checkFrom = [
		{ from: 'migu', type: 'migu', msg: 'A' },
		{ from: 'wangyi', type: 'YQD', msg: 'B' },
		{ from: 'kuwo', type: 'YQB', msg: 'C' }
	];
	export let searchJson = { type: 'migu', text: '', page: '1' };


	function handleClick() {
		searchObj.set(searchJson);
        search(searchJson);
        goto('./music-list');
       
	}
	// 歌词部分
	let songUrl = 'http://43.128.26.51:5000/api/music/get-lyric?url=';
	async function getLrcByUrl(lrcUrl) {
		return await fetch(songUrl + lrcUrl)
			.then((res) => {
				return res.text();
			})
			.then((res) => {
				return res;
			})
			.catch((e) => {
				return '暂无歌词';
			});
	}
</script>

<h1>搜索</h1>
<div class="checke-from">
	<form class="search-form">
		<select bind:value={searchJson.type} name="chooseFromc">
			{#each checkFrom as anser}
				<option value={anser.type}>
					{anser.msg}
				</option>
			{/each}
		</select>
		<input type="text" placeholder="输入歌手或歌名" bind:value={searchJson.text} />
		<input
			type="submit"
			value="Search"
			disabled={!searchJson.text}
			on:click|preventDefault={handleClick}
		/>
	</form>
</div>














<style>
	h1 {
		/* border: 1px solid rebeccapurple; */
		text-align: center;
		font-size: 30px;
		margin: 20px;
	}
	.checke-from {
		text-align: center;
		line-height: 50px;
		min-width: 350 px;
		outline: none;
		height: 50px;
		/* border: 2px solid red; */
		/* background-color: red; */
	}
	.search-form select {
		position: relative;
		margin-right: 15px;
		top: 2px;
		/* background-color: aquamarine; */
		text-align: center;
		border-radius: 5px;
		width: 60px;
		font-size: 20px;
	}
	.search-form select,
	.search-form input {
		height: 30px;
		border: none;
	}
	.search-form input {
		margin-right: 15px;
		text-align: center;
		border-radius: 5px;
	}
	.search-form input[type='submit'] {
		background-color: aquamarine;
		width: 60px;
	}
</style>
