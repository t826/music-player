<script>
	import { dataset_dev, each } from 'svelte/internal';
	let className = 'acg';
	let noullImg = 'http://tva4.sinaimg.cn/large/006sgEkcgy1gsm4smn9pag6064090wgu02.gif';
	async function getClassData(className) {
		const res = await fetch('http://127.0.0.1:5000/get/' + className);
		return await res.json();

		// if (res.ok) {
		// 	console.log(js);
		// 	return js;
		// }
		// else{
		//     return new Error('json error')
		// }
	}

	let classData = getClassData(className);

	getClassData('acg');
	$: console.log(classData);
</script>

<div class="class">
	<div class="classTime">
		<div class="year">年份:</div>
		<div class="timeData">
			{#await classData}
				<span>loading</span>
			{:then data}
				<span>全部</span>
				{#each Object.values(data[className][0].class[0].time).reverse() as one}
					<span> {one} </span>
				{/each}
			{:catch error}
				<span> 网络加载失败 </span>
			{/await}
		</div>
	</div>

	<div class="classType">
		<div class="type">类型:</div>
		<div class="typeData">
			{#await classData}
				<span>loading</span>
			{:then data}
				<span>全部</span>
				{#each Object.values(data[className][0].class[1].type).sort() as one}
					<span> {one} </span>
				{/each}
			{:catch error}
				<span> 网络加载失败 </span>
			{/await}
		</div>
	</div>

	<div class="classPlace">
		<div class="place">地区:</div>
		<div class="placeData">
			{#await classData}
			<span>loading</span>
		{:then data}
			{#each Object.values(data[className][0].class[2].place).sort() as one}
				<span> {one} </span>
			{/each}
		{:catch error}
			<span> 网络加载失败 </span>
		{/await}
	</div>
		</div>
		
	<div class="content">
		{#await classData}
			<p>loading..</p>
		{:then data}
			<!-- <span>{JSON.stringify(data.acg[0].listData)}</span> -->
			{#each data.acg[0].listData as one}
				<div class="one">
					<a href={one.vid}>
						<!-- <div class="img" style="background: url({one.img});" ></div> -->
						<img src={one.img == '' ? noullImg : one.img} alt={one.name} />

						<div class="new">{one.new}</div>
						<span class="vidName">{one.name}</span>
					</a>
				</div>
			{/each}
		{/await}
	</div>
</div>

<style>
	/* 手机样式 */
	@media only screen and (max-width: 768px) {
		/* 分类 */
		.class {
			padding-top: 5px;
			width: 100%;
			/* background-color: cadetblue; */
		}
		.classTime,
		.classType,
		.classPlace {
			margin-bottom: 5px;
			background-color: rgb(175, 175, 175);
			border-bottom: 1px solid red;
		}
		.year,
		.type,
		.place {
			padding-left: 5px;
			background-color: rgb(208, 120, 196);
			font-weight: 600;
		}
		.year span {
			margin-left: 30px;
			height: 60px;
		}
		.timeData {
			white-space: nowrap;
			height: 30px;
			overflow-x: auto;
			/*兼容火狐手机  */
			scrollbar-width: none;
		}
		.timeData::-webkit-scrollbar {
			display: none;
		}
		.timeData span {
			color: rgb(88, 2, 2);
			height: 30px;
			line-height: 30px;
			margin-left: 10px;
			margin-right: 10px;
		}
		.typeData，.placeData{
			overflow: auto;
		}
		.typeData span,.placeData span {
			color: rgb(88, 2, 2);
			height: 30px;
			line-height: 30px;
			margin-left: 10px;
			margin-right: 10px;

}
		/* 分类结束 */
		.content {
			overflow: auto;
			margin-bottom: 50px;
		}
		/* 内容部分 */
		.one {
			text-align: center;
			overflow-x: hidden;
			float: left;
			background-repeat: no-repeat;
			background-color: rgb(136, 191, 156);
			box-shadow: 3px 5px 10px #888888;
			margin-left: 2.5%;
			margin-bottom: 15px;
			width: 30%;
		}
		a {
			color: rgb(0, 99, 99);
			background-color: rgb(74, 74, 74);
		}
		.one .new {
			font-size: 0.7em;
			color: black;
		}
		img {
			/* max-width:100%;max-height:100%;margin: auto; */
			/* 手机 */
			width: 110px;
			height: 140px;
		}

		.one span {
			display: block;
			background-color: rgb(234, 235, 235);
			margin: 0;
			height: 25px;
			line-height: 25px;
			font-weight: 600;
			overflow: hidden;
			font-size: 0.75em;
		}
	}

	/* 平板样式 */
	@media only screen and (min-width: 768px) and (max-width: 780px) {
		/* 分类 */
		.class {
			padding-top: 5px;
			width: 100%;
			background-color: cadetblue;
		}
		.classTime,
		.classType,
		.classPlace {
			margin-bottom: 10px;
			border-bottom: 1px solid red;
		}
		.year,
		.type,
		.place {
			background-color: blueviolet;
			font-weight: 600;
		}
		.year span {
			margin-left: 10px;
			height: 60px;
		}
		/* 分类结束 */
		/* 内容部分 */
		.one {
			text-align: center;
			overflow-x: hidden;
			float: left;
			background-repeat: no-repeat;
			background-color: rgb(248, 245, 245);
			box-shadow: 3px 5px 10px #888888;
			margin-left: 2.5%;
			margin-right: 2.5%;
			margin-bottom: 15px;
			width: 22%;
		}
		a {
			color: rgb(0, 99, 99);
			background-color: rgb(74, 74, 74);
		}
		.one .new {
			font-size: 0.7em;
			color: black;
		}
		img {
			/* max-width:100%;max-height:100%;margin: auto; */
			/* 平板 */
			width: 160px;
			height: 210px;
		}

		.one span {
			display: block;
			background-color: rgb(234, 235, 235);
			margin: 0;
			height: 25px;
			line-height: 25px;
			font-weight: 600;
			overflow: hidden;
			font-size: 0.75em;
		}
		.content {
			overflow-y: auto;
		}
	}

	@media only screen and (min-width: 1200px) {
		.class {
			padding-top: 5px;
			width: 100%;
			background-color: cadetblue;
		}
		.classTime,
		.classType,
		.classPlace {
			margin-bottom: 10px;
			border-bottom: 1px solid red;
		}
		.year,
		.type,
		.place {
			background-color: blueviolet;
			font-weight: 600;
		}
		.year span {
			margin-left: 10px;
			height: 60px;
		}
		/* 分类结束 */
		.content {
			padding-top: 15px;
			max-width: 1600px;
			margin-bottom: 50px;
		}
		/* 内容部分 */
		.one {
			text-align: center;
			overflow-x: hidden;
			float: left;
			background-repeat: no-repeat;
			background-color: rgb(136, 191, 156);
			box-shadow: 3px 5px 10px #888888;
			margin-left: 2.5%;
			margin-bottom: 15px;
			width: 180px;
		}
		a {
			color: rgb(0, 99, 99);
			background-color: rgb(74, 74, 74);
		}
		.one .new {
			font-size: 0.7em;
			color: black;
		}
		img {
			/* max-width:100%;max-height:100%;margin: auto; */
			/* 手机 */
			width: 180px;
			height: 230px;
		}

		.one span {
			display: block;
			background-color: rgb(234, 235, 235);
			margin: 0;
			height: 25px;
			line-height: 25px;
			font-weight: 600;
			overflow: hidden;
			font-size: 0.75em;
		}
	}
	@media only screen and (min-width: 780px) and (max-width: 1200px) {
		.class {
			padding-top: 5px;
			width: 100%;
			background-color: cadetblue;
		}
		.classTime,
		.classType,
		.classPlace {
			margin-bottom: 10px;
			border-bottom: 1px solid red;
		}
		.year,
		.type,
		.place {
			background-color: blueviolet;
			font-weight: 600;
		}
		.year span {
			margin-left: 10px;
			height: 60px;
		}
		/* 分类结束 */
		.content {
			overflow: auto;
			margin-bottom: 50px;
		}
		.content {
			overflow: auto;
			margin-bottom: 50px;
		}
		/* 内容部分 */
		.one {
			text-align: center;
			overflow-x: hidden;
			float: left;
			background-repeat: no-repeat;
			background-color: rgb(136, 191, 156);
			box-shadow: 3px 5px 10px #888888;
			margin-left: 2.5%;
			margin-bottom: 15px;
			width: 180px;
		}
		a {
			color: rgb(0, 99, 99);
			background-color: rgb(74, 74, 74);
		}
		.one .new {
			font-size: 0.7em;
			color: black;
		}
		img {
			/* max-width:100%;max-height:100%;margin: auto; */
			/* 手机 */
			width: 180px;
			height: 230px;
		}

		.one span {
			display: block;
			background-color: rgb(234, 235, 235);
			margin: 0;
			height: 25px;
			line-height: 25px;
			font-weight: 600;
			overflow: hidden;
			font-size: 0.75em;
		}
	}
</style>
