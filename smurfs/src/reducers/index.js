import { FETCHING, SUCCESS, FAILURE, POST_START, POST_SUCCESS, POST_FAILURE } from "../actions";
/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  newId: 1,
  isFetching: false,
  isPosting: false,
  isUpdating: false,
  isDeleting: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        smurfs: action.payload
      }
    case FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case POST_START:
      return {
        ...state,
        isPosting: true,
        error: null
      }
    case POST_SUCCESS:
      return {
        ...state,
        newId: state.newId++,
        isPosting: false,
        error: null
      }
    case POST_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      }
    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
