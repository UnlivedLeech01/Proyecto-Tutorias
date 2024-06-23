document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('adminLoginForm');

    form.addEventListener('submit', (event) => {
        if (!validarFormulario()) {
            event.preventDefault();
        }
    });

    function validarFormulario() {
        let valid = true;

        const email = document.getElementById('email');
        const emailPattern = /^[a-zA-Z0-9._%+-]+@alumno\.ipn\.mx$/;
        if (email.value.trim() === '') {
            mostrarError(email, 'Ingrese su correo electrónico.');
            valid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            mostrarError(email, 'El correo debe terminar con @alumno.ipn.mx.');
            valid = false;
        } else {
            ocultarError(email);
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
