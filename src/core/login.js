function login(event) {
  event.preventDefault();
  const { emailInput, passwordInput } = getLoginInputFields("login-");

  const isFormValid = validateLoginInputFields(
    { emailInput, passwordInput },
    {
      emailError: "login-email-error",
      passwordError: "login-password-error",
    },
    false
  );

  if (!isFormValid) return;

  const result = validateLogin(emailInput.value, passwordInput.value);

  if (result === "NOT_FOUND") {
    emailInput.focus();
    Swal.fire({
      title: "Ops!",
      text: "Email não cadastrado!",
      icon: "error",
    });
  } else if (result === "INVALID_PASSWORD") {
    emailInput.focus();
    Swal.fire({
      title: "Ops!",
      text: "Senha inválida.",
      icon: "error",
    });
  } else if (result === "AUTHENTICATED") {
    window.location.hash = "#client";
    clearLoginInputFields();
  } else {
    emailInput.focus();
    Swal.fire({
      title: "Ops!",
      text: "Ocorreu um erro inesperado ao acessar a plataforma, tente novamente mais tarde.",
      icon: "error",
    });
    clearLoginInputFields();
  }
}

function validateLoginInputFields(inputsElements, errorElementsIds) {
  const isEmailValid = validateField(
    inputsElements.emailInput,
    document.getElementById(errorElementsIds.emailError),
    (value) => value.trim().length >= 3,
    "Por favor, insira um email válido."
  );

  const isPasswordValid = validateField(
    inputsElements.passwordInput,
    document.getElementById(errorElementsIds.passwordError),
    (value) => value.trim().length >= 3,
    "Você deve inserir uma senha para realizar o login."
  );
  return isPasswordValid && isEmailValid;
}

function getLoginInputFields(prefix = "") {
  return {
    emailInput: document.getElementById(prefix + "email"),
    passwordInput: document.getElementById(prefix + "password"),
  };
}

function clearLoginInputFields() {
  const { emailInput, passwordInput } = getLoginInputFields("login-");

  emailInput.value = "";
  passwordInput.value = "";
}

function validateLogin(email, password) {
  const user = getUserDB(email);
  if (!user || user?.length === 0) return `NOT_FOUND`;
  if (user[0].password !== password) return `INVALID_PASSWORD`;
  return `AUTHENTICATED`;
}
