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

// export default function MapDisplay() {
//   console.log(this.props);
//   return (
//     <div style={{ width: "80vw", height: "80vh" }}>
//       <WrappedMap
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
//       libraries=geometry,drawing,places&key=${mapKey}`}
//         loadingElement={<div style={{ height: "100%" }} />}
//         containerElement={<div style={{ height: "100%" }} />}
//         mapElement={<div style={{ height: "100%" }} />}
//       />
//     </div>

//   )
// }
