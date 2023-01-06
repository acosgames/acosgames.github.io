document.addEventListener("DOMContentLoaded", function () {

    return;//
    if (window.innerWidth < 1220)
        return;

    var nav = document.getElementsByClassName("md-nav");
    for (var i = 0; i < nav.length; i++) {
        if (nav.item(i).getAttribute("data-md-level")) {
            nav.item(i).style.display = 'block';
            nav.item(i).style.overflow = 'visible';
        }
    }

    var nav = document.getElementsByClassName("md-nav__icon");
    for (var i = 0; i < nav.length; i++) {
        nav.item(i).remove();
    }

    var nav = document.getElementsByClassName("md-nav__toggle");
    for (var i = 0; i < nav.length; i++) {
        nav.item(i).checked = true;
        nav.item(i).nextElementSibling.style.fontWeight = 'bold';
        let elem = nav.item(i).nextElementSibling;
        // elem.style.alignItems = 'center';
        elem.style.cursor = 'auto';
        elem.style.pointerEvents = 'none'
        // elem.onmouseenter = (e) => { elem.style.color = "rgb(233,235,252)" }
        // elem.style.display = 'flex';
        // elem.style.justifyContent = 'space-between';
        // elem.style.marginTop = '0.625em';
        // elem.style.overflow = 'hidden';
        // elem.style.scrollSnapAlign = 'start';
        // elem.style.textOverflow = 'ellipsis';
        // elem.style.transition = 'color 125ms';
        // nav.item(i).nextElementSibling.className = "";
    }

    // setTimeout(() => {
    //     var nav = document.getElementsByClassName("md-nav__toggle");
    //     for (var i = 0; i < nav.length; i++) {
    //         nav.item(i).nextElementSibling.classList.remove('md-nav__link');
    //     }
    // }, 1000)
});