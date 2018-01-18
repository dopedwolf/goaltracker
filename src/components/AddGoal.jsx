import React, {Component} from 'react';
import {goalRef} from '../firebase';
import {connect} from 'react-redux';

class AddGoal extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal() {
    console.log('this', this);
    const {title} = this.state;
    const {email} = this.props.user;
    goalRef.push({email, title});
  }

  render() {
    return(
      <form className="form-inline addGoal">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add a goal"
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({title: event.target.value})}/>
          <button
            className="btn btn-success hvr-bounce-out"
            type="button"
            onClick={() => this.addGoal()}>Add</button>
        </div>
      </form>
    )
  }
}

function mapStateToProps(state) {
  const {user} = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(AddGoal);
