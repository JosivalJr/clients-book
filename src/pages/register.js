function registerPage() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <section class="vh-100">
        <div class="container py-5 h-100 text-white">

            <div class="row d-flex align-items-center justify-content-center h-100">

                <div class="col-md-8 col-lg-7 col-xl-6">
                    <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    class="img-fluid"
                    alt="Phone image"
                    />
                </div>

                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <img
                    src="https://www.agrosys.com.br/media/img/assets/brand.png"
                    style="width: 185px"
                    alt="logo"
                    class="pb-4"
                />

                <form id="form-register" onsubmit="registerUser(event)">
                   <div data-mdb-input-init class="form-outline mb-4">
                    <input type="text" autocomplete="name" id="register-name" class="form-control" placeholder="Nome Completo" />
                    <span id="register-name-error" class="error-message"></span>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                    <input type="email" autocomplete="email" id="register-email" class="form-control" placeholder="Email"/>
                    <span id="register-email-error" class="error-message"></span>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                    <input type="password" id="register-password" class="form-control" placeholder="Senha"/>
                    <span id="register-password-error" class="error-message"></span>
                    </div>

                    <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        class="btn btn-lg btn-block"
                    > Registre-se </button>

                    <div class="d-flex justify-content-around align-items-center mb-4">
                        <a href="#login">Já possui uma conta? Faça o Login</a> 
                    </div>
                </form>
            </div>
        </div>
    </section>
    `;
}
