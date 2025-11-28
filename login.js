const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btn = document.getElementById('btn-login');

function validarLogin() {
if((email.value === "isaac" && senha.value === "1234")  || (email.value === "matheus" && senha.value === "1291392522029"))
    {
        window.location.href = "carrinho.html";
    }

    else{
        alert("Login ou senha incorretos!");
    }
}

btn.addEventListener('click', validarLogin);

