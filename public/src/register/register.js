// Recuperando valores del formulario en el DOM
function get_values(){


const nombre = String(document.getElementById('nombre').value).trim()
const apellido = String(document.getElementById('apellido').value).trim()
const email = String(document.getElementById('email').value).trim()
const usuario = String(document.getElementById('usuario').value).trim().toLowerCase()
const password = String(document.getElementById('password').value).trim()
const repite_password = String(document.getElementById('repite_password').value).trim()
const recuperacion = String(document.getElementById('recuperacion').value).trim()

if(
!nombre ||
!apellido ||
!email ||
!usuario ||
!password ||
!repite_password ||
!recuperacion

){
    alert("Faltan datos por completar")
    return null
}

const values = {"name": nombre,
"last_name":apellido,
email,
"user": usuario,
"pass": password,
repite_password,
"recovery":recuperacion,
"rol":2}

return values



}


// Validaremos si la password ingresada coincide en ambos campos
function validando_pass(pass, repite_password) {
    if(pass !== repite_password){
        return false
    }
    return true
    
}

// Fetch para creacion de usuario

async function crear_cuenta(values){
    const url = "http://localhost:3000/register"
    const method = 'POST'
    const headers = {'Content-Type':'application/json'}
    const body = JSON.stringify(values)

    try{
        const response = await fetch(url, {method, headers, body})
        const data = await response.json()
        if(response.ok){
            return alert(`${data.message}`)
        }
        return alert(`${data.message}`)
    }
    catch(error){
        console.log("algo paso en el servidor")
    }
}

const button_login = document.getElementById('button_login')

button_login.addEventListener('click',(e)=>{
    e.preventDefault()
    const values  = get_values()  
    if(!values){ return }   
    const pass_is_same = validando_pass(values.pass, values.repite_password)
    if(pass_is_same == true){
        crear_cuenta(values)
    }




    
})
