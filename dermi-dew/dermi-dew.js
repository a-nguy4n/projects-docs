function openPopup(src){
    document.getElementById("popup-img").src = src;
    document.getElementById("photo-popup").style.display = "flex";
}

function closePopup(){
    document.getElementById("photo-popup").style.display = "none";
}