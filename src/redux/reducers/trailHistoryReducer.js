const trailHistoryReducer = (state = [], action) =>{
    switch (action.type){
        case 'TRAIL_HISTORY':
        return action.payload;
        default:
         return state;
    }
  }
  
  export default trailHistoryReducer;