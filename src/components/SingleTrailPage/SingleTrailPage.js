import React, { Component } from 'react';
import MapDisplay from '../MapDisplay/MapDisplay';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

class SingleTrailPage extends Component {
    handleClick = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <Grid container
                    direction="row"
                    justify="center">
                    < Grid item xs={6}>
                            <img src={this.props.singleTrailReducer.image} />
                    </Grid>
                    <button onClick={this.handleClick}>Schedule</button>
                    <br />
                    <br />
                    <br />
                    <Grid item xs={6}>
                    <p>{this.props.singleTrailReducer.name}</p>
                    <p>{this.props.singleTrailReducer.address}</p>
                    <p>{this.props.singleTrailReducer.description}</p>
                    </Grid>
                    <br />
                    <br />
                    <br />
                    <br />
                </Grid>
                {/* <MapDisplay /> */}
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    singleTrailReducer: reduxState.singleTrailReducer
});
export default connect(mapReduxStateToProps)(SingleTrailPage);