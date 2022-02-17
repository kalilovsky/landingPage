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

// window.addEventListener("onresize",drawForm());
// window.addEventListener("load",drawForm());
let canvas = document.getElementById("canvas1Left");
let canvasRight1 = document.getElementById("canvas1Right");
let ctx = canvas.getContext("2d");
let ctxRight1 = canvasRight1.getContext("2d");
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
ctx.translate(canvas.width/2,canvas.height/2);
ctxRight1.translate(canvasRight1.width/2,canvasRight1.height/2)

// let nodesjs = new NodesJs({
//     id: 'nodes',
//     width: window.innerWidth-300,
//     height: window.innerHeight,
//     particleSize:3,
//     lineSize: 1,
//     particleColor: [0, 0, 0, 0.3],
//     lineColor: [0, 0, 0],
//     backgroundFrom: [10, 25, 100],
//     backgroundTo: [25, 50, 150],
//     backgroundDuration: 40,
//     nobg: true,
//     number: window.hasOwnProperty('orientation') ? 30: 20,
//     speed: 6});


let cube1 = new cube(0,0,0,100,100,30,0,0,canvas,ctx);
let form2 = new cube(0,0,0,100,100,25,0,0,canvasRight1,ctxRight1);

cube1.createOctahedron();
cube1.rotateX(30);
cube1.rotateY(30);
cube1.rotateZ(30);
cube1.drawForm();
form2.createTetragonal();
form2.rotateX(60);
form2.rotateY(60);
form2.rotateZ(30);
form2.drawForm();
draw();
function draw(){
    cube1.rotateY(0.01);
    // cube1.rotateX(0.01);
    cube1.rotateZ(0.01);
    ctx.clearRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
    cube1.drawForm();
   
    ctxRight1.clearRect(-canvasRight1.width/2,-canvasRight1.height/2,canvasRight1.width,canvasRight1.height);
    form2.rotateY(0.01);
    form2.rotateX(0.01);
    form2.drawForm();
     window.requestAnimationFrame(draw);

}
body.addEventListener('mousemove',e=>{
     ctx.clearRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
    // cube1.rotateX(e.movementY/100);
    cube1.rotateY(e.movementX/100);
    // cube1.rotateZ(e.movementY/100);
    cube1.drawForm();

    ctxRight1.clearRect(-canvasRight1.width/2,-canvasRight1.height/2,canvasRight1.width,canvasRight1.height);
    form2.rotateX(e.movementY/100);
    // form2.rotateY(e.movementX/100);
    form2.drawForm();
})

