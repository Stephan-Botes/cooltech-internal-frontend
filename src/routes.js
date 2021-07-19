import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const OrganisationalUnitsOverview = React.lazy(() => import('./views/organisational-units/OrganisationalUnitsOverview'));
const NewsManagementOu = React.lazy(() => import('./views/organisational-units/NewsManagementOu'));
const SoftwareReviewsOu = React.lazy(() => import('./views/organisational-units/SoftwareReviewsOu'));
const HardwareReviewsOu = React.lazy(() => import('./views/organisational-units/HardwareReviewsOu'));
const OpinionPiecesOu = React.lazy(() => import('./views/organisational-units/OpinionPiecesOu'));
const Divisions = React.lazy(() => import('./views/divisions/Divisions'));
const Division = React.lazy(() => import('./views/divisions/Division'));
const Users = React.lazy(() => import('./views/users/Users'));

const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/ous', exact: true, name: 'Organisational Units Overview', component: OrganisationalUnitsOverview },
  { path: '/ous/news-management', exact: true, name: 'News Management', component: NewsManagementOu },
  { path: '/ous/software-reviews', exact: true, name: 'Software Reviews', component: SoftwareReviewsOu },
  { path: '/ous/hardware-reviews', exact: true, name: 'Hardware Reviews', component: HardwareReviewsOu },
  { path: '/ous/opinion-pieces', exact: true, name: 'Opinion Pieces', component: OpinionPiecesOu },
  { path: '/divisions', exact: true, name: 'Divisions', component: Divisions },
  { path: '/divisions/:id', exact: true, name: 'Division Details', component: Division },
  { path: '/users', exact: true,  name: 'Users', component: Users }
];

export default routes;
