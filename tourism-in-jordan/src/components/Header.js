/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                Features
              </a>
              <a class="nav-link" href="#">
                Pricing
              </a>
              <a class="nav-link disabled">Disabled</a>
            </div>
          </div>
        </div>
      </nav>

      <h1 class="text-center">Places</h1>
    </>
  );
};

export default Header;
