document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registroForm');
    const confirmationScreen = document.getElementById('confirmationScreen');
    const backButton = document.getElementById('backButton');
    const confirmButton = document.getElementById('confirmButton');
    const confirmationDetails = document.getElementById('confirmationDetails');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validarFormulario()) {
            mostrarPantallaDeConfirmacion();
        }
    });

    backButton.addEventListener('click', () => {
        confirmationScreen.style.display = 'none';
        form.style.display = 'block';
    });

    confirmButton.addEventListener('click', () => {
        form.submit();
    });

    function validarFormulario() {
        let valid = true;

        const boleta = document.getElementById('boleta');
        if (boleta.value.trim() === '') {
            mostrarError(boleta, 'Este campo es obligatorio.');
            valid = false;
        } else if (!/^\d{1,10}$/.test(boleta.value)) {
            mostrarError(boleta, 'El campo solo puede contener números y debe tener un máximo de 10 dígitos.');
            valid = false;
        } else {
            ocultarError(boleta);
        }

        const nombre = document.getElementById('nombre');
        if (nombre.value.trim() === '') {
            mostrarError(nombre, 'Este campo es obligatorio.');
            valid = false;
        } else if (!/^[a-zA-Z\sáéíóúÁÉÍÓÚ]+$/.test(nombre.value)) {
            mostrarError(nombre, 'El campo solo puede contener letras, espacios y acentos.');
            valid = false;
        } else if (nombre.value.length > 20) {
            mostrarError(nombre, 'El nombre debe tener un máximo de 20 caracteres.');
            valid = false;
        } else {
            ocultarError(nombre);
        }

        const apellido1 = document.getElementById('apellido1');
        if (apellido1.value.trim() === '') {
            mostrarError(apellido1, 'Este campo es obligatorio.');
            valid = false;
        } else if (!/^[a-zA-Z\sáéíóúÁÉÍÓÚ]+$/.test(apellido1.value)) {
            mostrarError(apellido1, 'El campo solo puede contener letras, espacios y acentos.');
            valid = false;
        } else if (apellido1.value.length > 20) {
            mostrarError(apellido1, 'El primer apellido debe tener un máximo de 20 caracteres.');
            valid = false;
        } else {
            ocultarError(apellido1);
        }

        const apellido2 = document.getElementById('apellido2');
        if (apellido2.value.trim() === '') {
            mostrarError(apellido2, 'Este campo es obligatorio.');
            valid = false;
        } else if (!/^[a-zA-Z\sáéíóúÁÉÍÓÚ]+$/.test(apellido2.value)) {
            mostrarError(apellido2, 'El campo solo puede contener letras, espacios y acentos.');
            valid = false;
        } else if (apellido2.value.length > 20) {
            mostrarError(apellido2, 'El segundo apellido debe tener un máximo de 20 caracteres.');
            valid = false;
        } else {
            ocultarError(apellido2);
        }

        const telefono = document.getElementById('telefono');
        if (telefono.value.trim() === '') {
            mostrarError(telefono, 'Este campo es obligatorio.');
            valid = false;
        } else if (!/^\d{10}$/.test(telefono.value)) {
            mostrarError(telefono, 'El campo solo puede contener números y debe tener un máximo de 10 dígitos.');
            valid = false;
        } else {
            ocultarError(telefono);
        }

        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            mostrarError(email, 'Este campo es obligatorio.');
            valid = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@alumno\.ipn\.mx$/.test(email.value)) {
            mostrarError(email, 'El correo debe terminar en @alumno.ipn.mx.');
            valid = false;
        } else {
            ocultarError(email);
        }

        const password = document.getElementById('password');
        if (password.value.trim() === '') {
            mostrarError(password, 'Este campo es obligatorio.');
            valid = false;
        } else if (password.value.length < 8 || password.value.length > 20) {
            mostrarError(password, 'La contraseña debe tener entre 8 y 20 caracteres.');
            valid = false;
        } else {
            ocultarError(password);
        }

        const carrera = document.getElementById('carrera');
        if (carrera.value === '') {
            mostrarError(carrera, 'Seleccione una carrera.');
            valid = false;
        } else {
            ocultarError(carrera);
        }

        const semestre = document.getElementById('semestre');
        if (semestre.value === '') {
            mostrarError(semestre, 'Seleccione un semestre.');
            valid = false;
        } else {
            ocultarError(semestre);
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

    function mostrarPantallaDeConfirmacion() {
        const boleta = document.getElementById('boleta').value;
        const nombre = document.getElementById('nombre').value;
        const apellido1 = document.getElementById('apellido1').value;
        const apellido2 = document.getElementById('apellido2').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const carrera = document.getElementById('carrera').value;
        const semestre = document.getElementById('semestre').value;

        confirmationDetails.innerHTML = `
            <p><b>No. de Boleta:</b> ${boleta}</p>
            <p><b>Nombre:</b> ${nombre}</p>
            <p><b>Primer Apellido:</b> ${apellido1}</p>
            <p><b>Segundo Apellido:</b> ${apellido2}</p>
            <p><b>Teléfono:</b> ${telefono}</p>
            <p><b>Correo Electrónico:</b> ${email}</p>
            <p><b>Carrera:</b> ${carrera}</p>
            <p><b>Semestre:</b> ${semestre}</p>
        `;

        form.style.display = 'none';
        confirmationScreen.style.display = 'block';
    }
});
