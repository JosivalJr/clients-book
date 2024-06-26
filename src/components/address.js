function addressComponent(address) {
  return `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">CEP</th>
          <th scope="col">Rua</th>
          <th scope="col">Bairro</th>
          <th scope="col">Cidade</th>
          <th scope="col">Estado</th>
          <th scope="col">País</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${address.cep}</td>
          <td>${address.street}</td>
          <td>${address.neighborhood}</td>
          <td>${address.city}</td>
          <td>${address.state}</td>
          <td>${address.country}</td>
          <td>
            <button type="button" id="btnOpenEditAddressModal" data-toggle="modal" data-target="#editAddressModal" onclick="fillEditAddressInputsModal('${address.cep}', '${address.street}', '${address.neighborhood}', '${address.city}', '${address.state}', '${address.country}', '${address.id}')">
              <span class="material-symbols-outlined"> edit </span>
            </button>
          </td>
          <td>
            <button onclick="deleteAddress('${address.id}')"
              <span class="material-symbols-outlined"> delete </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  `;
}
