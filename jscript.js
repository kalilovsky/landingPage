let toggle = document.getElementById("toggle")
toggle.addEventListener("click", function(){
    let sec = document.getElementById('main')
    sec.classList.toggle('active')
    let navigation = document.getElementById('navigation')
    navigation.classList.toggle('active')
    let topBar = document.getElementById('topBar')
    topBar.classList.toggle('active')

    
})