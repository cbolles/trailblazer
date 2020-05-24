import React from 'react';
import './style.css'
import Map from '../Map';
import { withScriptjs } from "react-google-maps";

class RouteMaker extends React.Component {
    render() {
        const MapLoader = withScriptjs(Map);
        return (
            <div className="RouteMaker">
                <center>
                    <h1 style={{fontFamily: "verdana"}}>Plan Your Next Trip</h1>
                </center>
                <br/>
                <br/>
                <div>
                    <label htmlFor="from">Start Location:</label>
                    <input type="text" id="from" name="from"/>
                    <label htmlFor="to">Final Destination:</label>
                    <input type="text" id="to" name="to"/>
                    <fieldset id="feat">
                        <legend>Features: </legend>
                            <div>
                                <label htmlFor="hike">Hike</label>
                                <input type="checkbox" name="hike" value="hike"/> <br/>
                                <label htmlFor="camp">Camp</label>
                                    <input type="checkbox" name="camp" value="camp"/><br/>
                                <label htmlFor="swim">Swim</label>
                                <input type="checkbox" name="swim" value="swim"/><br/>
                                <label htmlFor="fishing">Fishing</label>  
                                <input type="checkbox" name="fishing" value="fish"/><br/>
                                <label htmlFor="star">Stargazing</label>
                                <input type="checkbox" name="star" value="star"/><br/>
                        </div>
                    </fieldset>
                    <label htmlFor="miles">Maximum distance from route: </label>
                    <select id="miles" name="miles">
                        <option value="1">1 mile</option>
                        <option value="2">5 miles</option>
                        <option value="10">15 miles</option>
                        <option values="25">25 miles</option>
                        <option values="50">50 miles</option>
                    </select>
                </div>
                <MapLoader
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDI3-W09dhJV0tMfAFGpcEembgeKKWBd2Y"
                    loadingElement={<div style={{ height: `100%` }} />}
                /> 
            </div>
        );
    }
}

export default RouteMaker;
