import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class ReviewHikePage extends Component {
    state = {
        review: ''
    }

    handleCancelClick = () => {
        this.props.history.push('/detail');

    }

    saveNewReview = (reviewId) => {
        this.props.dispatch({ type: 'REVIEW_HIKE', payload: { review: this.state.review, id: reviewId } })
        console.log(this.props.match.params.id);
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
                <h2>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.review}
                        rows="10" cols="50" />
                    <br />
                    <Button onClick={this.saveNewReview}>Save</Button>
                    <br />
                    <Button onClick={this.handleCancelClick}>Cancel</Button>
                    <br />
                </h2>
                <pre>{JSON.stringify(this.props.reduxState.detailReducer, null, 2)}</pre>
            </div>
        );
    }

}





const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(ReviewHikePage);