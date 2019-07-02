import React, {Component} from 'react';
import { connect } from 'react-redux';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class Dashboard extends Component {

  componentDidMount() {
    this.props.dispatch({ type: "GET_DETAILS" });
}

  render() {
    return (
      <div>
        <p>THIS IS WHERE I MAP to display my trials/create search input bar and bring in material ui grid/card</p>
        <p>get done and functional tonight! Also pass the reduxState through props on the singlehiketrail page</p>
        <pre>
          {JSON.stringify(this.props.reduxState.detailReducer, null, 2)}
        </pre>
      </div>
    );
  }

}





// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
// const mapStateToProps = state => ({
//   user: state.user,
// });


const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(Dashboard);
