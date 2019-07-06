import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import './Dashboard.css';


class Dashboard extends Component {

  componentDidMount() {
    this.props.dispatch({ type: "GET_DETAILS" });
  }

  handleClick = (trail) => {
    this.props.dispatch({type: 'SET_SINGLE_TRAIL', payload: trail});
    this.props.history.push('/detail');
  }

  render() {
    return (
      <div>
      <Grid container id="TrailsGrid" xs={12} justify="center" spacing={4}>
        {this.props.detailReducer.length !== 0 && this.props.detailReducer.map(trail => {
          return <Grid item xs={4} className="imageContainer" key={trail.id} >{trail.name}
            <img src={trail.image}
              alt={trail.name}
              onClick={(()=>this.handleClick(trail))}
            /> </Grid>
        })}
        </Grid>
      </div>
    );
  }
}



const mapReduxStateToProps = (reduxState) => ({
  detailReducer: reduxState.detailReducer
});

export default connect(mapReduxStateToProps)(Dashboard);
