import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


class HikeHistoryTable extends Component {
    componentDidMount() {
        this.displayHistory();
    }

    displayHistory = () => {
        this.props.dispatch({ type: 'HIKE_HISTORY' })
    }

    handleDelete = () => {
        this.props.dispatch({type: 'DELETE_HISTORY', payload: this.props.hike.id })
        console.log(this.props.hike.id)
    }

    render() {
        return (
                <TableRow >
                    <TableCell>{this.props.hike.name}</TableCell>
                    <TableCell>{this.props.hike.visit_date && this.props.hike.visit_date.substring(5, 7) + "/" + this.props.hike.visit_date.substring(8, 10) + "/" + this.props.hike.visit_date.substring(0, 4)}</TableCell>
                    <TableCell>{this.props.hike.time}</TableCell>
                    <TableCell>{this.props.hike.review}</TableCell>
                    <TableCell>
                        <Button size="small" onClick={this.handleDelete}>Delete</Button>
                    </TableCell>
                </TableRow>

        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    trailHistoryReducer: reduxState.trailHistoryReducer

});

export default connect(mapReduxStateToProps)(HikeHistoryTable);