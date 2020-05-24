import React from 'react';
import GoogleMapReact from 'google-map-react';


class Map extends React.Component {
    static defaultProps = {
        center: {
            lat: 43.0844994,
            lng: -77.6771198
        },
        zoom: 11
    }

    render() {
        return (
            <div className="Map" style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDI3-W09dhJV0tMfAFGpcEembgeKKWBd2Y" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                />
            </div>
        );
    }
}

export default Map;
