import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
// const iframe = document.querySelector('iframe');
// const iframePlayer = new Vimeo.Player(iframe);
const idPlayer = new Player('vimeo-player');

if(localStorage.getItem("videoplayer-current-time") !== null){
    idPlayer.setCurrentTime(getTime()).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    });
}

idPlayer.on('timeupdate', throttle((data)=>{
    try{
        const serializedTime = JSON.stringify({seconds : Math.floor(data.seconds)})
        localStorage.setItem("videoplayer-current-time", serializedTime);
    } catch (error) {
        console.log("Get state error: ", error.message);
    }
}, 1000, {'trailing': false}));

function getTime(){
    try {
        const serializedTime = localStorage.getItem("videoplayer-current-time");
        return JSON.parse(serializedTime).seconds;
    } catch (error) {
        console.log('Set current time error: ', error.message);
    }
}