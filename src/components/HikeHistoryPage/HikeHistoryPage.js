import React, { Component } from 'react';
import { connect } from 'react-redux';
import HikeHistoryTable from '../HikeHistoryTable/HikeHistoryTable';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




class HikeHistoryPage extends Component {
    componentDidMount() {
        this.displayHistory();
    }

    displayHistory = () => {
        this.props.dispatch({ type: 'HIKE_HISTORY' })
    }


    render() {
        return (
            <div>
                {/* <pre>
                    {JSON.stringify(this.props.trailHistoryReducer, null, 2)}
                </pre> */}
                <>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Trail Name</TableCell>
                            <TableCell>Date Visited</TableCell>
                            <TableCell>Time Visited</TableCell>
                            <TableCell>Review of Trail</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
        {this.props.trailHistoryReducer.map((hike, i) => { return <HikeHistoryTable history={this.props.history} key={i} hike={hike} /> })}
                    </TableBody>
                </Table> 
                </>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    trailHistoryReducer: reduxState.trailHistoryReducer

});

export default connect(mapReduxStateToProps)(HikeHistoryPage);