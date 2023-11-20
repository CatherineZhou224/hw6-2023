var video = document.getElementById("player1");
var slowClick = 0;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video.autoplay = false;
  console.log("autoplay off");
  video.loop = false;
  console.log("loop off");
});

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
  document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  console.log("Slower Speed");
  video.playbackRate *= 0.9;
  // slowClick += 1;
  // var currentSpeed = video.playbackRate;
  // var newSpeed = currentSpeed - 0.1;
  // video.playbackRate = Math.max(0.1, newSpeed);
  // console.log(slowClick);
  console.log("speed is:", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
  console.log("Faster Speed");
  video.playbackRate /= 0.9;
  // var currentSpeed = video.playbackRate;
  // if (slowClick > 0) {
  //   var increaseSpeed = 0.1 * Math.pow(0.9, slowClick - 1);
  //   var newSpeed = currentSpeed + increaseSpeed;
  //   video.playbackRate = newSpeed;
  //   slowClick--;
  //   console.log(slowClick);
  //   console.log("speed is:", video.playbackRate);
  // } else {
  //   var newSpeed = currentSpeed + 0.1;
  //   video.playbackRate = newSpeed;
  console.log("speed is:", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
  console.log("Skip Ahead");
  var currentTime = video.currentTime;
  video.currentTime = currentTime + 10;
  if (video.currentTime >= video.duration) {
    video.currentTime = 0;
  }
  console.log("Video current time is:", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
  console.log("Mute");
  if (video.muted) {
    video.muted = false;
    document.querySelector("#mute").innerHTML = "Mute";
  } else {
    video.muted = true;
    document.querySelector("#mute").innerHTML = "Unmute";
  }
});

document.querySelector("#slider").addEventListener("input", function () {
  console.log("Slider");
  video.volume = 0.01 * document.querySelector("#slider").value;
  document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
  console.log("The current value is:", video.volume);
});

document.querySelector("#vintage").addEventListener("click", function () {
  console.log("Old school");
  video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
  console.log("Original");
  video.classList.remove("oldSchool");
});
