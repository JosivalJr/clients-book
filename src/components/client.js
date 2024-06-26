function clientComponent(client) {
  return `
    <li class="flex-column mb-3 default-padding">
      <div class="flex-column w-100">
        <div class="d-flex justify-content-between">
          <h5>${client.name} (${maskCPF(client.cpf)})</h5>

          <div class="gap">
            <button
              type="button"
              class="client-config-btn"
              id="btnOpenEditClientModal"
              data-toggle="modal"
              data-target="#editClientModal"
              class="client-config-btn"
              onclick="fillEditClientInputsModal('${client.name}', '${
    client.cpf
  }', '${client.birth_date}', '${client.phone}', '${client.celphone}', '${
    client.id
  }')"
            >
              <span class="material-symbols-outlined"> edit </span>
            </button>

            <button class="client-config-btn" onclick="deleteClient('${
              client.id
            }')">
              <span class="material-symbols-outlined"> delete </span>
            </button>
          </div>
          
        </div>

        <div class="flex gap">
          <span>${calcuateAge(client.birth_date)} anos</span>
          <span>Telefone: ${maskPhone(client.phone)}</span>
          <span>Celular: ${maskPhone(client.celphone)}</span>
        </div>
      </div>

      <div>
        <div class="d-flex justify-content-between my-3">
        
          <h6 class="text-center">Endereços</h6>

          <button onclick="editCurrentAddressClientId(${
            client.id
          })" type="button" class="btn-address" data-toggle="modal" data-target="#addAddressModal">
              Endereço
            <span class="material-symbols-outlined"> add </span>
          </button>
        </div>
          ${
            client.address?.length > 0
              ? addressListTemplateBuilder(client.address)
              : "<span> O Cliente não contém endereços registrados.</span>"
          }
      </div>
    </li>
  `;
}
