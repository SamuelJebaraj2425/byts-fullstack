let count = 0;
let timer = null;
function start(){
        timer=setInterval(()=>{
            count++;
            document.querySelector('.w-text').innerText=count;
        },1000);
}

function stop() {
    clearInterval(timer);
    timer=null;
}

function reset() {
    stop();
    count=0;
    document.querySelector('.w-text').innerText = count;
}