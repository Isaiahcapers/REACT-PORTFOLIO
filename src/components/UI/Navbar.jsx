export default function Nav({ links }) {
    return (
      <nav className="nav1">
          <div  id="navName">
            <div className ="nav-H1">
              <h2>Isaiah</h2>
              </div>
            <div className="nav-links">
              <ul className="nav-links-style">
                {links.map((link) => link)}
              </ul>
            </div>
          </div>
      </nav>
    );
  }
  