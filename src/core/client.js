let clientList = [];
let currentClientIdEditing;

function clientListTemplateBuilder() {
  const clients = getAllClientsDB();
  const clientListElement = document.getElementById("client-list");
  if (clients.length === 0) {
    clientListElement.innerHTML = `<span>Nenhum cliente encontrado, sua lista de clientes esta vazia.</span>`;
    return;
  }

  clientList = clients.map((client, index) => {
    client.address = getAddressByClientDB(client.id);
    return client;
  });

  clientListElement.innerHTML = clientList
    .map((client) => clientComponent(client))
    .join("");
}

function addClient(event) {
  event.preventDefault();
  const modalId = "addClientModal";

  const { nameInput, cpfInput, birthInput, phoneInput, celphoneInput } =
    getClientInputFields("add-client-");
  const isFormValid = validateClientInputFields(
    { nameInput, cpfInput, birthInput, phoneInput, celphoneInput },
    {
      nameError: "add-name-error",
      cpfError: "add-cpf-error",
      birthError: "add-birth-error",
      phoneError: "add-phone-error",
      celphoneError: "add-celphone-error",
    },
    false
  );

  if (!isFormValid) return;

  const result = addClientDB({
    name: nameInput.value,
    cpf: cpfInput.value,
    birth_date: new Date(birthInput.value).getTime(),
    phone: phoneInput.value,
    celphone: celphoneInput.value,
  });

  if (result === 1) {
    Swal.fire({
      title: "Sucesso!",
      text: "Cliente foi adicionado com sucesso!",
      icon: "success",
    });
  } else {
    Swal.fire({
      title: "Ops!",
      text: "Ocorreu um erro inesperado ao tentar adicionar um novo cliente, tente novamente mais tarde.",
      icon: "error",
    });
  }
  closeModal(modalId);
  clientListTemplateBuilder();
  clearClientInputFields();
}

function editClient(event) {
  event.preventDefault();
  const modalId = "editClientModal";

  const { nameInput, phoneInput, celphoneInput } =
    getClientInputFields("edit-client-");
  const isFormValid = validateClientInputFields(
    {
      nameInput,
      phoneInput,
      celphoneInput,
    },
    {
      nameError: "edit-name-error",
      phoneError: "edit-phone-error",
      celphoneError: "edit-celphone-error",
    },
    true
  );

  if (!isFormValid) return;

  const result = editClientDB({
    name: nameInput.value,
    phone: phoneInput.value,
    celphone: celphoneInput.value,
    id: Number(currentClientIdEditing),
  });

  if (result === 1) {
    Swal.fire({
      title: "Sucesso!",
      text: "Cliente foi atualizado com sucesso!",
      icon: "success",
    });
  } else {
    Swal.fire({
      title: "Ops!",
      text: "Ocorreu um erro inesperado ao tentar atualizar o cliente, tente novamente mais tarde.",
      icon: "error",
    });
  }

  clientListTemplateBuilder();
  closeModal(modalId);
  editCurrentClientId(null);
}

function deleteClient(id) {
  const result = deleteClientDB(Number(id));

  if (result === 1) {
    Swal.fire({
      title: "Sucesso!",
      text: "O cliente foi removido com sucesso!",
      icon: "success",
    });

    clientListTemplateBuilder();
  } else {
    Swal.fire({
      title: "Ops!",
      text: "Ocorreu um erro inesperado ao tentar excluir um endereço, tente novamente mais tarde.",
      icon: "error",
    });
  }
}

function getClientInputFields(prefix = "") {
  return {
    nameInput: document.getElementById(prefix + "name"),
    cpfInput: document.getElementById(prefix + "cpf"),
    birthInput: document.getElementById(prefix + "birth"),
    phoneInput: document.getElementById(prefix + "phone"),
    celphoneInput: document.getElementById(prefix + "celphone"),
  };
}

function validateClientInputFields(
  inputsElements,
  errorElementsIds,
  isEditing
) {
  const isNameValid = validateField(
    inputsElements.nameInput,
    document.getElementById(errorElementsIds.nameError),
    (value) => value.trim().length >= 3,
    "O nome deve ter conter menos 3 caracteres."
  );

  const isCPFValid =
    isEditing === true
      ? true
      : validateField(
          inputsElements.cpfInput,
          document.getElementById(errorElementsIds.cpfError),
          validateCPF,
          "CPF inválido."
        );

  return isNameValid && isCPFValid;
}

function clearClientInputFields() {
  const { nameInput, cpfInput, phoneInput, celphoneInput, birthInput } =
    getClientInputFields("add-client-");

  nameInput.value = "";
  cpfInput.value = "";
  birthInput.value = "";
  phoneInput.value = "";
  celphoneInput.value = "";
}

function fillEditClientInputsModal(name, cpf, birth_date, phone, celphone, id) {
  editCurrentClientId(id);
  const { nameInput, phoneInput, celphoneInput } =
    getClientInputFields("edit-client-");
  nameInput.value = name;
  phoneInput.value = phone;
  celphoneInput.value = celphone;
}

function editCurrentClientId(value) {
  currentClientIdEditing = value;
}
