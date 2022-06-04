function editElement(a,b,c) {

let text = a.textContent;
text = text.replace(/%\D+%/g,c)

return a.textContent = text;


}

