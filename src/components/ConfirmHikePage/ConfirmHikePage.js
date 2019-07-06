import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class ConfirmHikePage extends Component {
    state = {
        date: '',
        time: ''
    }

   handleChange = (propertyName) => (event) =>{
       this.setState({
           [propertyName]: event.target.value
       })
   }

   handleConfirm = () => {
    this.props.dispatch({type: 'CONFIRM_HIKE', payload: {...this.state, location_id: this.props.locationId, user_id: this.props.userId}})
}


    handleCancel = () => {
        this.props.history.push('/detail')
    }
    render() {
        return (
            <div>
                <TextField id="date" type="date" default="2019-07-05" onChange={this.handleChange('date')}/>
                <br/>
                <br/>
                <TextField id="time" type="time"  default="2:00" onChange={this.handleChange('time')}/>
                <br/>
                <br/>
                <Link to="/history">
                    <Button variant="contained" onClick={this.handleConfirm} color="primary">Schedule</Button>
                </Link>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps) (ConfirmHikePage);