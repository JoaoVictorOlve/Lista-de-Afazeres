let textbar = document.getElementById("header_input");
let value = document.getElementById("header_input").value;
let submit = document.getElementById("header_submit")
let list = document.getElementById("list");
let deleting = document.getElementsByClassName("delete")
let clean = document.getElementById("header_clean")


onload = function(){
    let listContent = localStorage.getItem("listHTML")
    list.innerHTML = listContent;
    for(var i=0; i < deleting.length; i++){
        deleting[i].onclick = function(){
            this.parentNode.remove();
            console.log("tchau")
            localStorage.setItem("listHTML", list.innerHTML);
        }
    }

}

submit.addEventListener("click", add);

function add(){
    if(textbar.value == ""){
        alert("Escrever algo no texto")
    } else if (textbar.value.length > 33){
        alert("Texto maior que 30 caracteres")
    } else{
        creatingElement()
        textbar.value = ""

    
    }
}

function creatingElement() {
    list.innerHTML += `
    <div class="tarefas">
    <p class="text_tarefas">
     ${textbar.value}
    </p>
    <button class="delete">X</button>
    </div>
    `
    for(var i=0; i < deleting.length; i++){
        deleting[i].onclick = function(){
            this.parentNode.remove();
            localStorage.setItem("listHTML", list.innerHTML);
        }
    }
    localStorage.setItem("listHTML", list.innerHTML);
}

clean.addEventListener("click", cleaning)

function cleaning() {
    list.innerHTML=''
    localStorage.removeItem("listHTML");
}

