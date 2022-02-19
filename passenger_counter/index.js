let countE=document.getElementByID("count")
let count=0
function increment(){
    count += 1
    countE1.textContent=count
}

let savE1=document.getElementById("save-el")

function save(){
    let countentries= count + " - "
    savE1.textContent += countentries
    countE1.textContent=0
    count=0
}