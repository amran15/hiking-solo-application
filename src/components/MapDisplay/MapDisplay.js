import React, { Component } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const mapKey = `AIzaSyB7IhWarbjO1tarNB4ylBQCVEbDyyoIisc`;
console.log(mapKey);




class Map extends Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{
          lat: 46.729553,
          lng: -94.685898
        }} />
    );
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function MapDisplay() {
  return (
    <div style={{ width: "80vw", height: "80vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
      libraries=geometry,drawing,places&key=${mapKey}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>

  )
}
