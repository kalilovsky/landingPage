let toggle = document.getElementById("toggle");
let colorSwitch = document.getElementById("colorMode");
let body = document.querySelector("body");
let popupPortfolio = document.getElementById("popupPortfolio");
let childPopup = popupPortfolio.children;
toggle.addEventListener("click", function(){
    let sec = document.getElementById('main');
    sec.classList.toggle('active');
    let navigation = document.getElementById('navigation');
    navigation.classList.toggle('active');
    let topBar = document.getElementById('topBar');
    topBar.classList.toggle('active');
    document.getElementById("popupPortfolio").classList.toggle("active");
})
colorSwitch.addEventListener("click", function(){
    body.classList.toggle("darkMode");
})
document.getElementById("popUpCloseBtn").addEventListener("click",()=>{
    document.getElementById("popupPortfolio").classList.remove("visible");
});
Array.from(document.getElementsByClassName("slideBox")).forEach(e=>{
    e.addEventListener("click",()=>{
        switch(e.id){
            case "slide1":
                popupPortfolio.classList.add("visible");
                console.log(childPopup);
                childPopup[1].innerHTML="khalil";
                childPopup[2].innerHTML="ojoaijoiaejapoifj"
                break;
            case "slide2":
                popupPortfolio.classList.add("visible");
                console.log(childPopup);
                childPopup[1].innerHTML="khalil";
                childPopup[2].innerHTML="ojoaijoiaejapoifj"
                break;
            case "slide3":
                popupPortfolio.classList.add("visible");
                console.log(childPopup);
                childPopup[1].innerHTML="khalil";
                childPopup[2].innerHTML="ojoaijoiaejapoifj"
                break;
            case "slide4":
                popupPortfolio.classList.add("visible");
                console.log(childPopup);
                childPopup[1].innerHTML="khalil";
                childPopup[2].innerHTML="ojoaijoiaejapoifj"
                break;
            case "slide5":
                popupPortfolio.classList.add("visible");
                console.log(childPopup);
                childPopup[1].innerHTML="khalil";
                childPopup[2].innerHTML="ojoaijoiaejapoifj"
                break;
            case "slide6":
                popupPortfolio.classList.add("visible");
                console.log(childPopup);
                childPopup[1].innerHTML="khalil";
                childPopup[2].innerHTML="ojoaijoiaejapoifj"
                break;
            case "slide7":
                popupPortfolio.classList.add("visible");
                console.log(childPopup);
                childPopup[1].innerHTML="khalil";
                childPopup[2].innerHTML="ojoaijoiaejapoifj"
                break;
            case "slide8":
                popupPortfolio.classList.add("visible");
                console.log(childPopup);
                childPopup[1].innerHTML="khalil";
                childPopup[2].innerHTML="ojoaijoiaejapoifj"
                break;
            case "slide9":
                popupPortfolio.classList.add("visible");
                console.log(childPopup);
                childPopup[1].innerHTML="khalil";
                childPopup[2].innerHTML="ojoaijoiaejapoifj"
                break;
            case "slide1":
                popupPortfolio.classList.add("visible");
                console.log(childPopup);
                childPopup[1].innerHTML="khalil";
                childPopup[2].innerHTML="ojoaijoiaejapoifj"
                break;
        }
    })
});
Array.from(document.getElementsByClassName("listes")).forEach(e=>{
    e.addEventListener("click",()=>{
        if (document.body.offsetWidth<1024){
            let sec = document.getElementById('main');
            sec.classList.toggle('active');
            let navigation = document.getElementById('navigation');
            navigation.classList.toggle('active');
            let topBar = document.getElementById('topBar');
            topBar.classList.toggle('active');
            document.getElementById("popupPortfolio").classList.toggle("active");
        }
    })
})