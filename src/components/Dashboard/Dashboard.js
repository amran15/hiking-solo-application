import React, { Component } from 'react';
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
        {this.props.detailReducer.length !== 0 && this.props.detailReducer.map(trail => {
          return <div className="imageContainer" key={trail.id} >{trail.name}
            <img src={trail.image}
              alt={trail.name}
              onClick={(()=>this.handleClick(trail))}
            /> </div>
        })}
      </div>
    );
  }
}



const mapReduxStateToProps = (reduxState) => ({
  detailReducer: reduxState.detailReducer
});

export default connect(mapReduxStateToProps)(Dashboard);
