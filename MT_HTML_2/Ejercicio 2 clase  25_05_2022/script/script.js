let Nombre=""
let Apellido=""
let Direccion=""
let Ciudad=""
let Correo=""
let Telefono=""

let botton=document.getElementById('btnEnviar')
let formulario= document.getElementById('form')

botton.addEventListener('click',capturardatos)
function capturardatos(){
    Nombre=document.getElementById ('nombre').value
    Apellido=document.getElementById('apellido').value
    Direccion=document.getElementById('direccion').value
    Ciudad=document.getElementById('ciudad').value
    Correo=document.getElementById('correo').value
    Telefono=document.getElementById('telefono').value
    alert('hola')
}
