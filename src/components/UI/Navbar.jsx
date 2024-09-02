export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary container-fluid ">
        <div className=" container-fluid">
          <div className="collapse navbar-collapse d-flex flex-row justify-content-between cotainer-fluid" id="navbarSupportedContent">
         <div className ="text-white">
            <h2>Isaiah</h2></div>
            <div><ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul></div>
          </div>
        </div>
      </nav>
    );
  }
  