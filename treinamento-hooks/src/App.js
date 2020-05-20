import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';
import store from './store';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/teste-redux'>Testando Redux</Link>
          </li>
          <li>
            <Link to='/teste-store'>Testando Store</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;