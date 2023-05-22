document.body.style.backgroundColor='#9a9a9a'
document.getElementById('title').style.color='green'
document.getElementById('fru').style.textTransform='uppercase'
document.getElementById('veg').style.textTransform='uppercase'

// document.body.style.backgroundImage="url('matunda.jpeg')";
// document.body.style.backgroundRepeat='no-repeat';
// document.body.style.backgroundSize='cover';

let fruitList = document.getElementById("fruList");
let newFruits = ["Apples", "Pawpaw", "Oranges", "Grapes"];
for (var i = 0; i < newFruits.length; i++) {
  var newFruit = document.createElement("li");
  newFruit.textContent = newFruits[i];
  fruitList.appendChild(newFruit);
}


var vegetableList = document.getElementById("vegList");
var newVegetables = ["Carrots", "Broccoli", "Bell Peppers", "Cucumbers"]; 
for (var i = 0; i < newVegetables.length; i++) {
  var newVegetable = document.createElement("li");
  newVegetable.textContent = newVegetables[i];
  vegetableList.appendChild(newVegetable);
}


image.src = "matunda.jpeg";
image.style.float = "left";
image.style.marginLeft = "40%";
// image.style.marginTop = "-20%"
document.body.appendChild(image);


