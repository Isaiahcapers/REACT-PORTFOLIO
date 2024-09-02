export default function Nav({ links }) {
    return (
      <nav className="bg-secondary container-fluid position-fixed top-0">
        <div >
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
        </div>
      </nav>
    );
  }
  