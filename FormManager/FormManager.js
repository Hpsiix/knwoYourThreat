const inputs = document.getElementsByTagName("input");

  

for(let i=0; i< inputs.length;i++){
    if (inputs[i].name.includes("password")){
        inputs[i].appendChild(span);
        inputs[i].onclick = function(event){
            inputs[i].classList.toggle("show");
            console.log("IN");
        };
    }
}