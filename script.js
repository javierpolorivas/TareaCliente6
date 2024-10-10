document.addEventListener("DOMContentLoaded", function() {
    const inputAsunto = document.getElementById('asunto');
    const inputCC = document.getElementById('cc');
    const inputMensaje = document.getElementById('mensaje');

    const errorAsunto = document.getElementById('error-asunto');
    const errorCC = document.getElementById('error-cc');
    const errorMensaje = document.getElementById('error-mensaje');

    function validarAsunto() {
        const valor = inputAsunto.value.trim();
        if (valor === "") {
            errorAsunto.textContent = "El asunto no puede estar vacío.";
            errorAsunto.style.display = 'block';
            inputAsunto.classList.add('input-error');
            inputAsunto.classList.remove('input-success');
        } else {
            errorAsunto.style.display = 'none';
            inputAsunto.classList.remove('input-error');
            inputAsunto.classList.add('input-success');
        }
    }

    function validarCorreoCC() {
        const valor = inputCC.value.trim();
        const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expresion para validar el correo (Chat GPT)

        if (valor !== "" && !patronCorreo.test(valor)) {
            errorCC.textContent = "Por favor, introduce un correo válido.";
            errorCC.style.display = 'block';
            inputCC.classList.add('input-error');
            inputCC.classList.remove('input-success');
        } else if (valor === "") {

            errorCC.style.display = 'none';
            inputCC.classList.remove('input-error');
            inputCC.classList.remove('input-success');
        } else {

            errorCC.style.display = 'none';
            inputCC.classList.remove('input-error');
            inputCC.classList.add('input-success');
        }
    }


    function validarMensaje() {
        const valor = inputMensaje.value.trim();
        if (valor === "") {
            errorMensaje.textContent = "El mensaje no puede estar vacío.";
            errorMensaje.style.display = 'block';
            inputMensaje.classList.add('input-error');
            inputMensaje.classList.remove('input-success');
        } else {
            errorMensaje.style.display = 'none';
            inputMensaje.classList.remove('input-error');
            inputMensaje.classList.add('input-success');
        }
    }


    inputAsunto.addEventListener('blur', validarAsunto);
    inputCC.addEventListener('blur', validarCorreoCC);
    inputMensaje.addEventListener('blur', validarMensaje);
});

