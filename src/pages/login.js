function loginPage() {
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

                <form id="form-login" onsubmit="login(event)">
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input
                            type="email"
                            id="login-email"
                            class="form-control form-control-lg"
                            autocomplete="email"
                            placeholder="Email"
                            
                        />
                        <span id="login-email-error" class="error-message"></span>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                        <input
                            type="password"
                            id="login-password"
                            class="form-control form-control-lg"
                            placeholder="Senha"
                        />
                        <span id="login-password-error" class="error-message"></span>
                    </div>

                    <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        class="btn btn-lg btn-block"
                        
                    > Entrar </button>

                    <div class="d-flex justify-content-around align-items-center mb-4">
                        <a href="#register">Não possui uma conta? Registre-se</a>
                    </div>
                </form>
            </div>
        </div>
    </section>
    `;
}
