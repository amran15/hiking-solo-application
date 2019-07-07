import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


class HikeHistoryTable extends Component {

    handleDelete = () => {
        this.props.dispatch({ type: 'DELETE_HISTORY', payload: this.props.hike.id })
    }

    render() {
        return (
            <TableRow >
                <TableCell>{this.props.hike.name}</TableCell>
                <TableCell>{this.props.hike.visit_date && this.props.hike.visit_date.substring(5, 7) + "/" + this.props.hike.visit_date.substring(8, 10) + "/" + this.props.hike.visit_date.substring(0, 4)}</TableCell>
                <TableCell>{this.props.hike.time}</TableCell>
                <TableCell>{this.props.hike.review}</TableCell>
                <TableCell>
                    <Link to="/home">
                        <Button size="small" onClick={this.handleDelete}>Delete</Button>
                    </Link>
                </TableCell>
            </TableRow>

        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    trailHistoryReducer: reduxState.trailHistoryReducer

});

export default connect(mapReduxStateToProps)(HikeHistoryTable);