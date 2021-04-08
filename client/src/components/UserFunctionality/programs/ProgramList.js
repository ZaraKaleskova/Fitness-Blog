import React from 'react'
import ProgramSummary from './ProgramSummary'
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const ProgramList = ({programs}) => {
  return (
    <div className="programList">
    { programs && programs.map(program => {
      return (
        <Link to={'/program/' + program.id}  key={program.id}>
        <ProgramSummary program={program} />
        
        </Link>
      )
    })}  
  </div>
  )
}

export default ProgramList;


