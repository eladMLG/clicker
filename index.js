var click = 1
var cost = click * 10
var amount = 1000000000;
function add1(){
    document.getElementById("counter").innerHTML = amount + click
    amount += click
}
function more(){
    if (amount >= cost){
        amount -= cost;
        document.getElementById("counter").innerHTML = amount - cost;
        click *= Math.floor(Math.random() * 4) + 1
        cost *= 10
        document.getElementById("cost").innerHTML = "Cost: " + cost + "$"
        document.getElementById("clickW").innerHTML = "Click: " + click + "$"
    }
}
