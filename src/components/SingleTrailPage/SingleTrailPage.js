import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ConfirmHikePage from '../ConfirmHikePage/ConfirmHikePage';
import './SingleTrailPage.css';


import WrappedMap from '../MapDisplay/MapDisplay';
const mapKey = `${process.env.REACT_APP_API_KEY}`;

class SingleTrailPage extends Component {
    

    handleClick =() =>{
        console.log('takes me back home')
    }
    render() {
        return (
            <div>
                <Grid id="singleTrailImage" container item xs={12} justify="center" spacing={4}>
                    <Grid item xs={5} className="imageContainer">
                        <img src={this.props.singleTrailReducer.image}
                            alt="" />
                    </Grid>
                    <Grid item xs={5} className="detailGrid">
                        <Card elevation={5} className="detailGrid my-10">
                            <CardContent>
                                <Typography variant="subtitle1">Trail:</Typography>
                                <Typography noWrap>{this.props.singleTrailReducer.name}</Typography>
                                <p>{this.props.singleTrailReducer.address}</p>
                                <p>{this.props.singleTrailReducer.description}</p>
                                <ConfirmHikePage locationId={this.props.singleTrailReducer.id} userId={this.props.reduxState.user.id}/>
                                <br/>
                                <br/>
                                <Link to="/review">
                                    <Button variant="contained" onClick={this.handleClick} color="primary">Review</Button>
                                </Link>
                                <br/>
                                <br/>
                                <Link to="/home">
                                    <Button variant="contained" onClick={this.handleClick} color="primary">Back</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={10} className="my-10" >
                        <Card elevation={5} className="mapGrid">
                            <CardContent>
                                <div style={{ width: "80vw", height: "80vh" }}>
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
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    singleTrailReducer: reduxState.singleTrailReducer,
    reduxState
});
export default connect(mapReduxStateToProps)(SingleTrailPage);