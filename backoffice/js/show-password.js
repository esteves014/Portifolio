var mostrarSenha = document.getElementById('mostrar-senha');
var olho = document.getElementById('icone-senha');
var senha = document.getElementById('senha');

mostrarSenha.addEventListener('click', function() {
    if(senha.type === 'password') {
        senha.type = 'text';
        olho.classList.remove('bi-eye-fill');
        olho.classList.add('bi-eye-slash-fill');
    } else{
        senha.type = 'password';
        olho.classList.remove('bi-eye-slash-fill');
        olho.classList.add('bi-eye-fill');
    }
})