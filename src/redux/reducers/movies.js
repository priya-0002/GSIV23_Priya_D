const initialState = {
    upcomingMovies: [],
    searchResults: [],
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_UPCOMING_MOVIES':
        return { ...state, upcomingMovies: action.payload };
      case 'SET_SEARCH_RESULTS':
        return { ...state, searchResults: action.payload };
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  