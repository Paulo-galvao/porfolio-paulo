const button = document.querySelector(".menu-icon");

button.addEventListener("click", () => {
    
    const menuOptions = document.querySelector(".menu-options");
    menuOptions.classList.toggle("active");

    if(menuOptions.classList.contains("active")) {
        button.innerHTML = "X";
        button.classList.add("mob");
    } else {
        button.classList.remove("mob");
        button.innerHTML = `
            <div></div>
            <div></div>
            <div></div>`;
    }

});

