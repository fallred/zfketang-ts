import * as React from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import Mine from './Mine';
import Profile from './Profile';
import '../common/index.less';
import Tab from '../components/Tab';
import Detail from './Detail';
export default class App extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Route exact path="/" component={Home}/>
                <Route exact path="/mine" component={Mine}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/detail/:id" component={Detail}/>
                <Tab />
            </React.Fragment>
        );
    }
}