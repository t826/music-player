<script>
	import HomeData from './homeData.svelte';
	import ClassData from './classData.svelte'
	let vidName;
	let searchData;
	let BasicData;
	//搜索vid数据
	async function searcheVid(vidName) {
		await fetch('http://127.0.0.1:5001/search', {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify({ name: vidName })
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				 searchData = JSON.parse(res);
				
			})
			.catch((e) => {
				return 'json erro';
			});
	}

	//获取首页及各项分类
	async function getBasicData(dataName){
		const res =await fetch('http://127.0.0.1:5001/get'+dataName)

		
	}
</script>

<div id="search">
	<form action="search-form">
		<input type="text" placeholder="点我搜索,别写错别字,不然搜不到!" bind:value={vidName} />
		<span
			class="search-button"
			
		>
			<i class="iconfont">&#xe800;</i>
		</span>
		<input type="submit" class="search-button" value="" 
		style="background-color:transparent;"
		disabled={!vidName}
		on:click|preventDefault={() => {
			searcheVid(vidName);
		}}
		>
	</form>
</div>
<div class="daoHang">
	<span><a href="javascript:;">首页</a></span>
	<span><a href="javascript:;">动漫</a></span>
	<span><a href="javascript:;">电影</a></span>
	<span><a href="javascript:;">综艺</a></span>
	<span><a href="javascript:;">电视剧</a></span>
</div>
<div class="videp-content"  >
	<!-- <HomeData/> -->
	<ClassData/>

</div>

<style>
	@media only screen and (max-width: 768px) {
		/* 搜索块 */
		#search {
			position: relative;
			margin: 10px auto;
			max-width: 800px;
			width: 95%;
			/* border: 1px solid red; */
		}
		/* video 搜索输入框 */
		input {
			height: 36px;
			line-height: 36px;
			color: rgb(255, 255, 255);
			letter-spacing: 3px;
			font-weight: 600;
			box-sizing: border-box;
			width: 100%;
			text-align: justify;
			padding: 0 30px;
			outline: none;
	
			border-radius: 50px;
			background-color: rgba(46, 61, 61, 0.6);
			border: 1px solid rgb(0, 175, 175);
		}
		input::-webkit-input-placeholder {
			/* 修改字体颜色 */
			color: rgb(197, 197, 197);
			/* 修改字号，默认继承input */
			font-size: 0.9em;
		}
		input::-moz-placeholder {
			/* 修改字体颜色 */
			color: rgb(255, 253, 255);

			/* 修改字号，默认继承input */
			font-size: 0.9em;
		}
		/* 搜索按钮 */
		.search-button {
			position: absolute;
			background-color: rgb(224, 226, 226);
			text-align: center;
			right: 5px;
			top: 4px;
			width: 20%;
			height: 28px;
			line-height: 28px;
			border-radius: 0 12px 12px 0px;
			border: none;
		}
		/* 搜索图标 */
		.search-button i {
			display: block;
			font-size: 1.5em;
		}
		/* video 首页及分类导航 */
		.daoHang {
			display: flex;
			align-items: center;
			justify-content: space-around;
			background-color: rgb(94, 199, 238);
			font-weight: 600;

			height: 40px;
		}
		.daoHang span {
			display: block;
			border-radius: 5px;
			text-align: center;
			background-color: azure;
			height: 25px;
			line-height: 25px;
			width: 60px;
		}
		.videp-content{
			overflow-y: auto;
			/* background-color: azure; */
			width: 100%;
			height: 80%;
			padding-bottom: 50px;
			/* 兼容火狐浏览器滚动条 */
			scrollbar-color: rgb(250, 76, 76) transparent;
			scrollbar-width: thin;

		}
		.videp-content::-webkit-scrollbar {
			width: 5px;
			height: 3px;
			border-radius: 3px;
		}
		.videp-content::-webkit-scrollbar-thumb {
			border-radius: 5px;
			background-color: rgb(250, 76, 76);
		}

	}














