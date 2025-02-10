document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    if (path.includes('index.html')) {
    alert("para iniciar sesion solo hay que ingresar 'Claudio' como usuario y cualquier contraseña") };
    });
document.getElementById('verificacionUser').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('user').value;
    const correctName = 'Claudio'; 

    if (nameInput === correctName) {
        sessionStorage.setItem('isAuthenticated', 'true');
        window.location.href = '../pages/home.html';
    } else {
        alert('Nombre incorrecto. Inténtalo de nuevo.');
    }
});

// Verifica si el usuario ya está autenticado
if (sessionStorage.getItem('isAuthenticated') === 'true') {
    window.location.href = '../pages/home.html';
}

//mostrar y ocultar la contraseña
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.querySelector('.toggle-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordIcon.classList.remove('bi-eye-slash-fill');
        togglePasswordIcon.classList.add('bi-eye-fill');
    } else {
        passwordInput.type = 'password';
        togglePasswordIcon.classList.remove('bi-eye-fill');
        togglePasswordIcon.classList.add('bi-eye-slash-fill');
    }
}
