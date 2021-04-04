  
export const createProgram = (program) => {
    return (dispatch, getState) => {
      // make async call to database
      dispatch({ type: 'CREATE_PROGRAM', program });
    }
  };