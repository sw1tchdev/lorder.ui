import React, { lazy, Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';

import LoadingPage from '@components/loading-page';

import NestedRoute from '#/@common/#nested-route';
import { ROLES } from '#/@store/roles';
import { ROUTE } from '#/@store/router';

import { IRoute, ROLE } from '@types';
import { useAllowedRoutes } from '@utils/useAllowedRoutes';

export const APP_MAIN_ROUTES: IRoute[] = [
  {
    access: [ROLES.ALL],
    component: lazy(() => import('./#public')),
    path: ROUTE.PUBLIC.LIST,
  },
  {
    access: [ROLES.ALL],
    component: lazy(() => import('./#start/#-identifier')),
    path: '/start/:identifier',
  },
  {
    access: [ROLES.ALL],
    component: lazy(() => import('./#hi')),
    path: '/hi',
  },
  {
    access: [ROLES.GUESTS],
    component: lazy(() => import('./#auth')),
    path: '/auth',
  },
  {
    access: [ROLES.USERS],
    component: lazy(() => import('./#')),
    getReducers: import('./#/@store/reducers'),
    path: '/',
  },
];

interface IAppProps {
  userRole: ROLE;
}

export const AppJsx: React.FC<IAppProps> = ({ userRole }) => {
  const preparedRoutes = useAllowedRoutes(APP_MAIN_ROUTES, userRole);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Redirect from="/index.html" to="/" exact />
        {preparedRoutes.map((route: IRoute) => (
          <NestedRoute key={route.path} {...route} />
        ))}
        <Redirect from="/" to="/hi" exact />
        <Redirect to="/auth" />
      </Switch>
    </Suspense>
  );
};
