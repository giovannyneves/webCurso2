 const btn = document.getElementById("btnMudaLayout")

function mudaTexto(){
    if(btn.innerText === "Linhas"){
        btn.innerText = "Blocos"
    }else{
        btn.innerText = "Linhas"
    }

}

const mural = document.querySelector(".mural")

function mudaLayout(){
    mural.classList.toggle("mural--linha")

}

btn.addEventListener("click", mudaTexto)
btn.addEventListener("click", mudaLayout)