/* 平板 及电脑 */
	@media only screen and (min-width: 768px) and (max-width:1200px) {
		/* 搜索块 */
		#search {
			position: relative;
			margin: 10px auto;
			max-width: 800px;
			width: 90%;
			/* border: 1px solid red; */
		}
		/* video 搜索输入框 */
		input {
			height: 44px;
			line-height: 36px;
			color: rgb(255, 255, 255);
			letter-spacing: 3px;
			font-weight: 700;
			box-sizing: border-box;
			width: 100%;
			text-align: justify;
			padding: 0 30px;
			outline: none;
			/* outline-style: 2px solid rgb(0,175,175); */
			/* outline:1px solid green ; */
			border-radius: 50px;
			background-color: rgba(46, 61, 61, 0.6);
			border: 1px solid rgb(0, 175, 175);
		}
		input::-webkit-input-placeholder {
			/* 修改字体颜色 */
			color: rgb(197, 197, 197);
			/* 修改字号，默认继承input */
			font-size: 1.2em;
		}
		input::-moz-placeholder {
			/* 修改字体颜色 */
			color: rgb(255, 253, 255);

			/* 修改字号，默认继承input */
			font-size: 1.2em;
		}
		/* 搜索按钮 */
		.search-button {
			position: absolute;
			background-color: rgb(224, 226, 226);
			text-align: center;
			right: 8px;
			top: 5px;
			width: 15%;
			height: 32px;
			line-height: 32px;
			border-radius: 0 14px 14px 0px;
			border: none;
		}
		
		/* 搜索图标 */
		.search-button i {
			display: block;
			font-size: 1.5em;
		}
		/* video 首页及分类导航 */
		.daoHang {
			display: flex;
			align-items: center;
			justify-content: space-around;
			background-color: rgb(94, 199, 238);
			font-weight: 600;
			height: 40px;
		}
		.daoHang span {
			display: block;
			border-radius: 5px;
			text-align: center;
			background-color: azure;
			height: 25px;
			line-height: 25px;
			width: 60px;
		}
		.videp-content{
			overflow-y: auto;
			background-color: azure;
			width: 100%;
			height: 80%;
			padding-bottom: 50px;
			/* 兼容火狐浏览器滚动条 */
			scrollbar-color: rgb(250, 76, 76) transparent;
			scrollbar-width: thin;

		}
		.videp-content::-webkit-scrollbar {
			width: 5px;
			height: 3px;
			border-radius: 3px;
		}
		.videp-content::-webkit-scrollbar-thumb {
			border-radius: 5px;
			background-color: rgb(250, 76, 76);
		}
	}	
 /* 最大宽度 */
	@media only screen and (min-width: 1200px) {
		/* 搜索块 */
		#search {
			position: relative;
			margin: 10px auto;
			max-width: 800px;
			width: 90%;
			/* border: 1px solid red; */
		}
		/* video 搜索输入框 */
		input {
			height: 44px;
			line-height: 36px;
			color: rgb(255, 255, 255);
			letter-spacing: 3px;
			font-weight: 700;
			box-sizing: border-box;
			width: 100%;
			text-align: justify;
			padding: 0 30px;
			outline: none;
			/* outline-style: 2px solid rgb(0,175,175); */
			/* outline:1px solid green ; */
			border-radius: 50px;
			background-color: rgba(46, 61, 61, 0.6);
			border: 1px solid rgb(0, 175, 175);
		}
		input::-webkit-input-placeholder {
			/* 修改字体颜色 */
			color: rgb(197, 197, 197);
			/* 修改字号，默认继承input */
			font-size: 1.2em;
		}
		input::-moz-placeholder {
			/* 修改字体颜色 */
			color: rgb(255, 253, 255);

			/* 修改字号，默认继承input */
			font-size: 1.2em;
		}
		/* 搜索按钮 */
		.search-button {
			position: absolute;
			background-color: rgb(224, 226, 226);
			text-align: center;
			right: 8px;
			top: 5px;
			width: 15%;
			height: 32px;
			line-height: 32px;
			border-radius: 0 14px 14px 0px;
			border: none;
		}
		
		/* 搜索图标 */
		.search-button i {
			display: block;
			font-size: 1.5em;
		}
		/* video 首页及分类导航 */
		.daoHang {
			display: flex;
			align-items: center;
			justify-content: space-around;
			background-color: rgb(94, 199, 238);
			font-weight: 600;
			height: 40px;
		}
		.daoHang span {
			display: block;
			border-radius: 5px;
			text-align: center;
			background-color: azure;
			height: 25px;
			line-height: 25px;
			width: 60px;
		}
		.videp-content{
			overflow-y: auto;
			background-color: azure;
			width: 100%;
			height: 80%;
			padding-bottom: 50px;
			/* 兼容火狐浏览器滚动条 */
			scrollbar-color: rgb(250, 76, 76) transparent;
			scrollbar-width: thin;

		}
		.videp-content::-webkit-scrollbar {
			width: 5px;
			height: 3px;
			border-radius: 3px;
		}
		.videp-content::-webkit-scrollbar-thumb {
			border-radius: 5px;
			background-color: rgb(250, 76, 76);
		}
	}	
</style>
