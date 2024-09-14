/* CODIGO PARA ACTIVAR ESTILOS EN LOS BOTONES DEL NAV*/
const enlace = document.querySelector(".nav-list");

enlace, addEventListener("mousedown", (e) => {

    const {id, classList } = e.target


    if (classList.contains("link-ubicacion")) {

        console.log(enlace.children[0].children[0])

        for (let i = 0; i < enlace.childElementCount; i++) {
            if (enlace.children[i].children[0].classList.contains("activado") && enlace.children[i].children[0].id !== id) {
                enlace.children[i].children[0].classList.remove("activado")
            }
        }

        if (!classList.contains("activado")) {
            classList.add("activado")
        }
    }
})

/* CODIGO PARA ACTIVAR/DESACTIVAR EL MODO OSCURO/CLARO */
const switchButton = document.querySelector(".switch");

switchButton.addEventListener("click", (e) => {
    const body = document.querySelector("body");

    if (body.classList.contains("oscuro")) {
        body.classList.remove("oscuro");
    } else {
        body.classList.add("oscuro");
    }

    e.target.classList.add("desacClick")
    setTimeout(()=>{
        e.target.classList.remove("desacClick")
    }, 500)
})