var myVideo = document.querySelector("video");
var english = document.getElementById("english");
var arabic = document.getElementById("arabic");

function ArabicSub() {
  english.track.mode = "hidden";
  arabic.track.mode = "showing";
}
function EnglishSub() {
  english.track.mode = "showing";
  arabic.track.mode = "hidden";
}
function TurnOff() {
  english.track.mode = "hidden";
  arabic.track.mode = "hidden";
}
