let btn = document.getElementsByClassName("toggle_menu")[0]
let cont = document.getElementById('cont')
let cont_r = document.getElementById("cont_right")
let close = document.getElementById("close")
btn.addEventListener('click',function(){
    // cont.style.left = 0 +"%"
    // cont.style.width = 100 +"%"
    cont.classList.add("cont_style")
    cont_r.style.display ="none"
})
close.addEventListener("click", function(){
    cont.classList.remove("cont_style")
    cont_r.style.display ="block"
})