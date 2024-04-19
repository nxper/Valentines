class botones{
    clear(){
        todo.forEach(t => t.classList.add('si'))
    }
    si(){
        osoGif.classList.remove("elOso")
        osoGif.classList.add("si")
    }
    nope(){
        noCounter++
        
    }
}
const noButtonCss = document.styleSheets[0].cssRules[9].style.height = noCounter * 38
var noCounter = 0;
const osoGif = document.querySelector("#osoGif");
const Botones = new botones ();
const siButton = document.querySelectorAll("#yes");
const noButton = document.querySelectorAll("#no")
const todo = document.querySelectorAll("#todo")
siButton.forEach(button => {
    button.addEventListener('click', () => {
        Botones.clear();
        Botones.si();
    });
});
noButton.forEach(button => {
    button.addEventListener('click', () => {
        Botones.nope();
    });
});
