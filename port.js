let list = document.getElementsByClassName("nav-list")[0]
document.getElementsByClassName("toggler")[0].addEventListener("click", () => {
   list.classList.toggle('active')
})

document.getElementById("closer").addEventListener("click", () => {
   document.getElementsByClassName("nav-list").style.display = 'none'
})  

list.addEventListener("click", () => {
   document.getElementsByClassName("nav-list")[0].classList.toggle('active')
}) 