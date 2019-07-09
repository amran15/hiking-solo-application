import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


class ReviewHikePage extends Component {
    state = {
        review: ''
    }

    handleCancelClick = () => {
        this.props.history.push('/history');

    }

    saveNewReview = () => {
        this.props.dispatch({ type: 'REVIEW_HIKE', payload: { review: this.state.review, id: this.props.location.state.id } })
        this.props.history.push('/history');
    };
    handleChange = (event) => {
        console.log(this.state.review)
        this.setState({
            review: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Grid container justify="center">
                    <Grid item xs={9}>
                        <TextField
                        fullWidth
                        rows="20"
                        multiline
                        label="note"
                        variant="outlined"
                        onChange={this.handleChange}
                        value={this.state.review}/>
                    </Grid>
                    <Grid item xs={9}>
                <Button variant="primary" onClick={this.saveNewReview}>Save</Button>
                <Button onClick={this.handleCancelClick}>Cancel</Button>
                </Grid>
                </Grid>
            </div>
        );
    }

}





const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(ReviewHikePage);