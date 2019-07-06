import React, { Component } from 'react';
import { connect } from 'react-redux';


class ReviewHikePage extends Component {
    state = {
        review: ''
    } 

    handleCancelClick = () => {
        this.props.history.push('/detail');

     }
     handleSubmitReview = () => {
        this.props.history.push('/history');

     }

    handleChange = () => {
        this.setState({
           review: this.state.review
        })

    }

    render() {
        return (
            <div>
                <textarea onChange={this.handleChange} value={this.state.review}
                rows="10" cols="100" />
                <br/>
                <button onClick={this.handleSubmitReview}>Save</button>
                <br/>
               <button onClick={this.handleCancelClick}>Cancel</button>
            
                <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
            </div>
        );
    }

}





const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(ReviewHikePage);