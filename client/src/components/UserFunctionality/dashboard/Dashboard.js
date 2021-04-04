import React, { Component } from 'react'
import ProgramList from '../programs/ProgramList'
import Notifications from './Notifications'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {

    const { programs } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProgramList programs={programs}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    programs: state.program.programs
  }
}

export default connect(mapStateToProps)(Dashboard);