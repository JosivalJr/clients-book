function modalAddClientComponent() {
  return `
     <div class="modal fade" id="addClientModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" >Novo Cliente</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          
           <form id="form-add-client" onsubmit="addClient(event)">
              <div class="d-flex justify-content-between d-flex justify-content-between client-input-container gap default-padding default-padding">
                <input
                  type="text"
                  autocomplete="name"
                  id="add-client-name"
                  placeholder="Nome Completo"
                />
                <span id="add-name-error" class="error-message"></span>
              </div>

              <div class="d-flex justify-content-between d-flex justify-content-between client-input-container gap default-padding default-padding">
                <input
                  type="text"
                  autocomplete="cpf"
                  id="add-client-cpf"
                  placeholder="CPF"
                />
                <span id="add-cpf-error" class="error-message"></span>

                <input
                  type="date"
                  autocomplete="data_nascimento"
                  id="add-client-birth"
                  placeholder="Data Nascimento"
                />
                <span id="add-birth-error" class="error-message"></span>
              </div>

              <div class="d-flex justify-content-between d-flex justify-content-between client-input-container gap default-padding default-padding">
                <input
                  type="text"
                  autocomplete="tel"
                  id="add-client-phone"
                  placeholder="Telefone"
                />
                <span id="add-phone-error" class="error-message"></span>

                <input
                  type="text"
                  autocomplete="tel"
                  id="add-client-celphone"
                  placeholder="Celular"
                />
                <span id="add-celphone-error" class="error-message"></span>
              </div>

              <div class="d-flex justify-content-end client-input-container gap default-padding">
                <button class="btn-client" type="submit">
                  Adicionar
                  <span class="material-symbols-outlined"> add </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    `;
}

function modalEditClientComponent() {
  return `
     <div class="modal fade" id="editClientModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Editar Cliente</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
           <form id="form-edit-client" onsubmit="editClient(event)">
              <div class="d-flex justify-content-between d-flex justify-content-between client-input-container gap default-padding default-padding">
                <input
                  type="text"
                  autocomplete="name"
                  id="edit-client-name"
                  placeholder="Nome Completo"
                />
                <span id="edit-name-error" class="error-message"></span>
              </div>

              <div class="d-flex justify-content-between d-flex justify-content-between client-input-container gap default-padding default-padding">
                <input
                  type="text"
                  autocomplete="tel"
                  id="edit-client-phone"
                  placeholder="Telefone"
                />
                <span id="edit-phone-error" class="error-message"></span>

                <input
                  type="text"
                  autocomplete="tel"
                  id="edit-client-celphone"
                  placeholder="Celular"
                />
                <span id="edit-celphone-error" class="error-message"></span>
              </div>

              <div class="d-flex justify-content-end client-input-container gap default-padding">
                   <button class="btn-client" type="submit">
                  Salvar
                  <span class="material-symbols-outlined"> save </span>
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    `;
}

function modalAddAddressComponent() {
  return `
     <div class="modal fade" id="addAddressModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" >Novo Endereço</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
           <form id="form-add-address" onsubmit="addAddress(event)">
              <div>
                <div class="d-flex justify-content-between d-flex justify-content-between address-input-container gap default-padding default-padding">
                   <input
                    type="text"
                    id="add-address-cep"
                    placeholder="CEP"
                  />
                  <span id="add-cep-error" class="error-message"></span>

                  <input
                    type="text"
                    id="add-address-country"
                    placeholder="País"
                  />
                  <span id="add-country-error" class="error-message"></span>
                </div>

                <div class="d-flex justify-content-between d-flex justify-content-between address-input-container gap default-padding default-padding">
                  <input
                    type="text"
                    id="add-address-street"
                    placeholder="Rua"
                  />
                  <span id="add-street-error" class="error-message"></span>
                </div>

                <div class="d-flex justify-content-between address-input-container gap default-padding">
                  <input
                    type="text"
                    id="add-address-city"
                    placeholder="Cidade"
                  />
                  <span id="add-city-error" class="error-message"></span>
                </div>

                <div class="d-flex justify-content-between address-input-container gap default-padding">
                  <input
                    type="text"
                    id="add-address-state"
                    placeholder="Estado"
                  />
                  <span id="add-state-error" class="error-message"></span>

                  <input
                    type="text"
                    id="add-address-neighborhood"
                    placeholder="Bairro"
                  />
                  <span id="add-neighborhood-error" class="error-message"></span>
                </div>
          
              </div>

              <div class="d-flex justify-content-end address-input-container gap default-padding">
                <button class="btn-address" type="submit">
                  Adicionar
                  <span class="material-symbols-outlined"> add </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    `;
}

function modalEditAddressComponent() {
  return `
     <div class="modal fade" id="editAddressModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Editar Endereço</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="form-edit-address" onsubmit="editAddress(event)">
              <div>
                <div class="d-flex justify-content-between address-input-container gap default-padding">
                   <input
                    type="text"
                    id="edit-address-cep"
                    placeholder="CEP"
                  />
                  <span id="edit-cep-error" class="error-message"></span>

                  <input
                    type="text"
                    id="edit-address-country"
                    placeholder="País"
                  />
                  <span id="edit-country-error" class="error-message"></span>
                </div>

                <div class="d-flex justify-content-between address-input-container gap default-padding">
                  <input
                    type="text"
                    id="edit-address-street"
                    placeholder="Rua"
                  />
                  <span id="edit-street-error" class="error-message"></span>
                </div>

                <div class="d-flex justify-content-between address-input-container gap default-padding">
                  <input
                    type="text"
                    id="edit-address-city"
                    placeholder="Cidade"
                  />
                  <span id="edit-city-error" class="error-message"></span>
                </div>

                <div class="d-flex justify-content-between address-input-container gap default-padding">
                  <input
                    type="text"
                    id="edit-address-state"
                    placeholder="Estado"
                  />
                  <span id="edit-state-error" class="error-message"></span>

                  <input
                    type="text"
                    id="edit-address-neighborhood"
                    placeholder="Bairro"
                  />
                  <span id="edit-neighborhood-error" class="error-message"></span>
                </div>
          
              </div>
              <div class="d-flex justify-content-end client-input-container gap default-padding">
                <button class="btn-address" type="submit">
                  Salvar
                  <span class="material-symbols-outlined"> save </span>
                </button>             
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
    `;
}

function modalImportClientsComponent() {
  return `
     <div class="modal fade" id="importClientsModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Importar Clientes</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <form id="form-edit-address" onsubmit="importClients(event)">
              <div class="mb-3">
                <label for="form-import-clients" class="form-label">Faça o upload do arquivo csv para importação dos dados.</label>
                <input id="form-import-clients" class="form-control" type="file" accept="text/csv">
              </div>

              <div class="d-flex justify-content-end address-input-container gap default-padding">
                 <button class="btn-address" type="submit">
                  Importar
                  <span class="material-symbols-outlined"> deployed_code_update </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    `;
}
