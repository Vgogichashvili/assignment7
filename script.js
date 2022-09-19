function addTextArea() {
  var area = document.createElement("TEXTAREA");
  area.setAttribute("id","textArea");
  area.setAttribute("rows","10");
  area.setAttribute("cols","30");
  var node = document.createTextNode("underscore_case \r\nfirst_name \r\nSome_Variable \r\n calculate_AGE \r\ndelayed_departure \r\n \r\n \r\n" );
  area.appendChild(node);
  document.body.appendChild(area);
}
addTextArea()

function addBtn(){
    const btn = document.createElement("BUTTON");
    btn.innerHTML = "Press";
    btn.setAttribute("id","btn");
    document.body.appendChild(btn);
    btn.addEventListener("click",myfunc);
}
addBtn()


var underscore_case = "underscore_case";
var first_name = "first_name";
var Some_Variable = "Some_Variable";
var calculate_AGE = " calculate_AGE";
var delayed_departure = "delayed_departure";

var arr = [
underscore_case,
first_name,
Some_Variable,
calculate_AGE,
delayed_departure];


function myfunc(){
    let upFirst = word => 
word[0].toUpperCase() + word.toLowerCase().slice(1);

   
function toCamelCase(value){
     let words = value.split(/[_]/g);
  return words[0].toLowerCase() + words.slice(1).map(upFirst)
}

textArea.value = '';

for(let i=0; i<arr.length;i++){
    let mark = ["✅", "✅✅","✅✅✅","✅✅✅✅","✅✅✅✅✅"] ;
    let camel  = toCamelCase(arr[i]) + mark[i] + "\r\n";
    textArea.value += camel
    console.log(camel);
}

} 

