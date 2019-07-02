const detailReducer = (state = {}, action) =>{
  switch (action.type){
      case 'GET_TRAIL_INFO':
      return action.payload;
      default:
       return state;
  }
}

export default detailReducer;