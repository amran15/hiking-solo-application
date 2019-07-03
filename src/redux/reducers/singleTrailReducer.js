const singleTrailReducer = (state = {}, action) =>{
    switch (action.type){
        case 'SET_SINGLE_TRAIL':
        return action.payload;
        default:
         return state;
    }
  }
  
  export default singleTrailReducer;