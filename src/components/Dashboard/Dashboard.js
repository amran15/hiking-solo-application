import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import './Dashboard.css';


class Dashboard extends Component {

  componentDidMount() {
    this.props.dispatch({ type: "GET_DETAILS" });
  }

  handleClick = (trail) => {
    this.props.dispatch({ type: 'SET_SINGLE_TRAIL', payload: trail });
    this.props.history.push('/detail');
  }

  render() {
    return (
      <div>
        <div id="imgBanner">
          <img width="1500" height="500" src="images/FallHikeLoginPic.png" className="imgBanner" alt="" />
        </div>
        <div className="App">
        <br/>
        <br/>
        <Grid container id="TrailsGrid" justify="center" spacing={4}>
          {this.props.detailReducer.length && this.props.detailReducer.map(trail => {
            return <Grid item xs={4} className="imageContainer" key={trail.id}><p>{trail.name}</p>
              <img src={trail.image}
                alt={trail.name}
                onClick={(() => this.handleClick(trail))}
              /> </Grid>
          })}
        </Grid>
        </div>
      </div>
    );
  }
}



const mapReduxStateToProps = (reduxState) => ({
  detailReducer: reduxState.detailReducer
});

export default connect(mapReduxStateToProps)(Dashboard);
