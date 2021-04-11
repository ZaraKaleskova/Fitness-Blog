import React from 'react';
import moment from 'moment';

const ProgramSummary = ({program}) => {
  return (
    <div id="programs">
      <div className="programContent">
        <span className="card-title ">{program.title}</span>
        <p>Posted by {program.authorFirstName} </p>
        <p className="grey-text">{moment(program.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProgramSummary;
