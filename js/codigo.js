let main = document.querySelector("main")
let a = document.querySelectorAll("a")
a.forEach((links) => { // RECCORE A TODOS LOS LINKS
    links.addEventListener("click", (e) => {
        e.preventDefault() //  PARA QUE NO SE ABRA EN OTRA PESTAÑA AL HACER CLICK
       // console.log(e.target)
       var ruta = e.target
       mostrar(ruta) // CREA UNA FUNCION CON PARAMETRO RUTA DE ARRIBA
    })
})

function mostrar(ruta) {
    var xhr = new XMLHttpRequest()
    xhr.open("get", ruta)
    xhr.addEventListener("load",()=>{
        if (xhr.status == 200) {
           // console.log(xhr.responseText)
           var contenido = xhr.responseText
            main.innerHTML = contenido // LE PASO TODO EL CONTENIDO
        }

    })
    xhr.send()
}
