import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import { renderRoutes } from "src/routes";

import style from './index.css'

const Layout = ({ route }) => (
  <main>
    <ul className={style.ul}>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink exact to="/try">tryRedux</NavLink></li>
      <li><NavLink exact to="/content">content</NavLink></li>
      <li><NavLink exact to="/404">404</NavLink></li>
    </ul>
    <div>
      {renderRoutes(route.routes)}
    </div>
  </main>
);

Layout.propTypes = {
  route: PropTypes.object.isRequired
};

export default Layout;
