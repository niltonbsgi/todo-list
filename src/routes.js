import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import TodoEdit from './Component/TodoEdit/todo-edit';
import TodoMenu from './Component/TodoMenu/todo-menu';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/todo_menu/' component={TodoMenu} />
                <Route exact path='/todo_edit/' component={TodoEdit} />
                <Route path='/' component={TodoMenu} />               
            </Switch>
        </Router>
    );
}

export default Routes;  