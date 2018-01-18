import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCompleted} from '../actions';
import {completeGoalRef} from '../firebase';

class CompleteGoals extends Component {
  componentDidMount(){
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const {email, title} = completeGoal.val();
        completeGoals.push({email, title});
      })
      this.props.setCompleted(completeGoals);
    })
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render(){
    return (
      <div className="goalList">
        {this.props.completeGoals.map((completeGoal, index) => {
          const {title, email} = completeGoal;
          return (
            <div key={index}>
              <div className="goalItem">
                <h4>
                  {title}
                </h4>
                <p className="author">Completed by: {email}</p>
              </div>
            </div>
          )
        })}
        <button
          className="btn btn-danger hvr-bounce-out"
          onClick={() => this.clearCompleted()}
          >
          Clear All
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {completeGoals} = state;
  return {
    completeGoals
  }
}

export default connect(mapStateToProps,{setCompleted})(CompleteGoals);
