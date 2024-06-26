function clientPage() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <section class="d-flex flex-column justify-content-between h-100">
      <div>
        <h1 class="text-center pb-4 pt-2"> Lista de Clientes <span class="material-symbols-outlined"> contacts </span> </h1>
        <ul id="client-list" class="scrollable-list p-0"></ul>
      </div>

      <div class="d-flex justify-content-between">

          <button class="btn-client" type="button" data-toggle="modal" data-target="#importClientsModal">
            Importar Clientes
            <span class="material-symbols-outlined"> upload </span>
          </button>

          <button class="btn-client" onclick="exportClients(event)">
            Exportar Clientes
            <span class="material-symbols-outlined"> download </span>
          </button>
  
      <div>
          <button class="btn-client"  type="button" data-toggle="modal" data-target="#addClientModal">
            Adicionar Cliente
            <span class="material-symbols-outlined"> add </span>
          </button>
          </div>
      </div>
    </section>

    ${modalAddClientComponent()}
    ${modalEditClientComponent()}
    ${modalAddAddressComponent()}
    ${modalEditAddressComponent()}
    ${modalImportClientsComponent()}
  `;
  clientListTemplateBuilder();
}
