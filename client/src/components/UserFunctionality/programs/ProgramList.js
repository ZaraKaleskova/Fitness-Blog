import React from 'react'
import ProgramSummary from './ProgramSummary'

const ProgramList = ({programs}) => {
  return (
    <div className="program-list section">
    { programs && programs.map(program => {
      return (
        <ProgramSummary program={program} key={program.id} />
      )
    })}  
  </div>
  )
}

export default ProgramList;