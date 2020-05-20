import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const TesteRedux = lazy(() => import('./pages/TesteRedux'));
const DetalheRedux = lazy(() => import('./pages/DetalheRedux'));
const TesteStore = lazy(() => import('./pages/TesteStore'));

const Routes = () => {
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/teste-redux' component={TesteRedux} />
                <Route exact path='/teste-redux/:id' component={DetalheRedux} />
                <Route exact path='/teste-store' component={TesteStore} />
            </Suspense>
        </Switch>
    )
}

export default Routes;