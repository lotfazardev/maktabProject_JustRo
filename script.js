let icons = document.getElementsByClassName("icons-border")
function iconSelectedFunc(item){
    item.classList.add("selected-icon");
    for(let i=icons.length-1;i>=0;i--){
        if(icons[i]!=item){
            icons[i].className = "icons-border"
        }
    }
}
function iconRmovSelectedFunc(item){
    item.className = "icons-border"
}