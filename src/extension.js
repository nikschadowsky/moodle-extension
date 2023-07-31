
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
homepage = document.getElementsByClassName("navbar-brand aabtn has-logo")[0]
old = homepage.href

homepage.href = old + "my/"