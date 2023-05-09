//header
function animar(){
    const btn = document.getElementById('btn-menu')
    btn.classList.toggle('ativar')

    menuDiv.classList.toggle('abrir')

}

const menuDiv = document.getElementById("menu-mobile")

menuDiv.addEventListener("click", animar )
//header
