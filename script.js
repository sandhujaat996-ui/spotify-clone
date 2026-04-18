let play = document.getElementById('play');
let progressBar = document.getElementById('progressBar');
let audio = new Audio('Audio/1.mp3');

let currentSong = 1;

play.addEventListener('click' , ()=>{
    if(audio.paused || audio.currentTime == 0){
        audio.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    }else{
        audio.pause();
         play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
    }
});
audio.addEventListener('timeupdate',() => {
    let progress = (audio.currentTime/audio.duration) * 100;
    progressBar.value = progress;
    progressBar.style.background =`linear-gradient(to right, #177200ff ${progress}%, #333 ${progress}%)`;

});

progressBar.addEventListener('input', function () {
let value=this.value;
this.style.background =`linear-gradient(to right, #177200ff ${value}%, #333 ${value}%)`;
audio.currentTime =(progressBar.value * audio.duration) / 100;
});

songs = [
{ songName: 'song 1', songDes: 'Feel The Music for song 1', songImage:'Images/1.jfif', songPart: 'Audio/1.mp3'},
{ songName: 'song 2', songDes: 'Feel The Music for song 2', songImage:'Images/2.jfif',songPart: 'Audio/2.mp3'},
{ songName: 'song 3', songDes: 'Feel The Music for song 3', songImage:'Images/3.jfif',songPart: 'Audio/1.mp3'},
{ songName: 'song 4', songDes: 'Feel The Music for song 4', songImage:'Images/4.jfif',songPart: 'Audio/1.mp3'},
{ songName: 'song 5', songDes: 'Feel The Music for song 5', songImage:'Images/5.jfif' ,songPart: 'Audio/1.mp3'},
{ songName: 'song 6', songDes: 'Feel The Music for song 6', songImage:'Images/6.jfif',songPart: 'Audio/1.mp3'},
{ songName: 'song 7', songDes: 'Feel The Music for song 7', songImage:'Images/7.jfif',songPart: 'Audio/1.mp3'},
{ songName: 'song 8', songDes: 'Feel The Music for song 8', songImage:'Images/8.jfif' ,songPart: 'Audio/1.mp3'},
{ songName: 'song 9', songDes: 'Feel The Music for song 9', songImage:'Images/9.jpg' ,songPart: 'Audio/1.mp3'},
{ songName: 'song 10', songDes: 'Feel The Music for song 10', songImage:'Images/10.jpg' ,songPart: 'Audio/1.mp3'},
{ songName: 'song 11', songDes: 'Feel The Music for song 11', songImage:'Images/11.jpg',songPart: 'Audio/1.mp3'},
{ songName: 'song 12', songDes: 'Feel The Music for song 12', songImage:'Images/12.jpg',songPart: 'Audio/1.mp3'},
{ songName: 'song 13', songDes: 'Feel The Music for song 13', songImage:'Images/13.jpg',songPart: 'Audio/1.mp3'},


]
allMusic.forEach((element ,i) => {
element.getElementsByTagName('img')[0].src = songs[i].songImage;
element.getElementsByClassName('img-title')[0].innerText = songs[i].songName;
element.getElementsByClassName('img-description')[0].innerText = songs[i].songDes; 
});

let shuffle = document.getElementById('shuffle');
let repeat = document.getElementById('repeat');
let nowBar = document.getElementById('.now-bar');

let songOnRepeat = false;
let songOnShuffle = false;

function shuffleSong (originalOrder) {
    order = [...originalOrder];
    for(i = order.length -1; i > 0; i--){
        let j = Math.floor((Math.random) * (i + 1));
        [order[i] , order[j]] = [order[j], order[i]];
    }
    return order;
}
shuffle.addEventListener('click' ,() => {
    if(!songOnShuffle) {
        songOnShuffle = true;
        shuffle.classList.add('active');
    }
})



let playMusic = Array.from(document.getElementsByClassName('playMusic'));

makeAllPlay = () => {
    playMusic.forEach((element) => {
element.classList.remove('fa-circle-pause');
element.classList.add('fa-circle-play');  
    })
}

playMusic.forEach((element) => {
element.addEventListener('click', (e) => {
    makeAllPlay();
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');

index = parseInt(e.target.id);
currentSong = index;
audio.src = `Audio/${index}.mp3`;
audio.currentTime = 0;
audio.play();
})
});

let allMusic = Array.from(document.getElementsByClassName('music-card'));

song = [

]
playNextSong = () => {
    let nextSong = (currentSong + 1) % playMusic.length;
    currentSong = nextSong == 0 ? 13 : nextSong;
    audio.src =`Audio/${currentSong}.mp3`;
    audio.currentTime = 0;
    audio.play();
}

playPrevSong = () => {
   let prevSong = (currentSong - 1);
    currentSong = prevSong == 0 ? 13 : prevSong;
    audio.src =`Audio/${currentSong}.mp3`;
    audio.currentTime = 0;
    audio.play(); 
}
forward = document.getElementById('forward');
backward = document.getElementById('backward');

forward.addEventListener('click' ,() => {
    playNextSong();
})

audio.addEventListener('ended', () =>{
playNextSong();
})

backward.addEventListener('click',() =>{
    playPrevSong();
})