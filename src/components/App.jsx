import React, {Component} from 'react';
import{firebaseApp} from '../firebase';
import {connect} from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoals from './CompleteGoals';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div id="container" className="appPage">
        <div className="pageMenu">
          <button
            className="btn btn-danger hvr-buzz-out"
            onClick={() => this.signOut()}>
            Sign Out
          </button>
          <h3>Fourteen76 To Do</h3>
          <AddGoal />
        </div>
        <div className="goalsPage">
          <GoalList />
        </div>
        <div className="completeGoals">
          <h3>Completed</h3>
          <CompleteGoals/>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(App);
