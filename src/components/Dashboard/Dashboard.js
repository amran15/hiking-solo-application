import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import './Dashboard.css';
import Button from '@material-ui/core/Button';


class Dashboard extends Component {
  state = {
    search_hike: '',
  }

  componentDidMount() {
    this.props.dispatch({ type: "GET_DETAILS" });
  }

  handleClick = (trail) => {
    this.props.dispatch({ type: 'SET_SINGLE_TRAIL', payload: trail });
    this.props.history.push('/detail');
  }

  handleChange = (event) => {
    this.setState({
      search_hike: event.target.value
    })
  }

  searchHikes = () => {
    let filtered_hikes = []
    this.props.detailReducer.map(trail => {
      if (this.caseInsensitiveInclude(trail)) {
        filtered_hikes.push(trail)
      }
    })
    this.props.dispatch({ type: 'SEARCH_HIKE', payload: filtered_hikes })
    console.log(filtered_hikes)
  }
  caseInsensitiveInclude = (trail) => {
    return trail.name.toLowerCase().includes(this.state.search_hike) ||
      trail.name.includes(this.state.search_hike)
  }

  render() {
    return (
      <div>
        <div id="imgBanner">
          <img width="100%" height="500" src="images/FallHikeLoginPic.png" className="imgBanner" alt="" />
        </div>
        <div className="searchInput">
          <input onChange={this.handleChange} />
          <Button onClick={this.searchHikes}>Search</Button>
        </div>
        <p className="pTag"><b>Below are a list of clickable trails you can search before scheduling your upcoming hike</b></p>
        <div className="App">
          <br />
          <br />
          <Grid container id="trailsGrid" justify="center" spacing={4}>
            {this.props.searchHikeReducer.map(trail => {
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
  detailReducer: reduxState.detailReducer,
  searchHikeReducer: reduxState.searchHikeReducer
});

export default connect(mapReduxStateToProps)(Dashboard);
