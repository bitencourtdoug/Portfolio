document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contato__formulario');
    const nameField = document.querySelector('#nome');
    const emailField = document.querySelector('#email');
    const subjectField = document.querySelector('#assunto');
    const submitButton = document.querySelector('.contato__botao');

    // Função para mostrar mensagens de erro
    function showError(field, message) {
        const errorElement = field.nextElementSibling;
        field.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    // Função para limpar mensagens de erro
    function clearError(field) {
        const errorElement = field.nextElementSibling;
        field.classList.remove('error');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    // Função para validar o campo de nome
    function validateName() {
        const nameValue = nameField.value.trim();
        if (nameValue === '') {
            showError(nameField, 'O nome é obrigatório.');
            return false;
        } else if (nameValue.length < 3) {
            showError(nameField, 'O nome deve ter pelo menos 3 caracteres.');
            return false;
        }
        clearError(nameField);
        return true;
    }

    // Função para validar o campo de email
    function validateEmail() {
        const emailValue = emailField.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === '') {
            showError(emailField, 'O email é obrigatório.');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailField, 'Digite um email válido.');
            return false;
        }
        clearError(emailField);
        return true;
    }

    // Função para validar o campo de assunto
    function validateSubject() {
        const subjectValue = subjectField.value.trim();
        if (subjectValue === '') {
            showError(subjectField, 'O assunto é obrigatório.');
            return false;
        } else if (subjectValue.length < 5) {
            showError(subjectField, 'O assunto deve ter pelo menos 5 caracteres.');
            return false;
        }
        clearError(subjectField);
        return true;
    }

    // Evento de clique no botão de envio
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();

        // Se todos os campos forem válidos, envie o formulário
        if (isNameValid && isEmailValid && isSubjectValid) {
            alert('Formulário enviado com sucesso!');
            form.submit(); // Realiza o envio do formulário
        }
    });

    // Validações ao perder o foco do campo
    nameField.addEventListener('blur', validateName);
    emailField.addEventListener('blur', validateEmail);
    subjectField.addEventListener('blur', validateSubject);
});
