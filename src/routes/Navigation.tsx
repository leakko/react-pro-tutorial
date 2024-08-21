import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Navigate
  } from 'react-router-dom';
  
  import logo from '../logo.svg';
  
  export const Navigation = () => {
    return (
      <Router>
        <div className="main-layout">
          <nav>
                <img src={ logo } alt="React Logo" />
                <ul>
                    <li>
                        <NavLink to="/home" className={({isActive}) => (isActive && 'nav-active') || ''} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"  className={({isActive}) => (isActive && 'nav-active') || ''} end>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users"  className={({isActive}) => (isActive && 'nav-active') || ''} end>Users</NavLink>
                    </li>
                </ul>
          </nav>
  
          <Routes>
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/users" element={<h1>Users</h1>} />
            <Route path="/home" element={<h1>Home</h1>} />
            <Route path="/*" element={<Navigate to="home" replace />} />
          </Routes>
        </div>
      </Router>
    );
  }