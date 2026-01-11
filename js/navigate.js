const sections = document.querySelectorAll("section");
const buttons = document.querySelectorAll(".menu-options li");

buttons.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        const btnName = e.currentTarget.dataset.btn;
        
        sections.forEach( (section) => {
            if(section.id === btnName) {
                const sectionTop = section.getBoundingClientRect().top;
                const navHeight = document.querySelector("nav").getBoundingClientRect().height;
                
                window.scrollBy(0, sectionTop - navHeight - 16);
            }
        });
    });
});