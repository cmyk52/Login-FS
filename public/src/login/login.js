// Capturando evento boton login

const button_login = document.getElementById('button_login')
button_login.addEventListener('click',(e)=>{
    e.preventDefault()
    data_form()

})

// Capturando los datos del formulario

function data_form(){

    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    validate_data(user,password)
}

// Validando errores(si hay o no datos)
function validate_data(u,p){
    
    u = u.trim()
    p = p.trim()

    if(!u){
        alert('faltan ingresar el usuario')
        return
    }
    if(!p){
        alert('falta ingresar contraseña')
        return
    }



    post(u,p)
}

// Fetch para ingreso a sesion
async function post(u,p){

    try{
        const response = await fetch('http://localhost:3000/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"user":u, "password":p})
            
        })

       redirect(response) 
    }
    catch(error){
        alert('Existe un error al intentar conectar al servidor, intentelo mas tarde')
    }
       

}

// Redireccion y manejo de errores segun status

function redirect(response){
    

    if(response.status !== 200 && response.status !== 401){
        alert(response.status)
        return
    }
    if(response.status === 401){
        alert("Usuario o password invalidos")
        return
    }

    alert("todo ok")
}