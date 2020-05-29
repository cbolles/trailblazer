/* eslint-disable no-undef */

import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";


class Map extends React.Component {
    state = {
        directions: null
    };

    constructor(props) {
        super(props);
        this.directionService = new google.maps.DirectionsService();
        this.geocoder = new google.maps.Geocoder();
    }

    componentDidMount() {
        const directionsService = new google.maps.DirectionsService();

        const origin = { lat: 40.756795, lng: -73.954298 };
        const destination = { lat: 41.756795, lng: -78.954298 };

        directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
      }

    render() {
        const GoogleMapView = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
                defaultZoom={13}
            >
                <DirectionsRenderer
                    directions={this.state.directions}
                />
            </GoogleMap>
        ));

        return (
            <div>
                <GoogleMapView
                    containerElement={<div style={{ height: `500px`, width: "100%" }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }  
}

export default Map;
