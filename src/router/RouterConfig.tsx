import { Routes, Route } from 'react-router-dom';

import { routerPath } from '../constants/routerPath';

import Catalog from 'pages/Catalog/Catalog';
import DetailBook from 'pages/DetailBook/DetailBook';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export default function RouterConfig() {
    const routesConfig = [
        {
            path: routerPath.INDEX,
            element: <Catalog />,
        },
        {
            path: routerPath.BOOKS,
            element: <Catalog />,
        },
        {
            path: routerPath.BOOK,
            element: <DetailBook />,
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
    ];

    return (
        <Routes>
            {routesConfig.map((route, index) => {
                return <Route key={index} path={route.path} element={route.element} />;
            })}
        </Routes>
    );
}
