import { writable } from 'svelte/store';

//当前播放器类表也是   html列表
export const htmlList = writable([]);

//搜索歌曲列表
export const songList = writable([]);

//选择播放歌曲序号
export const chooseSong = writable(-1);



// 当前播放歌曲数据
export const currentPlayer = writable({
	playerIdex: 0,
	playerImg: 'https://ae01.alicdn.com/kf/H0b1fe467600f41c2a3495b1af0505aceM.jpg'
});
export const playerlrc = writable([]);
export const lrcindex = writable(0);

//是否可以搜索更多
export const  searchMore =writable(true)

// 获取搜索框数据
export let searchObj = writable({ type: 'migu', text: '周杰伦', page: '1' });

// 搜索歌曲
export async function search(option) {
	// 歌词部分
	function getLrcByUrl(lrcUrl) {
		let songUrl = 'http://43.128.26.51:5000/api/music/get-lyric.lrc?url=';
		return songUrl + lrcUrl;
	}
	// 歌曲主要部分
	await fetch('http://43.128.26.51:5000/api/music/search', {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify(option)
	})
		.then((res) => {
			return res.text();
		})
		.then((res) => {
			try {
				let songGroup = JSON.parse(res).data.list;
				for (let i = 0; i < songGroup.length; ++i) {
					// songGroup[i]['lrc'] = getLrcByUrl(songGroup[i]['lrc']);
					songGroup[i]['lrc'] =
						'http://43.128.26.51:5000/api/music/get-lyric.lrc?url=' + songGroup[i]['lrc'];
				}
				if(songGroup.length !=0){
					songList.set(songGroup);
					console.log(songGroup);
				}else{
					searchMore.set(false)
				}
				
			} catch (e) {
				return 'json erro';
			}
		})
		.catch((e) => {
			return 'network error';
		});
}
