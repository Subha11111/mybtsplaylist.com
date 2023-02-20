console.log("BTS Songs");
let songIndex = 0;
let audioelement = new Audio('Music/butter.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName: "Butter", filePath: "Music/butter.mp3", coverPath: "img/61CNdrgaz8L._SX450_.jpg"},
    {songName: "Dreamers", filePath: "Music/tomp3.cc - 정국 Jung Kook  Dreamers  FIFA World Cup 2022 Official Soundtrack.mp3", coverPath: "img/Dreamers-Artwork-1040x585.jpg"},
    {songName: "Run", filePath: "Music/Run.mp3", coverPath: "img/96589100.jpg"},
    {songName: "Blood Sweat and Tears", filePath: "Music/tomp3.cc - BTS 방탄소년단 피 땀 눈물 Blood Sweat  Tears Official MV.mp3", coverPath: "img/download.jpeg"}
]

//play/pause
masterPlay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterPlay.classList.remove('play.png');
        masterPlay.classList.add('img/4028568.png');
    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('4028568.png');
        masterPlay.classList.add('img/play.png');
    }
})

audioelement.addEventListener('timeupdate', ()=>{
    console.log('timeudate');
    //updating seekbar
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioelement.currentTime = myProgressBar.value * audioelement.duration/100;
})

// 2ndsong

console.log("BTS Songs");
let songIndex1 = 0;
let audioelement1 = new Audio('Music/dream.mp3');
let masterplay1 = document.getElementById('masterplay1');
let myProgressBar1 = document.getElementById('myProgressBar');
let songs1 = [
    {songName: "Dreamers", filePath: "Music/dream.mp3"},
]

//play/pause
masterplay1.addEventListener('click', ()=>{
    if(audioelement1.paused || audioelement1.currentTime<=0){
        audioelement1.play();
        masterplay1.classList.remove('play.png');
        masterplay1.classList.add('img/4028568.png');
    }
    else{
        audioelement1.pause();
        masterplay1.classList.remove('4028568.png');
        masterplay1.classList.add('img/play.png');
    }
})

audioelement1.addEventListener('timeupdate', ()=>{
    console.log('timeudate');
    //updating seekbar
    progress1 = parseInt((audioelement1.currentTime/audioelement1.duration)*100);
    console.log(progress1);
    myProgressBar1.value = progress1;
})

myProgressBar1.addEventListener('change', ()=>{
    audioelement.currentTime = myProgressBar1.value * audioelement1.duration/100;
})