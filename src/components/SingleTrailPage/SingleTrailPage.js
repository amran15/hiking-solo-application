import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './SingleTrailPage.css';


import WrappedMap from '../MapDisplay/MapDisplay'
const mapKey = `${process.env.REACT_APP_API_KEY}`;

class SingleTrailPage extends Component {
    handleClick = () => {
        this.props.history.push('/confirm');
    }

    render() {
        return (
            <div>
                <Grid container
                    direction="row"
                    justify="center">
                    < Grid item xs={6}>
                    <div className="singleTrailImage">
                    <img src={this.props.singleTrailReducer.image} />
                    </div>
                    </Grid>
                    <br />
                    <br />
                    <br />
                    <Grid item xs={6}>
                        <p>{this.props.singleTrailReducer.name}</p>
                        <p>{this.props.singleTrailReducer.address}</p>
                        <p>{this.props.singleTrailReducer.description}</p>
                        <button onClick={this.handleClick}>Schedule</button>
                    </Grid>
                    <br />
                    <br />
                    <br />
                    <br />
                </Grid>
                <div style={{ paddingLeft: "10vw", width: "80vw", height: "80vh" }}>
                    <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
                        libraries=geometry,drawing,places&key=${mapKey}`}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        latitude={this.props.singleTrailReducer.latitude}
                        longitude={this.props.singleTrailReducer.longitude}
                    />
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    singleTrailReducer: reduxState.singleTrailReducer
});
export default connect(mapReduxStateToProps)(SingleTrailPage);