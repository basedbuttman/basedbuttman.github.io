  window.halloweenBats = $.halloweenBats({
  image:'plugins/halloween-bats-flying-around/bats.png',
  amount: 15,
  width: 35,
  height: 20,
  frames: 2,
  speed: 20,
  flickering: 15,
  zIndex: 10000000,
  target:'.city-container'
});

const copyToClipboardX = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

function copyToClipboard(e) {
  var contract = e.getAttribute("contract")
  if(typeof contract != "undefined")
  {
    copyToClipboardX(contract);
  }
}

var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "media/buttman.mp3"
audio.loop = false;
audio.currentTime = 0;

var fartaudio = document.createElement("AUDIO")
document.body.appendChild(fartaudio);
fartaudio.src = "media/fart-sound.mp3"
fartaudio.loop = false;
fartaudio.currentTime = 0;


$("#enter-button").click(function(){
  audio.play()
  $("#enter-button").parent().remove();
  $("html").click(function(){
    fartaudio.play()
    });
  });

$(".mute").click(function(){
    audio.pause();
    audio.currentTime = 0;
    });
    

