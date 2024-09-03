export default function Nav({ links }) {
    return (
      <nav className="nav1 bg-secondary container-fluid d-flex flex-column">
          <div className="collapse navbar-collapse d-flex flex-row justify-content-between" id="navbarSupportedContent">
            <div className ="text-white">
              <h2>Isaiah</h2>
              </div>
            <div className="">
              <ul className="navbar-nav mx-2 flex-row">
                {links.map((link) => link)}
              </ul>
            </div>
          </div>
      </nav>
    );
  }
  