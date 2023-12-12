var elInp1 = document.querySelector(".inp1")
var elInp2 = document.querySelector(".inp2")
var elInp3 = document.querySelector(".inp3")
var elList = document.querySelector(".list")
function fnBtn() {
    var car = [
        {
            img: elInp1.value,
            name: elInp2.value,
            price: elInp3.value
        }
    ]
    for (var i of car) {
        var newLi = document.createElement("li")
        newLi.innerHTML = `
            <img src="${i.img}" alt="${i.name}">
            <h2>${i.name}</h2>
            <p>$${i.price}</p> 
            `
        elList.appendChild(newLi)
    }
    elInp1.value = ""
    elInp2.value = ""
    elInp3.value = ""
}

