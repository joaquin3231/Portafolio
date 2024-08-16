alert("hola")

const navEnlaces = document.querySelectorAll(".link-ubicacion");
const enlace = document.querySelector(".link-ubicacion");

const yo = document.querySelector("#yo");
const sobreMi = document.querySelector("#sobreMi");
const proyectos = document.querySelector("#proyectos");
const educacion = document.querySelector("#educacion");
const habilidades = document.querySelector("#habilidades");
const contactos = document.querySelector("#contactos");

enlace, addEventListener("mousedown", (e) => {
    const { parentElement, id, classList } = e.target
    if (parentElement.classList.contains("nav-izq")) {
        for (let i = 0; i < navEnlaces.length; i++) {
            if (navEnlaces[i].classList.contains("activado") && navEnlaces[i].id !== id) {
                navEnlaces[i].classList.remove("activado")
            }
        }
        if (classList.contains("activado")) {
            classList.remove("activado")
        } else {
            classList.add("activado")
        }
        // console.log(id);
    }
})