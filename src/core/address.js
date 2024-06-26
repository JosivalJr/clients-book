let currentAddressIdEditing;
let currentAddressClientIdEditing;

function addAddress(event) {
  event.preventDefault();
  const modalId = "addAddressModal";

  const {
    cepInput,
    streetInput,
    neighborhoodInput,
    cityInput,
    stateInput,
    countryInput,
  } = getAddressInputFields("add-address-");

  const isFormValid = validateAddressInputFields(
    {
      cepInput,
      streetInput,
      neighborhoodInput,
      cityInput,
      stateInput,
      countryInput,
    },
    {
      cepError: "add-cep-error",
      streetError: "add-street-error",
      neighborhoodError: "add-neighborhood-error",
      cityError: "add-city-error",
      stateError: "add-state-error",
      countryError: "add-country-error",
    }
  );

  if (!isFormValid) return;

  const result = addAddressDB({
    cep: cepInput.value,
    street: streetInput.value,
    neighborhood: neighborhoodInput.value,
    city: cityInput.value,
    state: stateInput.value,
    country: countryInput.value,
    client_id: currentAddressClientIdEditing,
  });

  if (result === 1) {
    Swal.fire({
      title: "Sucesso!",
      text: "Endereço foi adicionado com sucesso!",
      icon: "success",
    });
  } else {
    Swal.fire({
      title: "Ops!",
      text: "Ocorreu um erro inesperado ao tentar adicionar um novo endereço, tente novamente mais tarde.",
      icon: "error",
    });
  }

  closeModal(modalId);
  editCurrentAddressClientId(null);
  clientListTemplateBuilder();
  clearAddressInputFields();
}

function editAddress(event) {
  event.preventDefault();
  const modalId = "editAddressModal";

  const {
    cepInput,
    streetInput,
    neighborhoodInput,
    cityInput,
    stateInput,
    countryInput,
  } = getAddressInputFields("edit-address-");

  const isFormValid = validateAddressInputFields(
    {
      cepInput,
      streetInput,
      neighborhoodInput,
      cityInput,
      stateInput,
      countryInput,
    },
    {
      cepError: "edit-cep-error",
      streetError: "edit-street-error",
      neighborhoodError: "edit-neighborhood-error",
      cityError: "edit-city-error",
      stateError: "edit-state-error",
      countryError: "edit-country-error",
    }
  );

  if (!isFormValid) return;

  const result = editAddressDB({
    cep: cepInput.value,
    street: streetInput.value,
    neighborhood: neighborhoodInput.value,
    city: cityInput.value,
    state: stateInput.value,
    country: countryInput.value,
    id: Number(currentAddressIdEditing),
  });

  if (result === 1) {
    Swal.fire({
      title: "Sucesso!",
      text: "Endereço foi atualizado com sucesso!",
      icon: "success",
    });
  } else {
    Swal.fire({
      title: "Ops!",
      text: "Ocorreu um erro inesperado ao tentar atualizar o endereço, tente novamente mais tarde.",
      icon: "error",
    });
  }

  clientListTemplateBuilder();
  closeModal(modalId);
  editCurrentAddressClientId(null);
  editCurrentAddressId(null);
}

function deleteAddress(id) {
  const result = deleteAddressDB(Number(id));
  if (result === 1) {
    Swal.fire({
      title: "Sucesso!",
      text: "Endereço foi excluido com sucesso!",
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

function getAddressInputFields(prefix = "") {
  return {
    cepInput: document.getElementById(prefix + "cep"),
    streetInput: document.getElementById(prefix + "street"),
    neighborhoodInput: document.getElementById(prefix + "neighborhood"),
    cityInput: document.getElementById(prefix + "city"),
    stateInput: document.getElementById(prefix + "state"),
    countryInput: document.getElementById(prefix + "country"),
  };
}

function validateAddressInputFields(inputsElements, errorElementsIds) {
  const isCEPValid = validateField(
    inputsElements.cepInput,
    document.getElementById(errorElementsIds.cepError),
    (value) => value.trim().length !== 8,
    "O CEP deve conter 8 caracteres."
  );

  return isCEPValid;
}

function editCurrentAddressClientId(value) {
  currentAddressClientIdEditing = value;
}

function editCurrentAddressId(value) {
  currentAddressIdEditing = value;
}

function clearAddressInputFields() {
  const {
    cepInput,
    streetInput,
    neighborhoodInput,
    cityInput,
    stateInput,
    countryInput,
  } = getAddressInputFields("add-address-");

  cepInput.value = "";
  streetInput.value = "";
  neighborhoodInput.value = "";
  cityInput.value = "";
  stateInput.value = "";
  countryInput.value = "";
}

function addressListTemplateBuilder(address) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headers = ["CEP", "Rua", "Bairro", "Cidade", "Estado", "País", "", ""];
  const trValuesFields = [
    "cep",
    "street",
    "neighborhood",
    "city",
    "state",
    "country",
  ];

  headers.forEach((header) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = header;
    thead.appendChild(th);
  });

  table.className = "address-table";

  address.forEach((addressInfos) => {
    const tr = document.createElement("tr");
    trValuesFields.forEach((field) => {
      const td = document.createElement("td");
      td.textContent = addressInfos[field];
      tr.appendChild(td);
    });

    const tdEditBtn = document.createElement("td");
    tdEditBtn.innerHTML = createEditBtnAddress(addressInfos);

    const tdDeleteBtn = document.createElement("td");
    tdDeleteBtn.innerHTML = createDeleteBtnAddress(addressInfos.id);

    tr.appendChild(tdEditBtn);
    tr.appendChild(tdDeleteBtn);
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  return table.outerHTML;
}

function fillEditAddressInputsModal(
  cep,
  street,
  neighborhood,
  city,
  state,
  country,
  id
) {
  const {
    cepInput,
    streetInput,
    neighborhoodInput,
    cityInput,
    stateInput,
    countryInput,
  } = getAddressInputFields("edit-address-");

  cepInput.value = cep;
  streetInput.value = street;
  neighborhoodInput.value = neighborhood;
  cityInput.value = city;
  stateInput.value = state;
  countryInput.value = country;

  editCurrentAddressId(id);
  return;
}

function createEditBtnAddress(address) {
  const button = document.createElement("button");
  button.className = "address-config-btn";
  button.type = "button";
  button.id = "btnOpenEditAddressModal";
  button.setAttribute("data-toggle", "modal");
  button.setAttribute("data-target", "#editAddressModal");

  button.setAttribute(
    "onclick",
    `fillEditAddressInputsModal(
      '${address.cep}',
      '${address.street}',
      '${address.neighborhood}',
      '${address.city}',
      '${address.state}',
      '${address.country}',
      '${address.id}'
    )`
  );

  const span = document.createElement("span");
  span.className = "material-symbols-outlined";
  span.textContent = "edit";

  button.appendChild(span);

  return button.outerHTML;
}

function createDeleteBtnAddress(id) {
  const button = document.createElement("button");
  button.className = "address-config-btn";
  button.setAttribute("onclick", `deleteAddress(${id})`);

  const span = document.createElement("span");
  span.className = "material-symbols-outlined";
  span.textContent = "delete";

  button.appendChild(span);

  return button.outerHTML;
}
