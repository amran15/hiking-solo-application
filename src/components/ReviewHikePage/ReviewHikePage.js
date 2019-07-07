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

    submitNewReview = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'EDIT_HIKE', payload: { ...this.state, id: this.props.reduxState.detailReducer } })
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
                    <form onSubmit={this.submitNewReview}>
                        <textarea
                            onChange={this.handleChange}
                            value={this.state.review}
                            rows="10" cols="50" />
                        <br />
                        <Button>Save</Button>
                        <br />
                        <Button onClick={this.handleCancelClick}>Cancel</Button>
                        <br />
                    </form>
                </h2>
                <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
            </div>
        );
    }

}





const mapReduxStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapReduxStateToProps)(ReviewHikePage);