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
     handleSubmitReview = () => {
        this.props.history.push('/history');

     }

    handleChange = (event) => {
        console.log(this.state.review)
        this.setState({
            review: event.target.value
        })

    }
    
    render() {
        return (
            <div>
                <textarea 
                onChange={this.handleChange} 
                value={this.state.review}
                rows="10" cols="100" />
                <br/>
                <Button onClick={this.handleSubmitReview}>Save</Button>
                <br/>
               <Button onClick={this.handleCancelClick}>Cancel</Button>
            
                <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
            </div>
        );
    }

}





const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(ReviewHikePage);