// Routes
const routes = {
  "#login": loginPage,
  "#register": registerPage,
  "#client": clientPage,
};

// Switch pages
function loadPage(app) {
  const hash = window.location.hash || "#login";
  const page = routes[hash];
  if (page) {
    page();
  } else {
    app.innerHTML = `
      <section class="vh-100">
        <div class="container py-4 h-100 text-white text-center">
              <h1>404</h1>
              <h2>Página Não Encontrada</h2>
              <p> Desculpe, mas a página que acessou não existe.</p>
              <a href="#login">Voltar</a>
            </div>
          </div>
      </section>
      `;
  }
}

window.addEventListener("hashchange", loadPage);
