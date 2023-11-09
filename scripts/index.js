let p = document.createElement("p");
let touch = false;

if ("ontouchstart" in document.documentElement) {
    touch = true;
    document.addEventListener("DOMContentLoaded", (event) => {
        let p = document.createElement("p");
        p.textContent = "PROJECTS";
        document.getElementById("left").appendChild(p);
        p = document.createElement("p");
        p.textContent = "BLOG";
        document.getElementById("mid").appendChild(p);
        p = document.createElement("p");
        p.textContent = "STELLA";
        document.getElementById("right").appendChild(p);
    });
}
// hover animation

function emphasize(div) {
    if (touch)
        return;
    const rects = document.getElementById("wrapper").children
    div.setAttribute("expanded", "t");
    div.style = "z-index: 1";
    clearTimeout(div.timeout);

    if (div.id == "left")
        p.textContent = "PROJECTS";
    else if (div.id == "mid")
        p.textContent = "BLOG";
    else if (div.id == "right")
        p.textContent = "STELLA";
    div.appendChild(p);

    for (let i = 0; i < rects.length; i++)
        if (rects[i] != div)
            rects[i].style = "z-index: 0";
}

function reset(div) {
    if (touch)
        return;
    div.setAttribute("expanded", "f");
    div.style = "z-index: 1";

    if (p) {
        div.removeChild(p);
    }

    div.timeout = setTimeout(() => {
        div.style = "z-index: 0";
    }, div.id == "mid" ? 750 : 1000);
}

