import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


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
                <textarea class=""
                    onChange={this.handleChange}
                    value={this.state.review}
                    rows="10" cols="100" />
                <br />
                <Button variant="primary" onClick={this.saveNewReview}>Save</Button>
                <br />
                <Button onClick={this.handleCancelClick}>Cancel</Button>
                <br />
                {/* <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre> */}
            </div>
        );
    }

}





const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(ReviewHikePage);