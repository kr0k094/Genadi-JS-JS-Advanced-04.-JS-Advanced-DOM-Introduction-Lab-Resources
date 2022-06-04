function extractText() {
    // TODO
    let text = document.querySelectorAll("ul, li", )
    let area = ""
    for (const el of text) {
   area += el.textContent.trim()
}
return document.getElementById("result").value = area;  

}