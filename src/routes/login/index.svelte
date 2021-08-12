<script context="module">
	export function load({ session }) {
		return {
		props: {
			user: session.user
		}
		}
	}
</script>

<script>
  export let user;
</script>

<div id="login">
	<form id="app">
		<p id=" login">欢迎回来</p>
		<input
			bind:value={user.username}
			class="login-input"
			type="text "
			name="userName"
			placeholder="账号"
		/><br />
		<input
			bind:value={user.password}
			class="login-input"
			type="text"
			name="password"
			placeholder="密码"
		/><br />
		<p class="regist"><a href="/login/forget">忘记密码？</a> <a href="/register">没有账号？</a></p>
		<input id="button" type="submit" value="GO" /><br />
	</form>
</div>

<style>
	body {
		background-color: rgb(46, 46, 46);
	}
	#login {
		/* 伸缩布局中的左右居中 */
		margin: 0 auto;
		margin-top: 150px;
		width: 450px;
		height: 500px;
	}

	#app {
		width: 450px;
		height: 400px;
		background-color: rgba(211, 211, 211, 0.3);
		box-shadow: 0px 0px 10px #000;
		border-radius: 1em;
		position: absolute;
		text-align: center;
		margin: auto auto;
		font-size: 25px;
		margin-top: 20px;
		/* 毛玻璃选项 */
		backdrop-filter: blur(2px);
		/* 兼容低版本浏览器毛玻璃 */
		-webkit-backdrop-filter: blur(2px);
	}
	#app p {
		margin-top: 50px;
		font-weight: bolder;
		font-family: 'Courier New', Courier, monospace;
		display: flexbox;
		align-items: center;
		color: black;
	}
	.login-input {
		height: 28px;
		width: 300px;
		text-align: center;
		font-size: 15px;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		border-radius: 20px;
		margin-top: 35px;
		align-items: center;
		border: none;
		padding: 5px;
		border-style: none;
		outline: none;
		background-color: rgba(255, 255, 255, 0.2);
		border-bottom: 1px solid greenyellow;
		margin-bottom: 0px;
	}
	#button {
		width: 200px;
		height: 38px;
		border: none;

		background-color: rgba(240, 236, 236, 0.5);
		margin-top: 25px;
		font-size: 20px;
		border-radius: 20px;
	}
	#button:hover {
		background-color: rgb(124, 119, 121);
	}
	#button:active {
		border: 2px solid yellowgreen;
		outline: none;
	}
	#app .regist {
		/* border: 2px solid red; */
		margin-top: 10px;
		margin-bottom: 5px;
	}
	a {
		text-decoration: none;
		font-size: 12px;
		color: rgb(80, 75, 75);
		margin-top: 0px;
	}
</style>
