import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

// Lazy Load Components
const CreateTask = React.lazy(() => import('./components/CreateTask'));
const TaskList = React.lazy(() => import('./components/TaskList'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/create-task" component={CreateTask} />
                    <Route path="/task-list" component={TaskList} />
                    <Route component={ErrorPage} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;
