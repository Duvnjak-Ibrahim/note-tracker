let teaxtArea=document.getElementById("text-area")
let addBtn=document.getElementById("add-btn")
let ulEl=document.getElementById("ul-el")
let list = ""

addBtn.addEventListener("click",function(){
    list=teaxtArea.value
    ulEl.innerHTML+=`<li>${list}</li>`
    
    teaxtArea.value=""
   
})

document.getElementById("deletef-el").addEventListener("click",function(){
    ulEl.removeChild(ulEl.firstElementChild)
})

document.getElementById("deletel-el").addEventListener("click",function(){
    ulEl.removeChild(ulEl.lastElementChild)
})