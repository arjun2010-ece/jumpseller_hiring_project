import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import App from './App';
import {PostDetails} from './components/PostDetails';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/posts/details/:id' component={PostDetails} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;