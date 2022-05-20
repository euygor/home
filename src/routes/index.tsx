import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Services } from '../pages/Services';
import { Education } from '../pages/Education';
import { Certificates } from '../pages/Certificates';
import { Portfolio } from '../pages/Portfolio';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/services', element: <Services /> },
        { path: '/education', element: <Education /> },
        { path: '/certificates', element: <Certificates /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/contact', element: <Contact /> },
        { path: '*', element: <NotFound /> }
    ]);
}