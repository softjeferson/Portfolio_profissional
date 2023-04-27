function clicar(){
    if( navegação.style.display == 'none'){
        navegação.style.display = 'block'
    } else {
        navegação.style.display = 'none'
    }
}

function mudouTamanho(){
    if (window.innerWidth >= 665){
        navegação.style.display = 'block'
    } else {
        navegação.style.display = 'none'
    }
}