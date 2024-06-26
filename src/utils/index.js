function validateCPF(cpf) {
  var sum = 0;
  var remainder;
  var strCPF = String(cpf).replace(/[^\d]/g, "");
  if (strCPF.length !== 11) return false;

  if (
    [
      "00000000000",
      "11111111111",
      "22222222222",
      "33333333333",
      "44444444444",
      "55555555555",
      "66666666666",
      "77777777777",
      "88888888888",
      "99999999999",
    ].indexOf(strCPF) !== -1
  )
    return false;

  for (i = 1; i <= 9; i++)
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder == 10 || remainder == 11) Resto = 0;
  if (remainder != parseInt(strCPF.substring(9, 10))) return false;
  sum = 0;

  for (i = 1; i <= 10; i++)
    sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);

  remainder = (sum * 10) % 11;

  if (remainder == 10 || remainder == 11) remainder = 0;
  if (remainder != parseInt(strCPF.substring(10, 11))) return false;

  return true;
}

function validateField(
  inputElement,
  errorElement,
  validateFunction,
  errorMessage
) {
  if (validateFunction(inputElement.value)) {
    errorElement.innerHTML = "";
    return true;
  } else {
    errorElement.innerHTML = `<span class="material-symbols-outlined">error</span> ${errorMessage}`;
    return false;
  }
}

function closeModal(modalId) {
  const modalElement = document.getElementById(modalId);
  if (!modalElement) {
    Swal.fire({
      title: "Ops!",
      text: "Ocorreu um erro inesperado a página será atualizada.",
      icon: "error",
    });

    setTimeout(function () {
      location.reload();
    }, 7000);
  }
  $(`#${modalId}`).modal("hide");
}

function calcuateAge(birth_date) {
  const today = new Date();
  const birthDate = new Date(birth_date);

  let age = today.getFullYear() - birthDate.getFullYear();
  const currentMonth = today.getMonth();
  const birthdayMonth = birthDate.getMonth();

  if (
    currentMonth < birthdayMonth ||
    (currentMonth === birthdayMonth && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function maskCPF(cpf) {
  return cpf.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}

function maskPhone(phone) {
  const phoneNumbers = phone.replace(/\D/g, "");

  if (phoneNumbers.length <= 10)
    return phoneNumbers.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
  return phoneNumbers.replace(
    /^(\d{2})(\d{1})(\d{4})(\d{4})$/,
    "($1) $2 $3-$4"
  );
}

function jsonToCsv(jsonData) {
  const headers = Object.keys(jsonData[0]);
  const csvRows = jsonData.map((row) =>
    headers.map((fieldName) => JSON.stringify(row[fieldName])).join(",")
  );
  return headers.join(",") + "\n" + csvRows.join("\n");
}

function csvToJson(csv) {
  const lines = csv.split("\n");
  const result = [];

  const headers = lines[0].split(",").map((header) => header.trim());

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const obj = {};
    const currentLine = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      let value = currentLine[j].trim();
      value = value.replace(/^"|"$/g, "");
      obj[headers[j]] = value;
    }

    result.push(obj);
  }

  return result;
}

function isCsv(text) {
  if (!text || typeof text !== "string") {
    return false;
  }

  const lines = text.split("\n");

  if (lines.length < 2) {
    return false;
  }

  const numColumns = lines[0].split(",").length;

  for (let line of lines) {
    if (line.split(",").length !== numColumns) {
      return false;
    }
  }
  return true;
}
