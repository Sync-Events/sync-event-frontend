import '../../logo.svg'

function Navbar() {
  return (
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>Sync Events</a>
    <div className="d-flex">
      <div className="p-2">  
        <button className="btn btn-outline-success" type="">Login</button>
      </div>
      <div className="p-2">  
        <button className="btn btn-outline-success" type="">Sign Up</button>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
