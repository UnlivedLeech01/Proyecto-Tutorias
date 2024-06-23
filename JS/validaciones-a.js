document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('adminLoginForm');

    form.addEventListener('submit', (event) => {
        if (!validarFormulario()) {
            event.preventDefault();
        }
    });

    function validarFormulario() {
        let valid = true;

        const username = document.getElementById('username');
        if (username.value.trim() === '') {
            mostrarError(username, 'Ingrese su nombre de usuario.');
            valid = false;
        } else {
            ocultarError(username);
        }

        const password = document.getElementById('password');
        if (password.value.trim() === '') {
            mostrarError(password, 'Ingrese su contraseña.');
            valid = false;
        } else {
            ocultarError(password);
        }

        return valid;
    }

    function mostrarError(input, mensaje) {
        const feedback = input.nextElementSibling;
        feedback.textContent = mensaje;
        input.classList.add('is-invalid');
    }

    function ocultarError(input) {
        const feedback = input.nextElementSibling;
        feedback.textContent = '';
        input.classList.remove('is-invalid');
    }
});
