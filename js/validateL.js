// const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const formLogin = document.getElementById('formLogin');



//dt.addEventListener('input', function(){valida(dt)});
// pwd.addEventListener('input', function() { valida(pwd) });

formLogin.addEventListener('submit', function(event){
    event.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById('myModal'), {});
    modal.show();

    const dataForm = {
        // usuario: usuario.value
        senha: senha.value
    };

    sessionStorage.setItem('dataForm', JSON.stringify(dataForm));
    formLogin.reset();
    setTimeout(function() {
        window.location.href = "index.php";
        }, 3000);
})
