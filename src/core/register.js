function registerUser(event) {
  event.preventDefault();
  const { nameInput, emailInput, passwordInput } =
    getRegisterInputFields("register-");

  const isFormValid = validateRegisterInputFields(
    { nameInput, emailInput, passwordInput },
    {
      nameError: "register-name-error",
      emailError: "register-email-error",
      passwordError: "register-password-error",
    },
    false
  );

  if (!isFormValid) return;

  const result = addUserDB({
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  });

  if (result === "DUPLICATED") {
    nameInput.focus();
    Swal.fire({
      title: "Ops!",
      text: "Email já registrado!",
      icon: "error",
    });
  } else if (result === "ERROR") {
    nameInput.focus();
    Swal.fire({
      title: "Ops!",
      text: "Ocorreu um erro inesperado ao tentar criar um novo usuário, tente novamente mais tarde.",
      icon: "error",
    });
    clearRegisterInputFields();
  } else {
    nameInput.focus();
    Swal.fire({
      title: "Sucesso!",
      text: "Usuário foi registrado.",
      icon: "success",
    });
    clearRegisterInputFields();
    window.location.hash = "#login";
  }
}

function validateRegisterInputFields(inputsElements, errorElementsIds) {
  const isNameValid = validateField(
    inputsElements.nameInput,
    document.getElementById(errorElementsIds.nameError),
    (value) => value.trim().length >= 3,
    "O nome deve conter pelo menos 3 caracteres."
  );

  const isEmailValid = validateField(
    inputsElements.nameInput,
    document.getElementById(errorElementsIds.emailError),
    (value) => value.trim().length >= 3,
    "O email deve conter pelo menos 3 caracteres."
  );

  const isPasswordValid = validateField(
    inputsElements.passwordInput,
    document.getElementById(errorElementsIds.passwordError),
    (value) => value.trim().length >= 3,
    "A senha deve conter pelo menos 3 caracteres."
  );
  return isNameValid && isPasswordValid && isEmailValid;
}

function getRegisterInputFields(prefix = "") {
  return {
    nameInput: document.getElementById(prefix + "name"),
    emailInput: document.getElementById(prefix + "email"),
    passwordInput: document.getElementById(prefix + "password"),
  };
}

function clearRegisterInputFields() {
  const { nameInput, emailInput, passwordInput } =
    getRegisterInputFields("register-");

  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}
