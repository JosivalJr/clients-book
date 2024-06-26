// Create Tables on Database
function initializeDB() {
  alasql("CREATE LOCALSTORAGE DATABASE IF NOT EXISTS AgroSysDB");
  alasql("ATTACH LOCALSTORAGE DATABASE AgroSysDB");
  alasql("USE AgroSysDB");

  alasql(`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT,
    name STRING,
    email STRING,
    password STRING
  )`);

  alasql(`CREATE TABLE IF NOT EXISTS clients (
    id INT AUTO_INCREMENT,
    cpf STRING,
    name STRING,
    birth_date DATE,
    phone STRING,
    celphone STRING
  )`);

  alasql(`CREATE TABLE IF NOT EXISTS address (
    id INT AUTO_INCREMENT,
    cep STRING,
    street STRING,
    neighborhood STRING,
    city STRING,
    state STRING,
    country STRING,
    client_id STRING
  )`);
}

// USERS DATABASE HANDLERS
function getUserDB(email) {
  const user = alasql("SELECT * FROM users WHERE email = ?", [email]);
  return user;
}

function getAllUsersDB() {
  return alasql("SELECT * FROM users");
}

function addUserDB({ name, email, password }) {
  const user = getUserDB(email);
  if (user && user.length > 0) return `DUPLICATED`;
  const result = alasql(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password]
  );
  if (result) return `CREATED`;
  return `ERROR`;
}

// CLIENTS DATABASE HANDLERS
function getAllClientsDB() {
  return alasql("SELECT * FROM clients");
}

function addClientDB({ cpf, name, birth_date, phone, celphone }) {
  return alasql(
    "INSERT INTO clients (cpf, name, birth_date, phone, celphone) VALUES (?, ?, ?, ?, ?)",
    [cpf, name, birth_date, phone, celphone]
  );
}

function editClientDB({ name, phone, celphone, id }) {
  return alasql(
    "UPDATE clients SET name = ?, phone = ?, celphone = ? WHERE id = ?",
    [name, phone, celphone, id]
  );
}

function deleteClientDB(id) {
  return alasql("DELETE FROM clients WHERE id = ?", [id]);
}

// ADDRESS DATABASE HANDLERS
function getAllAddressDB() {
  return alasql("SELECT * FROM address");
}

function getAddressByClientDB(client_id) {
  const address = alasql("SELECT * FROM address WHERE client_id = ?", [
    client_id,
  ]);
  return address;
}

function addAddressDB({
  cep,
  street,
  neighborhood,
  city,
  state,
  country,
  client_id,
}) {
  return alasql(
    "INSERT INTO address (cep, street, neighborhood, city, state, country, client_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [cep, street, neighborhood, city, state, country, client_id]
  );
}

function editAddressDB({
  cep,
  street,
  neighborhood,
  city,
  state,
  country,
  id,
}) {
  return alasql(
    "UPDATE address SET cep = ?, street = ?, neighborhood = ?, city = ?, state = ?, country = ? WHERE id = ?",
    [cep, street, neighborhood, city, state, country, id]
  );
}

function deleteAddressDB(id) {
  return alasql("DELETE FROM address WHERE id = ?", [id]);
}
