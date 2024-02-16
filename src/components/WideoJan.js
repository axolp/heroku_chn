import React, { useState, useEffect, useRef } from 'react';
const lyricsDictionary= {
    27.0: ['我知赴一席一般都是站看齐的\n', ['wo3', 'zhi1', 'fu4', 'yi1', 'xi2', 'yi4', 'ban1', 'dou1', 'shi4', 'zhan4', 'kan4', 'qi2', 'de', '\n']], 30.0: ['可是我一个人站这人么长时间还没有扶手\n', ['ke3', 'shi4', 'wo3', 'yi2', 'ge4', 'ren2', 'zhan4', 'zhe4', 'ren2', 'me', 'zhang3', 'shi2', 'jian1', 'hai2', 'mei2', 'you3', 'fu2', 'shou3', '\n']], 35.0: ['我不太可能\n', ['wo3', 'bu4', 'tai4', 'ke3', 'neng2', '\n']], 36.0: ['我不太可能\n', ['wo3', 'bu4', 'tai4', 'ke3', 'neng2', '\n']], 37.0: ['所以我咒要求坐看进\n', ['suo3', 'yi3', 'wo3', 'zhou4', 'yao1', 'qiu2', 'zuo4', 'kan4', 'jin4', '\n']], 38.0: ['站诈:\n', ['zhan4', 'zha4', ':\n']], 40.0: ['博大家谅解\n', ['bo2', 'da4', 'jia1', 'liang4', 'jie3', '\n']], 41.0: ['请大家谅解\n', ['qing3', 'da4', 'jia1', 'liang4', 'jie3', '\n']], 42.0: ['刚才介绍片上头击我今年81罗\n', ['gang1', 'cai2', 'jie4', 'shao4', 'pian4', 'shang4', 'tou', 'ji1', 'wo3', 'jin1', 'nian2', '81', 'luo2', '\n']], 45.0: ['阴直外绍片上头吉我今年81加\n', ['yin1', 'zhi2', 'wai4', 'shao4', 'pian4', 'shang4', 'tou', 'ji2', 'wo3', 'jin1', 'nian2', '81', 'jia1', '\n']], 46.0: ['那是老的\n', ['na4', 'shi4', 'lao3', 'de', '\n']], 47.0: ['我今年87罗了\n', ['wo3', 'jin1', 'nian2', '87', 'luo2', 'le', '\n']], 48.0: ['', []], 52.0: ['', []], 53.0: ['', []], 54.0: ['', []], 55.0: ['”今天我要刘的这个题目\n', ['”', 'jin1', 'tian1', 'wo3', 'yao4', 'liu2', 'de', 'zhe4', 'ge4', 'ti2', 'mu4', '\n']], 56.0: ['今天我要i井的这个题目\n', ['jin1', 'tian1', 'wo3', 'yao4', 'i', 'jing3', 'de', 'zhe4', 'ge4', 'ti2', 'mu4', '\n']], 57.0: ['”今天我要刘的这个题目\n', ['”', 'jin1', 'tian1', 'wo3', 'yao4', 'liu2', 'de', 'zhe4', 'ge4', 'ti2', 'mu4', '\n']], 58.0: ['四\n', ['si4', '\n']], 59.0: ['            人他们名间什么呢\n', ['            ', 'ren2', 'ta1', 'men', 'ming2', 'jian1', 'shen2', 'me', 'ne', '\n']], 60.0: ['', []], 61.0: ['          我讽款了几个题目\n', ['          ', 'wo3', 'feng3', 'kuan3', 'le', 'ji3', 'ge4', 'ti2', 'mu4', '\n']], 63.0: ['四\n', ['si4', '\n']], 64.0: ['主办方疯那么你融谈谈莹国吧\n', ['zhu3', 'ban4', 'fang1', 'feng1', 'na4', 'me', 'ni3', 'rong2', 'tan2', 'tan2', 'ying2', 'guo2', 'ba', '\n']], 66.0: ['站  本\n', ['zhan4', '  ', 'ben3', '\n']], 67.0: ['上所以我融谈谈索国\n', ['shang4', 'suo3', 'yi3', 'wo3', 'rong2', 'tan2', 'tan2', 'suo3', 'guo2', '\n']], 70.0: ['      加\n', ['      ', 'jia1', '\n']], 71.0: ['其买答国这个事本来是不需要谈的\n', ['qi2', 'mai3', 'da2', 'guo2', 'zhe4', 'ge4', 'shi4', 'ben3', 'lai2', 'shi4', 'bu4', 'xu1', 'yao4', 'tan2', 'de', '\n']], 73.0: ['其买演国这个事本来是不需要谈的\n', ['qi2', 'mai3', 'yan3', 'guo2', 'zhe4', 'ge4', 'shi4', 'ben3', 'lai2', 'shi4', 'bu4', 'xu1', 'yao4', 'tan2', 'de', '\n']], 74.0: ['因为笑这个事本来是一种目友的感情\n', ['yin1', 'wei4', 'xiao4', 'zhe4', 'ge4', 'shi4', 'ben3', 'lai2', 'shi4', 'yi1', 'zhong3', 'mu4', 'you3', 'de', 'gan3', 'qing2', '\n']]
  };

