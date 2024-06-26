async function exportClients(event) {
  event.preventDefault();

  const clients = getAllClientsDB();
  const csvData = jsonToCsv(clients);
  const blob = new Blob([csvData], { type: "text/csv" });

  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = fileUrl;
  link.download = "database.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

async function importClients(event) {
  event.preventDefault();
  const modalId = "importClientsModal";
  const fileInput = document.getElementById("form-import-clients");

  if (!fileInput.files || fileInput.files.length === 0) {
    Swal.fire({
      title: "Ops!",
      text: "Não foi possível realizar a leitura do arquivo, por favor, faça o upload de um arquivo CSV.",
      icon: "error",
    });
    closeModal(modalId);
    return;
  }

  const fileData = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const fileData = event.target.result;
    const validateCSV = isCsv(fileData);

    if (!validateCSV) {
      Swal.fire({
        title: "Ops!",
        text: "Não foi possível realizar a leitura do arquivo, por favor, faça o upload de um arquivo CSV válido utilizando a vírgula como separador..",
        icon: "error",
      });
      closeModal(modalId);
      return;
    }
    const csvData = csvToJson(fileData);
    let errors = 0;
    let success = 0;

    for (const line of csvData) {
      const client = { ...line };
      client.birth_date = Number(line.birth_date);
      delete client.id;

      const result = addClientDB(client);
      if (result !== 1) {
        errors++;
      } else {
        success++;
      }
    }

    if (errors === 0) {
      Swal.fire({
        title: "Sucesso!",
        text: `Arquivo importado com sucesso! Foram adicionados ${success} novos clientes.`,
        icon: "success",
      });
    } else if (errors === 0 && errors < success) {
      Swal.fire({
        title: "Atenção!",
        text: `Arquivo importado parcialmente! Foram adicionados ${success} novos clientes.`,
        icon: "warning",
      });
    } else {
      Swal.fire({
        title: "Ops!",
        text: "Ocorreu um erro inesperado ao tentar importar novos clientes, tente novamente mais tarde.",
        icon: "warning",
      });
    }

    clientListTemplateBuilder();
    closeModal(modalId);
    return;
  };

  reader.onerror = function (event) {
    Swal.fire({
      title: "Ops!",
      text: "Não foi possível realizar a leitura do arquivo, por favor, faça o upload de um arquivo CSV.",
      icon: "error",
    });

    clientListTemplateBuilder();
    closeModal(modalId);
    return;
  };

  reader.readAsText(fileData);
}
