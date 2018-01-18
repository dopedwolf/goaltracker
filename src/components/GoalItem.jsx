import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeGoalRef, goalRef} from '../firebase';

class GoalItem extends Component {
  completeGoal(){
    //add to complete goals on database
    //remove this goals from reference
    const {email} = this.props.user;
    const {title, serverkey} = this.props.goal;
    console.log('email', email, 'title',title);
    goalRef.child(serverkey).remove();
    completeGoalRef.push({email,title});
  }
  render() {
    const {email, title} = this.props.goal;
    return (
      <div className="goalItem">
        <h4>
          {title}
        </h4>
        <p p className="author">Added by: {email}</p >
        <p
          className="complete hvr-pulse"
          onClick={() => this.completeGoal()}
          >Complete</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {user} = state;
  return {
    user
  }
}

export default connect(mapStateToProps,null)(GoalItem);
