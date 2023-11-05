const timer = ms => new Promise(res => setTimeout(res, ms))

async function load () {
    while (true) {
        randomize();
        await timer(1750);
    }
}

function randomize() {
    // string generator
    word = function () {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let counter = 0;
        while (counter < 6) {
            let next = characters.charAt(Math.floor(Math.random() * 26));
            if (result.includes(next)) {
                continue;
            }
            result += next;
            counter += 1;
        }
        return result;
    }
    
    var wall = document.getElementsByClassName("wall");
    for (var i = 0; i < wall.length; i++) {
        wall[i].innerHTML = word();
    }
}


load();

// on scroll keep top bar fixed

window.onscroll = function () { sticky_nav_bar() };

function sticky_nav_bar() {
    var navbar = document.getElementById("topnav");

    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}