function addBox(){
    var box = document.createElement("div"); // teeb boxi
    box.className = "note";
    var text = document.createTextNode("Test"); //teeb tekst
    box.appendChild(text); // paneb teksti boxi sisse
    var main = document.getElementsByTagName("main")[0]; // otsib html-ist main-i
    main.appendChild(box); // paneb boxi maini loppu   
}
