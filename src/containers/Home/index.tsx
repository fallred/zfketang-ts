import * as React from 'react';
import HomeHeader from './components/HomeHeader';
import './index.less';
export default class Home extends React.Component {
    render () {
        return (
            <React.Fragment>
                <HomeHeader />
            </React.Fragment>
        );
    }
}