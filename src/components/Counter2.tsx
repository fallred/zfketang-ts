import * as React from 'react';
import {connect} from 'react-redux';
import {Store,Counter2} from '../types';
import actions from '../store/actions/counter';
interface IProps {
    number: number,
    increment: any,
    incrementDelay:any,
    decrement: any,
}

class Counter extends React.Component<IProps> {
    render(){
        let {number,increment, decrement, incrementDelay} = this.props;
        return (
            <div>
                <p>counter2</p>
               <p>{number}</p>
               <button
                onClick={increment}
               >+</button>
               <br/>
               <button
                onClick={incrementDelay}
               >1s后+1</button>
               <br/>
                <button
                onClick={decrement}
               >-</button>
            </div>
        );
    }
}
let mapStateToProps = function(state:Store):Counter2{
    return state.counter2;
}
export default connect(
    mapStateToProps,
    actions
)(Counter)