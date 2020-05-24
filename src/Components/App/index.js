import React from 'react';
import Welcome from '../Welcome';
import RouteMaker from '../RouteMaker';
import './style.css';


export const APP_STATES = {
    WELCOME: 'welcome',
    ROUTE: 'route'
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = APP_STATES.WELCOME;
        this.updateState = this.updateState.bind(this)
    }

    updateState(nextState) {
        this.setState({nextState});
    }

    render () {
        let currentView;
        switch(this.state) {
            case APP_STATES.WELCOME:
                currentView = <Welcome nextState = {this.updateState}/>;
                break;
            default:
                currentView = <RouteMaker />;
                break;
        }

        return (
            currentView
        );
    }
}

export default App;
