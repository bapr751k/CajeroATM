const users = {
    'Roldan': {'password': '5757','numcta': '987654321'},
    'Carolina': {'password': '1616','numcta': '99887766'},
    'Evelyn': {'password': '1008','numcta': '11223344'}
};

    const loginButton = document.getElementById('login');
    const formCliente = document.getElementById('loginForm')
    let intentos=2;
    let i=0;

        loginButton.addEventListener('click', function(e){ 
            e.preventDefault();
            const userName = document.getElementById('userName');
            const usuario = userName.value;
            
            if (i < intentos) {
            if(users[usuario] != null){
                const inputPassword = document.getElementById('inputPassword'); //se obtiene el enlace referenciado al objeto input con el id o clase especificada en el parametro
                const contrasenia = inputPassword.value;  // se accesde al valuor del objeto referenciado
                if (users[usuario]['password'] == contrasenia){
                    window.location.href = './html/cajero.html?numcta='+users[usuario]['numcta'] + '&'+ 'usuario='+userName.value; //carga el archivo externo cajero.html + parametro de numero de cuenta de el objeto users
                    i=0;
                } else {
                    alert('Verifica tu contraseña.');
                    i++;
                    formCliente.reset();
                }
            } else{
                alert('Escribe usuario como lo registraste')
                i++;
                formCliente.reset();
            }
        
        } else{
            alert('por seguridad se cancela su ingreso, vuelva a empezar...');
            i=0;
            formCliente.reset();
        }

        });
   

