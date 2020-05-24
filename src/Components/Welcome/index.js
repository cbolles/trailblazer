import React from 'react';
import { APP_STATES } from '../App';
import './style.css';

class Welcome extends React.Component {
    render () {
        return (
            <div className="Welcome">
                <center>
                    <h1 align="center"> Welcome  to TrailBlazer! </h1>
                    <p align="center" style={{fontSize: 30}}>We aim to provide you with the complete experience of
                    travelling during this time. Give us an idea of where you would like to go
                    and we will supplement you with the best route and possible stops on the way!</p>
                    <br></br>
                    <fieldset style={{width: 500}}>
                        <legend style={{fontSize: 30}}> You can either log in or proceed as a guest</legend>
                        <div>
                            <a href="/LogIn"><button>Log In</button></a>
                            <a href="/Guest"><button>Guest User</button></a>
                        </div>
                    </fieldset>
                </center>
            </div>
        );
    }
}

export default Welcome;