function VideoPlayer() {
  const videoRef = useRef(null);
  const lyricsDivRef= useRef(null);
  const buttonContainerRef= useRef(null);
  const [lyrics, setLyrics] =  useState("");


  
  

  useEffect(()=>{


    const CreateCharacterDiv= (hanzi, pinyin, definicja) =>{
        console.log("tworze diva")
        const CharacterContainer= document.createElement('div');
        CharacterContainer.classList.add('CharacterContainer');
        

        const PinYinContainer= document.createElement('div');
        PinYinContainer.classList.add('PinYinContainer');
        PinYinContainer.innerText= pinyin;

        const HanZiContainer= document.createElement('div');
        HanZiContainer.classList.add('HanZiContainer');
        HanZiContainer.innerText= hanzi;

        const AngContainer= document.createElement('div');
        AngContainer.classList.add('AngContainer');
        AngContainer.innerText= definicja;

        

         CharacterContainer.appendChild(AngContainer);
         CharacterContainer.appendChild(HanZiContainer);
         CharacterContainer.appendChild(PinYinContainer);

         lyricsDivRef.current.appendChild(CharacterContainer);

    }
const DeleteCharacterDivs=()=> {
    while(lyricsDivRef.current.firstChild){
        lyricsDivRef.current.removeChild(lyricsDivRef.current.firstChild);
    }
}
    
    const handleTimeUpdate= ()=>{
        let time= Math.floor(videoRef.current.currentTime);
        let text= '';
        //console.log(time);

        if (lyricsDictionary[time]){
            DeleteCharacterDivs();

            text= lyricsDictionary[time][0]
            let hanzi= "";
            let pinyin= "";
            let definicja= "";
            for(let i=0; i <text.length; i++){
                //console.log(text[i]);
                const charDiv= document.createElement('div');
                charDiv.innerText= text[i];
                charDiv.classList.add('character');
                //lyricsDivRef.current.appendChild(charDiv);


                hanzi= lyricsDictionary[time][0][i];
                pinyin= lyricsDictionary[time][1][i];
                definicja= "ang";
                CreateCharacterDiv(hanzi, pinyin, definicja);
            }
            //CreateCharacterDiv();
        }else{
            //console.log("powino btc stare");
        }
    };

  
    
    videoRef.current.addEventListener('timeupdate', handleTimeUpdate);

   

  }, []);

  

  


  return (
    <div>
      <video ref={videoRef} width="750" controls>
        <source src="videos/patriotyzm.mp4" type="video/mp4" />
        Przepraszamy, Twoja przeglądarka nie obsługuje osadzonych wideo.
      </video>
      <div ref={lyricsDivRef}>

        
        {lyrics}
        <button></button>
        
      </div>

      <div>
  
  
</div>
     
    </div>

  );
}

export default VideoPlayer;
