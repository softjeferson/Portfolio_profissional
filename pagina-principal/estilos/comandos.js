function clicar(){
    if( navegação.style.display == 'block'){
        navegação.style.display = 'none'
    } else {
        navegação.style.display = 'block'
    }
}

function mudouTamanho(){
    if (window.innerWidth >= 768){
        navegação.style.display = 'none'
    } else {
        navegação.style.display = 'block'
    }
}