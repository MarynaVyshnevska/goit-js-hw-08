import lodash from 'lodash';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME = "videoplayer-current-time";


player.on('timeupdate', lodash.throttle(onPlay, 1000));

function onPlay({ seconds }) {
    localStorage.setItem(TIME, seconds);
    console.log('played the video!');
    console.log('time is ->', seconds);
};

setCurrentTime();
function setCurrentTime() {
    if (!localStorage.getItem(TIME)) {
        return;
    }
    player.setCurrentTime(localStorage.getItem(TIME));
}

// моя проверка Лодаш
// console.log(lodash.add(1, 2));
// console.log("test for me");