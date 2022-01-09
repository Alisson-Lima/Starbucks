function FunctionMenu(){
        
    var menu = document.querySelector(".links-menu")
    var btnActiveMenu = document.querySelector(".btn-menu")

    btnActiveMenu.addEventListener("click", ()=>{
        btnActiveMenu.classList.toggle("btnMenuActive")
        menu.classList.toggle("links-menu-actived")
    })

}