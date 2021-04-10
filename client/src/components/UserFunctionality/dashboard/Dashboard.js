import React, { Component } from 'react'
import ProgramList from '../programs/ProgramList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom';

class Dashboard extends Component {
  render() {

    const { programs, auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="workouts">
        <div className="row">
          <div className="col s12 m6">
            <ProgramList programs={programs}/>
          </div>    
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  const uid = state.firebase.auth.uid;
  return {
    programs: state.firestore.ordered.programs,
    auth: state.firebase.auth,
    uid: uid,    
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'programs' },   
  ])
)(Dashboard);

