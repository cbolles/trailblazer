import React from 'react';
import { APP_STATES } from '../App';

class Welcome extends React.Component {
    render () {
        return (
            <div classname="Welcome">
                <p>Welcome Page</p>
                <button onClick={() => this.props.nextState(APP_STATES.ROUTE)}>Make Route</button>
            </div>
        );
    }
}

export default Welcome;
