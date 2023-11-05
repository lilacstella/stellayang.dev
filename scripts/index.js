let p = document.createElement("p");
// hover animation

function emphasize(div) {
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
    div.setAttribute("expanded", "f");
    div.style = "z-index: 1";
    
    if (p) {
        div.removeChild(p);
    }

    div.timeout = setTimeout(() => {
        div.style = "z-index: 0";
    }, div.id == "mid" ? 750 : 1000 );
}

let bgDiv = document.getElementById("bg");
let position = 0;
let left_travel = Math.floor(Math.random() * 3) - 1;
let top_travel = Math.floor(Math.random() * 3) - 1;
if (left_travel == 0 && top_travel == 0)
    top_travel = 1;
console.log(left_travel, top_travel);


document.addEventListener("DOMContentLoaded", function () {
    bgDiv = document.getElementById("bg");
});

function changePosition() {
    // Update the position
    position = (position + 100.1) % 100 - 100;

    // Set the new position
    if (left_travel > 0)
        bgDiv.style.left = position + "vw";
    else if (left_travel < 0)
        bgDiv.style.right = position + "vw";
    else 
        bgDiv.style.left = "0%";

    if (top_travel > 0)
        bgDiv.style.top = position + "vh";
    else if (top_travel < 0)
        bgDiv.style.bottom = position + "vh";
    else 
        bgDiv.style.top = "0%";
}

setInterval(changePosition, 60);