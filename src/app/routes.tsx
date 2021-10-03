
import HomePageWithoutRedux from '../pages/matches/MatchesPage';
import HomePage from '../pages/home/HomePage';

import MainLayout from '../pages/components/MainLayout';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/matches', element: <HomePageWithoutRedux /> },
    ]
  }
];

export default routes;