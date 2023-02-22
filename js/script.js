
let generate_btn = document.querySelector(".generate");
let meow_sound = document.querySelector(".ding");
generate_btn.addEventListener("click", fetchPics);
meow_sound.addEventListener("click", ding);

function fetchPics(){
   fetch("https://api.thecatapi.com/v1/images/search")
   .then(response => response.json()).then(data => 
    {
        let catImgUrl = data[0].url

        let catImgEl = document.createElement('img')
        catImgEl.setAttribute('src',`${catImgUrl}`)
        catImgEl.classList.add("showcase")  
        let catDiv = document.querySelector('.catDiv');
        catDiv.innerHTML=''
        catDiv.appendChild(catImgEl)
        
    })
    .catch(err => console.log(err))
}

function ding() {
    var sound = new  Audio("Cute-cat-meow-sound.mp3");  
    sound.play();
}



