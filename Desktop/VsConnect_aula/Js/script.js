let menu = document.getElementById("menu_links"); 
let menu_barras = document.getElementById("menu_barras"); 

function mostrarMenu (){
    if(window.getComputedStyle(menu).display == "none" ){
     menu.style.display = "initial"
     menu_barras.setAttribute("arial-label", "fechar menu")
     menu_barras.setAttribute("arial-expanded", "true")
    }else{
        menu.style.display = "none"
        menu_barras.setAttribute("arial-label", "abrir menu")
        menu_barras.setAttribute("arial-expanded", "false")
    }
}
