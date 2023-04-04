const btn = document.getElementById('confirm');
const txt = document.getElementById('txt');
btn.addEventListener('click', function(){
    let rand = Math.random() //0以上1未満 
    if(rand <= 0.1){
        window.alert('大吉');
    }else if(rand <= 0.5){
        window.alert('中吉');
    }else{
        window.alert('小吉');
    }
})