import { useEffect, useState } from 'react';
import '../../logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('user');
    setUser(user);
  }, [])

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href='/'>Sync Events</a>
        <div className="d-flex">
          {user ?
            <>
              <div className="p-2">
                <Link to='sign-up'>
                  <button className="btn btn-outline-success" type="">Profile</button>
                </Link>
              </div>
              <div className="p-2">
                <Link to='sign-up'>
                  <button className="btn btn-outline-success" type="">Sign Out</button>
                </Link>
              </div>
            </>
            :
            <>
              <div className="p-2">
                <Link to='/sign-in'>
                  <button className="btn btn-outline-success" type="">Sign in</button>
                </Link>
              </div>
              <div className="p-2">
                <Link to='sign-up'>
                  <button className="btn btn-outline-success" type="">Sign Up</button>
                </Link>
              </div>
            </>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
