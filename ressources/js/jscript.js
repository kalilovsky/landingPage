let toggle = document.getElementById("toggle");
let colorSwitch = document.getElementById("colorMode");
let body = document.querySelector("body");
let popupPortfolio = document.getElementById("popupPortfolio");
let childPopup = popupPortfolio.children;
let main = document.getElementById('main');
let resizeTimeout; //variable pour appeler la fonction resize en décallé par rapport à l'action du resize.
toggle.addEventListener("click", function () {

    main.classList.toggle('active');
    let navigation = document.getElementById('navigation');
    navigation.classList.toggle('active');
    let topBar = document.getElementById('topBar');
    topBar.classList.toggle('active');
    document.getElementById("popupPortfolio").classList.toggle("active");
    document.getElementById("ctxContainer").classList.toggle("active");
    // Clear the timeout variable
    resizeTimeout = window.clearTimeout(resizeTimeout);
    // Store a new timeout to avoid calling afterResize for every resize event
    resizeTimeout = window.setTimeout(ctxResize, 500);
})
colorSwitch.addEventListener("click", function () {
    body.classList.toggle("darkMode");
})
document.getElementById("popUpCloseBtn").addEventListener("click", () => {
    document.getElementById("popupPortfolio").classList.remove("visible");
});
// Array.from(document.getElementsByClassName("slideBox")).forEach(e => {
//     e.addEventListener("click", () => {
//         switch (e.id) {
//             case "slide1":
//                 popupPortfolio.classList.add("visible");
//                 console.log(childPopup);
//                 childPopup[1].innerHTML = "Tetrix";
//                 childPopup[2].innerHTML = "ojoaijoiaejapoifj"
//                 break;
//             case "slide2":
//                 popupPortfolio.classList.add("visible");
//                 console.log(childPopup);
//                 childPopup[1].innerHTML = "khalil";
//                 childPopup[2].innerHTML = "ojoaijoiaejapoifj"
//                 break;
//             case "slide3":
//                 popupPortfolio.classList.add("visible");
//                 console.log(childPopup);
//                 childPopup[1].innerHTML = "khalil";
//                 childPopup[2].innerHTML = "ojoaijoiaejapoifj"
//                 break;
//             case "slide4":
//                 popupPortfolio.classList.add("visible");
//                 console.log(childPopup);
//                 childPopup[1].innerHTML = "khalil";
//                 childPopup[2].innerHTML = "ojoaijoiaejapoifj"
//                 break;
//             case "slide5":
//                 popupPortfolio.classList.add("visible");
//                 console.log(childPopup);
//                 childPopup[1].innerHTML = "khalil";
//                 childPopup[2].innerHTML = "ojoaijoiaejapoifj"
//                 break;
//             case "slide6":
//                 popupPortfolio.classList.add("visible");
//                 console.log(childPopup);
//                 childPopup[1].innerHTML = "khalil";
//                 childPopup[2].innerHTML = "ojoaijoiaejapoifj"
//                 break;
//             case "slide7":
//                 popupPortfolio.classList.add("visible");
//                 console.log(childPopup);
//                 childPopup[1].innerHTML = "khalil";
//                 childPopup[2].innerHTML = "ojoaijoiaejapoifj"
//                 break;
//             case "slide8":
//                 popupPortfolio.classList.add("visible");
//                 console.log(childPopup);
//                 childPopup[1].innerHTML = "khalil";
//                 childPopup[2].innerHTML = "ojoaijoiaejapoifj"
//                 break;
//             case "slide9":
//                 popupPortfolio.classList.add("visible");
//                 console.log(childPopup);
//                 childPopup[1].innerHTML = "khalil";
//                 childPopup[2].innerHTML = "ojoaijoiaejapoifj"
//                 break;
//             case "slide1":
//                 popupPortfolio.classList.add("visible");
//                 console.log(childPopup);
//                 childPopup[1].innerHTML = "khalil";
//                 childPopup[2].innerHTML = "ojoaijoiaejapoifj"
//                 break;
//         }
//     })
// });
Array.from(document.getElementsByClassName("listes")).forEach(e => {
    e.addEventListener("click", () => {
        if (document.body.offsetWidth < 1024) {
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
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//à partir de la on commance à coder les form et leur interacion sur la class main


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let height = main.scrollHeight;
let width = main.clientWidth;

canvas.height = height;
canvas.width = width;
const nbrNodes = 100;
let centerGravity = new vecteur(0, 0);
let nodes = new Array();


let xx = randomBetween(50, width / 2);
let yy = randomBetween(120, window.innerHeight / 2);

let forme1 = new formeGeometrique(xx, yy, 0, 100, 100, 30, ctx);
xx = randomBetween(50, width / 2);
yy = randomBetween(120, window.innerHeight / 2);
let forme2 = new formeGeometrique(xx, yy, 0, 100, 100, 30, ctx);

forme1.createOctahedron();
forme1.drawForm();
forme2.createTetragonal();
forme2.drawForm();

init();
function init() {
    for (let i = 0; i < nbrNodes; i++) {
        nodes[i] = new nodeThreeD(800, centerGravity.y, 1.3, 30, 400);
        nodes[i].mouvementSpherique(2, centerGravity);
        nodes[i].draw(ctx);
    }
    window.requestAnimationFrame(render);
}
let mx = randomBetween(-1, 1);
let my = randomBetween(-1, 1);
let mx2 = randomBetween(-1, 1);
let my2 = randomBetween(-1, 1);
function render() {
    forme1.rotateY(0.01);
    forme1.rotateZ(0.01);
    forme2.rotateY(0.01);
    forme2.rotateZ(0.01);
    if (forme1.collisionDetectX(0, width)) {
        mx *= -1;
    }
    if (forme1.collisionDetectY(60, height)) {
        my *= -1;
    }
    if (forme2.collisionDetectX(0, width)) {
        mx2 *= -1;
    }
    if (forme2.collisionDetectY(60, height)) {
        my2 *= -1;
    }
    forme1.moveXY(mx, my);
    forme2.moveXY(mx2, my2);
    ctx.clearRect(0, 0, width, height);
    forme1.drawForm();
    forme2.drawForm();
    ctx.fillStyle = "black";
    for (let i = 0; i < nbrNodes; i++) {

        nodes[i].mouvementSpherique(0.05, centerGravity);
        nodes[i].draw(ctx);
    }
    window.requestAnimationFrame(render);

}
main.addEventListener('mousemove', e => {

    forme1.rotateX(e.movementY / 500);
    forme1.rotateY(e.movementX / 500);
    forme2.rotateX(e.movementY / 500);
    forme2.rotateZ(e.movementX / 500);
    // console.log(e.movementX);
    // forme1.rotateZ(e.movementY/100);
    //forme1.moveXY(e.movementX, e.movementY);
    centerGravity.x = e.pageX - main.offsetLeft;
    centerGravity.y = e.pageY;

});

main.addEventListener("touchmove", e=>{
    centerGravity.x = e.touches[0].pageX - main.offsetLeft;
    centerGravity.y = e.touches[0].pageY;
})

function ctxResize() {
    width = main.clientWidth;
    height = main.scrollHeight;
    canvas.height = height;
    canvas.width = width;   
}

window.addEventListener("resize", () => {
    // Clear the timeout variable
    resizeTimeout = window.clearTimeout(resizeTimeout);
    // Store a new timeout to avoid calling afterResize for every resize event
    resizeTimeout = window.setTimeout(ctxResize, 500);
});
// Clear the timeout variable
resizeTimeout = window.clearTimeout(resizeTimeout);
// Store a new timeout to avoid calling afterResize for every resize event
resizeTimeout = window.setTimeout(ctxResize, 2000);