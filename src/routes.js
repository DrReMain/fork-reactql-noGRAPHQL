import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'src/components';
import { Home, TryRedux, NotFound, Content } from 'src/views';

export const routes = [
  {
    component: Layout,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/try', component: TryRedux },
      { path: '/content', component: Content },
      { component: NotFound }
    ]
  }
];

export const renderRoutes = (routesList) => {
  const list = routesList

    ? (
      <Switch>
        {routesList.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => <route.component {...props} route={route}/>}
          />
        ))}
      </Switch>
    )

    : null;

  return list;
};
