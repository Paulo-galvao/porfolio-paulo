const areas = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    areas.forEach( (area, index) => {
        const areaTop = area.getBoundingClientRect().top;
        if(index > 0 && areaTop < 300) {
            area.firstElementChild.classList.add("move")

        }

    });

});

