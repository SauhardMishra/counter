document.getElementById("increase").onclick=function(){
    increase();
    display();
}
document.getElementById("decrease").onclick=function(){
    decrease();
    display();
}

function increase(){
 var value = parseInt(document.getElementById("number").value);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
  
    
}

function decrease(){
 var value = parseInt(document.getElementById("number").value);
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById("number").value = value;
    
}
function display(){
    document.getElementById("demo").innerhtml = value;
    document.getElementById("demo").style.display ="block";
}

