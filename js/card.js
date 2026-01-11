import { projects } from "./projects.js";

const cardBox = document.querySelector(".card-box");

projects.forEach( (project) => {
    
    const card = document.createElement("div");
    const list = document.createElement("ul");

    card.classList.add("card");
    list.classList.add("card-skills");
    card.style.setProperty("--bg-image", `url(${project.background})`)
    card.setAttribute("data-title", project.title);
    card.setAttribute("data-background", project.background);
    card.setAttribute("data-stack", project.stack);
    card.setAttribute("data-link", project.link);
    card.setAttribute("data-repository", project.repository);
    card.setAttribute("data-content", project.content);
    
    project.stack.forEach( (skill) => {
        const li = document.createElement("li");
        li.innerText = skill;
        list.appendChild(li);
    });
    
    card.innerHTML = `
        <h3 class="card-title">${project.title}</h3>
        <ul>${list.innerHTML}</ul>
        
    `;
    
    cardBox.appendChild(card);

});

const cards = document.querySelectorAll(".card");

cards.forEach( (card) => {
    card.addEventListener("click", (e) => {
        
        const modal = document.createElement("div");
        const ul = document.createElement("ul");
        const data = e.currentTarget.dataset;
        const stack = data.stack.split(",")
        
        stack.forEach( (s) => {
            const li = document.createElement("li");
            li.innerText = s;
            ul.appendChild(li);
        });

        modal.classList.add("modal");
        modal.classList.add("active");


        modal.innerHTML = `
            <div class="modal-header">
                <h3>${data.title}</h3>
                <i class='bx  bx-x close'></i> 
            </div>
            <div class="modal-options">
                <a href=${data.link}>
                    <button>
                        <span>Acesse Online</span>
                    </button>
                </a>
                <a href=${data.repository}>
                    <button>Codigo Fonte</button>
                </a>
            </div>
            <div class="modal-content">
                <p>
                    ${data.content}
                </p>
            </div>
            <div class="modal-stack">
                <h4>Ferramentas</h4>
                ${ul.innerHTML}
            </div>
        `;

        

        document.body.appendChild(modal);
        document.querySelector(".close").addEventListener("click", close);
        
        function close() {
            modal.remove();
        }
        
    })    
    
    
})
