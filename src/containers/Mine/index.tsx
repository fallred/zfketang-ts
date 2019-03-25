import * as React from 'react';
import {connect} from 'react-redux';
import {Store,Session} from '../../types';
import {Redirect} from 'react-router-dom';
interface IProps {
    user:any
}
class Mine extends React.Component<IProps> {
    render () {
        return (
            this.props.user ? <div>mine</div> : <Redirect to="/login"/>
            
        );
    }
}
export default connect(
    (state:Store):Session => state.session
)(Mine)