# My Learning
- data-* attribute: these are custom attribute u can add to any HTML element to store extra information (metadata) directly in the markup without any serverside script. For ex: data-something="value".
- this is very useful when u need to change the state of 2 or more element. When an event occurs.
- An event is full of data formatted like an object, telling us what just happened. U can check it by logging the event like: - console.log(event); 
- u can add an event handler for transitionend event.
- `this` keyword returns whatever it gets called against it. For example:
  ```{javascript}
  const keys = document.querySelectorAll('.key');

  function removeClass() {
    key.addEventListener('transitionend', function(){
        this.classList.remove('playing');
    });}  

    keys.forEach(removeClass);
  ```

>[!Note]
> here, `this` keyword refer to the key object.
> Remember everything in js is an object

- the difference between keydown and keypress events: 

### Weak points:
- need to review the use of `this` keyword