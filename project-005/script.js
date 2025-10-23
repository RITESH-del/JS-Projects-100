window.addEventListener('keydown', function(e) {
    // console.log(e.keyCode);      
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
    if(audio === null) return; // if data-key is not found return nothing
    audio.play();

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
})

const keys = document.querySelectorAll('.key');

keys.forEach(function(key){
    key.addEventListener('transitionend', function(){
        this.classList.remove('playing');
    })
})
