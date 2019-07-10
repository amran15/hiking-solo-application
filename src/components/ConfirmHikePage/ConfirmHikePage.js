import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';


class ConfirmHikePage extends Component {
    state = {
        date: null,
        time: null
    }

    handleChange = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value
        })
    }

    handleConfirm = () => {
        if (this.state.date && this.state.time) {
            this.props.dispatch({ type: 'CONFIRM_HIKE', payload: { ...this.state, location_id: this.props.locationId, user_id: this.props.userId } })
            this.props.history.push('/history')
        } else {
            Swal.fire({
                title: 'Schedule your hike. Please.',
                animation: false,
                customClass: {
                    popup: 'animated tada'
                }
            })
        }
    } 

    render() {
        return (
            <div>
                <TextField id="date" type="date" default="2019-07-05" onChange={this.handleChange('date')} />
                <br />
                <br />
                <TextField id="time" type="time" default="2:00" onChange={this.handleChange('time')} />
                <br />
                <br />
                <Button variant="contained" onClick={this.handleConfirm} color="primary">Schedule</Button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(ConfirmHikePage);