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