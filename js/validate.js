const nome = document.getElementById('nome');
const dt = document.getElementById('dtNascimento');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const uf = document.getElementById('uf');
const num = document.getElementById('num');
const pwd = document.getElementById('pwd');
const pwd2 = document.getElementById('pwd2');
const formCadastro = document.getElementById('formCadastro');

function validarSenha(){
    if(pwd.value !== pwd2.value){
        pwd2.setCustomValidity('As duas senhas devem ser iguais.');
    }else{
        pwd2.setCustomValidity('');
    }
}

function valida(item){
    item.setCustomValidity('');
    item.checkValidity();
    
    if(item == dt){
        var h = new Date();
        var dtNasc = new Date(dt.value);

        var age = h.getFullYear() - dtNasc.getFullYear();
        var m = h.getMonth() - dtNasc.getMonth();
        if(m < 0 || (m === 0 && h.getDate() < dtNasc.getDate())){
            age--;
        }
        if(age < 18){
            item.setCustomValidity('Necessário possuir 18 anos ou mais.');
        }else{
            item.setCustomValidity('');
        }
    }

    if(item == cpf){
        if(item.value.length < 13){
            item.setCustomValidity('CPF Inválido.');
        }else{
            item.setCustomValidity('');
        }
    }

    if(item == pwd2){
        if(item.value.length < 8){
            item.setCustomValidity('A senha deve possuir no mínimo 8 caracteres.');
        }else{
            if(item.value === pwd.value) item.setCustomValidity('');
            else item.setCustomValidity('As duas senhas devem ser iguais.');
        }
    }
}

//dt.addEventListener('input', function(){valida(dt)});
pwd.addEventListener('input', function() { valida(pwd) });
pwd2.addEventListener('input', function() { valida(pwd2) });
dt.addEventListener('input', function() { valida(dt) });
cpf.addEventListener('input', function() { valida(cpf) });

formCadastro.addEventListener('submit', function(event){
    event.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById('myModal'), {});
    modal.show();

    const dataForm = {
        nome: nome.value,
        dtNascimento: dt.value,
        email: email.value,
        cpf: cpf.value,
        cep: cep.value,
        rua: rua.value,
        bairro: bairro.value,
        cidade: cidade.value,
        uf: uf.value,
        num: num.value,
        password: pwd.value
    };

    sessionStorage.setItem('dataForm', JSON.stringify(dataForm));
    formCadastro.reset();
    setTimeout(function() {
        window.location.href = "index.php";
        }, 3000);
})
