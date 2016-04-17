var tag = document.createElement( 'script' );
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName( 'script' )[ 0 ];
firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );

var player;
var playList = [];
var playAt = 0;


function onYouTubeIframeAPIReady() {
   player = new YT.Player( 'player', {
     height : '390',
     width : '640',
     playerVars: { 'controls' : 0 },
    //  videoId : 'v4NPPRMfm9c',
     events : {
     'onReady': onPlayerReady,
     'onStateChange': onPlayerStateChange
    }
   }
 );
}
function onPlayerStateChange(event){
 switch( event.data ) {
   case YT.PlayerState.ENDED:
    socket.emit('next');
    break;
   default:
    break;
 }
}

function onPlayerReady(){
  if(playList.length > 0){
      player.loadVideoById(playList[0]);
      playAt = 0;
      player.stopVideo();
  }

}

window.addEventListener( 'resize', function(){
  if (window.innerWidth >= 992){
    if( player === null){
      player = new YT.Player( 'player', {
        height : '390',
        width : '640',
        playerVars: { 'controls' : 0 },
        // videoId : 'v4NPPRMfm9c',
       //  events : {
       //  'onReady': onPlayerReady,
       //  'onStateChange': onPlayerStateChange
       // }
      }
    );
    }
  }else{
    player.destroy();
    player = null;
  }

})
