
console.log("moodle-extension active");

links = document.getElementsByClassName("aalink")

for(let elem of links){

    elem.setAttribute("onclick", "");
    
    elem.setAttribute("href", elem.getAttribute("href") +"&redirect=1");
    elem.setAttribute("target", "_blank");  
    elem.setAttribute("rel", "noreferrer noopener");  
    elem.replaceWith(elem.cloneNode(true))
}


// replace homepage link
document.getElementsByClassName("navbar-brand aabtn has-logo")[0].href ="https://moodle2.nordakademie.de/my/"

