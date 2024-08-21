import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Navigate
  } from 'react-router-dom';
  import { routes } from './routes';
  
  import logo from '../logo.svg';
  
  export const Navigation = () => {
    return (
      <Router>
        <div className="main-layout">
          <nav>
                <img src={ logo } alt="React Logo" />
                <ul>
                  {
                    routes.map(({to, name}) => (
                      <li>
                        <NavLink to={to}
                        className={({isActive}) => (isActive && 'nav-active') || ''}
                        key={to}
                        end
                        >
                          {name}
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
          </nav>
  
          <Routes>
            {
              routes.map(({path, Component}) => <Route path={path} element={<Component/>} key={path} />)
            }
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </Router>
    );
  }