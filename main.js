function addBox(){
    var box = document.createElement("div"); // teeb boxi
    box.className = "note";
    var textarea = document.createElement("textarea"); //teeb teksti ala
    var delButton = document.createElement("button");
    var delIcon = document.createElement("i");
    delIcon.className = "fa fa-trash";
    delButton.appendChild(delIcon);
    delButton.onclick = delBox.bind(this,box); // klikkimisel kutsub funktsiooni delBox argumendiga box
    var editButton = document.createElement("button");
    var editIcon = document.createElement("i");
    editIcon.className = "fa fa-pencil";
    editButton.appendChild(editIcon);
    box.appendChild(textarea); // paneb tekstiala boxi sisse
    box.appendChild(delButton);
    box.appendChild(editButton);
    var button = document.getElementsByTagName("button")[0]; // otsib html-ist buttoni
    button.parentNode.insertBefore(box, button.nextSibling);  // paneb kasti pärast buttonit (enne eelmist kasti)
}
function delBox(box){
    box.parentNode.removeChild(box);
}
