import { FC } from "hono/jsx";

const Header: FC = (props) => {
  return (
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              class="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" class="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const Sidebar: FC = (props) => {
  return (
    <div
      class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style="width: 280px;"
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg class="bi pe-none me-2" width="40" height="32">
          <use xlink:href="#bootstrap"></use>
        </svg>
        <span class="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlink:href="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlink:href="#speedometer2"></use>
            </svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlink:href="#table"></use>
            </svg>
            Orders
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlink:href="#grid"></use>
            </svg>
            Products
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlink:href="#people-circle"></use>
            </svg>
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a class="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Footer: FC = (props) => {
  return (
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            Features
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            Pricing
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            FAQs
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            About
          </a>
        </li>
      </ul>
      <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
    </footer>
  );
};

const Layout: FC = (props) => {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bootstrap demo</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <Header></Header>
        <main class="d-flex flex-nowrap">
          <Sidebar></Sidebar>
          <div>{props.children}</div>
        </main>
        <Footer></Footer>
      </body>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"
      ></script>
    </html>
  );
};

export const Top: FC<{ messages: string[] }> = (props: {
  messages: string[];
}) => {
  return (
    <Layout>
      <p class="lead mb-4">
        {props.messages.map((message) => {
          return <li>{message}</li>;
        })}
      </p>
    </Layout>
  );
};
