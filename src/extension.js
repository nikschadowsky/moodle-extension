
console.log("moodle-extension active");

links = document.getElementsByTagName("a")

for (let link of links) {
    if (link.href.includes("forcedownload=1")) {
        link.setAttribute("onclick", "");
        link.setAttribute("href", link.getAttribute("href").replace("forcedownload=1", "forcedownload=0") + "&redirect=1");
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noreferrer noopener");
    }
}