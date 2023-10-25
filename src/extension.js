
console.log("moodle-extension active");

links = document.getElementsByClassName("aalink")

for (let elem of links) {

    elem.setAttribute("onclick", "");

    elem.setAttribute("href", elem.getAttribute("href") + "&redirect=1");
    elem.setAttribute("target", "_blank");
    elem.setAttribute("rel", "noreferrer noopener");
    elem.replaceWith(elem.cloneNode(true))
}


files = document.getElementsByClassName("fp-filename-icon");

for (let elem of files) {
    elem.childNodes.forEach(element => {
        if (element.tagName === 'A') {
            element.href = element.href.replace('forcedownload=1', 'forcedownload=0');
            element.target = '_blank';
    }});
}


// replace homepage link
homepage = document.getElementsByClassName("navbar-brand aabtn has-logo")[0]
old = homepage.href

homepage.href = old + "my/"