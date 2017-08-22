function addBox(){
    var box = document.createElement("div"); // teeb boxi
    box.className = "note";
    var textarea = document.createElement("textarea"); //teeb teksti ala
    box.appendChild(textarea); // paneb tekstiala boxi sisse
    var button = document.getElementsByTagName("button")[0]; // otsib html-ist buttoni
    button.parentNode.insertBefore(box, button.nextSibling);  // paneb kasti pärast buttonit (enne eelmist kasti)
}
