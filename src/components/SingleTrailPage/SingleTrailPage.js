import React, { Component } from 'react';
import MapDisplay from '../MapDisplay/MapDisplay';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

class SingleTrailPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: "GET_DETAILS" });
    }

    render() {
        return (
            <div>
                <Grid container
                    direction="row"
                    justify="center">
                    {/* < Grid item xs={6}>
                        <img
                            src={this.props.reduxState.image_url}
                            onClick={this.handleClick}
                            alt={this.props.reduxState.name} />
                    </Grid> */}
                    <button>Schedule</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </Grid>
                <MapDisplay />
                <pre>
                    {JSON.stringify(this.props.detailReducer, null, 2)}
                </pre>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    detailReducer: reduxState.detailReducer
});
export default connect(mapReduxStateToProps)(SingleTrailPage);