 const btn = document.getElementById("btnMudaLayout")

function mudaTexto(){
    if(btn.innerText === "Blocos"){
        btn.innerText = "Linhas"
    }else{
        btn.innerText = "Blocos"
    }

}

const mural = document.querySelector(".mural")

function mudaLayout(){
    mural.classList.toggle("mural--linha")

}

btn.addEventListener("click", mudaTexto)
btn.addEventListener("click", mudaLayout)
btn.classList.remove("no-js")