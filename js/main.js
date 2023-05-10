
//Entorno
// 1 - definir variables

//2 - pedir user y pass --> leer y escribir

//3 - comprobar user y pass 
    // si está OK -> mensaje de acceso 
    // si no OK -> error resta intentos (max 3)
            // si intentos max 3 -> bloquea mostrar mensaje
    const login = (userDef='admin',passwordDef='1234')=>{

        let user = '';
        let password = null;
        let cont = 3;

        do {
            user = prompt('Nombre de usuario');
            password = prompt('password');
    
            if (userDef == user && passwordDef == password) {
                console.log('login ok');
                break;
            } else {
                console.log('login erroneo');
                cont--;
                alert(`Login erroneo, le quedan ${cont}`);
                if (cont==0) {
                    alert('Numero de intentos agotado');
                }
            }
            
        } while (cont != 0);
    };


    //llamada a la funcion
    login();
// Fin




