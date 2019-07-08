import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';


class HikeHistoryTable extends Component {
    
    componentDidMount(){
        this.props.dispatch({ type: 'GET_DETAILS'});
    }

    handleDelete = (hikeId) => {
        Swal.fire({
            title: 'Are you sure you want to delete this trail?',
            text: 'Are you sure you want to delete this?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.props.dispatch({ type: 'DELETE_HISTORY', payload: {id: hikeId} });
                Swal.fire(
                    'Deleted!',
                    'Your trail has been deleted!',
                    'success'
                )
            }
        })
    }
    

    handleReview = () => {
        this.props.history.push({
            pathname: '/review',
            state: {
                  id: this.props.hike.id
             }
       })
    }


    render() {
        return (
            <TableRow >
                <TableCell>{this.props.hike.name}</TableCell>
                <TableCell>{this.props.hike.visit_date && this.props.hike.visit_date.substring(5, 7) + "/" + this.props.hike.visit_date.substring(8, 10) + "/" + this.props.hike.visit_date.substring(0, 4)}</TableCell>
                <TableCell>{this.props.hike.time}</TableCell>
                <TableCell>{this.props.hike.review ? <> {this.props.hike.review}</>
                 : <Button size="small" onClick={this.handleReview}>Review</Button>}</TableCell>
                <TableCell>
                    <Button size="small" onClick={()=>this.handleDelete(this.props.hike.id)}>Delete</Button>
                </TableCell>
            </TableRow>

        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    trailHistoryReducer: reduxState.trailHistoryReducer

});

export default connect(mapReduxStateToProps)(HikeHistoryTable);