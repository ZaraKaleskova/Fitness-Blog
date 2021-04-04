const initState = {
  programs: [
    {id: '1', title: 'title1', content: 'content1'},
    {id: '2', title: 'title2', content: 'some content'},
    {id: '3', title: 'title3', content: 'some more content'}
  ]
}

const programReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROGRAM_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_PROGRAM_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default programReducer;