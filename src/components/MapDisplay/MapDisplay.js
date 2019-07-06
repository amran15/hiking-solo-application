import React, { Component } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";


class Map extends Component {
  render() {
    console.log(this.props);
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{
          lat: Number(this.props.latitude),
          lng: Number(this.props.longitude),
        }}>
        <Marker position={{
          lat: Number(this.props.latitude),
          lng: Number(this.props.longitude),
        }}>

        </Marker>

      </GoogleMap>
    );
  }
}



const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap;
