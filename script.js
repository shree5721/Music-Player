let progressBar = document.getElementById("progress");
let song = document.getElementById("song");
let PauseBtn = document.getElementById("pause");

song.onloadedmetadata = function () {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
};

function Pause() {
  if (PauseBtn.classList.contains("fa-pause")) {
    song.pause();
    PauseBtn.classList.remove("fa-pause");
    PauseBtn.classList.add("fa-play");
  } else {
    song.play();
    PauseBtn.classList.add("fa-pause")
    PauseBtn.classList.remove("fa-play")
  }
}

if(song.play()){
    setInterval(()=>{
        progressBar.value=song.currentTime
    },500)
}

progressBar.onchange=function(){
    song.play()
    song.currentTime=progressBar.value
    PauseBtn.classList.add("fa-pause")
    PauseBtn.classList.remove("fa-play")
}
