const initialState = {
    completed: [],
    initiated: []
  };
  
  const modulesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'MARK_MODULE_COMPLETED':
        return {
          ...state,
          completed: [...state.completed, action.payload],
        };
      case 'MODULE_COMPLETION_INITIALIZE':
        return {
          ...state,
          initiated: [action.payload],
        };
      case 'ACTIVE_MODULE':
        return {
          active: [action.payload],
        };
      default:
        return state;
    }
  };
  
  export default modulesReducer;
  