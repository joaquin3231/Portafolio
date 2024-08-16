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

        if (classList.contains("activado")) {
            classList.remove("activado")
        } else {
            classList.add("activado")
        }
        // console.log(id);
    }
})