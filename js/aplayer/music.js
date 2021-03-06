const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,             //不启用迷你播放模式 吸底模式（fixed:true），迷你模式（mini:true），普通模式（注释此行或者设置fixed:false）
    autoplay: false,         //音频不自动播放 
    theme: '#FADFA3',        //主题色 #FADFA3  #ffffffcf
    loop: 'all',             //音频循环播放, 可选值: 'all', 'one', 'none'
    order: 'list',           //音频循环顺序, 可选值: 'list', 'random'
    preload: 'auto',         //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.8,             //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true,             //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 
    listFolded: false,       //列表默认折叠， false表示不折叠
    listMaxHeight: '120px',  //列表最大高度，超出此高度将有滚动条
    lrcType: 0,              //歌词类型，0表示不显示歌词
    audio: [
        {
			name: 'Still',                     
            artist: 'Timirage',            
            url: '/music/Still.mp3',           
            cover: '/music/Still.jpg',         
            theme: '#46718b'                  
		},
        {
			name: '第三极',                     
            artist: '许巍',            
            url: '/music/第三极.mp3',           
            cover: '/music/disanji.png',         
            theme: '#46718b'                  
		},
        {
			name: 'Umbrella',                     
            artist: 'Ember Island&Matte',            
            url: '/music/Umbrella.mp3',           
            cover: '/music/Umbrella.jpeg',         
            theme: '#46718b'                  
		},
        // {
        //     name: 'Kiss the rain',              //<!-- 歌曲名称-->
        //     artist: 'yiruma',                   //<!-- 歌曲作者-->
        //     url: '/music/Kiss_the_rain.mp3',    //<!-- 歌曲路径-->
        //     cover: '/music/Kiss_the_rain.jpg',  //<!-- 歌曲封面图片-->
        //     theme: '#46718b'                    //<!-- 选中歌曲的主题-->
        // },
		{
			name: 'Mariage damour',                     
            artist: 'Richard Clayderman',            
            url: '/music/Mariage_damour.mp3',           
            cover: '/music/Mariage_damour.jpg',         
            theme: '#46718b'                  
		},
		{
			name: 'The Sound of Silence',                 
            artist: 'PaulSimon&Garfunkel',           
            url: '/music/The_sound_of_silence.mp3',       
            cover: '/music/The_sound_of_silence.jpg',     
            theme: '#46718b'                          
		}
    ]
});

//实现切换音频时，根据音频的封面图片自适应主题色
const colorThief = new ColorThief();
const setTheme = (index) => {
  if (!ap.list.audios[index].theme) {
    colorThief.getColorAsync(ap.list.audios[index].cover, function(color) {
      ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
    });
  }
};
setTheme(ap.list.index);
ap.on('listswitch', (data) => {
  setTheme(data.index);
});
