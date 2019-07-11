const searchHikeReducer = (state = [], action) =>{
    switch (action.type){
        case 'SEARCH_HIKE':
        return action.payload;
        default:
         return state;
    }
  }
  
  export default searchHikeReducer;