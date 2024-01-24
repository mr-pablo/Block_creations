let colors = ["red","black","yellow"];
// let num = 0
function add() {
    

    var block_div = document.createElement("div");
    block_div.className = "blocks";
    let random_color = colors[Math.floor(Math.random() * colors.length)];
    block_div.style.background = random_color
    document.getElementById("container").appendChild(block_div);
    // var blockElements = document.getElementsByClassName("blocks");
    // blockElements[num].style.background = random_color;
    // num++
    
}


function choose_colors(){
    document.getElementById("myModal").style.display = "flex"
}

function push_color(color){
    colors.push(color)
    
   let element = document.getElementById(`${color}`)
   var displayValue = window.getComputedStyle(element).getPropertyValue('display');
// var displayValue = element.style.display

   console.log(displayValue);
   if (displayValue == "block") {
    document.getElementById(`${color}`).style.display = "none"
    let remove_id = `remove_${color}`
    document.getElementById(remove_id).style.display = "block"
   }


}

function remove_color(color) {
    let remove_id = `remove_${color}`
    document.getElementById(remove_id).style.display = "none"
    document.getElementById(`${color}`).style.display = "block"
    let index_remove = colors.indexOf(`${color}`)
    colors.splice(index_remove,1)
    console.log(`remove ${color}`);
}
    

